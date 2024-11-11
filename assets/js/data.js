let
educationList,
workList,
awardList,
certificateList,
skillList,
designList,
electronicList,
webDevelopmentList,
AIApplicationList,
puzzleList,
drawingList;

// About Me Page Data --------------------------------------------------------------
educationList        = [
  {
    duration:               "01.11.2020 – 07.09.2021",
    educationTitle:         {
      "english": "PHP WEB DEVELOPER",
      "german": "PHP-Webentwickler",
    },
    link:                   "https://www.link-academy.com/",
    icon:                   "fas fa-book",
    institutionTitle:       {
      "english": "Link Academy",
      "german": "Link Akademie",
    },
    institutionDescription: {
      "english": "Training as a PHP Web Developer through Link Academy's online platform.",
      "german": "Ausbildung zum PHP-Webentwickler über die Online-Plattform der Link Akademie.",
    },
  },
  {
    duration:               "01.10.2017 – 09.09.2022",
    educationTitle:         {
      "english": "MECHANICAL ENGINEER",
      "german": "Maschinenbauingenieur",
    },
    link:                   "http://mecanica.ucv.ro/",
    icon:                   "fas fa-book",
    institutionTitle:       {
      "english": "University of Craiova - Faculty of Mechanics",
      "german": "Universität Craiova - Fakultät für Mechanik",
    },
    institutionDescription: {
      "english": "Training as a mechanical engineer, field - Machine Building Technology.",
      "german": "Ausbildung zum Maschinenbauingenieur, Fachrichtung - Maschinenbautechnik.",
    },
  },
];

