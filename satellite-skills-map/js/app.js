// Spacecraft ECS Skills Map — Application Logic
// Depends on: data.js (loaded first via index.html)

// ── DRAG & DROP STATE ─────────────────────────────────────────────────────────
let draggedEl = null;

function enableDropTarget(cell) {
  cell.addEventListener('dragover', e => {
    if (!draggedEl) return;
    e.preventDefault();
    cell.classList.add('drag-over');
  });
  cell.addEventListener('dragleave', e => {
    if (!cell.contains(e.relatedTarget)) cell.classList.remove('drag-over');
  });
  cell.addEventListener('drop', e => {
    e.preventDefault();
    cell.classList.remove('drag-over');
    if (!draggedEl) return;
    const addBtn = cell.querySelector('.add-node-btn');
    addBtn ? cell.insertBefore(draggedEl, addBtn) : cell.appendChild(draggedEl);
  });
}

// ── CHIP FACTORY ──────────────────────────────────────────────────────────────
function makeChip(n, tierColor) {
  const tm = TYPE_META[n.type] || TYPE_META.design;
  const chip = document.createElement('div');
  chip.className = 'mnode' + (n.type === 'test' ? ' is-test' : '');
  chip.style.borderLeftColor = tierColor;
  chip.draggable = true;
  chip.innerHTML = `
    <span class="drag-handle">⠿</span>
    <span class="mtype" style="background:${tm.bg};color:${tm.color}">${tm.label}</span>
    <span class="chip-body">
      <span class="chip-title" contenteditable="true" spellcheck="false">${n.title}</span>
      <span class="chip-tag"   contenteditable="true" spellcheck="false">${n.tag || ''}</span>
    </span>
    <span class="delete-btn">✕</span>`;

  const titleEl = chip.querySelector('.chip-title');
  const tagEl   = chip.querySelector('.chip-tag');

  // Prevent drag when user clicks into the editable text
  [titleEl, tagEl].forEach(el => {
    el.addEventListener('mousedown', e => { chip.draggable = false; e.stopPropagation(); });
    el.addEventListener('blur',      () => { chip.draggable = true; });
    el.addEventListener('keydown',   e => { if (e.key === 'Enter') { e.preventDefault(); el.blur(); } });
  });

  // Drag events (only from drag-handle or non-text area)
  chip.addEventListener('dragstart', e => {
    if (!chip.draggable) { e.preventDefault(); return; }
    draggedEl = chip;
    setTimeout(() => chip.classList.add('dragging'), 0);
    e.dataTransfer.effectAllowed = 'move';
  });
  chip.addEventListener('dragend', () => {
    chip.classList.remove('dragging');
    chip.draggable = true;
    draggedEl = null;
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  });

  // Delete button
  chip.querySelector('.delete-btn').addEventListener('click', e => {
    e.stopPropagation();
    chip.remove();
  });

  // Tooltip — reads live DOM text so edits are immediately reflected
  chip.addEventListener('mouseenter', e => {
    if (document.body.classList.contains('edit-mode')) return;
    document.getElementById('tt-title').textContent = titleEl.textContent;
    document.getElementById('tt-tag').textContent   = tagEl.textContent;
    document.getElementById('tip').classList.add('show');
    moveTip(e);
  });
  chip.addEventListener('mousemove', e => {
    if (!document.body.classList.contains('edit-mode')) moveTip(e);
  });
  chip.addEventListener('mouseleave', () => document.getElementById('tip').classList.remove('show'));

  return chip;
}

