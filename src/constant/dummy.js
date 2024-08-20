import computer from "@/assets/computer.jpg";
import embeddedpic from "@/assets/embeddedpic.jpg";
import robot from "@/assets/robot.jpg";
import servo from "@/assets/servo.jpg";
import motor from "@/assets/motor.jpg";
import inventor from "@/assets/inventor.jpg";
import training from "@/assets/specializtions/training.svg";
import productdevelopment from "@/assets/specializtions/productdevelopment.svg";
import pcb from "@/assets/specializtions/pcb.svg";
import automationproduct from "@/assets/specializtions/automationproduct.svg";
import corparate from "@/assets/specializtions/corparate.svg";
import handsontraining from "@/assets/handsontraining.svg";
import flexiblelearning from "@/assets/flexiblelearning.svg";
import expertinstructors from "@/assets/expertinstructors.svg";
import placementsupport from "@/assets/placementsupport.svg";
import certificatecompletion from "@/assets/certificatecompletion.svg";

export const SpecialCardData = [
  {
    title: "Training",
    content:
      "Master skills in Industrial Automation, Embedded Systems, and Software Development with our hands-on courses. Elevate your career with expert-led training at Manfree Technologies.",
    img: training,
  },
  {
    title: "Product Development",
    content:
      "Create custom solutions with our expert product development in PIC, STM 32, and Arduino microcontrollers.",
    img: productdevelopment,
  },
  {
    title: "Automation Projects",
    content:
      "Achieve efficiency with our expertise in PLC automation, programming, and VFD installation.",
    img: automationproduct,
  },
  {
    title: "Corporate Training",
    content:
      "Empower your team with our tailored corporate training in automation, embedded systems, and software development.",
    img: corparate,
  },
  {
    title: "PCB Design",
    content:
      "Get precision and reliability with our custom PCB design and development services.",
    img: pcb,
  },
  {
    title: "Placements",
    content:
      "Our specialized courses offer robust placement support with leading companies, including resume building, interview preparation, and direct job placements to kickstart your career.",
    img: pcb,
  },
];

export const courses = [
  {
    tag: "PLC",
    title: "PLC Automation and Programming",
    description:
      "Streamline operations with expert PLC automation and programming.",
    img: computer,
    href: "/courses/plc",
    tag: "embedded",
    populare: true,
  },
  {
    tag: "Embedded",
    title: "Arduino Programmer",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    img: embeddedpic,
    tag: "embedded",
    href: "/courses/arduinoProgrammer",
    populare: true,
  },
  {
    tag: "Embedded",
    title: "Embedded Engineer Professional",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    img: embeddedpic,
    tag: "embedded",
    href: "/courses/embeddedProfessional",
    populare: true,
  },
  {
    tag: "Embedded",
    title: "Embedded Engineer Associate",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    img: embeddedpic,
    tag: "embedded",
    href: "/courses/embeddedAssociate",
  },
  {
    tag: "Embedded",
    title: "Embedded Programmer",
    description:
      "Innovate and integrate with our advanced embedded systems training.",
    img: embeddedpic,
    tag: "embedded",
    href: "/courses/embeddedProgrammer",
  },
  {
    tag: "VFD",
    title: "VFD and Servo Installation",
    description:
      "Optimize performance with precision VFD and servo installation.",
    img: robot,
    tag: "industrial",
    href: "/courses/vfd",
  },
  {
    tag: "Software",
    title: "Software Development",
    description:
      "Build the future with versatile software skills in Java, Python, and more.",
    img: servo,
    tag: "software",
    href: "/courses/software",
  },
  {
    tag: "Automation",
    title: "Certified Industrial Automation Professional",
    description:
      "Drive efficiency and innovation through tailored automation solutions.",
    img: motor,
    tag: "industrial",
    href: "/courses/industrialProfessional",
  },
  {
    tag: "Automation",
    title: "Certified Industrial Automation Associate",
    description:
      "Drive efficiency and innovation through tailored automation solutions.",
    img: motor,
    tag: "industrial",
    href: "/courses/industrialAssociate",
  },
  {
    tag: "IoT",
    title: "IoT (Internet of Things)",
    description:
      "IoT solutions for a connected world. Innovate with smart devices and data-driven insights.",
    img: inventor,
    tag: "embedded",
    href: "/courses/iot",
  },
];

export const latest = [
  {
    title: "Automation",
    description:
      "Introduction to PLC Programming: Getting Started with Automation.",
  },
  {
    title: "Python",
    description:
      "Introduction to PLC Programming: Getting Started with Automation.",
  },
  {
    title: "IoT",
    description:
      "Python for Data Analysis: Applications in IoT and Automation.",
  },
];

export const courseIncludes = [
  {
    title: "Hands on Training",
    img: handsontraining,
  },
  {
    title: "Flexible Learning",
    img: flexiblelearning,
  },
  {
    title: "Expert Instructors",
    img: expertinstructors,
  },
  {
    title: "Placement Support",
    img: placementsupport,
  },
  {
    title: "Certificate of Completion",
    img: certificatecompletion,
  },
];

// What you will learn for all courses

