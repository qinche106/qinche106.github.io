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
    title: 'Low-Power Edge AI',
    label: 'Models ↔ systems',
    summary: 'Compact models and hardware–software co-design for intelligence on resource-constrained devices.',
    body: 'We investigate efficient large language models, vision–language models, and neural networks that can operate with low latency and limited energy, memory, and compute. Our work connects model compression and adaptive inference with custom accelerators and embedded platforms.',
    methods: ['Efficient LLMs', 'Model compression', 'FPGA acceleration', 'Hardware–software co-design'],
    applications: 'Portable speech systems, rehabilitation tools, robotics, and extended reality',
    image: '/images/edge-llm-topic.jpg',
    imageAlt: 'Illustration of compact artificial intelligence running on an edge processor',
  },
  {
    number: '02',
    slug: 'neuromorphic-computing',
    title: 'Neuromorphic Sensing and Computing',
    label: 'Sense and compute sparsely',
    summary: 'Brain-inspired sensing, algorithms, architectures, and circuits built around sparse computation.',
    body: 'We draw inspiration from neural dynamics and event-based sensing to develop energy-efficient intelligent systems. The group works across event-based signal processing, spiking algorithms, digital architectures, processor design, and emerging hardware technologies.',
    methods: ['Spiking neural networks', 'Temporal sparsity', 'Event-based sensing and processing', 'Custom circuits'],
    applications: 'Always-on sensing, extended reality, robotics, and responsive edge intelligence',
    image: '/images/neuromorphic-sensing-topic.jpg',
    imageAlt: 'Illustration of an event camera connected to a spiking neural network',
  },
  {
    number: '03',
    slug: 'bio-signal-processing',
    title: 'Efficient Bio-signal Processing Systems',
    label: 'AI for health',
    summary: 'Efficient learning from EEG, EMG, speech, and multimodal physiological signals.',
    body: 'We develop robust and lightweight models for complex physiological signals, together with neuromorphic and embedded implementations. The goal is real-time processing that can move closer to patients and everyday healthcare settings.',
    methods: ['EEG & EMG', 'Speech intelligence', 'Sensor fusion', 'Adaptive learning'],
    applications: 'Seizure prediction, auditory attention, monitoring, and rehabilitation',
    image: '/images/biosignal-topic.jpg',
    imageAlt: 'Illustration of biosignals flowing from wearable sensors to an embedded processor',
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
    image: '/images/gallery-01.jpg',
    alt: 'Landscape in Iceland',
    caption: 'Iceland, 2024',
  },
  {
    image: '/images/gallery-02.jpg',
    alt: 'Travel landscape photograph',
    caption: '',
  },
  {
    image: '/images/gallery-03.jpg',
    alt: 'Landscape along the E10 in Norway',
    caption: 'E10, Norway, 2023',
  },
  {
    image: '/images/gallery-04.jpg',
    alt: 'Travel landscape photograph',
    caption: '',
  },
  {
    image: '/images/gallery-05.jpg',
    alt: 'Mount Rainier near Seattle',
    caption: 'Mt. Rainier, Seattle, US, 2024',
  },
  {
    image: '/images/gallery-06.jpg',
    alt: 'Mountain landscape in Grindelwald, Switzerland',
    caption: 'Grindelwald, Switzerland, 2023',
  },
  {
    image: '/images/gallery-07.jpg',
    alt: 'Winter landscape in Riksgränsen, Sweden',
    caption: 'Riksgränsen, Sweden, 2023',
  },
  {
    image: '/images/gallery-08.jpg',
    alt: 'Landscape along the E10 in Norway',
    caption: 'E10, Norway, 2023',
  },
  {
    image: '/images/gallery-09.jpg',
    alt: 'Mountain landscape in Telluride, Colorado',
    caption: 'Telluride, CO, US, 2023',
  },
  {
    image: '/images/gallery-10.jpg',
    alt: 'Travel landscape photograph',
    caption: '',
  },
  {
    image: '/images/gallery-11.jpg',
    alt: 'Arctic landscape in Svalbard',
    caption: 'Svalbard, Arctic Circle, 2022',
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
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  additionalImages?: Array<{ image: string; alt: string }>;
  links?: Array<{ label: string; href: string }>;
};

