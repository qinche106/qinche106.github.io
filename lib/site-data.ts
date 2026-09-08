export const site = {
  name: 'Efficient Intelligence Group',
  shortName: 'EIN',
  institution: 'Leiden University',
  email: 'q.chen@liacs.leidenuniv.nl',
  address: ['Gorlaeus Building', 'Einsteinweg 55', '2333 CC Leiden, the Netherlands'],
};

export const researchAreas = [
  {
    number: '01',
    slug: 'embedded-ai',
    title: 'Embedded AI',
    label: 'Models ↔ systems',
    summary: 'Compact models and hardware–software co-design for intelligence on resource-constrained devices.',
    body: 'We investigate efficient large language models, vision–language models, and neural networks that can operate with low latency and limited energy, memory, and compute. Our work connects model compression and adaptive inference with custom accelerators and embedded platforms.',
    methods: ['Efficient LLMs', 'Model compression', 'FPGA acceleration', 'Hardware–software co-design'],
    applications: 'Portable speech systems, rehabilitation tools, robotics, and extended reality',
  },
  {
    number: '02',
    slug: 'neuromorphic-computing',
    title: 'Neuromorphic Computing',
    label: 'Sparse by design',
    summary: 'Brain-inspired algorithms, architectures, and circuits built around sparse computation.',
    body: 'We draw inspiration from neural dynamics and event-driven sensing to develop energy-efficient computing systems. The group works across algorithms, digital architectures, processor design, and emerging hardware technologies.',
    methods: ['Spiking neural networks', 'Temporal sparsity', 'Event-driven processing', 'Custom circuits'],
    applications: 'Always-on sensing and responsive edge intelligence',
  },
  {
    number: '03',
    slug: 'bio-signal-processing',
    title: 'Bio-signal Processing',
    label: 'AI for health',
    summary: 'Efficient learning from EEG, EMG, audio, and multimodal physiological signals.',
    body: 'We develop robust and lightweight models for complex physiological signals, together with neuromorphic and embedded implementations. The goal is real-time processing that can move closer to patients and everyday healthcare settings.',
    methods: ['EEG & EMG', 'Audio intelligence', 'Sensor fusion', 'Adaptive learning'],
    applications: 'Seizure prediction, auditory attention, monitoring, and rehabilitation',
  },
  {
    number: '04',
    slug: 'intelligent-perception',
    title: 'Intelligent Perception',
    label: 'Sense · understand · act',
    summary: 'Low-latency event-based vision for extended reality, robotics, and human–machine systems.',
    body: 'We combine event cameras, efficient perception algorithms, and embedded acceleration to understand fast and sparse visual signals. Current directions include eye tracking, hand tracking, and adaptive perception for robots operating around people.',
    methods: ['Event-based vision', 'Eye tracking', '3D hand tracking', 'On-device adaptation'],
    applications: 'XR interaction, wearable systems, and human-centred robotics',
  },
];

export const phdStudents = [
  {
    name: 'Guorui Lu',
    since: 'August 2024',
    focus: 'Physiological signal processing, AI for healthcare, sensor fusion, neuromorphic computing',
    education: 'MSc, University of Science and Technology of China · BEng, Ocean University of China',
    image: '/images/guorui.jpg',
    imagePosition: 'center 35%',
    url: 'https://www.universiteitleiden.nl/en/staffmembers/guorui-lu',
  },
  {
    name: 'Jiawen Qi',
    since: 'November 2024',
    focus: 'Embedded LLM algorithms and hardware, low-bit models, vision–language models',
    education: 'MEng, Technical University of Munich · BEng, University of New South Wales',
    image: '/images/jiawen.jpg',
    imagePosition: '22% 55%',
    note: 'Co-supervised with Dr. Zhaochun Ren',
    url: 'https://www.universiteitleiden.nl/en/staffmembers/jiawen-qi',
  },
  {
    name: 'Zhen Xu',
    since: 'December 2025',
    focus: 'Event-based vision for robotics and AI hardware design',
    education: 'MSc, Leiden University · BEng, Zhejiang University',
    image: '/images/zhen.jpg',
    imagePosition: 'center 58%',
    note: 'Co-supervised with Dr. Joost Broekens',
    url: 'https://www.universiteitleiden.nl/en/staffmembers/zhen-xu',
  },
  {
    name: 'Jiayu Liu',
    since: 'February 2026',
    focus: 'Audio LLM algorithm–hardware design and FPGA systems',
    education: 'MEng & BEng, University College London',
    image: '/images/jiayu.jpeg',
    imagePosition: 'center 38%',
    url: 'https://www.universiteitleiden.nl/en/staffmembers/jiayu-liu',
  },
];