// ── RENDER ────────────────────────────────────────────────────────────────────
(function buildMap(){
  const grid = document.getElementById('map');
  grid.innerHTML = ''; // clear any pre-rendered content (e.g. after save & reload)

  // Corner cell
  const corner = document.createElement('div');
  corner.className = 'corner';
  corner.innerHTML = `<div class="corner-inner"><div class="corner-sub">DISCIPLINE / TIER</div></div>`;
  grid.appendChild(corner);

  // Tier header cells
  TIER_META.forEach(tier => {
    const cell = document.createElement('div');
    const isT0 = tier.key === '0';
    cell.className = 'tier-hdr-cell';
    if (isT0) cell.style.cssText = 'background:#1A1F28;border-right-color:#2D3748;';
    cell.innerHTML = `
      <div class="tier-pill-row">
        <span class="tier-num-badge" style="background:${tier.color}">${tier.num}</span>
        <span class="tier-hdr-name" contenteditable="true" spellcheck="false" style="${isT0?'color:#94a3b8;':''}">${tier.label}</span>
      </div>
      <div class="tier-hdr-note" contenteditable="true" spellcheck="false" style="${isT0?'color:#4B5563;':''}">${tier.note}</div>`;
    // Enter key blurs tier header fields
    cell.querySelectorAll('.tier-hdr-name, .tier-hdr-note').forEach(el => {
      el.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); el.blur(); } });
    });

    grid.appendChild(cell);
  });

  // Lane rows
  LANES.forEach((lane, idx) => {
    appendLaneRow(lane, idx % 2 === 0 ? 'row-odd' : 'row-even', grid);
  });

  // Add-discipline button (full-width, edit mode only)
  const addLaneRow = document.createElement('div');
  addLaneRow.className = 'add-lane-row';
  addLaneRow.id = 'add-lane-row';
  const addLaneBtn = document.createElement('button');
  addLaneBtn.className = 'add-lane-btn';
  addLaneBtn.textContent = '+ Add Discipline';
  addLaneBtn.addEventListener('click', () => {
    const name = prompt('Discipline name:');
    if (!name) return;
    const newId = 'lane_' + Date.now();
    appendLaneRow({ id: newId, label: name, accent: '#4B5563' }, 'row-odd', grid, addLaneRow);
    restripeRows();
    // Make new lane's editable fields active (we're already in edit mode)
    setEditableState(true);
  });
  addLaneRow.appendChild(addLaneBtn);
  grid.appendChild(addLaneRow);
})();

// ── LANE ROW MANAGEMENT ───────────────────────────────────────────────────────
let draggedRowId = null;

function appendLaneRow(lane, rowClass, grid, beforeEl) {
  const laneData = MAP_DATA[lane.id] || {};

  if (lane.section) {
    const div = document.createElement('div');
    div.className = 'section-divider';
    div.dataset.sectionFor = lane.id;
    div.innerHTML = `<span class="section-divider-label" contenteditable="true" spellcheck="false">${lane.section}</span><span class="section-divider-rule"></span>`;
    div.querySelector('.section-divider-label').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); }
    });
    beforeEl ? grid.insertBefore(div, beforeEl) : grid.appendChild(div);
  }

  const label = document.createElement('div');
  label.className = `lane-label ${rowClass}`;
  label.dataset.rowId = lane.id;
  label.dataset.accent = lane.accent;
  label.innerHTML = `
    <span class="lane-row-handle">⠿</span>
    <span class="lane-accent" style="background:${lane.accent}"></span>
    <span class="lane-label-text" contenteditable="true" spellcheck="false">${lane.label.replace(/\n/g,'<br>')}</span>
    <span class="lane-delete-row" title="Remove lane">✕</span>`;

  const textEl = label.querySelector('.lane-label-text');
  textEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.target.blur(); }
  });
  // Prevent lane drag when clicking into text
  textEl.addEventListener('mousedown', () => { label.draggable = false; });
  textEl.addEventListener('blur', () => { label.draggable = true; });

  // Delete row
  label.querySelector('.lane-delete-row').addEventListener('click', e => {
    e.stopPropagation();
    if (!confirm(`Remove the "${textEl.textContent.trim()}" lane and all its skills?`)) return;
    deleteLaneRow(lane.id);
  });

  // Lane-level drag & drop
  label.draggable = true;
  label.addEventListener('dragstart', e => {
    if (!document.body.classList.contains('edit-mode')) { e.preventDefault(); return; }
    if (!label.draggable) { e.preventDefault(); return; }
    draggedRowId = lane.id;
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => getLaneElements(lane.id).forEach(el => el.classList.add('row-dragging')), 0);
  });
  label.addEventListener('dragend', () => {
    draggedRowId = null;
    document.querySelectorAll('.row-dragging').forEach(el => el.classList.remove('row-dragging'));
    document.querySelectorAll('.row-drag-over').forEach(el => el.classList.remove('row-drag-over'));
  });
  label.addEventListener('dragover', e => {
    if (!draggedRowId || draggedRowId === lane.id) return;
    e.preventDefault(); e.stopPropagation();
    label.classList.add('row-drag-over');
  });
  label.addEventListener('dragleave', e => {
    if (!label.contains(e.relatedTarget)) label.classList.remove('row-drag-over');
  });
  label.addEventListener('drop', e => {
    e.preventDefault(); e.stopPropagation();
    label.classList.remove('row-drag-over');
    if (!draggedRowId || draggedRowId === lane.id) return;
    moveLaneBefore(draggedRowId, lane.id);
    restripeRows();
  });

  beforeEl ? grid.insertBefore(label, beforeEl) : grid.appendChild(label);

  TIER_META.forEach(tier => {
    const cell = document.createElement('div');
    const nodes = laneData[tier.key] || [];
    const tierColor = tier.color;
    cell.className = `lane-cell ${rowClass}${tier.key==='0'?' t0-cell':''}`;
    cell.dataset.lane = lane.id;
    cell.dataset.tier = tier.key;
    enableDropTarget(cell);
    nodes.forEach(n => cell.appendChild(makeChip(n, tierColor)));
    const addBtn = document.createElement('div');
    addBtn.className = 'add-node-btn';
    addBtn.textContent = '+ add skill';
    addBtn.addEventListener('click', () => {
      const title = prompt('Skill title:');
      if (!title) return;
      const tag = prompt('Tags / keywords (optional):') || '';
      const typeIn = prompt('Type — design / analysis / test / hw (default: design):') || 'design';
      const type = TYPE_META[typeIn.trim()] ? typeIn.trim() : 'design';
      const chip = makeChip({ type, title, tag }, tierColor);
      // New chips added in edit mode should be immediately editable
      chip.querySelectorAll('.chip-title,.chip-tag').forEach(el => el.contentEditable = 'true');
      cell.insertBefore(chip, addBtn);
    });
    cell.appendChild(addBtn);
    beforeEl ? grid.insertBefore(cell, beforeEl) : grid.appendChild(cell);
  });
}

