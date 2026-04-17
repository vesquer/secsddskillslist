// Spacecraft ECS Skills Map — Data
// Edit this file to update skills, tiers, and lane definitions.
// Loaded by index.html before app.js.

const TYPE_META = {
  "design": {
    "label": "DSN",
    "bg": "#FEF9C3",
    "color": "#854D0E"
  },
  "analysis": {
    "label": "ANA",
    "bg": "#E0E7FF",
    "color": "#3730A3"
  },
  "test": {
    "label": "TST",
    "bg": "#DCFCE7",
    "color": "#166534"
  },
  "hw": {
    "label": "HW",
    "bg": "#F1F5F9",
    "color": "#475569"
  },
  "system": {
    "label": "SYS",
    "bg": "#EDE9FE",
    "color": "#5B21B6"
  },
  "tech": {
    "label": "DOC",
    "bg": "#E0F7FA",
    "color": "#0E7490"
  },
  "admin": {
    "label": "ADM",
    "bg": "#E0F2FE",
    "color": "#075985"
  }
};

const TIER_META = [
  {
    "key": "0",
    "num": "T0",
    "color": "#4B5563",
    "label": "University Prerequisites",
    "note": "EEE degree foundations — assumed on programme entry"
  },
  {
    "key": "1",
    "num": "T1",
    "color": "#D95E2B",
    "label": "Foundational Knowledge",
    "note": "Space & mission-specific foundations beyond university degree"
  },
  {
    "key": "2",
    "num": "T2A",
    "color": "#C98B0A",
    "label": "Core Design & Analysis",
    "note": "Circuit, system & software design; engineering analysis"
  },
  {
    "key": "2b",
    "num": "T2B",
    "color": "#0F766E",
    "label": "Build, Fabricate & Test",
    "note": "Hands-on fabrication, assembly, bring-up & module verification"
  },
  {
    "key": "3",
    "num": "T3",
    "color": "#1B6FB5",
    "label": "Subsystem Engineering",
    "note": "Full subsystem ownership and integration"
  },
  {
    "key": "4",
    "num": "T4",
    "color": "#0B9668",
    "label": "Integration & Test",
    "note": "System-level AIT, qualification & V&V campaigns"
  },
  {
    "key": "5",
    "num": "T5",
    "color": "#6537A3",
    "label": "Advanced / Facility Ops",
    "note": "Programme authority, facility ops & sustainment"
  }
];

const LANES = [
  {
    "id": "qual",
    "label": "Electronic Component\nSpace Qualification\n& Standards",
    "accent": "#4B5563"
  },
  {
    "id": "pcb",
    "label": "Electronic Product Development",
    "accent": "#B45309"
  },
  {
    "id": "power",
    "label": "Power Electronics",
    "accent": "#92400E"
  },
  {
    "id": "solar",
    "label": "Solar Panel Development",
    "accent": "#78716C"
  },
  {
    "id": "sw",
    "label": "Embedded Software\n& RTOS",
    "accent": "#0369A1"
  },
  {
    "id": "fsw",
    "label": "Flight Software\n& OBSW",
    "accent": "#2563EB"
  },
  {
    "id": "fpga",
    "label": "FPGA Engineering",
    "accent": "#7C3AED"
  },
  {
    "id": "fee",
    "label": "Front End Electronics",
    "accent": "#0F766E"
  },
  {
    "id": "wire",
    "label": "Wiring &\nGrounding",
    "accent": "#155E75"
  },
  {
    "id": "qa",
    "label": "QA &\nTest Automation",
    "accent": "#15803D"
  },
  {
    "id": "syseng",
    "label": "Systems Engineering\n& Budgets",
    "accent": "#1B6FB5",
    "section": "SYSTEMS ENGINEERING"
  },
  {
    "id": "doc",
    "label": "Technical\nDocumentation",
    "accent": "#0E7490",
    "section": "PARALLEL TRACKS"
  },
  {
    "id": "admin",
    "label": "Govt.\nAdministration",
    "accent": "#2C6E8A"
  }
];