export const mscStudents = ['Yingdi Zhao', 'Rajat Verma', 'Emre Uğur', 'Houhua Ma', 'Jiameng Ma'];
export const bscStudents = ['Anna Marini'];

export const alumni = [
  ['Lei Wang', 'BSc · MSc in Data Science & AI, TU Delft', '2026'],
  ['Yihui Peng', 'BSc · MSc at UCL', '2026'],
  ['Cindy Wang', 'BSc · MSc in Computer Science, Leiden University', '2026'],
  ['Pu Li', 'MSc · Engineer at HKUST', '2026'],
  ['Suju Li', 'MSc · PhD candidate at Leiden University', '2026'],
  ['Shan Jiang', 'MSc', '2026'],
  ['Shaohua Guan', 'MSc · Robotics AI at Phridom', '2026'],
  ['Rayan Salmi', 'BSc · MSc in Computer Science, TU Delft', '2025'],
  ['Xuening Xin', 'MSc · Lenovo', '2025'],
  ['Suzhen Deng', 'MSc · Guangdong Energy Group', '2025'],
  ['Zhen Xu', 'MSc · Continued as PhD candidate in EIN', '2025'],
];

export const galleryItems = [
  {
    image: '/images/hero-seminar.jpg',
    alt: 'Researchers gathered for a guest seminar on event-based vision',
    caption: 'Guest seminar on event-based vision · Leiden, 2026',
  },
  {
    image: '/images/wicas-symposium.png',
    alt: 'Participants at the IEEE WiCAS-YP symposium in Leiden',
    caption: 'IEEE WiCAS-YP Symposium · Leiden, 2025',
  },
  {
    image: '/images/neat-talk.jpg',
    alt: 'Qinyu Chen presenting research at the NEAT Symposium',
    caption: 'NEAT Symposium · Utrecht, 2026',
  },
  {
    image: '/images/evhand-award.png',
    alt: 'Best poster recognition for the EvHand-FPV project',
    caption: 'EdgeAI4Robots Workshop · IROS 2025',
  },
  {
    image: '/images/zhen-poster.jpg',
    alt: 'Research poster presentation on event-based hand tracking',
    caption: 'Event-based perception research · 2025',
  },
  {
    image: '/images/deltakws-chip.png',
    alt: 'DeltaKWS chip and measurement platform',
    caption: 'From architecture to measured silicon',
  },
];

export type Publication = {
  year: number;
  title: string;
  venue: string;
  category: 'Embedded AI' | 'Neuromorphic' | 'Bio-signals' | 'Perception';
  note?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'When NPUs Are Not Always Faster: A Stage-Level Analysis of Mobile LLM Inference',
    venue: 'IEEE AICAS 2026',
    category: 'Embedded AI',
  },
  {
    year: 2026,
    title: 'MonarchGRU: A Low-Footprint Recurrent Neural Network for Audio Keyword Spotting',
    venue: 'IEEE AICAS 2026',
    category: 'Embedded AI',
  },
  {
    year: 2026,
    title: 'SHAP-AAD: DeepSHAP-Guided Channel Reduction for EEG Auditory Attention Detection',
    venue: 'IEEE ISCAS 2026',
    category: 'Bio-signals',
  },
  {
    year: 2025,
    title: 'EvHand-FPV: Efficient Event-Based 3D Hand Tracking from First-Person View',
    venue: 'EdgeAI4R @ IROS 2025',
    category: 'Perception',
    note: "People’s Choice Best Poster Award",
  },
  {
    year: 2025,
    title: 'FACET: Fast and Accurate Event-Based Eye Tracking Using Ellipse Modeling for Extended Reality',
    venue: 'IEEE ICRA 2025',
    category: 'Perception',
    url: 'https://arxiv.org/abs/2409.15584',
  },
  {
    year: 2025,
    title: 'SlimSeiz: Efficient Channel-Adaptive Seizure Prediction Using a Mamba-Enhanced Network',
    venue: 'IEEE ISCAS 2025',
    category: 'Bio-signals',
  },
  {
    year: 2024,
    title: 'DeltaKWS: A 65nm 36nJ/Decision Bio-inspired Temporal-Sparsity-Aware Digital Keyword Spotting IC with 0.6V Near-Threshold SRAM',
    venue: 'IEEE Transactions on Circuits and Systems for Artificial Intelligence',
    category: 'Neuromorphic',
  },
  {
    year: 2024,
    title: 'Epilepsy Seizure Detection and Prediction using an Approximate Spiking Convolutional Transformer',
    venue: 'IEEE ISCAS 2024',
    category: 'Bio-signals',
    note: 'NSATC Best Paper Award — Honorable Mention',
    url: 'https://arxiv.org/abs/2402.09424',
  },
  {
    year: 2024,
    title: 'Four-class EEG Classification for Seizure Prediction and Detection Using a Lightweight CNN-LSTM',
    venue: 'IEEE BioCAS 2024',
    category: 'Bio-signals',
  },
];