function getLaneElements(laneId) {
  return [
    document.querySelector(`.section-divider[data-section-for="${laneId}"]`),
    document.querySelector(`.lane-label[data-row-id="${laneId}"]`),
    ...document.querySelectorAll(`.lane-cell[data-lane="${laneId}"]`),
  ].filter(Boolean);
}

function moveLaneBefore(sourceId, targetId) {
  const grid = document.getElementById('map');
  const targetLabel = document.querySelector(`.lane-label[data-row-id="${targetId}"]`);
  // Include section-divider of the source (moves with it)
  getLaneElements(sourceId).forEach(el => grid.insertBefore(el, targetLabel));
}

function deleteLaneRow(laneId) {
  getLaneElements(laneId).forEach(el => el.remove());
  restripeRows();
}

function restripeRows() {
  const labels = [...document.querySelectorAll('.lane-label[data-row-id]')];
  labels.forEach((label, i) => {
    const isOdd = i % 2 === 0;
    label.classList.toggle('row-odd',  isOdd);
    label.classList.toggle('row-even', !isOdd);
    const laneId = label.dataset.rowId;
    document.querySelectorAll(`.lane-cell[data-lane="${laneId}"]`).forEach(cell => {
      cell.classList.toggle('row-odd',  isOdd);
      cell.classList.toggle('row-even', !isOdd);
    });
  });
}

// ── EDIT TOGGLE ───────────────────────────────────────────────────────────────
const EDITABLE_SELECTORS = [
  '.chip-title', '.chip-tag',
  '.lane-label-text', '.tier-hdr-name', '.tier-hdr-note',
  '.ph-title', '.section-divider-label',
];

function setEditableState(isEdit) {
  EDITABLE_SELECTORS.forEach(sel =>
    document.querySelectorAll(sel).forEach(el => {
      el.contentEditable = isEdit ? 'true' : 'false';
    })
  );
}

// Start in view mode — nothing editable until Edit is clicked
setEditableState(false);

document.getElementById('edit-toggle').addEventListener('click', () => {
  const isEdit = document.body.classList.toggle('edit-mode');
  document.getElementById('edit-toggle').textContent = isEdit ? '✓ Done editing' : '✎ Edit map';
  document.getElementById('tip').classList.remove('show');
  setEditableState(isEdit);
  // Blur any active editable so it doesn't stay focused when leaving edit mode
  if (!isEdit && document.activeElement) document.activeElement.blur();
});