export const wywlForIndustrialAutomation = [
  "Deep knowledge about Panel board, Panel wiring, Panel board components working principles, Components Selection",
  "Good PLC programming skills with more than 10 PLC brands like Siemens, Omron, AB, ABB, Schneider, Delta, Phoenix, Selec, Fuji, Mitsubishi etc.,",
  "Advanced concepts like 16bit/32bit Arithmetic and Data handling instructions, Modbus, Ethernet, Profibus protocols, HMI programming with Animations, Report Generation, Macro and Recipe Programming",
  "PLC hardware wiring, PLC & HMI interfacing using Rs232 & RS485 protocols, VFD programming, Interfacing PLC, HMI & VFD using different protocols",
  "Developing an Automation project by using only HMI & VFD without using PLC, Servo and Stepper motor concepts",
  "SCADA programming with Tag cr,eations, Animations, Report generation, Controlling & monitoring PLC",
];

export const wywlForPlcProgrammer = [
  "Good PLC programming skills with Delta & Siemens PLCs. Students can choose a PLC brand they wish to learn",
  "Advanced concepts like 16bit/32bit Arithmetic and Data handling instructions, Modbus, Ethernet, Profibus protocols, HMI programming with Animations, Report Generation, Macro and Recipe Programming",
  "PLC hardware wiring, PLC & HMI interfacing using Rs232 & RS485 protocols",
  "Developing projects by using PLC & HMI",
  "SCADA programming with Tag cr,eations, Animations, Report generation, Controlling & monitoring PLC",
];

export const wywlForEmbeddedProfessional = [
  "Deep knowledge of both hardware and software used in embedded systems",
  "Proficiency in circuit designing and understanding of components used in circuits.",
  "Ability to select perfect/suitable components for specific applications.",
  "Proficiency in programming languages such as C (Embedded C), C++ (Embedded C++), or Python (Embedded Python).",
  "Strong knowledge of PIC microcontrollers & STM32 controllers",
  "Good understanding in protocols like UART, SPI, I2C, CAN, Flexray, LIN etc.,",
];

export const wywlForEmbeddedAssociate = [
  "Deep knowledge of both hardware and software used in embedded systems",
  "Proficiency in circuit designing and understanding of components used in circuits.",
  "Ability to select perfect/suitable components for specific applications.",
  "Proficiency in programming languages such as C & Embedded C",
  "Strong knowledge of PIC microcontrollers",
  "Good understanding in protocols like UART, SPI, I2C etc.,",
];

export const wywlForEmbeddedProgrammer = [
  "Both hardware and software fundamentals used in embedded systems",
  "Understanding basic electronic components, building and testing simple circuits",
  "Programming languages such as C & Embedded C",
  "Fundamental knowledge of PIC microcontrollers",
  "Protocols like UART, SPI, I2C etc.,",
];

export const wywlForArduinoProgrammer = [
  "Introduction to hardware and software, setting up the IDE, and writing your first sketch",
  "Understanding basic electronic components, building and testing simple circuits",
  "Proficiency in programming languages such as C  & Embedded",
  "Interfacing with sensors and actuators, creating interactive projects.",
  "Optimising code, using communication protocols, and developing IoT applications",
];

// Course content for all courses