export const newsItems: NewsItem[] = [
  {
    date: '28 July 2026',
    year: 2026,
    title: 'Invited talk on low-latency LLMs at the edge',
    text: 'Qinyu gave an invited talk titled “Low-latency LLMs at the Edge” at the IEEE CIS “Foundation Models Meet Robotics” summer school in Paderborn, Germany.',
  },
  {
    date: '28 June 2026',
    year: 2026,
    title: 'Two papers accepted at AICAS 2026',
    text: 'Congratulations to our MSc student Pu Li and his day supervisor, PhD student Jiawen Qi, on the acceptance of “When NPUs Are Not Always Faster: A Stage-Level Analysis of Mobile LLM Inference.”',
    paragraphs: ['We are also pleased to share that “MonarchGRU: A Low-Footprint Recurrent Neural Network for Audio Keyword Spotting” has been accepted. This work is a collaboration with Aalto University, Yonsei University, and TU Delft.'],
  },
  {
    date: '19 June 2026',
    year: 2026,
    title: 'Qinyu Chen gave an invited talk at NEAT 2026',
    text: 'Qinyu gave a talk at NEAT Symposium 2026 in Utrecht. Her talk, “Interactive Edge Intelligence for Next-Generation Human–Machine Systems,” explored how to develop human-centered edge AI systems.',
    image: '/images/news-original-01.jpg',
    imageAlt: 'Qinyu Chen giving an invited talk at NEAT Symposium 2026',
  },
  {
    date: '28 May 2026',
    year: 2026,
    title: 'Grant awarded from the NWO–JST call for unconventional information processing technologies',
    text: 'Optical Processing for Energy-Efficient Real-time Applications (OPERA)',
    paragraphs: ['Together with Prof. Dr. Allard P. Mosk, Utrecht University; Prof. Dr. Ryoichi Horisaki, The University of Tokyo; Prof. Dr. K. J. Batenburg, Leiden University; and Dr. Y. Shoji, Institute of Science Tokyo.'],
    image: '/images/news-original-02.png',
    imageAlt: 'Announcement of the NWO–JST grant for the OPERA project',
  },
  {
    date: '13 March 2026',
    year: 2026,
    title: 'Guest Talk by Shintaro Shiba on Event-Based Vision',
    text: 'We recently had the pleasure of hosting Dr. Shintaro Shiba from The University of Tokyo and Woven by Toyota for an invited talk.',
    paragraphs: ['His talk, “Unlocking the Potential of Event Cameras: From Events to Motion to 3D Understanding,” highlighted recent advances in event-based vision and their applications in motion analysis and 3D understanding.'],
    image: '/images/news-original-03.jpg',
    imageAlt: 'Guest talk by Shintaro Shiba on event-based vision',
  },
  {
    date: '19 Jan 2026',
    year: 2026,
    title: 'Paper acceptance at ISCAS 2026',
    text: 'Our work, “SHAP-AAD: DeepSHAP-Guided Channel Reduction for EEG Auditory Attention Detection,” has been accepted for ISCAS 2026, Shanghai. Congratulations to our former BSc student Rayan Salmi and PhD student Guorui Lu.',
  },
  {
    date: '26 November 2025',
    year: 2025,
    title: 'Our group successfully hosted the 2025 IEEE Women in Circuits and Systems – Young Professionals Leiden Symposium at Leiden University',
    text: 'A big thank you to Zhen, Jiawen, and Guorui for their voluntary work.',
    image: '/images/news-original-04.png',
    imageAlt: 'Participants at the 2025 IEEE WiCAS-YP Leiden Symposium',
    links: [{ label: 'IEEE WiCAS-YP 2025', href: 'https://sites.google.com/view/wicas-yp2025/home?authuser=0' }],
  },
  {
    date: '27 October 2025',
    year: 2025,
    title: 'Invited talk at Tsinghua University',
    text: 'Qinyu gave an invited talk entitled “Efficient Interactive Intelligence at the Edge” at the School of Integrated Circuits, Tsinghua University.',
    image: '/images/news-original-05.jpg',
    imageAlt: 'Invited talk at the School of Integrated Circuits, Tsinghua University',
    additionalImages: [{ image: '/images/news-original-06.jpg', alt: 'Visit to the School of Integrated Circuits at Tsinghua University' }],
  },
  {
    date: '24 October 2025',
    year: 2025,
    title: 'Best People’s Choice Poster Award — EdgeAI4R Workshop, IROS 2025',
    text: 'Zhen Xu and Guorui Lu’s work on EvHand-FPV won the best poster award from the Edge AI for Robotics Workshop at IROS 2025 in Hangzhou, China.',
    image: '/images/news-original-07.png',
    imageAlt: 'Best People’s Choice Poster Award for EvHand-FPV',
  },
  {
    date: '1 September 2025',
    year: 2025,
    title: 'Call for Papers — JETCAS Special Issue',
    text: 'The IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS) invites submissions for the Circuits and Systems for Extended Reality Special Issue. Deadline: 2 March 2026.',
    paragraphs: ['Qinyu is the corresponding guest editor together with Abhronil Sengupta, The Pennsylvania State University; Ning Qiao, SynSense; and Hoi-Jun Yoo, KAIST, Korea.'],
    links: [{ label: 'Circuits and Systems for Extended Reality Special Issue', href: 'https://ieee-cas.org/files/ieeecass/2025-08/JETCAS_CFP_2026Q3.pdf' }],
  },
  {
    date: '17 July 2025',
    year: 2025,
    title: 'NWO Veni Talent Programme awarded',
    text: 'Qinyu received funding through the Dutch Research Council (NWO) Veni Talent Programme for research on embedded LLM system design.',
  },
  {
    date: '27 May 2025',
    year: 2025,
    title: 'Guorui presented his work and Qinyu was elected IEEE CASS NSA TC Secretary at ISCAS 2025',
    text: 'At ISCAS 2025 in London, UK, PhD student Guorui gave an oral presentation on his work titled “SlimSeiz: Efficient Channel-Adaptive Seizure Prediction Using a Mamba-Enhanced Network.”',
    paragraphs: ['During the annual meeting of the IEEE Circuits and Systems Society Neural Systems and Applications Technical Committee (IEEE CASS NSA TC), Qinyu was honored to be elected secretary of the NSA TC.'],
  },
  {
    date: '20 May 2025',
    year: 2025,
    title: 'Invited Talk at Queen’s University Belfast, UK',
    text: 'Invited by Dr. Xinming Shi, Qinyu gave an invited talk at Queen’s University Belfast, UK, on neuromorphic vision and eye-tracking technologies for XR applications.',
  },
  {
    date: '10 May 2025',
    year: 2025,
    title: 'Workshop organization at IROS 2025',
    text: 'Together with Guangzhi Tang (Maastricht University), Ali Safa (Hamad Bin Khalifa University), Neelesh Kumar (Procter & Gamble), and Fabian Clemens Weigend (Harvard), we will organize the “Edge AI for Robotics: Emerging Technology and Application” workshop at IROS in Hangzhou, China, this October. Many thanks to AMD for the sponsorship.',
  },
  {
    date: '28 April 2025',
    year: 2025,
    title: 'Tutorial presented at AICAS 2025',
    text: 'Our tutorial “Neuromorphic AI-Enhanced Eye Tracking Technology: Algorithms, Circuits and Systems” was successfully presented at AICAS 2025 in Bordeaux, France. Together with Zhuo Zou (Fudan University) and Guohao Lan (TU Delft), we introduced how neuromorphic vision and AI can transform eye tracking for ultra-efficient wearable applications.',
    links: [
      { label: 'Guohao Lan', href: 'https://www.linkedin.com/in/guohao-lan-27a3b04a/' },
      { label: 'Slides', href: 'https://drive.google.com/file/d/1eiMvKRmAgyCW6LeAs4ug74UaBF3Os5kY/view?usp=drive_link' },
    ],
  },
  {
    date: '27 March 2025',
    year: 2025,
    title: 'Poster at NICE 2025',
    text: 'MSc student Zhen Xu presented “Working in Progress: Event-based 3D Hand Tracking for Extended Reality” at the Neuro-inspired Computational Elements (NICE) 2025 conference in Heidelberg, Germany.',
    image: '/images/news-original-08.jpg',
    imageAlt: 'Zhen Xu presenting a poster at NICE 2025',
  },
  {
    date: '27 January 2025',
    year: 2025,
    title: 'Paper acceptance at ICRA 2025 and ISCAS 2025',
    text: 'Our work, “FACET: Fast and Accurate Event-Based Eye Tracking Using Ellipse Modeling for Extended Reality,” has been accepted for ICRA 2025 in Atlanta, US. This collaboration includes Junyuan Ding (Beihang University), Ziteng Wang (DVSense), Chang Gao (TU Delft), Min Liu (DVSense), and Qinyu Chen.',
    paragraphs: ['Congratulations to PhD student Guorui Lu: his paper “SlimSeiz: Efficient Channel-Adaptive Seizure Prediction Using a Mamba-Enhanced Network,” with TU Delft and Shanghai Renji Hospital, has been accepted for a lecture presentation at ISCAS 2025 in London, UK.'],
  },
  {
    date: '9 January 2025',
    year: 2025,
    title: 'Event-based eye-tracking challenge 2025 is running',
    text: 'Together with TU Delft, the University of Würzburg, DVSense, and Prophesee, we are organizing the Efficient Event-based Eye-Tracking (3ET) Challenge as part of the CVPR 2025 Event-based Vision Workshop. The challenge will run from mid-February to mid-March 2025. Stay tuned for more details and join us in advancing event-based vision technology.',
    links: [{ label: 'Efficient Event-based Eye-Tracking (3ET) Challenge', href: 'https://lab-ics.github.io/3et-2025.github.io/' }],
  },
  {
    date: '4 January 2025',
    year: 2025,
    title: 'Poster acceptance at NICE 2025',
    text: 'The work titled “Working in Progress: 3D Hand Tracking for Extended Reality,” by MSc student Zhen Xu and PhD student Guorui Lu, has been accepted for a poster at the Neuro-inspired Computational Elements (NICE) 2025 conference in Heidelberg, Germany.',
  },
  {
    date: '19 November 2024',
    year: 2024,
    title: 'Paper acceptance by TCAS-AI',
    text: 'Our work “DeltaKWS: A 65nm 36nJ/Decision Bio-inspired Temporal-Sparsity-Aware Digital Keyword Spotting IC with 0.6V Near-Threshold SRAM,” together with ETH Zurich, University of Zurich, TU Delft, and Aalto University, was accepted by IEEE Transactions on Circuits and Systems for Artificial Intelligence.',
    image: '/images/news-original-09.png',
    imageAlt: 'DeltaKWS keyword spotting chip and measurement platform',
    links: [{ label: 'DeltaKWS paper', href: 'https://arxiv.org/pdf/2405.03905' }],
  },
  {
    date: '19 November 2024',
    year: 2024,
    title: 'Invited Talk at TSMC OIP Forum 2024',
    text: 'Qinyu Chen presented at the TSMC OIP Ecosystem Forum 2024 in Amsterdam. Alongside our partnering professor Chang Gao at TU Delft and Professor Kwantae Kim at Aalto University, we shared our latest work in low-power IC design leveraging TSMC’s technologies.',
    image: '/images/news-original-10.jpg',
    imageAlt: 'Qinyu Chen presenting at the TSMC OIP Ecosystem Forum 2024',
  },
  {
    date: '22 October 2024',
    year: 2024,
    title: 'Invited Panel Discussion at National Open Science Festival',
    text: 'At the National Open Science Festival in Maastricht, Qinyu Chen, alongside Guangzhi Tang (Maastricht University), Amirreza Yousefzadeh (University of Twente), and Manolis Sifalakis (imec), led a panel discussion on integrating open-science principles into AI and neuromorphic research during the Neuromorphic Computing session.',
  },
  {
    date: '30 September 2024',
    year: 2024,
    title: 'Talk presented at NCN 2024',
    text: 'Presentation on the Event-Based Eye Tracking System at the Neuromorphic Computing Netherlands 2024 workshop in Eindhoven, the Netherlands.',
    image: '/images/news-original-11.png',
    imageAlt: 'Presentation at Neuromorphic Computing Netherlands 2024',
    links: [{ label: 'Neuromorphic Computing Netherlands 2024', href: 'https://sites.google.com/view/ncn2024/home?authuser=0' }],
  },
  {
    date: '27 September 2024',
    year: 2024,
    title: 'Paper online',
    text: 'Our work “FACET: Fast and Accurate Event-Based Eye Tracking Using Ellipse Modeling for Extended Reality” is online.',
    image: '/images/news-original-12.png',
    imageAlt: 'FACET event-based eye-tracking results',
    additionalImages: [{ image: '/images/news-original-13.png', alt: 'FACET eye-tracking visualization' }],
    links: [{ label: 'FACET on arXiv', href: 'https://arxiv.org/abs/2409.15584' }],
  },
  {
    date: '10 August 2024',
    year: 2024,
    title: 'Paper acceptance by BioCAS 2024',
    text: 'Our work “Four-class EEG Classification for Seizure Prediction and Detection Using a Lightweight CNN-LSTM” was accepted by BioCAS 2024.',
    image: '/images/news-original-14.png',
    imageAlt: 'BioCAS 2024 paper acceptance announcement',
  },
  {
    date: '21 July 2024',
    year: 2024,
    title: 'Success of Event-based Eye Tracking Challenge 2024',
    text: 'We are happy to announce the success of our Event-based Eye Tracking Challenge at the CVPR AI4Streaming workshop. Our challenge report is now online. The corresponding 3ET+ dataset is now publicly available. Feel free to check out and follow our GitHub repository for more details and updates.',
    links: [
      { label: 'Challenge report', href: 'https://openaccess.thecvf.com/content/CVPR2024W/AI4Streaming/papers/Wang_Event-Based_Eye_Tracking._AIS_2024_Challenge_Survey_CVPRW_2024_paper.pdf' },
      { label: 'GitHub repository', href: 'https://github.com/EETChallenge/challenge_demo_code/tree/master' },
    ],
  },
  {
    date: '31 May 2024',
    year: 2024,
    title: 'Best Paper Award — Honorable Mention',
    text: 'Our work “Epilepsy Seizure Detection and Prediction using an Approximate Spiking Convolutional Transformer” received the Best Paper Award — Honorable Mention from the IEEE CASS Neural Systems and Applications Technical Committee (NSATC) at ISCAS 2024 in Singapore.',
    image: '/images/news-original-15.jpg',
    imageAlt: 'Best Paper Award Honorable Mention at ISCAS 2024',
    links: [{ label: 'Paper', href: 'https://arxiv.org/pdf/2402.09424' }],
  },
  {
    date: '1 February 2024',
    year: 2024,
    title: 'New career!',
    text: 'Joined Leiden University as an Assistant Professor and very much enjoy the charm and rich history of the beautiful city of Leiden.',
  },
  {
    date: '15 December 2023',
    year: 2023,
    title: 'Event-based Eye Tracking Challenge Invitation — CVPR 2024',
    text: 'The Event-based Eye Tracking Challenge, a highlight of the AI for Streaming Workshop at CVPR 2024, has announced the successful completion of its first phase. The challenge is organized by the Institute of Neuroinformatics, University of Zurich and ETH Zurich, TU Delft, University of Würzburg, and Leiden University, and sponsored by Meta Reality Labs, Meta, Netflix, Sony Interactive Entertainment (FTG), and the University of Würzburg Computer Vision Lab.',
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