// ── SAVE FILE ─────────────────────────────────────────────────────────────────
function saveMap() {
  // 1. Extract updated TIER_META labels/notes from DOM
  const tierHdrCells = [...document.querySelectorAll('.tier-hdr-cell')];
  const newTierMeta = TIER_META.map((t, i) => {
    const cell = tierHdrCells[i];
    if (!cell) return t;
    const label = cell.querySelector('.tier-hdr-name')?.textContent.trim() ?? t.label;
    const note  = cell.querySelector('.tier-hdr-note')?.textContent.trim() ?? t.note;
    return { key: t.key, num: t.num, color: t.color, label, note };
  });

  // 2. Extract lanes from DOM in current order (handles reorder / add / delete)
  const newLanes = [...document.querySelectorAll('.lane-label[data-row-id]')].map(labelEl => {
    const laneId  = labelEl.dataset.rowId;
    const accent  = labelEl.dataset.accent || '#4B5563';
    const textEl  = labelEl.querySelector('.lane-label-text');
    const label   = textEl ? textEl.innerHTML
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim()
      : laneId;
    const entry = { id: laneId, label, accent };
    const sectionDiv = document.querySelector(`.section-divider[data-section-for="${laneId}"]`);
    if (sectionDiv) {
      const secLabel = sectionDiv.querySelector('.section-divider-label');
      entry.section = secLabel ? secLabel.textContent.trim() : '';
    }
    return entry;
  });

  // 3. Reconstruct MAP_DATA from tagged cells
  const LABEL_TO_TYPE = { DSN:'design', ANA:'analysis', TST:'test', HW:'hw', SYS:'system', DOC:'tech', ADM:'admin' };
  const newMapData = {};
  document.querySelectorAll('.lane-cell[data-lane]').forEach(cell => {
    const laneId  = cell.dataset.lane;
    const tierKey = cell.dataset.tier;
    const chips = [...cell.querySelectorAll('.mnode')].map(chip => ({
      type:  LABEL_TO_TYPE[chip.querySelector('.mtype')?.textContent.trim()] || 'design',
      title: chip.querySelector('.chip-title')?.textContent.trim() || '',
      tag:   chip.querySelector('.chip-tag')?.textContent.trim()   || '',
    }));
    if (chips.length) {
      if (!newMapData[laneId]) newMapData[laneId] = {};
      newMapData[laneId][tierKey] = chips;
    }
  });

  // 4. Build updated data.js content
  const content =
    `// Spacecraft ECS Skills Map \u2014 Data\n` +
    `// @@DATA_START@@\n` +
    `const TYPE_META = ${JSON.stringify(TYPE_META, null, 2)};\n\n` +
    `const TIER_META = ${JSON.stringify(newTierMeta, null, 2)};\n\n` +
    `const LANES = ${JSON.stringify(newLanes, null, 2)};\n\n` +
    `// MAP_DATA[laneId][tierNum] = [ { type, title, tag }, ... ]\n` +
    `const MAP_DATA = ${JSON.stringify(newMapData, null, 2)};\n` +
    `// @@DATA_END@@\n\n` +
    `// \u2500\u2500 ACRONYMS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n` +
    `const ACRONYMS = ${JSON.stringify(ACRONYMS)};\n`;

  // 5. Download as data.js \u2014 replace js/data.js in your project folder to persist edits
  const blob = new Blob([content], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.js';
  a.click();
  URL.revokeObjectURL(a.href);

  // 6. Brief visual feedback
  const btn = document.getElementById('save-btn');
  btn.textContent = '\u2713 Saved';
  btn.classList.add('saved');
  setTimeout(() => { btn.textContent = '\u2b07 Save data'; btn.classList.remove('saved'); }, 1800);
}

document.getElementById('save-btn').addEventListener('click', saveMap);

// ── TOOLTIP ───────────────────────────────────────────────────────────────────
function moveTip(e) {
  const tip = document.getElementById('tip');
  const x = e.clientX + 14, y = e.clientY - 8;
  tip.style.left = (x + 250 > innerWidth ? x - 264 : x) + 'px';
  tip.style.top  = (y + 80  > innerHeight ? y - 72  : y) + 'px';
}
(function buildAcronyms() {
  // Deduplicate by key
  const seen = new Set();
  const unique = ACRONYMS.filter(([k]) => { if (seen.has(k)) return false; seen.add(k); return true; });
  unique.sort((a, b) => a[0].localeCompare(b[0]));
  const grid = document.getElementById('acronym-grid');
  unique.forEach(([key, def]) => {
    const row = document.createElement('div');
    row.className = 'acro-row';
    row.innerHTML = `<span class="acro-key">${key}</span><span class="acro-def">${def}</span>`;
    grid.appendChild(row);
  });
})();

document.getElementById('acro-toggle').addEventListener('click', () => {
  document.body.classList.toggle('acro-open');
});