export type NewsItem = {
  date: string;
  year: number;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '28 July 2026',
    year: 2026,
    title: 'Invited talk on low-latency LLMs at the edge',
    text: 'Qinyu Chen presented at the IEEE CIS “Foundation Models Meet Robotics” summer school in Paderborn, Germany.',
  },
  {
    date: '28 June 2026',
    year: 2026,
    title: 'Two papers accepted at AICAS 2026',
    text: 'New work on stage-level mobile LLM inference and a low-footprint recurrent network for audio keyword spotting will appear at AICAS 2026.',
  },
  {
    date: '19 June 2026',
    year: 2026,
    title: 'Interactive edge intelligence at NEAT 2026',
    text: 'An invited talk explored human-centred edge AI systems for next-generation human–machine interaction.',
    image: '/images/neat-talk.jpg',
    imageAlt: 'Qinyu Chen presenting research on a DeltaKWS chip',
  },
  {
    date: '28 May 2026',
    year: 2026,
    title: 'OPERA project funded through the NWO–JST call',
    text: 'Optical Processing for Energy-Efficient Real-time Applications brings together collaborators in the Netherlands and Japan.',
    image: '/images/opera-grant.png',
    imageAlt: 'Announcement of NWO-JST funding for unconventional information processing technologies',
  },
  {
    date: '13 March 2026',
    year: 2026,
    title: 'Guest talk by Shintaro Shiba on event-based vision',
    text: 'The group hosted a discussion on event cameras, motion, and 3D understanding with Dr. Shintaro Shiba.',
    image: '/images/hero-seminar.jpg',
    imageAlt: 'Researchers gathered for a guest seminar on event-based vision',
  },
  {
    date: '19 January 2026',
    year: 2026,
    title: 'SHAP-AAD accepted at ISCAS 2026',
    text: 'The paper develops a DeepSHAP-guided channel-reduction method for EEG auditory attention detection.',
  },
  {
    date: '26 November 2025',
    year: 2025,
    title: 'IEEE WiCAS-YP 2025 hosted in Leiden',
    text: 'Our group helped organize the IEEE Women in Circuits and Systems – Young Professionals Symposium at Leiden University.',
    image: '/images/wicas-symposium.png',
    imageAlt: 'Participants at the 2025 IEEE WiCAS-YP symposium in Leiden',
  },
  {
    date: '24 October 2025',
    year: 2025,
    title: 'EvHand-FPV wins the People’s Choice Best Poster Award',
    text: 'Zhen Xu and Guorui Lu received the award at the Edge AI for Robotics workshop at IROS 2025.',
    image: '/images/evhand-award.png',
    imageAlt: 'Best poster award certificate for EvHand-FPV',
  },
];

export const ongoingProjects = [
  {
    title: 'Efficient LLM inference',
    text: 'Lightweight large-language-model algorithms and hardware design for low-latency on-device inference.',
    contact: 'Jiawen Qi',
    email: 'j.qi@liacs.leidenuniv.nl',
  },
  {
    title: 'Bio-signal intelligence',
    text: 'EEG foundation models and efficient physiological signal processing for healthcare.',
    contact: 'Guorui Lu',
    email: 'g.lu@liacs.leidenuniv.nl',
  },
  {
    title: 'Event-based perception',
    text: 'Event-camera algorithms and embedded systems for extended reality and robotics.',
    contact: 'Zhen Xu',
    email: 'z.xu@liacs.leidenuniv.nl',
  },
  {
    title: 'Audio LLM systems',
    text: 'Hardware–software co-design for compact audio language models and FPGA deployment.',
    contact: 'Jiayu Liu',
    email: 'j.liu@liacs.leidenuniv.nl',
  },
];

export const closedPhdCalls = [
  ['Efficient LLM Algorithm, Hardware, and System Design', 'Closed · deadline 1 October 2025'],
  ['Real-time, Low-power Neuromorphic Perception for Robots', 'Closed · deadline 1 September 2025'],
  ['Edge Neuromorphic AI for Bio-signal Processing in Healthcare', 'Closed · deadline 1 March 2024'],
];