workList             = [
  {
    duration: {
      "english": "18.07.2022 – Current – Constanta, Romania",
      "german": "Gegenwärtig – Constanța, Rumänien",
    },
    title:    {
      "english": "FULL-STACK WEB DEVELOPER <span><a href=\"https://www.acwebconnecting.com/\" target=\"_blank\">– AC WEBCONNECTING N.V. / SHOSHORO N.V</a></span>",
      "german": "Full-Stack-Webentwickler <span><a href=\"https://www.acwebconnecting.com/\" target=\"_blank\">– AC WEBCONNECTING N.V. / SHOSHORO N.V</a></span>",
    },
    icon:     "fa fa-briefcase",
    taskList: {
      "english": [
        "- Develop and maintain web services or features for the company's main platforms.",
        "- Contribute to front-end and back-end development processes.",
        "- Fixing bugs developing CRM & back office systems for platform statistics.",
        "- Identifying and reporting Issues to the different software products.",
        "- Participating in IT / Marketing meetings to discuss further developments.",
      ],
      "german": [
        "- Entwickeln und pflegen von Webdiensten oder Funktionen für die Hauptplattformen des Unternehmens.",
        "- Mitwirken an Frontend- und Backend-Entwicklungsprozessen.",
        "- Behebung von Fehlern bei der Entwicklung von CRM- und Backoffice-Systemen für Plattformstatistiken.",
        "- Identifizieren und Melden von Problemen bei den verschiedenen Softwareprodukten.",
        "- Teilnahme an IT-/Marketing-Meetings, um weitere Entwicklungen zu besprechen.",
      ], 
    },
  },
  {
    duration: {
      "english": "14.03.2022 – 02.06.2022 – Constanta, Romania",
      "german": "14.03.2022 – 02.06.2022 – Constanța, Rumänien", 
    },
    title:    {
      "english": "DATA ENTRY OPERATOR <span><a href=\"https://www.transuniverse.be/destination/romania/\" target=\"_blank\">– TRANSUNIVERSE RO</a></span>",
      "german": "Datenerfasser <span><a href=\"https://www.transuniverse.be/destination/romania/\" target=\"_blank\">– TRANSUNIVERSE RO</a></span>", 
    },
    icon:     "fa fa-briefcase",
    taskList: {
      "english": [
        "- Data entry and validation on electronic support.",
        "- Data processing, performing calculations based on the data entered.",
        "- Interrogations, data sorting and filtering.",
        "- Ensures the proper functioning of the electronic equipment.",
      ],
      "german": [
        "- Dateneingabe und -validierung auf elektronischen Medien.",
        "- Datenverarbeitung, Durchführung von Berechnungen basierend auf den eingegebenen Daten.",
        "- Abfragen, Sortieren und Filtern von Daten.",
        "- Sicherstellen des ordnungsgemäßen Betriebs der elektronischen Geräte.",
      ], 
    },
  },
  {
    duration: {
      "english": "03.07.2017 – 04.11.2021 – Craiova, Romania",
      "german": "03.07.2017 – 04.11.2021 – Craiova, Rumänien", 
    },
    title:    {
      "english": "OPERATOR - MECHANICAL LOCKSMITH <span><a href=\"https://www.ford.ro/\" target=\"_blank\">– FORD ROMANIA S.A</a></span>",
      "german": "Bediener - Maschinenschlosser  <span><a href=\"https://www.ford.ro/\" target=\"_blank\">– FORD ROMANIA S.A</a></span>", 
    },
    icon:     "fa fa-briefcase",
    taskList: {
      "english": [
        "- Carrying out periodic quality checks.",
        "- Modify the CNC machine for operational changes and production requirements.",
        "- Utilize machinery to manufacture the shape and geometry of Fox Upgrade engine block parts.",
      ],
      "german": [
        "- Durchführung von regelmäßigen Qualitätsprüfungen.",
        "- Änderung der CNC-Maschine für betriebliche Änderungen und Produktionsanforderungen.",
        "- Nutzung von Maschinen zur Herstellung der Form und Geometrie von Fox Upgrade Motorblockteilen.",
      ], 
    },
  },
  {
    duration: {
      "english": "10.02.2017 – 01.07.2017 – Craiova, Romania",
      "german": "10.02.2017 – 01.07.2017 – Craiova, Rumänien", 
    },
    title:    {
      "english": "MAILMAN <span><a href=\"https://www.pinkpost.ro/\" target=\"_blank\">– POST MASTER (CURRENT PINK POST)</a></span>",
      "german": "Briefträger <span><a href=\"https://www.pinkpost.ro/\" target=\"_blank\">– POST MASTER (CURRENT PINK POST)</a></span>", 
    },
    icon:     "fa fa-briefcase",
    taskList: {
      "english": [
        "- Delivery of advertising materials, and personal envelopes, postal activity.",
      ],
      "german": [
        "- Zustellung von Werbematerialien und persönlichen Briefumschlägen, Posttätigkeit."
      ], 
    },
  },
  {
    duration: {
      "english": "14.09.2016 – 20.01.2017 – Craiova, Romania",
      "german": "14.09.2016 – 20.01.2017 – Craiova, Rumänien", 
    },
    title:    {
      "english": "FLUX QUALITY OPERATOR <span><a href=\"http://www.integraleconsulting.es/\" target=\"_blank\">– INTEGRALE MARKETING Y CONSULTING</a></span>",
      "german": "Flussqualitätsbediener <span><a href=\"http://www.integraleconsulting.es/\" target=\"_blank\">– INTEGRALE MARKETING Y CONSULTING</a></span>", 
    },
    icon:     "fa fa-briefcase",
    taskList: {
      "english": [
        "- Conduct inspections on parts of the Fox Classic heat engine, including water pumps and clutches.",
        "- Recording the corresponding data in the IQOS computer program.",
      ],
      "german": [
        "- Durchführung von Inspektionen an Teilen des Fox Classic Wärmemotors, einschließlich Wasserpumpen und Kupplungen.",
        "- Aufzeichnung der entsprechenden Daten im IQOS-Computerprogramm.",
      ],
    },
  },
];

awardList            = [
  {
    date:        "27.09.2021",
    name:        {
      "english": "Zend PHP Certified Engineer <span> – <a href=\"https://www.zend-zce.com/en/yellow-pages/ZEND033057\" target=\"_blank\">Zend</a></span>",
      "german": "Zend PHP Zertifizierter Ingenieur <span> – <a href=\"https://www.zend-zce.com/en/yellow-pages/ZEND033057\" target=\"_blank\">Zend</a></span>",
    },
    icon:        "fas fa-trophy",
    description: {
      "english": "Online testing through the Pearson Vue platform, on the 27 of September 2021, concluded with the successful passage of the 200-710: Zend Certified Engineer exam.",
      "german": "Online-Test über die Pearson Vue-Plattform am 27. September 2021, erfolgreich abgeschlossen mit dem Bestehen der Prüfung 200-710: Zend Certified Engineer.",
    },
  }
];

