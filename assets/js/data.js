let educationList, workList, awardList, certificateList, skillList, designList, webDevelopmentList, AIApplicationList, puzzleList;

// About Me Page Data
educationList        = [
  {
    duration: "01/11/2020 – 07/09/2021",
    educationTitle: "PHP WEB DEVELOPER",
    link: "https://www.link-academy.com/",
    icon: "fas fa-book",
    institutionTitle: "Link Academy",
    institutionDescription:
      "Training as a PHP Web Developer through Link Academy's online platform.",
  },
  {
    duration: "01/10/2017 – 20/01/2022",
    educationTitle: "MECHANICAL ENGINEER",
    link: "http://mecanica.ucv.ro/",
    icon: "fas fa-book",
    institutionTitle: "University of Craiova - Faculty of Mechanics",
    institutionDescription:
      "Training as a mechanical engineer, field - Machine Building Technology.",
  },
];

workList             = [
  {
    duration: "18/06/2022 – Current – Constanta, Romania",
    title: "FULL-STACK WEB DEVELOPER <span><a href=\"https://www.acwebconnecting.com/\" target=\"_blank\">– AC WEBCONNECTING N.V. / SHOSHORO N.V</a></span>",
    icon: "fa fa-briefcase",
    taskList: [
      "- Develop and maintain web services or features for the company's main platforms.",
      "- Contribute to front-end and back-end development processes.",
      "- Fixing bugs and adding new features to CRM & back office systems for platform statistics.",
      "- Identifying and reporting Issues to the different software products.",
      "- Participating in IT / Marketing meetings to discuss further developments.",
    ],
  },
  {
    duration: "14/03/2022 – 02/06/2022 – Constanta, Romania",
    title: "DATA ENTRY OPERATOR <span><a href=\"https://www.transuniverse.be/destination/romania/\" target=\"_blank\">– TRANSUNIVERSE RO</a></span>",
    icon: "fa fa-briefcase",
    taskList: [
      "- Data entry and validation on electronic support.",
      "- Data processing, performing calculations based on the data entered.",
      "- Interrogations, data sorting and filtering.",
      "- Ensures the proper functioning of the electronic equipment.",
    ],
  },
  {
    duration: "03/07/2017 – 04/11/2021 – Craiova, Romania",
    title: "OPERATOR - MECHANICAL LOCKSMITH <span><a href=\"https://www.ford.ro/\" target=\"_blank\">– FORD ROMANIA S.A</a></span>",
    icon: "fa fa-briefcase",
    taskList: [
      "- Carrying out periodic quality checks.",
      "- Adjusting the machine as needed for changes, different functions or other requirements of the production process.",
      "- The use of mechanical processing machinery for the manufacture and change of the shape of Fox Upgrade engine block parts.",
    ],
  },
  {
    duration: "10/02/2017 – 01/07/2017 – Craiova, Romania",
    title: "MAILMAN <span><a href=\"https://www.pinkpost.ro/\" target=\"_blank\">– POST MASTER (CURRENT PINK POST)</a></span>",
    icon: "fa fa-briefcase",
    taskList: [
      "- Delivery of advertising materials, and personal envelopes, postal activity.",
    ],
  },
  {
    duration: "14/09/2016 – 20/01/2017 – Craiova, Romania",
    title: "FLUX QUALITY OPERATOR <span><a href=\"http://www.integraleconsulting.es/\" target=\"_blank\">– INTEGRALE MARKETING Y CONSULTING</a></span>",
    icon: "fa fa-briefcase",
    taskList: [
      "- Performing visual quality inspections on parts and components of small sizes of the Fox Classic heat engine such as: water pumps, clutches etc.",
      "- Recording the corresponding data in the IQOS computer program.",
    ],
  },
];

awardList            = [
  {
    date: '27/09/2021',
    name: 'Zend PHP Certified Engineer <span> – <a href="https://www.zend-zce.com/en/yellow-pages/ZEND033057" target="blank">Zend</a></span>',
    icon: "fas fa-trophy",
    description: 'Online testing through the Pearson Vue platform, on the 27 of September 2021, concluded with the successful passage of the 200-710: Zend Certified Engineer exam.'
  }
];

certificateList      = [
  {
    date: '26/06/2024',
    name: 'Arduino Step by Step: Getting Started <span> – <a href="https://www.udemy.com/certificate/UC-51a64853-30f6-4a19-b9e2-e3099763d770/" target="blank">Udemy</a></span>',
    icon: "fas fa-award",
    type: "Certificate of Completion",
    description:
                `
                  This certificate above verifies that Istrate Mihai successfully completed the course Arduino Step by Step: Getting Started
                  on 06/26/2024 as taught by Dr. Peter Dalmaris on Udemy. The certificate indicates the entire course was completed as validated by
                  the student. The course duration represents the total video hours of the course at time of most recent completion.
                `
  },
  {
    date: '27/12/2023',
    name: 'Python for Everybody <span> – <a href="https://www.coursera.org/account/accomplishments/specialization/GX3FJS5Y7Y6U" target="blank">Coursera</a></span>',
    icon: "fas fa-award",
    type: "Certificate of Completion",
    description:
                `
                  This Specialization builds on the success of the Python for Everybody
                  course and will introduce fundamental programming concepts
                  including data structures, networked application program interfaces,
                  and databases, using the Python programming language. In the
                  Capstone Project, you’ll use the technologies learned throughout the
                  Specialization to design and create your own applications for data
                  retrieval, processing, and visualization.
                `
  }
];