export const industrialProfessional = [
  {
    title: "Introduction",
    content: [
      "Introduction to Industrial Automation",
      "AC and DC Power",
      "Load calculation",
      "Basic Electrical Concepts & Laws",
      "Basic Electronics Laws",
      "Active and Passive components",
      "Electronic circuits overview",
      "Requirement analysis for a project",
      "Components selection",
    ],
  },
  {
    title: "Panel Board Wiring",
    content: [
      "Introduction to Panel Board",
      "Panel board components",
      "Contactor & Its types",
      "AC & DC Relay",
      "Timers & Counters",
      "Panel board wiring",
      "Working on different logics",
    ],
  },
  {
    title: "Sensors",
    content: [
      "Introduction to Sensors",
      "Analog and Digital Sensors",
      "Working principle and wiring details",
      "Proximity Sensor",
      "Photoelectric Sensor",
      "Ultrasonic Sensor",
      "Temperature Sensor",
      "Load Cell",
      "Pressure Transmitter",
      "Rotary Encoder",
    ],
  },
  {
    title: "PLC - Delta Basics",
    content: [
      "Introduction to PLC",
      "Advantages ,and its applications",
      "Delta PLC models",
      "Hardware Architecture",
      "Input & output wiring concepts",
      "Exploring WPLsoft software",
      "Input & Output coil",
      "SET, Reset, MC. MCR",
      "Timer, Counter",
      "Rising Edge, Falling Edge",
      "Arithmetic instructions",
      "Data handling - Move, Compare",
      "Analog Instructions",
      "Program upload & download",
      "Online simulation & Hardware Interfacing",
      "Working on various concepts",
      "Project development",
    ],
  },
  {
    title: "PLC - Delta Advanced Instructions",
    content: [
      "Arithmetic instructions (32 bit)",
      "Data handling (32 bit) - Move, Compare",
      "Analog Instructions",
      "Scaling & Special Instructions",
      "Stepper & Servo concepts",
      "High Speed Instructions",
      "Real Time Clock (RTC)",
      "Floating Point",
      "Latching coil & data registers",
      "Communication Protocols - RS232, RS485, Modbus",
      "Working on various tasks",
      "Project development with Hardware Implementation",
    ],
  },
  {
    title: "PLC - Siemens",
    content: [
      "Introduction to Siemens",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Exploring TIA Integrated portal software",
      "Working on Basic Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development using basic instructions",
      "Working on Advanced Instructions",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "PLC - Delta ISPsoft",
    content: [
      "Introduction to ISPsoft software",
      "Exploring Basic and Advanced concepts",
      "Interfacing with PLC Hardware",
      "Working on multiple tasks",
      "Project development",
    ],
  },
  {
    title: "HMI - Delta",
    content: [
      "Introduction to HMI",
      "Exploring Delta HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Siemens",
    content: [
      "Exploring Siemens HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Advanced Instructions",
    content: [
      "Image upload & Logo setting",
      "Recipe (16bit, 32bit & Enhanced Recipe)",
      "Macros - Background, On Screen Macro",
      "Animations",
      "Program upload & download",
      "Interfacing with PLC & drives",
      "RS232 & RS485 Protocols",
      "Working with multiple stations",
    ],
  },
  {
    title: "Drives & Controls",
    content: [
      "Introduction to AC drives",
      "VFD working principle",
      "Different types of AC motors",
      "Load calculation",
      "Exploring various drive models",
      "Drive selection process",
      "Parameter configuration",
      "Frequency & Operation command",
      "Internal & External control",
      "Two wire & 3 wire method",
      "Multiple speed control",
      "Interfacing with PLC & HMI",
      "RS232, MODBUS protocols",
      "Digital signal control",
      "Analog signal control",
      "Working on projects using Drives, PLC & HMI",
      "Working on projects using Drives & HMI alone",
      "Exploring VFD datasheet",
    ],
  },
  {
    title: "Communication Protocols",
    content: [
      "Introduction to different protocols",
      "RS232 protocol",
      "RS485 protocol",
      "MODBUS protocol",
      "PROFIBUS protocol",
      "Ethernet protocol",
      "Comparison between the protocols",
      "Protocol selection",
      "Working on Protocols with PLC, Drives & HMI",
    ],
  },
  {
    title: "SCADA",
    content: [
      "Introduction to SCADA",
      "Exploring different SCADA software",
      "Designing",
      "Basic Controls",
      "Tag cr,eation",
      "Data read & write",
      "Animations & Graphs",
      "Image uploading",
      "Interfacing with PLC & Drives",
      "Working on projects",
    ],
  },
  {
    title: "PLC - Allen Bradley",
    content: [
      "Introduction to AB PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - Mitsubishi",
    content: [
      "Introduction to Mitsubishi PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - Phoenix",
    content: [
      "Introduction to Phoenix PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "PLC - Omron",
    content: [
      "Introduction to Omron PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "PLC - Schneider",
    content: [
      "Introduction to Schneider PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - Fuji",
    content: [
      "Introduction to Fuji PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - Selec",
    content: [
      "Introduction to Selec PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - Fanuc",
    content: [
      "Introduction to Fanuc PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
  {
    title: "PLC - ABB",
    content: [
      "Introduction to ABB PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Project development",
    ],
  },
];

export const industrialAssociate = [
  {
    title: "Introduction",
    content: [
      "Introduction to Industrial Automation",
      "AC and DC Power",
      "Load calculation",
      "Basic Electrical Concepts & Laws",
      "Basic Electronics Laws",
      "Active and Passive components",
      "Electronic circuits overview",
      "Requirement analysis for a project",
      "Components selection",
    ],
  },
  {
    title: "Panel Board Wiring",
    content: [
      "Introduction to Panel Board",
      "Panel board components",
      "Contactor & Its types",
      "AC & DC Relay",
      "Timers & Counters",
      "Panel board wiring",
      "Working on different logics",
    ],
  },
  {
    title: "Sensors",
    content: [
      "Introduction to Sensors",
      "Analog and Digital Sensors",
      "Working principle and wiring details",
      "Proximity Sensor",
      "Photoelectric Sensor",
      "Ultrasonic Sensor",
      "Temperature Sensor",
      "Load Cell",
      "Pressure Transmitter",
      "Rotary Encoder",
    ],
  },
  {
    title: "PLC - Delta Basics",
    content: [
      "Introduction to PLC",
      "Advantages ,and its applications",
      "Delta PLC models",
      "Hardware Architecture",
      "Input & output wiring concepts",
      "Exploring WPLsoft software",
      "Input & Output coil",
      "SET, Reset, MC. MCR",
      "Timer, Counter",
      "Rising Edge, Falling Edge",
      "Arithmetic instructions",
      "Data handling - Move, Compare",
      "Analog Instructions",
      "Program upload & download",
      "Online simulation & Hardware Interfacing",
      "Working on various concepts",
      "Project development",
    ],
  },
  {
    title: "PLC - Delta Advanced Instructions",
    content: [
      "Arithmetic instructions (32 bit)",
      "Data handling (32 bit) - Move, Compare",
      "Analog Instructions",
      "Scaling & Special Instructions",
      "Stepper & Servo concepts",
      "High Speed Instructions",
      "Real Time Clock (RTC)",
      "Floating Point",
      "Latching coil & data registers",
      "Communication Protocols - RS232, RS485, Modbus",
      "Working on various tasks",
      "Project development with Hardware Implementation",
    ],
  },
  {
    title: "PLC - Siemens",
    content: [
      "Introduction to Siemens",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Exploring TIA Integrated portal software",
      "Working on Basic Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development using basic instructions",
      "Working on Advanced Instructions",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "PLC - Delta ISPsoft",
    content: [
      "Introduction to ISPsoft software",
      "Exploring Basic and Advanced concepts",
      "Interfacing with PLC Hardware",
      "Working on multiple tasks",
      "Project development",
    ],
  },
  {
    title: "HMI - Delta",
    content: [
      "Introduction to HMI",
      "Exploring Delta HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Siemens",
    content: [
      "Exploring Siemens HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Advanced Instructions",
    content: [
      "Image upload & Logo setting",
      "Recipe (16bit, 32bit & Enhanced Recipe)",
      "Macros - Background, On Screen Macro",
      "Animations",
      "Program upload & download",
      "Interfacing with PLC & drives",
      "RS232 & RS485 Protocols",
      "Working with multiple stations",
    ],
  },
  {
    title: "Drives & Controls",
    content: [
      "Introduction to AC drives",
      "VFD working principle",
      "Different types of AC motors",
      "Load calculation",
      "Exploring various drive models",
      "Drive selection process",
      "Parameter configuration",
      "Frequency & Operation command",
      "Internal & External control",
      "Two wire & 3 wire method",
      "Multiple speed control",
      "Interfacing with PLC & HMI",
      "RS232, MODBUS protocols",
      "Digital signal control",
      "Analog signal control",
      "Working on projects using Drives, PLC & HMI",
      "Working on projects using Drives & HMI alone",
      "Exploring VFD datasheet",
    ],
  },
  {
    title: "Communication Protocols",
    content: [
      "Introduction to different protocols",
      "RS232 protocol",
      "RS485 protocol",
      "MODBUS protocol",
      "PROFIBUS protocol",
      "Ethernet protocol",
      "Comparison between the protocols",
      "Protocol selection",
      "Working on Protocols with PLC, Drives & HMI",
    ],
  },
  {
    title: "SCADA",
    content: [
      "Introduction to SCADA",
      "Exploring different SCADA software",
      "Designing",
      "Basic Controls",
      "Tag cr,eation",
      "Data read & write",
      "Animations & Graphs",
      "Image uploading",
      "Interfacing with PLC & Drives",
      "Working on projects",
    ],
  },
  {
    title: "PLC - Phoenix",
    content: [
      "Introduction to Phoenix PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "PLC - Omron",
    content: [
      "Introduction to Omron PLC",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Working on Basic Instructions",
      "Working on Advanced Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development with hardware interfacing",
    ],
  },
];

export const plcProgrammer = [
  {
    title: "PLC - Introduction",
    content: [
      "Introduction to PLC",
      "Advantages ,and its applications",
      "Delta PLC models",
      "Hardware Architecture",
      "Input & output wiring concepts",
      "Exploring WPLsoft software",
      "Input & Output coil",
      "SET, Reset, MC. MCR",
      "Timer, Counter",
      "Rising Edge, Falling Edge",
      "Arithmetic instructions",
      "Data handling - Move, Compare",
      "Analog Instructions",
      "Program upload & download",
      "Online simulation & Hardware Interfacing",
      "Working on various concepts",
      "Project development",
    ],
  },
  {
    title: "PLC - Delta Advanced Instructions",
    content: [
      "Arithmetic instructions (32 bit)",
      "Data handling (32 bit) - Move, Compare",
      "Analog Instructions",
      "Scaling & Special Instructions",
      "Stepper & Servo concepts",
      "High Speed Instructions",
      "Real Time Clock (RTC)",
      "Floating Point",
      "Latching coil & data registers",
      "Communication Protocols - RS232, RS485, Modbus",
      "Working on various tasks",
      "Project development with Hardware Implementation",
    ],
  },
  {
    title: "PLC - Siemens",
    content: [
      "Introduction to Siemens",
      "Hardware Architecture",
      "Different PLC models & packages",
      "Exploring TIA Integrated portal software",
      "Working on Basic Instructions",
      "Interfacing with PLC hardware & Sensors",
      "Project development using basic instructions",
      "Working on Advanced Instructions",
      "Project development with hardware interfacing",
    ],
  },
  {
    title: "HMI - Delta",
    content: [
      "Introduction to HMI",
      "Exploring Delta HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Siemens",
    content: [
      "Exploring Siemens HMI software",
      "Page creation",
      "Password setting",
      "Data read & write",
      "Data display",
      "Address mapping",
      "Numeric entry & display",
      "Various charts",
      "Alarm setting",
      "Screen Management",
    ],
  },
  {
    title: "HMI - Advanced Instructions",
    content: [
      "Image upload & Logo setting",
      "Recipe (16bit, 32bit & Enhanced Recipe)",
      "Macros - Background, On Screen Macro",
      "Animations",
      "Program upload & download",
      "Interfacing with PLC & drives",
      "RS232 & RS485 Protocols",
      "Working with multiple stations",
    ],
  },
  {
    title: "Communication Protocols",
    content: [
      "Introduction to different protocols",
      "RS232 protocol",
      "RS485 protocol",
      "MODBUS protocol",
      "PROFIBUS protocol",
      "Ethernet protocol",
      "Comparison between the protocols",
      "Protocol selection",
      "Working on Protocols with PLC, Drives & HMI",
    ],
  },
  {
    title: "SCADA",
    content: [
      "Introduction to SCADA",
      "Exploring different SCADA software",
      "Designing",
      "Basic Controls",
      "Tag cr,eation",
      "Data read & write",
      "Animations & Graphs",
      "Image uploading",
      "Interfacing with PLC & Drives",
      "Working on projects",
    ],
  },
];

export const embeddedProfessional = [
  {
    title: "Embedded Systems",
    content: [
      "Introduction",
      "Microcontroller Architecture",
      "Electrical and Electronics fundamentals",
      "Input & Output devices",
      "Project development process",
      "Git & GitHub",
    ],
  },
  {
    title: "C Programming",
    content: [
      "Introduction",
      "Data-types",
      "Variables",
      "Operators",
      "Decision making",
      "Looping statements",
      "Functions",
      "Arrays",
    ],
  },
  {
    title: "C Advanced",
    content: [
      "Strings",
      "Pointers",
      "Structure & Union",
      "Memory management",
      "Storage class",
      "Typedef & Enum",
      "File handling",
      "Command line arguments",
      "Compiler process",
    ],
  },
  {
    title: "C++ Programming",
    content: [
      "Introduction",
      "Data types & Operators",
      "Control & Looping statements",
      "Functions, Arrays and String",
      "Pointer, Structure & Union",
      "Memory management & Storage class.",
      "Introduction to OOPS",
      "Class & Object",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction.",
    ],
  },
  {
    title: "Python Programming",
    content: [
      "Introduction",
      "Data types & Operators",
      "Control & Looping statements",
      "Functions, List, Tuple",
      "Set, Dictionary & String",
      "Class and Object",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction.",
    ],
  },
  {
    title: "Electronics Hardware",
    content: [
      "Active & passive components",
      "Transistors, IGBTs, MOSFET",
      "Circuit designing & schematic",
      "Power supply Circuit",
      "Relay driver circuit",
      "Components assembling",
      "Soldering & Testing",
      "555 Timer & Op-Amp circuits",
      "Developing an own hardware board",
    ],
  },
  {
    title: "Sensors & Actuators",
    content: [
      "Input & output devices",
      "PB, Toggle switch & keypad",
      "Introduction to Sensors",
      "Digital & Analog Sensors",
      "Working principle & wiring details",
      "Introduction to Motors & Types",
      "Pneumatic & Hydraulics",
      "Load Calculation & Circuit designing",
      "Project Requirement Analysis",
      "Microcontroller Selection",
    ],
  },
  {
    title: "Digital Electronics",
    content: [
      "Introduction to Logic Gates",
      "Numbering System",
      "Combinational Circuits",
      "Sequential Circuits",
      "Finite State Machine",
      "Types Of Logic Signals",
      "TTL & CMOS",
    ],
  },
  {
    title: "PIC Microcontroller",
    content: [
      "Introduction to Microcontroller",
      "PIC Architecture & software IDE",
      "Working with LED, Motor, Switches & PB",
      "Interfacing different sensors",
      "7 Segment display, LCD & Keypad",
      "Interrupts & its types",
      "Working with different Timers",
      "ADC & EEPROM",
      "Protocols- UART, I2C, SPI",
      "GSM Module, Bluetooth, RFID etc.",
      "RTC- Master Slave",
      "PWM - Stepper & Servo Motor",
      "Internet of Things (IoT)",
      "Working on real time projects",
    ],
  },
  {
    title: "STM32 Microcontroller",
    content: [
      "STM32 Architecture & software IDE",
      "GPIO - Inputs & Outputs",
      "Interrupts & Timers",
      "ADC & EEPROM",
      "Protocols- UART, I2C, SPI",
      "GSM Module, Bluetooth, RFID etc.",
      "RTC- Master Slave",
      "PWM - Stepper & Servo Motor",
      "Internet of Things (IoT)",
      "CAN, LIN, Flexray etc.",
      "Working on real time projects",
    ],
  },
];

export const embeddedAssociate = [
  {
    title: "Embedded Systems",
    content: [
      "Introduction",
      "Microcontroller Architecture",
      "Electrical and Electronics fundamentals",
      "Input & Output devices",
      "Project development process",
      "Git & GitHub",
    ],
  },
  {
    title: "C Programming",
    content: [
      "Introduction",
      "Data-types",
      "Variables",
      "Operators",
      "Decision making",
      "Looping statements",
      "Functions",
      "Arrays",
    ],
  },
  {
    title: "C Advanced",
    content: [
      "Strings",
      "Pointers",
      "Structure & Union",
      "Memory management",
      "Storage class",
      "Typedef & Enum",
      "File handling",
      "Command line arguments",
      "Compiler process",
    ],
  },
  {
    title: "Electronics Hardware",
    content: [
      "Active & passive components",
      "Transistors, IGBTs, MOSFET",
      "Circuit designing & schematic",
      "Power supply Circuit",
      "Relay driver circuit",
      "Components assembling",
      "Soldering & Testing",
      "555 Timer & Op-Amp circuits",
      "Developing an own hardware board",
    ],
  },
  {
    title: "Sensors & Actuators",
    content: [
      "Input & output devices",
      "PB, Toggle switch & keypad",
      "Introduction to Sensors",
      "Digital & Analog Sensors",
      "Working principle & wiring details",
      "Introduction to Motors & Types",
      "Pneumatic & Hydraulics",
      "Load Calculation & Circuit designing",
      "Project Requirement Analysis",
      "Microcontroller Selection",
    ],
  },
  {
    title: "Digital Electronics",
    content: [
      "Introduction to Logic Gates",
      "Numbering System",
      "Combinational Circuits",
      "Sequential Circuits",
      "Finite State Machine",
      "Types Of Logic Signals",
      "TTL & CMOS",
    ],
  },
  {
    title: "PIC Microcontroller",
    content: [
      "Introduction to Microcontroller",
      "PIC Architecture & software IDE",
      "Working with LED, Motor, Switches & PB",
      "Interfacing different sensors",
      "7 Segment display, LCD & Keypad",
      "Interrupts & its types",
      "Working with different Timers",
      "ADC & EEPROM",
      "Protocols- UART, I2C, SPI",
      "GSM Module, Bluetooth, RFID etc.",
      "RTC- Master Slave",
      "PWM - Stepper & Servo Motor",
      "Internet of Things (IoT)",
      "Working on real time projects",
    ],
  },
];

export const arduinoProgrammer = [
  {
    title: "Arduino Basics",
    content: [
      "Introduction to Arduino hardware and software.",
      "Setting up the Arduino Integrated Development Environment (IDE).",
      "Writing and uploading your first Arduino sketch.",
    ],
  },
  {
    title: "Fundamentals of Electronics",
    content: [
      "Understanding basic electronic components (resistors, capacitors, transistors, etc.).",
      "Learning to read and create simple circuit diagrams.",
      "Building and testing circuits on a breadboard.",
    ],
  },
  {
    title: "Programming Essentials",
    content: [
      "Programming concepts in C/C++.",
      "Variables, data types, and operators.",
      "Control structures (if statements, loops).",
      "Functions, Array, and String.",
    ],
  },
  {
    title: "Working with Sensors and Actuators",
    content: [
      "Interfacing with digital and analog sensors.",
      "Controlling LEDs, motors, and other actuators.",
      "Reading data from temperature, light, and motion sensors.",
    ],
  },
  {
    title: "Intermediate Projects",
    content: [
      "Creating interactive projects with multiple components.",
      "Using libraries to simplify complex tasks.",
      "Debugging and troubleshooting common issues.",
    ],
  },
  {
    title: "Communication Protocols",
    content: [
      "Understanding and using MQTT, I2C, SPI, and UART protocols.",
      "Communicating between multiple Arduino boards.",
      "Integrating Arduino with other devices (e.g., GPS modules, Bluetooth).",
    ],
  },
  {
    title: "Internet of Things (IoT)",
    content: [
      "Connecting Arduino to the IoT (ESP32).",
      "Sending and receiving data from web services.",
      "Building simple IoT applications.",
    ],
  },
  {
    title: "Advanced Topics",
    content: [
      "Optimizing code for performance and memory usage.",
      "Power management techniques for battery-operated projects.",
      "Advanced debugging strategies.",
    ],
  },
  {
    title: "Project Development",
    content: [
      "Designing and planning your own projects.",
      "Best practices for project documentation.",
      "Tips for presenting and sharing your work with the community.",
    ],
  },
  {
    title: "Final Capstone Project",
    content: [
      "Applying all the skills learned to create a comprehensive project.",
      "Incorporating feedback and iterating on your design.",
      "Preparing a final presentation of your project.",
    ],
  },
];

// FAQ for all courses

export const faqEmbeddedProfessional = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 6 months (140 working days) if a student joins this course as a full-time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enroll in this course part-time too.",
  },
  {
    question: "Will there be hands-on projects or assignments?",
    answer:
      "Yes, all courses include practical assignments and projects to reinforce theoretical knowledge and provide real-world experience. Nearly 90% of class is practical, and students will work on a minimum of 6 to 8 projects.",
  },
  {
    question: "Is this course available part-time or on weekends?",
    answer:
      "Yes, we admit students part-time as well as on weekends. Students can choose morning, afternoon, or evening time slots, or on weekends based on their convenience or work shift timings. Customized course time is also available.",
  },
  {
    question: "Will I get placement support for this course?",
    answer:
      "Yes, everyone will have 100% placement support until they get a job in a company. In the placement process, students will have tests, projects, mock interviews, group discussions, etc. Based on performance, companies will be referred. Our embedded students are regularly receiving job offers from companies in various fields, including automotive, biomedical, IoT, and R&D projects.",
  },
  {
    question: "Do we provide free demo classes?",
    answer:
      "Yes, we provide free demo classes for all our courses. It's a great opportunity for you to experience our teaching style, interact with instructors, and get a preview of the course content before making a commitment. Feel free to reach out to us to schedule your demo class or for more details!",
  },
];

export const faqEmbeddedAssociate = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 4 months (96 working days) if a student joins this course as a full-time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enroll in this course part-time too.",
  },
  {
    question: "Will there be hands-on projects or assignments?",
    answer:
      "Yes, all courses include practical assignments and projects to reinforce theoretical knowledge and provide real-world experience. Nearly 90% of class is practical, and students will work on a minimum of 4 to 6 projects.",
  },
  {
    question: "Is this course available part-time or on weekends?",
    answer:
      "Yes, we admit students part-time as well as on weekends. Students can choose morning, afternoon, or evening time slots, or on weekends based on their convenience or work shift timings. Customized course time is also available.",
  },
  {
    question: "Will I get placement support for this course?",
    answer:
      "Yes, everyone will have 100% placement support until they get a job in a company. In the placement process, students will have tests, projects, mock interviews, group discussions, etc. Based on performance, companies will be referred. Our embedded students are regularly receiving job offers from companies in various fields, including automotive, biomedical, IoT, and R&D projects.",
  },
  {
    question: "Do we provide free demo classes?",
    answer:
      "Yes, we provide free demo classes for all our courses. It's a great opportunity for you to experience our teaching style, interact with instructors, and get a preview of the course content before making a commitment. Feel free to reach out to us to schedule your demo class or for more details!",
  },
];

export const faqEmbeddedProgrammer = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 2 months (45 working days) if a student joins this course as a full-time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enroll in this course part-time too.",
  },
  {
    question: "Will there be hands-on projects or assignments?",
    answer:
      "Yes, all courses include practical assignments and projects to reinforce theoretical knowledge and provide real-world experience. Nearly 90% of class is practical, and students will work on a minimum of 4 to 6 projects.",
  },
  {
    question: "Is this course available part-time or on weekends?",
    answer:
      "Yes, we admit students part-time as well as on weekends. Students can choose morning, afternoon, or evening time slots, or on weekends based on their convenience or work shift timings. Customized course time is also available.",
  },
  {
    question: "Will I get placement support for this course?",
    answer:
      "This is a crash course where you will learn all the topics from basic to advanced in a short period. We recommend this course only for beginners where they learn the fundamentals of embedded systems. If you need placement assistance, please enroll in our professional or associate course where you will have a deep understanding of all the topics, which will help to crack interviews.",
  },
  {
    question: "Do we provide free demo classes?",
    answer:
      "Yes, we provide free demo classes for all courses. It's a great opportunity for you to experience our teaching style, interact with instructors, and get a preview of the course content before making a commitment. Feel free to reach out to us to schedule your demo class or for more details!",
  },
];

export const faqArduinoProgrammer = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 1 month (24 working days) if a student joins this course as a full-time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enroll in this course part-time too.",
  },
  {
    question: "Is this course available part-time or on weekends?",
    answer:
      "Yes, we admit students part-time as well as on weekends. Students can choose morning, afternoon, or evening time slots, or on weekends based on their convenience or work shift timings. Customized course time is also available.",
  },
  {
    question: "Can I use Arduino for professional projects?",
    answer:
      "Yes, Arduino is widely used in professional projects across industries such as robotics, IoT, automation, and prototyping. This course provides a solid foundation for applying Arduino in real-world applications.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "You'll work on projects ranging from simple LED control to more complex tasks involving sensors, actuators, and communication protocols. Projects are designed to reinforce learning and practical application.",
  },
  {
    question: "What can I expect to achieve by the end of the course?",
    answer:
      "By the end of the course, you'll have gained practical skills in Arduino programming, electronics, and project development. You'll be able to create and implement your own Arduino-based projects and prototypes.",
  },
];

export const faqIndustrialAssociate = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 2 months (45 working days) if a student joins this course as a full time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enrol this course in part time too.",
  },
  {
    question:
      "I feel this course focuses more on the Delta brand. I wish to learn about Siemens in detail. Is this course customizable?",
    answer:
      "Yes, students can customize the course syllabus, no.of PLC brands and even course duration too. Also we would like to clarify that this course does not focus on the Delta brand alone. As per syllabus we displayed here we start with Delta and will focus on all PLC brands in detail.",
  },
  {
    question:
      "I am new to the Industrial Automation field. I don't know how to choose a PLC brand or to choose a course. What shall I do?",
    answer:
      "Don't worry. Please visit our office, we are happy to help you. We interact with students and recommend the best course based on their profile and future goals. We will provide detailed information about job opportunities, salary packages, future prospects, and job roles. Additionally, we offer a free demo class for all our courses.. With this understanding, students can easily choose a good course to build the career they’ve always dreamed of.",
  },
  {
    question: "Will there be hands-on projects or assignments?",
    answer:
      "Yes, all courses include practical assignments and projects to reinforce theoretical knowledge and provide real-world experience. Nearly 90% of class is practical, students will work on minimum 6 to 8 projects ",
  },
  {
    question: "Will I get placement support for this course?",
    answer:
      "Yes, everyone will have placement support till he/she gets a job in a company. In the placement process, students will have tests, projects, mock interviews, group discussion etc.,  Based on performance, companies will be referred. All our PLC students are placed till now, and with experience many of our students are working in Siemens, Allen Bradley, Delta etc., Few are working as freelancers, few become an entrepreneur",
  },
  {
    question: "Is this course available in part time or on weekends?",
    answer:
      "Yes, we admit students in part time as well as on weekends. Students can choose morning, afternoon or evening time slots or on weekends based on their convenient or work shift timings. Customized course time is also available.",
  },
];

export const faqIndustrialProfessional = [
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 3 months (70 working days) if a student joins this course as a full time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enrol this course in part time too.",
  },
  {
    question:
      "I feel this course focuses more on the Delta brand. I wish to learn about Siemens in detail. Is this course customizable?",
    answer:
      "Yes, students can customize the course syllabus, no.of PLC brands and even course duration too. Also we would like to clarify that this course does not focus on the Delta brand alone. As per syllabus we displayed here we start with Delta and will focus on all PLC brands in detail.",
  },
  {
    question:
      "I am new to the Industrial Automation field. I don't know how to choose a PLC brand or to choose a course. What shall I do?",
    answer:
      "Don't worry. Please visit our office, we are happy to help you. We interact with students and recommend the best course based on their profile and future goals. We will provide detailed information about job opportunities, salary packages, future prospects, and job roles. Additionally, we offer a free demo class for all our courses.. With this understanding, students can easily choose a good course to build the career they’ve always dreamed of.",
  },
  {
    question: "Will there be hands-on projects or assignments?",
    answer:
      "Yes, all courses include practical assignments and projects to reinforce theoretical knowledge and provide real-world experience. Nearly 90% of class is practical, students will work on minimum 6 to 8 projects",
  },
  {
    question: "Is this course available in part time or on weekends?",
    answer:
      "Yes, we admit students in part time as well as on weekends. Students can choose morning, afternoon or evening time slots or on weekends based on their convenient or work shift timings. Customized course time is also available.",
  },
  {
    question:
      "What shall I do if I need technical support after getting placed in a company?",
    answer:
      "Manfree is always happy to support our students at any time. You can contact us for any technical support. Even our alumni students are working in companies like Siemens, Delta, AB also happy to support our students",
  },
];

export const faqPlc = [
  {
    question:
      "I would like to become a good PLC programmer. Does this course suit me?",
    answer:
      "Yes. But you should have strong skills in Panel Board wiring, Sensors, Actuators & Drives.",
  },
  {
    question: "How many months will it take to complete this course?",
    answer:
      "This course will be completed in 1.5 months (30 working days) if a student joins this course as a full time regular student. Daily class timings are 10.00 am to 4.00 pm. Students can enrol this course in part time too.",
  },
  {
    question: "Is this course available in part time or on weekends?",
    answer:
      "Yes, we admit students in part time as well as on weekends. Students can choose morning, afternoon or evening time slots or on weekends based on their convenient or work shift timings. Customized course time is also available.",
  },
  {
    question:
      "I feel this course focuses more on the Delta brand. I wish to learn about Siemens in detail. Is this course customizable?",
    answer:
      "Yes, students can customize the course syllabus, PLC brand and even course duration too. Also we would like to clarify that this course does not focus on the Delta brand alone. As per the syllabus we displayed here we start with Delta and will focus on Siemens PLC too in detail.",
  },
  {
    question:
      "What shall I do if I need technical support after getting placed in a company?",
    answer:
      "Manfree is always happy to support our students at any time. You can contact us for any technical support. Even our alumni students are working in companies like Siemens, Delta, AB also happy to support our students",
  },
];

//about us page

export const successStories = [
  {
    designation: "Product Development Head at Innovations",
    name: "Name",
    content:
      "“Manfree Technologies played a crucial role in our latest product development. Their team provided exceptional embedded systems solutions, from initial concept to final deployment. The project's success is a testament to their technical proficiency and commitment to delivering high-quality results. We look forward to future collaborations with them”",
  },
  {
    designation: "Product Development Head at Innovations",
    name: "Name",
    content:
      "“Manfree Technologies played a crucial role in our latest product development. Their team provided exceptional embedded systems solutions, from initial concept to final deployment. The project's success is a testament to their technical proficiency and commitment to delivering high-quality results. We look forward to future collaborations with them”",
  },
];

export const coreValue = [
  {
    title: "Innovation",
    content:
      "At Manfree Technologies, we foster a culture of innovation, constantly seeking new and creative solutions to meet the evolving needs of our clients and the industry.",
  },
  {
    title: "Integrity",
    content:
      "We uphold the highest standards of integrity in all our actions. Honesty, transparency, and ethical behavior are the foundations of our business.",
  },
  {
    title: "Excellence",
    content:
      "We strive for excellence in everything we do, delivering top-notch training and solutions that exceed expectations and set new benchmarks in quality.",
  },
  {
    title: "Collaboration",
    content:
      "Collaboration is key to our success. We work closely with clients, partners, and each other to achieve common goals and drive shared success.",
  },
  {
    title: "Customer Focus",
    content:
      "Our clients are at the heart of everything we do. We are dedicated to understanding their needs and providing tailored solutions that drive their success.",
  },
];