// MAP_DATA[laneId][tierNum] = [ { type, title, tag }, ... ]
const MAP_DATA = {
  "qual": {
    "0": [
      {
        "type": "analysis",
        "title": "Electromagnetic Theory",
        "tag": "Maxwell's equations, wave propagation, plane waves"
      },
      {
        "type": "analysis",
        "title": "Semiconductor Physics",
        "tag": "p-n junction, carrier transport, diode equation"
      },
      {
        "type": "analysis",
        "title": "Engineering Mathematics",
        "tag": "Differential equations, linear algebra, probability & statistics"
      },
      {
        "type": "analysis",
        "title": "Physics (Mechanics & Thermodynamics)",
        "tag": "Classical mechanics, heat transfer, thermodynamics fundamentals"
      }
    ],
    "1": [
      {
        "type": "analysis",
        "title": "Space Radiation Physics",
        "tag": "TID, SEE, NIEL, Van Allen belts"
      },
      {
        "type": "analysis",
        "title": "Thermal & Vacuum Environment",
        "tag": "Eclipse cycles, radiator sizing, outgassing"
      },
      {
        "type": "analysis",
        "title": "Electromagnetic Environment",
        "tag": "EMI sources, grounding philosophy, space EME threats"
      },
      {
        "type": "design",
        "title": "ECSS Standards Overview",
        "tag": "ECSS-E, ECSS-Q, ECSS-M families"
      },
      {
        "type": "design",
        "title": "MIL-STD & NASA References",
        "tag": "MIL-STD-461/1553, NASA-HDBK-8739"
      },
      {
        "type": "design",
        "title": "Part Classification & Screening",
        "tag": "EEE-INST-002, MIL-PRF-38535, upscreening"
      },
      {
        "type": "design",
        "title": "DO-254 Airborne HW Design Assurance",
        "tag": "DAL A–E hw design assurance levels, hardware design lifecycle, plan set"
      },
      {
        "type": "design",
        "title": "DO-160G Environmental Testing Standard",
        "tag": "Temperature, vibration, shock, humidity, EMI sections for airborne equipment"
      },
      {
        "type": "design",
        "title": "Range Safety Standards Overview",
        "tag": "EWR 127-1, AFSPCMAN 91-710, MIL-STD-1576 pyrotechnic devices, range safety approval"
      },
      {
        "type": "analysis",
        "title": "Launch Vehicle Environments",
        "tag": "Acoustic, random vibration, shock, thermal — GEVS, launch vehicle user guides"
      }
    ],
    "2": [
      {
        "type": "analysis",
        "title": "Radiation Effects on Devices",
        "tag": "Gate oxide trapping, latch-up, SEU in SRAM/flip-flops"
      },
      {
        "type": "analysis",
        "title": "Component Derating",
        "tag": "ECSS-Q-ST-30-11, voltage/temperature margins"
      },
      {
        "type": "analysis",
        "title": "Worst-Case Circuit Analysis",
        "tag": "WCCA, tolerance stack-up, Monte Carlo analysis"
      },
      {
        "type": "analysis",
        "title": "FMEA at Circuit Level",
        "tag": "FMEA worksheet, criticality ranking, SPF identification"
      },
      {
        "type": "analysis",
        "title": "Launch Shock Spectrum Analysis",
        "tag": "SRS (Shock Response Spectrum), pyrotechnic shock attenuation, GEVS shock levels"
      },
      {
        "type": "analysis",
        "title": "Pyrotechnic Device FMEA",
        "tag": "Initiator failure modes, EED sensitivity, no-fire/all-fire margins, sneak circuit"
      }
    ],
    "5": [
      {
        "type": "test",
        "title": "Advanced Radiation Testing",
        "tag": "Proton SEE, heavy ion, Co-60 TID test campaigns"
      }
    ]
  },
  "pcb": {
    "0": [
      {
        "type": "design",
        "title": "Circuit Theory",
        "tag": "KVL/KCL, Thevenin/Norton, mesh & nodal analysis"
      },
      {
        "type": "analysis",
        "title": "AC/DC Circuit Analysis",
        "tag": "Phasors, impedance, frequency response, Bode plots"
      },
      {
        "type": "hw",
        "title": "Basic Lab Instrumentation",
        "tag": "DMM, oscilloscope, function generator, power supply"
      },
      {
        "type": "design",
        "title": "Basic Schematic Reading",
        "tag": "Standard symbols, reference designators, netlist"
      },
      {
        "type": "hw",
        "title": "Basic Soldering",
        "tag": "Through-hole soldering, iron technique, solder types"
      }
    ],
    "1": [
      {
        "type": "design",
        "title": "Schematic Standard (ECSS)",
        "tag": "ECSS net naming, EMC shields, hi-rel symbols"
      },
      {
        "type": "design",
        "title": "Spacecraft Bus Protocols",
        "tag": "RS-422, SpaceWire, MIL-STD-1553, CAN FD"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "PCB Schematic Design",
        "tag": "Hierarchical sheets, ERC, ECO management"
      },
      {
        "type": "design",
        "title": "High-Rel PCB Layout",
        "tag": "IPC Class 3, impedance ctrl, via-in-pad, thermal relief"
      },
      {
        "type": "analysis",
        "title": "Signal Integrity Design",
        "tag": "Transmission lines, crosstalk, eye diagram analysis"
      },
      {
        "type": "design",
        "title": "RHBD Layout Techniques",
        "tag": "Guard rings, enclosed FETs, ELT layout for TID hardening"
      },
      {
        "type": "design",
        "title": "Triple Modular Redundancy",
        "tag": "TMR voters, EDAC implementation, FPGA scrubbing"
      },
      {
        "type": "design",
        "title": "GSE Design & Operation",
        "tag": "Test harness wiring, breakout boards, adapter design"
      },
      {
        "type": "design",
        "title": "Pyrotechnic Firing Circuit PCB Design",
        "tag": "Arm/fire dual-channel topology, EED current drive, EMI immunity, MIL-STD-1576 margins"
      },
      {
        "type": "design",
        "title": "Redundant Avionics Channel PCB",
        "tag": "Dual-string voter PCB, cross-strapping relays, cold-standby switch-over logic"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "PCA Fabrication QA & Inspection",
        "tag": "AOI, X-ray for BGAs, IPC-A-610 Class 3, ionic cleanliness"
      }
    ],
    "5": [
      {
        "type": "hw",
        "title": "Manufacturing Process Engineering",
        "tag": "Yield analysis, DFM/DFT reviews, Cpk studies, production line"
      }
    ],
    "2b": [
      {
        "type": "hw",
        "title": "PCB Assembly & Soldering",
        "tag": "SMT reflow, hand solder, IPC Class 3 workmanship"
      },
      {
        "type": "hw",
        "title": "PCB Rework & Component Replacement",
        "tag": "BGA reball, hot-air station, pad lifting repair"
      },
      {
        "type": "hw",
        "title": "Cable & Harness Assembly",
        "tag": "Crimping to MIL-C-22520, MIL-C-38999 connector, coax term."
      },
      {
        "type": "test",
        "title": "Cable & Harness Testing",
        "tag": "Continuity, insulation resistance, hi-pot, shield integrity"
      },
      {
        "type": "hw",
        "title": "Conformal Coating & Potting",
        "tag": "Acrylic/silicone coating, masking, UV cure inspection"
      },
      {
        "type": "test",
        "title": "PCB Bring-Up & Debug",
        "tag": "Power sequencing, oscilloscope probing, JTAG debug"
      },
      {
        "type": "test",
        "title": "Electronic Module Functional Testing",
        "tag": "Test scripts, loopback, stimulus-response verification"
      },
      {
        "type": "test",
        "title": "Measurement & Instrumentation",
        "tag": "DMM, oscilloscope, spectrum analyser, LCR meter"
      }
    ]
  },
  "power": {
    "0": [
      {
        "type": "analysis",
        "title": "DC/AC Circuit Analysis",
        "tag": "KVL/KCL, phasors, power factor, reactive power"
      },
      {
        "type": "design",
        "title": "Semiconductor Devices",
        "tag": "Diodes, BJTs, MOSFETs — I-V characteristics, biasing"
      },
      {
        "type": "design",
        "title": "Basic Power Electronics",
        "tag": "Rectifiers, linear regulators, basic switching topologies"
      },
      {
        "type": "analysis",
        "title": "Magnetics & Transformers",
        "tag": "Faraday's law, inductance, coupled inductors, transformer models"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "Power Supply Design",
        "tag": "Buck, boost, LDO, feedback loop compensation, EMI filtering"
      },
      {
        "type": "design",
        "title": "Motor & Actuator Drive Electronics",
        "tag": "BLDC, H-bridge, PWM, current sense, snubber design"
      },
      {
        "type": "analysis",
        "title": "EPS Architecture Design",
        "tag": "MPPT, regulated/unregulated bus, PDU fault isolation topology"
      },
      {
        "type": "design",
        "title": "Harness Design",
        "tag": "Wire gauge sizing, shielding, connector qualification, ICD"
      },
      {
        "type": "design",
        "title": "Protection & Fault Isolation",
        "tag": "Fusing, crowbar, OVP, OCP, polarity protection, inrush limit"
      },
      {
        "type": "analysis",
        "title": "Power Mode & Load Analysis",
        "tag": "Peak/avg load, duty cycle, power modes table per subsystem"
      },
      {
        "type": "analysis",
        "title": "Battery Sizing & DoD Analysis",
        "tag": "Capacity, depth of discharge, cycle life, BOL/EOL derating"
      },
      {
        "type": "design",
        "title": "Pyrotechnic Bus Design",
        "tag": "Safe/arm device, dual-coil EED driver, arm/fire sequencing, no-fire current verification"
      },
      {
        "type": "analysis",
        "title": "Primary Battery Sizing (Launch Vehicle)",
        "tag": "Li primary cells (MnO2/SO2), capacity vs. mission duration, internal resistance, thermal derating"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Power Systems Design (EPS)",
        "tag": "MPPT algorithm implementation, battery assembly/qual., PDU mfg."
      },
      {
        "type": "analysis",
        "title": "Spacecraft Power Budget",
        "tag": "Multi-mode budget, BOL/EOL margin ≥20%, ECSS-E-ST-60"
      },
      {
        "type": "analysis",
        "title": "Power Budget Config. Control",
        "tag": "Budget freeze at PDR/CDR, margin drawdown log, design review pkg"
      },
      {
        "type": "design",
        "title": "Umbilical-to-Internal Power Transition",
        "tag": "Umbilical power sequencing, internal battery switch-over, pre-launch power modes"
      },
      {
        "type": "design",
        "title": "Launch Vehicle Power Sequencing",
        "tag": "Stage separation power handover, ordnance bus arming sequence, flight computer power-on"
      }
    ]
  },
  "solar": {
    "0": [
      {
        "type": "analysis",
        "title": "Semiconductor Physics",
        "tag": "p-n junction theory, minority carrier diffusion, diode equation"
      },
      {
        "type": "analysis",
        "title": "Photovoltaic Effect",
        "tag": "Photoexcitation, electron-hole pair generation, basic PV model"
      },
      {
        "type": "hw",
        "title": "Basic Material Science",
        "tag": "Crystal structure, bonding, mechanical properties of metals/composites"
      },
      {
        "type": "hw",
        "title": "Workshop & Fabrication Safety",
        "tag": "Lab safety, PPE, chemical handling, cleanroom protocol basics"
      }
    ],
    "1": [
      {
        "type": "analysis",
        "title": "Space Solar Cell Physics",
        "tag": "Triple-junction III-V, Isc/Voc, fill factor, AM0 spectrum"
      },
      {
        "type": "analysis",
        "title": "Solar Cell Characterisation",
        "tag": "I-V curve, current class matching, Pmax, temp. coefficients"
      },
      {
        "type": "analysis",
        "title": "EOL Radiation Damage Estimation",
        "tag": "SPENVIS, cover glass loss factors, micrometeorite loss, BOL→EOL"
      },
      {
        "type": "analysis",
        "title": "Solar String & Section Architecture",
        "tag": "Series strings, blocking diodes, BCR topology, FDIR of string loss"
      }
    ],
    "2": [
      {
        "type": "analysis",
        "title": "Solar Panel Requirements & ICD",
        "tag": "String/section pin-out, wiring diagrams, redundancy routing"
      },
      {
        "type": "analysis",
        "title": "Solar Cell Procurement & QSL",
        "tag": "Supplier evaluation, procurement specification, QSL report"
      },
      {
        "type": "analysis",
        "title": "Power Performance Analysis",
        "tag": "STK-based sun angles, eclipse fraction, EOL worst-case power"
      },
      {
        "type": "design",
        "title": "Blocking Diode Board Design",
        "tag": "String isolation diodes, forward drop budget, thermal mgmt."
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Solar Panel Subsystem Integration",
        "tag": "LAPSS electrical performance, HDRM deployment test, MRR/ARR gate"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "Solar Panel Post-Env. Inspection",
        "tag": "Post-vibe/TVac EL test vs. baseline, cell rework via DR procedure"
      }
    ],
    "2b": [
      {
        "type": "hw",
        "title": "Panel Substrate Fabrication",
        "tag": "Honeycomb core, skin cutting, vacuum bagging, autoclave cure"
      },
      {
        "type": "test",
        "title": "Solar Cell Visual Inspection",
        "tag": "Metallisation voids, coverglass defects, edge/corner chip criteria"
      },
      {
        "type": "test",
        "title": "Electroluminescence (EL) Testing",
        "tag": "100mA forward bias, voltage ramp, EL defect analysis criteria"
      },
      {
        "type": "test",
        "title": "Solar Cell Pull Testing",
        "tag": ">300g pass criterion, Dage bondtester, pull test report"
      },
      {
        "type": "hw",
        "title": "Interconnect Welding",
        "tag": "Parallel gap/ultrasonic welder, vacuum jig, per-string weld log"
      },
      {
        "type": "hw",
        "title": "Cell Laydown & Adhesive Application",
        "tag": "SP120 primer, CV-2566 mixing, vacuum de-bubble, −0.1bar bag cure"
      },
      {
        "type": "hw",
        "title": "Solar Panel Wiring & Bus Bar Assembly",
        "tag": "Silver bus bars, Rosemount PT sensor prep, front/rear potting"
      },
      {
        "type": "test",
        "title": "Panel Insulation & Continuity Testing",
        "tag": "≥100kΩ insulation, string voltage under light, RM sensor resistance"
      }
    ]
  },
  "sw": {
    "0": [
      {
        "type": "design",
        "title": "C/C++ Programming",
        "tag": "Pointers, memory management, structs, compilation, linking"
      },
      {
        "type": "design",
        "title": "Embedded C Programming",
        "tag": "Register-level I/O, interrupt handlers, bare-metal coding"
      },
      {
        "type": "design",
        "title": "Processor Architectures",
        "tag": "von Neumann/Harvard, ARM/RISC pipeline, memory hierarchy"
      },
      {
        "type": "design",
        "title": "Basic RTOS Concepts",
        "tag": "Tasks, scheduling, semaphores, mutexes — introductory level"
      },
      {
        "type": "design",
        "title": "Software Version Control",
        "tag": "Git: commits, branches, merges, pull requests"
      },
      {
        "type": "analysis",
        "title": "Data Structures & Algorithms",
        "tag": "Arrays, linked lists, queues, sorting, complexity analysis"
      }
    ],
    "1": [
      {
        "type": "design",
        "title": "RTOS for Space Applications",
        "tag": "RTEMS, FreeRTOS-MPU, priority ceiling, WCET analysis, FDIR tasks"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "Embedded Middleware & Drivers",
        "tag": "HAL, peripheral drivers (UART/SPI/I2C), ISR design, DMA config."
      },
      {
        "type": "design",
        "title": "RTOS Application Development",
        "tag": "Task decomposition, messaging, queues, timers, stack sizing"
      },
      {
        "type": "design",
        "title": "Space Bus Protocol Implementation",
        "tag": "SpaceWire link layer, MIL-STD-1553 BC/RT/BM, CCSDS PUS framing"
      },
      {
        "type": "design",
        "title": "Software Safety Standards",
        "tag": "ECSS-E-ST-40C process, DO-178C DAL A–E, SIL classification"
      },
      {
        "type": "design",
        "title": "Static Analysis & Coding Standards",
        "tag": "MISRA-C:2012, Polyspace/CodeSonar, CERTC, McCabe complexity"
      },
      {
        "type": "design",
        "title": "Software Configuration Management",
        "tag": "SW baselines, build reproducibility, CCB process, CI identification"
      },
      {
        "type": "design",
        "title": "Time & Space Partitioning",
        "tag": "ARINC 653 partition model, XtratuM/PikeOS, IPC sampling/queuing"
      },
      {
        "type": "analysis",
        "title": "Telemetry Rate & Data Volume Analysis",
        "tag": "HK parameter list, PUS S3 packet rates, science data volume/orbit"
      },
      {
        "type": "design",
        "title": "Flight Phase Sequencing FSM",
        "tag": "Countdown, lift-off, stage sep, MECO, fairing sep states; transition guards & timeouts"
      },
      {
        "type": "design",
        "title": "Abort Detection & Response Logic",
        "tag": "Range safety destruct commands, vehicle health abort triggers, FTS arm/fire command chain"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "GNC Software Integration",
        "tag": "IMU driver, navigation filter interface, actuator command dispatch, GNC loop timing"
      },
      {
        "type": "design",
        "title": "Navigation Filter Implementation",
        "tag": "Extended Kalman filter, IMU error model, GPS aiding, trajectory propagation"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "SW–HW Integration Testing",
        "tag": "HIL bench, closed-loop GNC sim, fault injection, WCET measurement"
      }
    ],
    "2b": [
      {
        "type": "test",
        "title": "Embedded Software Testing",
        "tag": "Unit test, hardware mocking, MISRA-C static analysis, coverage"
      }
    ]
  },
  "fsw": {
    "0": [
      {
        "type": "design",
        "title": "C/C++ & Python Programming",
        "tag": "Object-oriented design, scripting, build systems (Make/CMake)"
      },
      {
        "type": "design",
        "title": "Software Engineering Fundamentals",
        "tag": "SDLC, requirements tracing, unit testing, code review"
      },
      {
        "type": "design",
        "title": "Embedded C & RTOS Basics",
        "tag": "Interrupt-driven design, task scheduling, shared resource mgmt."
      },
      {
        "type": "design",
        "title": "Software Version Control",
        "tag": "Git branching models, CI pipelines, release tagging"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Flight Software Development",
        "tag": "OBSW application layer on RTOS, FDIR logic, CCSDS TM pipeline"
      },
      {
        "type": "design",
        "title": "OBSW Architecture Design",
        "tag": "ECSS-E-ST-40C layered arch, component model, memory map, boot seq."
      },
      {
        "type": "design",
        "title": "PUS Services Implementation",
        "tag": "PUS-C services 1/3/5/9/11/17/20, TC routing, TM packetisation"
      },
      {
        "type": "design",
        "title": "On-Board Time Management",
        "tag": "CCSDS CUC, coarse/fine time fields, GPS 1PPS sync, leap-second"
      },
      {
        "type": "design",
        "title": "TC & TM Processing Pipeline",
        "tag": "TC frame sync, APID routing, TM VC multiplexing, VCDU fill frames"
      },
      {
        "type": "design",
        "title": "On-Board FDIR Software Design",
        "tag": "Multi-level watchdog, anomaly detection rules, safe mode logic"
      },
      {
        "type": "design",
        "title": "Autonomous Operations & Scheduling",
        "tag": "PUS S11 TC scheduling, OBCP engine, event-driven action triggers"
      },
      {
        "type": "design",
        "title": "Mass Memory & Data Management",
        "tag": "Data store architecture, CCSDS 121.0 compression, CCSDS FTP"
      },
      {
        "type": "design",
        "title": "Software Upload & In-Flight Patching",
        "tag": "PUS S20 memory load, image CRC/hash, rollback on boot failure"
      },
      {
        "type": "analysis",
        "title": "On-Board Data Budget",
        "tag": "Storage vs. allocation, downlink capacity, store-and-forward margin"
      },
      {
        "type": "analysis",
        "title": "Data Budget Config. Control",
        "tag": "Budget baseline at PDR/CDR, data rate change impact assessment"
      },
      {
        "type": "design",
        "title": "Launch Vehicle Avionics Sequencer",
        "tag": "T-0 event sequencer, stage sep / fairing sep / payload deploy command chains, hold logic"
      },
      {
        "type": "design",
        "title": "GNC Flight Mode Management",
        "tag": "Ascent, coast, TVC null, re-entry mode transitions; rate damping & attitude hold modes"
      },
      {
        "type": "design",
        "title": "Flight Termination System (FTS) Software",
        "tag": "Range safety command decode, arm/destruct logic, FTS watchdog, MIL-STD-1576 compliance"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "Flight Software V&V Campaign",
        "tag": "Req-based test cases, MC/DC coverage, formal IV&V, SAR lock"
      }
    ],
    "5": [
      {
        "type": "design",
        "title": "Ground Segment Interface",
        "tag": "Mission control SW integration, LEOP procedures, commissioning"
      },
      {
        "type": "design",
        "title": "In-Orbit Software Maintenance",
        "tag": "HK anomaly RCA, patch via PUS S20, FDIR threshold updates"
      },
      {
        "type": "design",
        "title": "Ground Segment SW Development",
        "tag": "SCOS-2000/EGOS-CC, TC/TM database (MIB/CDB), LEOP scripting"
      }
    ]
  },
  "fpga": {
    "0": [
      {
        "type": "design",
        "title": "Digital Logic Design",
        "tag": "Boolean algebra, Karnaugh maps, combinational circuits, gates"
      },
      {
        "type": "design",
        "title": "Sequential Logic & FSMs",
        "tag": "Flip-flops, registers, counters, state machine design"
      },
      {
        "type": "design",
        "title": "HDL Basics",
        "tag": "VHDL or Verilog syntax, simulation waveforms, basic testbench"
      },
      {
        "type": "design",
        "title": "Computer Architecture",
        "tag": "Datapath & control, pipelining, memory hierarchy, bus structures"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "RTL Design in VHDL/Verilog",
        "tag": "Synthesisable RTL, FSM coding, clocking, reset, testbenches"
      },
      {
        "type": "design",
        "title": "FPGA Implementation Flow",
        "tag": "Synthesis, place-and-route, static timing analysis, bitstream gen."
      },
      {
        "type": "design",
        "title": "SEU Mitigation in FPGA",
        "tag": "TMR in fabric, configuration scrubbing, EDAC in block RAM"
      },
      {
        "type": "design",
        "title": "Avionics Health Monitoring & Voter Logic",
        "tag": "Triple-string voting arbiter, discrete health output, built-in test (BIT) FPGA logic"
      },
      {
        "type": "design",
        "title": "Inertial Sensor Acquisition FPGA",
        "tag": "IMU/MEMS SPI/UART interface, sample-synchronised DMA, anti-aliasing filter coefficients"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "TVC Servo Drive & Position Loop FPGA",
        "tag": "PWM generation, resolver/LVDT interface, PID servo loop, rate limiting, failsafe hold"
      }
    ],
    "2b": [
      {
        "type": "test",
        "title": "FPGA Simulation & Verification",
        "tag": "Testbench authoring, waveform review, co-simulation, code coverage"
      }
    ]
  },
  "fee": {
    "0": [
      {
        "type": "design",
        "title": "Analog Electronics",
        "tag": "BJT/MOSFET biasing, amplifier topologies (CE, CS, diff. pair)"
      },
      {
        "type": "design",
        "title": "Op-Amp Circuits",
        "tag": "Inverting/non-inverting, integrator, differentiator, comparator"
      },
      {
        "type": "analysis",
        "title": "Signals & Systems",
        "tag": "Fourier transform, Laplace, frequency-domain analysis, filtering"
      },
      {
        "type": "analysis",
        "title": "Electronic Noise Fundamentals",
        "tag": "Thermal noise, shot noise, noise figure, SNR basics"
      },
      {
        "type": "hw",
        "title": "Basic Lab Instrumentation",
        "tag": "Oscilloscope probing, spectrum analyser basics, signal generator"
      }
    ],
    "1": [
      {
        "type": "analysis",
        "title": "Space Detector & Sensor Physics",
        "tag": "Photodiodes, CCD/CMOS, bolometers, quantum efficiency, dark current"
      },
      {
        "type": "analysis",
        "title": "Low-Noise Grounding & Shielding",
        "tag": "Single-point GND, guard traces, Faraday shielding, diff. signalling"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "Analog Front-End Design",
        "tag": "Instrumentation amp, low-noise design, precision ADC driving"
      },
      {
        "type": "design",
        "title": "Detector Readout Circuit Design",
        "tag": "TIA, correlated double sampling, charge-sensitive amp, CTIA"
      },
      {
        "type": "design",
        "title": "ROIC / ASIC Interface Design",
        "tag": "ROIC clocking, bias generation, multiplexed analog output"
      },
      {
        "type": "analysis",
        "title": "Noise Budget Design",
        "tag": "RTI noise allocation, SNR target, lifetime radiation degradation"
      },
      {
        "type": "design",
        "title": "High-Speed ADC Interface",
        "tag": "SAR vs sigma-delta, LVDS differential output, clock jitter vs. SNR"
      },
      {
        "type": "design",
        "title": "Precision Bias & Reference Circuits",
        "tag": "Bandgap reference, current mirror, DAC-based trimming, tempco mgmt."
      },
      {
        "type": "design",
        "title": "Image Sensor Interface Design",
        "tag": "CCD multi-phase clocking, CMOS rolling/global shutter control"
      },
      {
        "type": "design",
        "title": "Electro-Optical Calibration Circuits",
        "tag": "Dark subtraction, flat-field injection, DAC offset/gain correction"
      },
      {
        "type": "design",
        "title": "Thermal Stabilisation Electronics",
        "tag": "TEC/Peltier driver, PID loop, thermistor readout, heater switching"
      },
      {
        "type": "design",
        "title": "IMU Analog Front-End Design",
        "tag": "MEMS accelerometer/gyro signal conditioning, anti-aliasing filter, differential to single-ended"
      },
      {
        "type": "design",
        "title": "Pressure Transducer Interface",
        "tag": "Wheatstone bridge excitation, instrumentation amp, temperature compensation, propellant-compatible"
      },
      {
        "type": "design",
        "title": "TVC Position Sensor Interface",
        "tag": "LVDT/resolver excitation & demodulation, position feedback chain, fail-safe detect"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Payload Front-End Electronics",
        "tag": "Detector-ROIC bring-up, bias commissioning, noise floor validation"
      },
      {
        "type": "design",
        "title": "Payload Interface Electronics",
        "tag": "Secondary power conditioning, SpaceWire/LVDS data links, HK monitoring"
      }
    ]
  },
  "wire": {
    "0": [
      {
        "type": "analysis",
        "title": "DC Circuits & Ohm's Law",
        "tag": "Series/parallel circuits, voltage dividers, wire resistance"
      },
      {
        "type": "analysis",
        "title": "Basic Electrical Safety",
        "tag": "Shock hazard, arc flash, lockout/tagout, insulation classes"
      },
      {
        "type": "analysis",
        "title": "EMI/EMC Fundamentals",
        "tag": "Conducted vs. radiated emissions, common-mode, differential-mode"
      }
    ],
    "1": [
      {
        "type": "design",
        "title": "Spacecraft Grounding Philosophy",
        "tag": "Single-point ground, chassis bond, signal/power GND separation"
      },
      {
        "type": "design",
        "title": "Wire & Cable Standards for Space",
        "tag": "MIL-W-22759, MIL-C-27500, space-grade PTFE insulation, AWG limits"
      },
      {
        "type": "analysis",
        "title": "EMI Coupling Mechanisms",
        "tag": "Capacitive/inductive coupling, common-impedance, antenna effects"
      },
      {
        "type": "design",
        "title": "Connector Standards Overview",
        "tag": "MIL-DTL-38999, D-Sub space-grade, RF SMA/N-type, QPL"
      }
    ],
    "2": [
      {
        "type": "design",
        "title": "Grounding Architecture Design",
        "tag": "Ground tree, chassis bond resistance ≤2.5mΩ, GND plane strategy"
      },
      {
        "type": "design",
        "title": "Shield Design & Termination",
        "tag": "360° vs. pigtail termination, drain wire, backshell bonding"
      },
      {
        "type": "design",
        "title": "Connector & Backshell Selection",
        "tag": "Shell size, insert arrangement, EMI backshell, potting qualification"
      },
      {
        "type": "design",
        "title": "Cable Routing & Segregation",
        "tag": "Power/signal/RF separation, bend radius, clamp spacing, routing ICD"
      },
      {
        "type": "analysis",
        "title": "Return Current Path Analysis",
        "tag": "Ground loop identification, parasitic inductance, noise on return"
      },
      {
        "type": "design",
        "title": "Harness ICD Authoring",
        "tag": "Wire list, connector pin assignments, wire gauge/shield call-outs"
      },
      {
        "type": "design",
        "title": "Pyrotechnic Harness Segregation Design",
        "tag": "EED circuit routing separated from signal, twisted-pair shielded EED lines, no-fire clearance"
      },
      {
        "type": "design",
        "title": "High-Vibration Harness Routing",
        "tag": "Strain relief, vibration clamp spacing per GEVS, flex points, chafe protection"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Spacecraft-Level Ground Tree",
        "tag": "System harness ground architecture, bonding strap sizing, ground map"
      },
      {
        "type": "analysis",
        "title": "EMC Compliance Design",
        "tag": "Pre-compliance measurement, conducted/radiated margin analysis"
      },
      {
        "type": "design",
        "title": "System Harness ICD",
        "tag": "Full spacecraft harness ICD, connector allocation, interface freeze"
      },
      {
        "type": "analysis",
        "title": "Ground Loop & Crosstalk Analysis",
        "tag": "Inter-subsystem ground loops, cross-coupling between signal cables"
      },
      {
        "type": "design",
        "title": "Umbilical & Stage-Sep Connector Design",
        "tag": "Ejectable connector selection, separation force budget, wipe sequence, post-sep seal"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "Bond Resistance & Shield Continuity",
        "tag": "Milliohm measurement, bonding strap verification, shield DC continuity"
      },
      {
        "type": "test",
        "title": "EMC/EMI Acceptance Testing",
        "tag": "System-level conducted/radiated emissions, ECSS-E-ST-20-07C"
      }
    ],
    "5": [
      {
        "type": "test",
        "title": "EMC Test Facility Operations",
        "tag": "Shielded room qualification, antenna calibration, LISN setup, log-ups"
      }
    ],
    "2b": [
      {
        "type": "hw",
        "title": "Wire Stripping & Preparation",
        "tag": "Insulation removal, nick-free prep, conductor inspection per IPC"
      },
      {
        "type": "hw",
        "title": "Crimping & Contact Installation",
        "tag": "MIL-C-22520 crimping, turret/bucket tool, go/no-go gauge verify"
      },
      {
        "type": "hw",
        "title": "Connector Assembly & Potting",
        "tag": "Pin insertion, contact retention check, potting compound application"
      },
      {
        "type": "hw",
        "title": "Harness Lacing & Bundling",
        "tag": "Lacing cord technique, spot-ties, bundle diameter, clamp installation"
      },
      {
        "type": "hw",
        "title": "Coaxial & RF Cable Termination",
        "tag": "SMA/N-type hand-formable, semi-rigid coax prep, torque spec."
      },
      {
        "type": "test",
        "title": "Harness Continuity & Hi-Pot Testing",
        "tag": "End-to-end continuity, insulation resistance, hi-pot voltage hold"
      }
    ]
  },
  "qa": {
    "0": [
      {
        "type": "analysis",
        "title": "Software Testing Fundamentals",
        "tag": "V-model, test levels (unit/integration/system), test types, black/white box"
      },
      {
        "type": "design",
        "title": "Programming for Test",
        "tag": "Python scripting, test fixtures, assertions, test runner basics (pytest)"
      },
      {
        "type": "analysis",
        "title": "Statistics & Measurement",
        "tag": "Error analysis, data distributions, sampling theory, measurement uncertainty"
      },
      {
        "type": "analysis",
        "title": "Quality Management Basics",
        "tag": "ISO 9001 overview, quality planning, process control, root cause concepts"
      }
    ],
    "1": [
      {
        "type": "analysis",
        "title": "Space Product Assurance",
        "tag": "ECSS-Q-ST-10, quality plans, nonconformance process, supplier surveillance"
      },
      {
        "type": "analysis",
        "title": "V&V in the Space Development Lifecycle",
        "tag": "V-model for space projects, verification methods: T/A/I/D, DRD compliance"
      },
      {
        "type": "design",
        "title": "Test Planning Fundamentals",
        "tag": "Test objectives, test levels, pass/fail criteria, resource & schedule estimation"
      },
      {
        "type": "design",
        "title": "Non-Conformance & Problem Reporting",
        "tag": "NCR/PR process, severity & criticality classification, DR/ECN linkage"
      }
    ],
    "2": [
      {
        "type": "analysis",
        "title": "Verification Matrix Development",
        "tag": "Req-to-test mapping, coverage analysis, verification cross-reference matrix (VCRM)"
      },
      {
        "type": "design",
        "title": "Test Case Design Techniques",
        "tag": "Equivalence partitioning, boundary value analysis, state-based & decision table testing"
      },
      {
        "type": "design",
        "title": "Automated Test Framework Design",
        "tag": "pytest / Robot Framework architecture, page object model, test data management"
      },
      {
        "type": "analysis",
        "title": "Software Quality Metrics",
        "tag": "Code coverage (MC/DC, branch), defect density, reliability growth models, Cpk"
      },
      {
        "type": "design",
        "title": "GSE & Test Harness Requirements",
        "tag": "Bench interface spec, stimulus/response architecture, electrical safety margins"
      },
      {
        "type": "analysis",
        "title": "Static Analysis & Code Review",
        "tag": "MISRA-C rules, Polyspace/CodeSonar, peer review checklist, defect classification"
      }
    ],
    "3": [
      {
        "type": "design",
        "title": "Subsystem Verification Plan (SVP)",
        "tag": "SVP structure per ECSS-E-ST-10-02, DRD compliance, test campaign schedule"
      },
      {
        "type": "design",
        "title": "Acceptance Test Procedure (ATP) Development",
        "tag": "Step-by-step ECS module ATP, expected results, go/no-go criteria, safety precautions"
      },
      {
        "type": "test",
        "title": "EMC/EMI Pre-compliance Testing",
        "tag": "Conducted/radiated sweep, pre-compliance margin, LISN setup, antenna calibration"
      },
      {
        "type": "test",
        "title": "Environmental Test Witnessing",
        "tag": "Vibration & TVac test witnessing, anomaly log, hold/waiver decision, witness report"
      },
      {
        "type": "design",
        "title": "Test Readiness Review (TRR) Package",
        "tag": "TRR checklist, open items disposition, test constraints, facility readiness sign-off"
      }
    ],
    "4": [
      {
        "type": "test",
        "title": "System-Level V&V Campaign Management",
        "tag": "Test flow control, resource tracking, issue closure board, V&V completion matrix"
      },
      {
        "type": "test",
        "title": "Software IV&V",
        "tag": "Independent verification, SAR preparation, formal IV&V report, code review authority"
      },
      {
        "type": "test",
        "title": "Qualification & Acceptance Review Package",
        "tag": "QR/AR test report, open-item list, delta analysis vs. qualification baseline"
      },
      {
        "type": "test",
        "title": "Regression Test Management",
        "tag": "Baseline definition, change-driven regression selection, delta coverage report"
      }
    ],
    "5": [
      {
        "type": "design",
        "title": "QA Programme Management",
        "tag": "Project QA plan, audit schedule, quality gates at review milestones, lessons learned"
      },
      {
        "type": "hw",
        "title": "Test Facility Configuration Management",
        "tag": "Calibration records, facility ICD, metrology traceability, equipment status log"
      },
      {
        "type": "analysis",
        "title": "Independent V&V Authority",
        "tag": "IV&V authority charter, customer interface, certification sign-off, flight readiness"
      },
      {
        "type": "analysis",
        "title": "Quality System Audits",
        "tag": "Internal/external audit, AS9100D / ECSS-Q-ST-20 supplier assessment, audit trail"
      }
    ],
    "2b": [
      {
        "type": "test",
        "title": "Automated Test Script Development",
        "tag": "Python/Robot Framework scripts, parameterised tests, fixtures, CI integration"
      },
      {
        "type": "test",
        "title": "CI/CD Pipeline for Embedded Software",
        "tag": "Jenkins/GitLab CI, build-on-commit, automated regression gate, test reporting"
      },
      {
        "type": "test",
        "title": "Hardware-in-the-Loop Test Implementation",
        "tag": "HIL bench build, simulation interface, signal injection, closed-loop test scripts"
      },
      {
        "type": "test",
        "title": "Functional Test Procedure Execution",
        "tag": "ATP step execution, pass/fail logging, anomaly tagging, test witness sign-off"
      },
      {
        "type": "test",
        "title": "Defect Logging & Regression Tracking",
        "tag": "Issue tracker workflow, defect lifecycle, regression baseline, delta coverage"
      }
    ]
  },
  "syseng": {
    "2": [
      {
        "type": "analysis",
        "title": "Link Budget Fundamentals",
        "tag": "EIRP, free-space path loss, G/T, Eb/N0, link margin"
      }
    ],
    "3": [
      {
        "type": "analysis",
        "title": "FDIR Analysis",
        "tag": "Fault tree, failure propagation, autonomous recovery modes"
      },
      {
        "type": "design",
        "title": "C&DH Subsystem Design",
        "tag": "CCSDS TM/TC, SpaceWire, MIL-STD-1553 integration"
      },
      {
        "type": "design",
        "title": "ADCS Electronics",
        "tag": "RW drive, IMU acq., sun sensor I/F, magnetorquer drivers"
      },
      {
        "type": "analysis",
        "title": "Spacecraft Power Budget",
        "tag": "Multi-mode budget, BOL/EOL margin ≥20%, ECSS-E-ST-60"
      },
      {
        "type": "analysis",
        "title": "On-Board Data Budget",
        "tag": "Storage vs. allocation, downlink capacity, store-and-forward margin"
      },
      {
        "type": "design",
        "title": "Avionics System Architecture (FCS/BFS)",
        "tag": "Dual-string flight computer, cross-strapping, BFS takeover logic, redundancy management unit"
      },
      {
        "type": "design",
        "title": "Launch Vehicle Avionics ICD",
        "tag": "Stage-to-stage electrical interfaces, umbilical ICD, payload separation interface, RF link budget"
      }
    ],
    "4": [
      {
        "type": "analysis",
        "title": "Reliability Engineering & FMECA",
        "tag": "System FMECA, fault tree, ECSS-Q-ST-30-11 derating compliance"
      },
      {
        "type": "analysis",
        "title": "Launch Readiness Review (LRR) Support",
        "tag": "LRR package, open-item disposition, range safety interface, flight rationale sign-off"
      },
      {
        "type": "analysis",
        "title": "Range Safety Compliance Analysis",
        "tag": "Flight termination system compliance matrix, debris casualty area analysis, trajectory safety"
      }
    ],
    "5": [
      {
        "type": "design",
        "title": "Ground Segment Interface",
        "tag": "Mission control SW integration, LEOP procedures, commissioning"
      },
      {
        "type": "design",
        "title": "Flight Data Reconstruction & Analysis",
        "tag": "PCM/CCSDS decode, FDR extraction, anomaly RCA report"
      }
    ]
  },
  "doc": {
    "2": [
      {
        "type": "tech",
        "title": "Interface Control Document (ICD)",
        "tag": "Connector pin lists, signal definitions, margin table"
      },
      {
        "type": "tech",
        "title": "Test Plan Writing",
        "tag": "Test matrix, resources, schedule, pass/fail criteria"
      },
      {
        "type": "tech",
        "title": "Non-Conformance Report (NCR)",
        "tag": "NCR form, root cause, corrective/preventive action"
      }
    ],
    "3": [
      {
        "type": "tech",
        "title": "FMEA/FMECA Report Writing",
        "tag": "FMECA worksheet, criticality matrix, RPN, design review pkg"
      },
      {
        "type": "tech",
        "title": "Test Report Writing",
        "tag": "Results vs. requirements, anomaly log, disposition table"
      },
      {
        "type": "tech",
        "title": "Design Revision (DR) Writing",
        "tag": "DR form, problem statement, impact assessment, approval routing"
      },
      {
        "type": "tech",
        "title": "Engineering Change Note (ECN) Writing",
        "tag": "ECN form, change description, drawing redlines, effectivity"
      }
    ],
    "4": [
      {
        "type": "tech",
        "title": "FDIR Analysis Documentation",
        "tag": "FDIR report, failure catalogue, SDR/PDR/CDR review board pkg"
      },
      {
        "type": "tech",
        "title": "Module Revision Board (MRB) Package",
        "tag": "MRB agenda, DR/ECN stack, disposition matrix, action items"
      }
    ]
  },
  "admin": {
    "1": [
      {
        "type": "admin",
        "title": "Complete Staff Work (CSW)",
        "tag": "Decision-ready briefs, CSW checklist"
      },
      {
        "type": "admin",
        "title": "Technical Memo & Brief Writing",
        "tag": "Memo format, exec summary, numbered action paragraphs"
      }
    ],
    "2": [
      {
        "type": "admin",
        "title": "PPMP Submission & Management",
        "tag": "PPMP preparation, budget per item, GPPB compliance"
      },
      {
        "type": "admin",
        "title": "Purchase Request (PR) Submission",
        "tag": "PR form, ABC establishment, specs, RA 12009 & IRR"
      },
      {
        "type": "admin",
        "title": "Technical Specifications Writing",
        "tag": "Performance specs, measurable acceptance criteria, TOR/SOW"
      }
    ],
    "3": [
      {
        "type": "admin",
        "title": "Procurement Compliance (RA 12009 & IRR)",
        "tag": "BAC roles, PhilGEPS posting, SVP thresholds, bidding docs"
      }
    ]
  }
};