certificateList      = [
  {
    date:          "07.10.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/89809720a6afccb5b0a8e0964f3fb7b17eca222a0cfc18056b3eb9e88321c738?trk=share_certificate\" target=\"_blank\">Machine Learning with Scikit-Learn</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/89809720a6afccb5b0a8e0964f3fb7b17eca222a0cfc18056b3eb9e88321c738?trk=share_certificate\" target=\"_blank\">Maschinelles Lernen mit Scikit-Learn</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "29.09.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/2a17019530e8f863dad23e91f039c011b53fa479d13d745ef04c6235005c95f0?trk=share_certificate\" target=\"_blank\">Transitioning into Machine Learning Engineering</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/2a17019530e8f863dad23e91f039c011b53fa479d13d745ef04c6235005c95f0?trk=share_certificate\" target=\"_blank\">Übergang zum Machine-Learning-Engineering</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "29.09.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/f235b8c6d7da0ad562a537445f29ff30887f9171db3ceb74f24c89b9d24aa2c3?trk=share_certificate\" target=\"_blank\">Mechanical Systems: Reading HVAC, Plumbing, and Other Drawings and Schematics</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/f235b8c6d7da0ad562a537445f29ff30887f9171db3ceb74f24c89b9d24aa2c3?trk=share_certificate\" target=\"_blank\">Mechanische Systeme: Lesen von HVAC-, Sanitär- und anderen Zeichnungen und Schaltplänen</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "27.09.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/4876f16ffe8b3051a26ef6400c80b2f7d4a2a29aca829ed3d5d844e75a5b3a76?trk=share_certificate\" target=\"_blank\">Python for Data Visualization</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/4876f16ffe8b3051a26ef6400c80b2f7d4a2a29aca829ed3d5d844e75a5b3a76?trk=share_certificate\" target=\"_blank\">Python für die Datenvisualisierung</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "22.09.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/49aecc31f45b93af9526607d6c7f5c1f8c16212169b9c9c0df2f66be27e8f3d9?trk=share_certificate\" target=\"_blank\">Programming Foundations: Artificial Intelligence</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/49aecc31f45b93af9526607d6c7f5c1f8c16212169b9c9c0df2f66be27e8f3d9?trk=share_certificate\" target=\"_blank\">Programmiergrundlagen: Künstliche Intelligenz</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "21.09.2024",
    name:          {
      "english": "<a href=\"https://www.linkedin.com/learning/certificates/5a4408da3383782102724211ab9c2b88ab0550e4d0630b5aeac0a2ffa0d0d041?trk=share_certificate\" target=\"_blank\">Introduction to PLC and Industrial Automation</a>",
      "german": "<a href=\"https://www.linkedin.com/learning/certificates/5a4408da3383782102724211ab9c2b88ab0550e4d0630b5aeac0a2ffa0d0d041?trk=share_certificate\" target=\"_blank\">Einführung in SPS und industrielle Automatisierung</a>",
    },
    icon:          "fas fa-award",
    provider:      "LinkedIn",
  },
  {
    date:          "01.08.2024",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/HFLAMBZR2TRF\" target=\"_blank\">How to Get Into Robotics</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/HFLAMBZR2TRF\" target=\"_blank\">Wie man in die Robotik einsteigt</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "22.07.2024",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YK74RY39H5AN\" target=\"_blank\">Automotive Industrial Engineering</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YK74RY39H5AN\" target=\"_blank\">Automobilindustrie-Ingenieurwesen</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "17.07.2024",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YFY223AYJ7FK\" target=\"_blank\">Generative AI: Introduction and Applications</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YFY223AYJ7FK\" target=\"_blank\">Generative KI: Einführung und Anwendungen</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "13.07.2024",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/9VDXPKC9D73X\" target=\"_blank\">3D CAD Fundamental</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/9VDXPKC9D73X\" target=\"_blank\">3D-CAD-Grundlagen</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera"
  },
  {
    date:          "26.06.2024",
    name:          {
      "english": "<a href=\"https://www.udemy.com/certificate/UC-51a64853-30f6-4a19-b9e2-e3099763d770/\" target=\"_blank\">Arduino Step by Step: Getting Started</a>",
      "german": "<a href=\"https://www.udemy.com/certificate/UC-51a64853-30f6-4a19-b9e2-e3099763d770/\" target=\"_blank\">Arduino Schritt für Schritt: Erste Schritte</a>",
    },
    icon:          "fas fa-award",
    provider:      "Udemy",
  },
  {
    date:          "27.12.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/specialization/GX3FJS5Y7Y6U\" target=\"_blank\">Python for Everybody</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/specialization/GX3FJS5Y7Y6U\" target=\"_blank\">Python für alle</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera"
  },
  {
    date:          "02.12.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YPRAZ7JLXLJE\" target=\"_blank\">Linux Fundamentals</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/YPRAZ7JLXLJE\" target=\"_blank\">Linux-Grundlagen</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera"
  },
  {
    date:          "02.12.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/443NX3CCEQQA\" target=\"_blank\">Internet History, Technology, and Security</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/443NX3CCEQQA\" target=\"_blank\">Internetgeschichte, Technologie und Sicherheit</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "14.11.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/FS2GULMY2U5W\" target=\"_blank\">Introduction to Git and GitHub</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/FS2GULMY2U5W\" target=\"_blank\">Einführung in Git und GitHub</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "12.11.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/M7L7L9LRTLTD\" target=\"_blank\">Using Python to Interact with the Operating System</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/M7L7L9LRTLTD\" target=\"_blank\">Verwendung von Python zur Interaktion mit dem Betriebssystem</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "21.10.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/3LYGW72VEH8Q\" target=\"_blank\">Crash Course on Python</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/3LYGW72VEH8Q\" target=\"_blank\">Schnellkurs in Python</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "21.03.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/8HDCE53SBM86\" target=\"_blank\">Introduction to Artificial Intelligence (AI)</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/8HDCE53SBM86\" target=\"_blank\">Einführung in Künstliche Intelligenz (KI)</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  },
  {
    date:          "09.02.2023",
    name:          {
      "english": "<a href=\"https://www.coursera.org/account/accomplishments/verify/QJVGXKKFY626\" target=\"_blank\">Introduction to Calculus</a>",
      "german": "<a href=\"https://www.coursera.org/account/accomplishments/verify/QJVGXKKFY626\" target=\"_blank\">Einführung in die Analysis</a>",
    },
    icon:          "fas fa-award",
    provider:      "Coursera",
  }
];

skillList            = [
  {
    title:      {
      "english": "CAD",
      "german": "CAD",
    },
    percentage: "30%",
    class:      "cad",
  },
  {
    title:      {
      "english": "Electronics",
      "german": "Elektronik",
    },
    percentage: "25%",
    class:      "electronics",
  },
  {
    title:      {
      "english": "Web Development",
      "german": "Webentwicklung", 
    },
    percentage: "40%",
    class:      "webDevelopment",
  },
  {
    title:      {
      "english": "AI Applications",
      "german": "KI-Anwendungen", 
    },
    percentage: "5%",
    class:      "aIApplications",
  }
];
// End About Me Page Data --------------------------------------------------------------

// Portfolio Page Data --------------------------------------------------------------
designList         = [
  {
    name: {
      "english": "206 Develop Cabinet Model",
      "german": "206 Schrankmodell entwickeln",
    },
    img: "../assets/images/cabinet.png",
    href: "../assets/docs/Cabinet_Istrate_Mihai.skp",
    download: {
      english: "Cabinet_Istrate_Mihai.skp",
      german: "Schrank_Istrate_Mihai.skp",
    },
  },
  {
    name: {
      "english": "305 Develop House Model",
      "german": "305 Hausmodell entwickeln",
    },     
    img: "../assets/images/houseModel.png",
    href: "../assets/docs/305_Develop_House_Model.skp",
    download: {
      english: "305_Develop_House_Model.skp",
      german: "305_Entwickle_Haus_Modell.skp",
    },
  },
  {
    name: {
      "english": "406 Develop a Wheel Model",
      "german": "406 Radmodell entwickeln",
    },
    img: "../assets/images/wheelModel.png",
    href: "../assets/docs/Wheel_Istrate_Mihai.skp",
    download: {
      english: "Wheel_Istrate_Mihai.skp",
      german: "Rad_Istrate_Mihai.skp",
    },
  },
  {
    name: {
      "english": "505 Develop Taipei 101 Model",
      "german": "505 Taipei 101 Modell entwickeln",
    }, 
    img: "../assets/images/taipeiModel.png",
    href: "../assets/docs/Taipei_101_Istrate_Mihai.skp",
    download: {
      english: "Taipei_101_Istrate_Mihai.skp",
      german: "Taipei_101_Istrate_Mihai.skp",
    },
  },
  {
    name: {
      "english": "603 Develop Tee Pipe Model",
      "german": "603 T-Stück-Modell entwickeln",
    },
    img: "../assets/images/teePipeModel.png",
    href: "../assets/docs/Tee_Pipe_Istrate_Mihai.skp",
    download: {
      english: "Tee_Pipe_Istrate_Mihai.skp",
      german: "Tee_Rohr_Istrate_Mihai.skp",
    },
  }
];

electronicList     = [
  {
    name: {
      "english": "Robo Spider (Boby)",
      "german": "Robo-Spinne (Boby)",
    },
    img: '../assets/images/roboSpider.jpeg',
    link: './robots/boby.html'
  },
  {
    name: {
      "english": "D2-1 Line Follower",
      "german": "D2-1 Linienfolger",
    },
    img: '../assets/images/D2LineFollower.jpeg',
    link: './robots/d2.html',
  },
  {
    name: {
      "english": "Arduino Robot",
      "german": "Arduino-Roboter",
    },
    img: '../assets/images/arduinoObstacleAvoidingRobot.jpeg',
    link: './robots/arduino.html',
  },
];

webDevelopmentList = [
  {
    name:    {
      "english": "Monster Slayer Game",
      "german": "Monsterjäger-Spiel",
    },
    img:     "../assets/images/monster_slayer_game.png",
    github:  "https://github.com/istrate-mihai/Monster_Slayer_Game",
    website: "https://monster-slayer-game-area.netlify.app/",
  },
  {
    name:    {
      "english": "Chat App",
      "german": "Chat-App",
    },
    img:     "../assets/images/chat_app.png",
    github:  "https://github.com/istrate-mihai/Chat_App",
    website: "https://chat-app-euq6.onrender.com/",
  },
  {
    name:    {
      "english": "Learning Resources",
      "german": "Lernressourcen",
    },
    img:     "../assets/images/learning_resources_manager.png",
    github:  "https://github.com/istrate-mihai/Learning_Resources_Manager",
    website: "https://learning-resources-manager.netlify.app/",
  },
  {
    name:    {
      "english": "Shopping Cart",
      "german": "Einkaufswagen",
    },
    img:     "../assets/images/online_shopping_cart.png",
    github:  "https://github.com/istrate-mihai/Shopping_Cart",
    website: "https://shopping-cart-area.netlify.app/",
  },
  {
    name:    {
      "english": "Computer History",
      "german": "Computergeschichte",
    },
    img:     "../assets/images/computer_history.png",
    github:  "https://github.com/istrate-mihai/Computer_History",
    website: "https://computer-history.netlify.app/",
  },
  {
    name:    {
      "english": "Lord of The Rings Area",
      "german": "Herr der Ringe Bereich",
    },
    img:     "../assets/images/lord_of_the_rings_area.png",
    github:  "https://github.com/Istrate-Mihai/Lord-Of-The-Rings-Area",
    website: "https://lord-of-the-rings-area.netlify.app/",
  },
  {
    name:    {
      "english": "Javascript Games",
      "german": "JavaScript-Spiele",
    },
    img:     "../assets/images/javascript_game_area.png",
    github:  "https://github.com/istrate-mihai/Javascript_Games",
    website: "https://javascript-games-area.netlify.app/",
  },
];

AIApplicationList  = [
  {
    name: {
      "english": "Salary Dataset - Simple Linear Regression",
      "german": "Gehaltsdatensatz - Einfache lineare Regression",
    },
    img:  "../assets/images/salaryDatasetSimpleLinearRegression.png",
    link: "https://colab.research.google.com/drive/1U8aUVV6pXJ8RsDTTXLfsvFM6DtlyX2i3",
  }
];
// End Portfolio Page Data --------------------------------------------------------------

// Hobbys Page Data --------------------------------------------------------------
puzzleList         = [
  {
    "id":       "variator",
    "title":    {
      "english": "Variator",
      "german": "Variator",
    },
    "imgList": [
                "assets/images/puzzles/variator-1.jpg",
                "assets/images/puzzles/variator-2.jpg",
                "assets/images/puzzles/variator-3.jpg",
                "assets/images/puzzles/variator-4.jpg",
    ]
  },
  {
    "id":       "gearbox",
    "title":    {
      "english": "Gearbox",
      "german": "Getriebe",
    },
    "imgList": [
                "assets/images/puzzles/gearbox-1.jpg",
                "assets/images/puzzles/gearbox-2.jpg",
                "assets/images/puzzles/gearbox-3.jpg",
                "assets/images/puzzles/gearbox-4.jpg",
    ]
  },
  {
    "id":       "differential",
    "title":    {
      "english": "Differential",
      "german": "Differential",
    },
    "imgList": [
                "assets/images/puzzles/differential-1.jpg",
                "assets/images/puzzles/differential-2.jpg",
                "assets/images/puzzles/differential-3.jpg",
                "assets/images/puzzles/differential-4.jpg",
    ]
  },
  {
    "id":       "steampunkClock",
    "title":    {
      "english": "Steampunk Clock",
      "german": "Steampunk-Uhr",
    },
    "imgList": [
                "assets/images/puzzles/steamClock-1.jpg",
                "assets/images/puzzles/steamClock-2.jpg",
                "assets/images/puzzles/steamClock-3.jpg",
                "assets/images/puzzles/steamClock-4.jpg",
    ]
  },
  {
    "id":       "vintageAlarmClock",
    "title":    {
      "english": "Vintage Alarm Clock",
      "german": "Vintage-Wecker",
    },
    "imgList": [
                "assets/images/puzzles/alarmClock-1.jpg",
                "assets/images/puzzles/alarmClock-2.jpg",
                "assets/images/puzzles/alarmClock-3.jpg",
                "assets/images/puzzles/alarmClock-4.jpg",
    ]
  },
  {
    "id":       "theOldClockTower",
    "title":    {
      "english": "The Old Clock Tower",
      "german": "Der alte Uhrturm",
    },
    "imgList": [
                "assets/images/puzzles/towerClock-1.jpg",
                "assets/images/puzzles/towerClock-2.jpg",
                "assets/images/puzzles/towerClock-3.jpg",
                "assets/images/puzzles/towerClock-4.jpg",
    ]
  },
  {
    "id":       "primeSteamExpress",
    "title":    {
      "english": "Prime Steam Express",
      "german": "Prime Steam Express",
    },
    "imgList": [
                "assets/images/puzzles/steamExpress-1.jpg",
                "assets/images/puzzles/steamExpress-2.jpg",
                "assets/images/puzzles/steamExpress-3.jpg",
                "assets/images/puzzles/steamExpress-4.jpg",
    ]
  }
];

drawingList        = [
  {
    name:     {
      "english": "Signs With Basic Shapes",
      "german": "Schilder mit Grundformen", 
    },
    img:      "assets/images/drawingSignsWithTheHelpOfBasicShapes.jpg",
    download: "assets/images/drawingSignsWithTheHelpOfBasicShapes.jpg"
  },
  {
    name:     {
      "english": "Valuation And Texture",
      "german": "Bewertung und Textur",
    },
    img:      "assets/images/applyingValuationAndTexture.jpg",
    download: "assets/images/applyingValuationAndTexture.jpg"
  },
  {
    name:     {
      "english": "Treehouse",
      "german": "Baumhaus",
    },
    img:      "assets/images/treeHouse.jpg",
    download: "assets/images/treeHouse.jpg"
  },
];
// End Hobbys Page Data --------------------------------------------------------------

export {
  educationList,
  workList,
  awardList,
  certificateList,
  skillList,
  designList,
  electronicList,
  webDevelopmentList,
  AIApplicationList,
  puzzleList,
  drawingList
};