skillList            = [
  {
    title: "HTML5",
    percentage: "100%",
    class: "html",
  },
  {
    title: "CSS3",
    percentage: "90%",
    class: "css",
  },
  {
    title: "Javascript",
    percentage: "90%",
    class: "js",
  },
  {
    title: "JQuery",
    percentage: "80%",
    class: "jquery",
  },
  {
    title: "ReactJS",
    percentage: "40%",
    class: "react",
  },
  {
    title: "NodeJS",
    percentage: "30%",
    class: "nodejs",
  },
  {
    title: "PHP",
    percentage: "90%",
    class: "php",
  },
  {
    title: "SQL",
    percentage: "60%",
    class: "sql",
  },
  {
    title: "Git",
    percentage: "60%",
    class: "git",
  },
];
// End About Me Page Data

// Portfolio Page Data
designList         = [
  {
    name: "206 Develop Cabinet Model",
    img: "assets/images/cabinet.png",
    download: "assets/docs/Cabinet_Istrate_Mihai.skp"
  },
  {
    name: "305 Develop House Model",
    img: "assets/images/houseModel.png",
    download: "assets/docs/305_Develop_House_Model.skp"
  },
  {
    name: "406 Develop a Wheel Model",
    img: "assets/images/wheelModel.png",
    download: "assets/docs/Wheel_Istrate_Mihai.skp"
  },
];

webDevelopmentList = [
  {
    name: "Phone Book",
    img: "assets/images/phoneBook.png",
    github: "https://github.com/Istrate-Mihai/Phone-Book-ReactJS",
    website: "https://phone-book-react-app.netlify.app/",
  },
  {
    name: "Currency Converter",
    img: "assets/images/currencyConverter.png",
    github: "https://github.com/Istrate-Mihai/Currency-Converter",
    website: "https://currency-converter-react-app.netlify.app/",
  },
  {
    name: "Javascript Game Area",
    img: "assets/images/javascriptGames.png",
    github: "https://github.com/Istrate-Mihai/Javascript-Games",
    website: "https://javascript-game-area.netlify.app/",
  },
  {
    name: "Lord of The Rings Area",
    img: "assets/images/lordOfTheRingsArea.png",
    github: "https://github.com/Istrate-Mihai/Lord-Of-The-Rings-Area",
    website: "https://lord-of-the-rings-area.netlify.app/",
  },
  {
    name: "Computer History",
    img: "assets/images/computerHistory.png",
    github: "https://github.com/Istrate-Mihai/My-First-Website",
    website: "https://computer-history.netlify.app/",
  },
  {
    name: "Link Academy Portfolio",
    img: "assets/images/digitalPortfolio.jpg",
    github: "https://github.com/Istrate-Mihai/Link-Academy-Portfolio",
    website: "assets/cv/Portfolio-Istrate_Mihai_Septimius.7z",
  },
];

AIApplicationList  = [
  {
    name: "Salary Dataset - Simple linear regression",
    img: "assets/images/salaryDatasetSimpleLinearRegression.png",
    link: "https://colab.research.google.com/drive/1U8aUVV6pXJ8RsDTTXLfsvFM6DtlyX2i3",
  }
];

puzzleList         = [
  {
    'id': 'gearbox',
    'title': '3D puzzle - Gearbox',
    'imgList': [
      'assets/images/puzzles/gearbox-1.jpg',
      'assets/images/puzzles/gearbox-2.jpg',
      'assets/images/puzzles/gearbox-3.jpg',
      'assets/images/puzzles/gearbox-4.jpg',
    ]
  },
  {
    'id': 'steampunkClock',
    'title': '3D Puzzle - Steampunk Clock',
    'imgList': [
      'assets/images/puzzles/steamClock-1.jpg',
      'assets/images/puzzles/steamClock-2.jpg',
      'assets/images/puzzles/steamClock-3.jpg',
      'assets/images/puzzles/steamClock-4.jpg',
    ]
  },
  {
    'id': 'vintageAlarmClock',
    'title': '3D Puzzle - Vintage Alarm Clock',
    'imgList': [
      'assets/images/puzzles/alarmClock-1.jpg',
      'assets/images/puzzles/alarmClock-2.jpg',
      'assets/images/puzzles/alarmClock-3.jpg',
      'assets/images/puzzles/alarmClock-4.jpg',
    ]
  },
  {
    'id': 'theOldClockTower',
    'title': '3D Puzzle - The Old Clock Tower',
    'imgList': [
      'assets/images/puzzles/towerClock-1.jpg',
      'assets/images/puzzles/towerClock-2.jpg',
      'assets/images/puzzles/towerClock-3.jpg',
      'assets/images/puzzles/towerClock-4.jpg',
    ]
  },
  {
    'id': 'primeSteamExpress',
    'title': 'Mechanical Puzzle - Prime Steam Express',
    'imgList': [
      'assets/images/puzzles/steamExpress-1.jpg',
      'assets/images/puzzles/steamExpress-2.jpg',
      'assets/images/puzzles/steamExpress-3.jpg',
      'assets/images/puzzles/steamExpress-4.jpg',
    ]
  },
];
// End Portfolio Page Data

export { educationList, workList, awardList, certificateList, skillList, designList, webDevelopmentList, AIApplicationList, puzzleList };