// ── ACRONYMS ──────────────────────────────────────────────────────────────────
const ACRONYMS = [
  ['ABC',       'Approved Budget for the Contract'],
  ['ADC',       'Analog-to-Digital Converter'],
  ['ADCS',      'Attitude Determination & Control System'],
  ['AIT',       'Assembly, Integration & Test'],
  ['AOI',       'Automated Optical Inspection'],
  ['APID',      'Application Process Identifier'],
  ['ARR',       'Acceptance Review'],
  ['ASIC',      'Application-Specific Integrated Circuit'],
  ['BAC',       'Bids & Awards Committee'],
  ['BCR',       'Battery Charge Regulator'],
  ['BGA',       'Ball Grid Array'],
  ['BLDC',      'Brushless DC (motor)'],
  ['BOL',       'Beginning of Life'],
  ['C&DH',      'Command & Data Handling'],
  ['CAN',       'Controller Area Network'],
  ['CCB',       'Configuration Control Board'],
  ['CCSDS',     'Consultative Committee for Space Data Systems'],
  ['CDR',       'Critical Design Review'],
  ['CSW',       'Complete Staff Work'],
  ['CTIA',      'Capacitive Transimpedance Amplifier'],
  ['CUC',       'CCSDS Unsegmented Time Code'],
  ['DAC',       'Digital-to-Analog Converter'],
  ['DAL',       'Design Assurance Level'],
  ['DFM',       'Design for Manufacturability'],
  ['DFT',       'Design for Testability'],
  ['DMA',       'Direct Memory Access'],
  ['DMM',       'Digital Multimeter'],
  ['DoD',       'Depth of Discharge'],
  ['DR',        'Design Revision'],
  ['ECSS',      'European Cooperation for Space Standardization'],
  ['EDAC',      'Error Detection & Correction'],
  ['ECS',       'Electrical & Computing Systems'],
  ['ECN',       'Engineering Change Note'],
  ['ECO',       'Engineering Change Order'],
  ['EEE',       'Electrical, Electronic & Electromechanical'],
  ['EL',        'Electroluminescence'],
  ['EMC',       'Electromagnetic Compatibility'],
  ['EMI',       'Electromagnetic Interference'],
  ['EOL',       'End of Life'],
  ['EPS',       'Electrical Power System'],
  ['ERC',       'Electrical Rules Check'],
  ['FDIR',      'Fault Detection, Isolation & Recovery'],
  ['FMEA',      'Failure Mode & Effects Analysis'],
  ['FMECA',     'Failure Mode, Effects & Criticality Analysis'],
  ['FPGA',      'Field-Programmable Gate Array'],
  ['FSM',       'Finite State Machine'],
  ['FSW',       'Flight Software'],
  ['GND',       'Ground'],
  ['GPPB',      'Government Procurement Policy Board'],
  ['GPS',       'Global Positioning System'],
  ['GSE',       'Ground Support Equipment'],
  ['HAL',       'Hardware Abstraction Layer'],
  ['HDL',       'Hardware Description Language'],
  ['HDRM',      'Hold-Down & Release Mechanism'],
  ['HIL',       'Hardware-in-the-Loop'],
  ['HK',        'Housekeeping'],
  ['I2C',       'Inter-Integrated Circuit'],
  ['ICD',       'Interface Control Document'],
  ['IPC',       'Institute for Printed Circuits'],
  ['IRR',       'Implementing Rules & Regulations'],
  ['ISR',       'Interrupt Service Routine'],
  ['JTAG',      'Joint Test Action Group'],
  ['LAPSS',     'Large Area Pulsed Solar Simulator'],
  ['LEOP',      'Launch & Early Orbit Phase'],
  ['LVDS',      'Low-Voltage Differential Signaling'],
  ['MC/DC',     'Modified Condition/Decision Coverage'],
  ['MISRA',     'Motor Industry Software Reliability Assoc.'],
  ['MPPT',      'Maximum Power Point Tracking'],
  ['MRB',       'Material Review Board'],
  ['MRR',       'Manufacturing Readiness Review'],
  ['NCR',       'Non-Conformance Report'],
  ['NIEL',      'Non-Ionizing Energy Loss'],
  ['OBCP',      'On-Board Control Procedure'],
  ['OBSW',      'On-Board Software'],
  ['OCP',       'Over-Current Protection'],
  ['OVP',       'Over-Voltage Protection'],
  ['PCB',       'Printed Circuit Board'],
  ['PCM',       'Pulse-Code Modulation'],
  ['PDR',       'Preliminary Design Review'],
  ['PDU',       'Power Distribution Unit'],
  ['PhilGEPS',  'Philippine Govt. Electronic Procurement System'],
  ['PID',       'Proportional-Integral-Derivative'],
  ['PPMP',      'Project Procurement Management Plan'],
  ['PR',        'Purchase Request'],
  ['PUS',       'Packet Utilization Standard'],
  ['QPL',       'Qualified Products List'],
  ['QSL',       'Qualified Supplier List'],
  ['RA',        'Republic Act'],
  ['RCA',       'Root Cause Analysis'],
  ['RHBD',      'Radiation-Hardened By Design'],
  ['ROIC',      'Readout Integrated Circuit'],
  ['RTL',       'Register Transfer Level'],
  ['RTOS',      'Real-Time Operating System'],
  ['SAR',       'Safety Assessment Report / Successive Approx. Register'],
  ['SDR',       'System Design Review'],
  ['SEE',       'Single Event Effects'],
  ['SEU',       'Single Event Upset'],
  ['SIL',       'Safety Integrity Level'],
  ['SMA',       'SubMiniature version A (connector)'],
  ['SMT',       'Surface Mount Technology'],
  ['SOW',       'Statement of Work'],
  ['SPENVIS',   'Space Environment Information System'],
  ['SPI',       'Serial Peripheral Interface'],
  ['SPF',       'Single Point Failure'],
  ['STK',       'Systems Tool Kit'],
  ['SVP',       'Small Value Procurement'],
  ['TC',        'Telecommand'],
  ['TEC',       'Thermoelectric Cooler'],
  ['TIA',       'Transimpedance Amplifier'],
  ['TID',       'Total Ionizing Dose'],
  ['TM',        'Telemetry'],
  ['TMR',       'Triple Modular Redundancy'],
  ['TOR',       'Terms of Reference'],
  ['UART',      'Universal Asynchronous Receiver-Transmitter'],
  ['V&V',       'Verification & Validation'],
  ['VCDU',      'Virtual Channel Data Unit'],
  ['VHDL',      'VHSIC Hardware Description Language'],
  ['VHSIC',     'Very High Speed Integrated Circuit'],
  ['WCCA',      'Worst-Case Circuit Analysis'],
  ['WCET',      'Worst-Case Execution Time'],
  ['1PPS',      'One Pulse Per Second'],
  ['AS9100',    'Aerospace Quality Management System Standard'],
  ['ATP',       'Acceptance Test Procedure'],
  ['CI/CD',     'Continuous Integration / Continuous Delivery'],
  ['DR',        'Design Revision'],
  ['DRD',       'Document Requirements Definition'],
  ['IV&V',      'Independent Verification & Validation'],
  ['QR',        'Qualification Review'],
  ['SAR',       'Safety Assessment Report'],
  ['SVP',       'Subsystem Verification Plan'],
  ['TRR',       'Test Readiness Review'],
  ['VCRM',      'Verification Cross-Reference Matrix'],
  // ── Rocket Avionics ──
  ['BFS',       'Backup Flight System'],
  ['BIT',       'Built-In Test'],
  ['DAL',       'Design Assurance Level (DO-178C / DO-254)'],
  ['EED',       'Electro-Explosive Device'],
  ['EKF',       'Extended Kalman Filter'],
  ['FCS',       'Flight Control System'],
  ['FTS',       'Flight Termination System'],
  ['GEVS',      'General Environmental Verification Standard (NASA)'],
  ['GNC',       'Guidance, Navigation & Control'],
  ['IMU',       'Inertial Measurement Unit'],
  ['LRR',       'Launch Readiness Review'],
  ['LVDT',      'Linear Variable Differential Transformer'],
  ['MECO',      'Main Engine Cut-Off'],
  ['MEMS',      'Micro-Electro-Mechanical Systems'],
  ['RMU',       'Redundancy Management Unit'],
  ['SRS',       'Shock Response Spectrum'],
  ['TVC',       'Thrust Vector Control'],
];
