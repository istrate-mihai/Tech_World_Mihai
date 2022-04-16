let skills, projects, educations, works;

projects = [
  {
    name: "Javascript Game Area",
    img: "Javascript-Games.png",
    github: "https://github.com/Istrate-Mihai/Javascript-Games",
    website: "https://javascript-game-area.netlify.app/",
  },
  {
    name: "Lord of The Rings Area",
    img: "Lord-Of-The-Rings-Area.png",
    github: "https://github.com/Istrate-Mihai/Lord-Of-The-Rings-Area",
    website: "https://lord-of-the-rings-area.netlify.app/",
  },
  {
    name: "Computer History",
    img: "Computer-History.png",
    github: "https://github.com/Istrate-Mihai/My-First-Website",
    website: "https://computer-history.netlify.app/",
  },
  {
    name: "Link Academy Portfolio",
    img: "digital_portfolio.jpg",
    github: "https://github.com/Istrate-Mihai/Link-Academy-Portfolio",
    website: "portfolio_and_cv/Portfolio-Istrate_Mihai_Septimius.7z",
  },
  {
    name: "Notebook App",
    img: "your_notebook.png",
    github: "https://github.com/Istrate-Mihai/Notebook-App",
    website: "https://yournotebookapp.000webhostapp.com/index.php",
  },
];

skills = [
  {
    skillTitle: "HTML5",
    skillPercentage: "90%",
  },
  {
    skillTitle: "CSS3",
    skillPercentage: "80%",
  },
  {
    skillTitle: "Javascript",
    skillPercentage: "80%",
  },
  {
    skillTitle: "JQuery",
    skillPercentage: "70%",
  },
  {
    skillTitle: "ReactJS",
    skillPercentage: "50%",
  },
  {
    skillTitle: "NodeJS",
    skillPercentage: "70%",
  },
  {
    skillTitle: "PHP",
    skillPercentage: "80%",
  },
  {
    skillTitle: "SQL",
    skillPercentage: "70%",
  },
];

educations = [
  {
    duration: "01/11/2020 – 07/09/2021", // 11/01/2020 – 09/07/2021
    educationTitle: "PHP WEB DEVELOPER",
    link: "https://www.link-academy.com/",
    institutionTitle: "Link Academy",
    institutionDescription:
      "Training as a PHP Web Developer through Link Academy's online platform.",
  },
  {
    duration: "01/10/2017 – 20/01/2022", // 10/01/2017 – 01/20/2022
    educationTitle: "MECHANICAL ENGINEER",
    link: "http://mecanica.ucv.ro/",
    institutionTitle: "University of Craiova - Faculty of Mechanics",
    institutionDescription:
      "Training as a mechanical engineer, field - Machine Building Technology.",
  },
  {
    duration: "15/09/2011 – 15/06/2015", // 09/15/2011 – 06/15/2015
    educationTitle: "HIGH SCHOOL GRADUATE - BACCALAUREATE DIPLOMA",
    link: "http://www.cnnt.ro/",
    institutionTitle: 'C.N. "Nicolae Titulescu" Craiova',
    institutionDescription:
      "Real Profile - Department of Mathematics - Informatics",
  },
  {
    duration: "Other Certificates",
    educationTitle: [
      {
        otherEducationLink:
          "https://www.sololearn.com/Certificate/1014-21392382/pdf/",
        otherEducationTitle: "Solo Learn App - HTML Course",
      },
      {
        otherEducationLink:
          "https://www.sololearn.com/certificates/course/en/21392382/1024/landscape/png",
        otherEducationTitle: "Solo Learn App - Javascript Course",
      },
      {
        otherEducationLink:
          "https://www.sololearn.com/Certificate/1059-21392382/pdf/",
        otherEducationTitle: "Solo Learn App - PHP Course",
      },
    ],
  },
];

works = [
  {
    duration: "14/03/2022 – current – Constanta, Romania", // 03/14/2022
    title: "DATA ENTRY OPERATOR<span> – TRANSUNIVERSE RO</span>",
    responsabilities: [
      "- Data entry and validation on electronic support.",
      "- Data processing, performing calculations based on the data entered.",
      "- Interrogations, data sorting and filtering.",
      "- Ensures the proper functioning of the electronic equipment.",
    ],
  },
  {
    duration: "03/07/2017 – 04/11/2021 – Craiova, Romania", // 07/03/2017 – 11/04/2021
    title: "OPERATOR - MECHANICAL LOCKSMITH<span> – FORD ROMANIA S.A</span>",
    responsabilities: [
      "- Carrying out periodic quality checks.",
      "- Adjusting the machine as needed for changes, different functions or other requirements of the production process.",
      "- The use of mechanical processing machinery for the manufacture and change of the shape of Fox Upgrade engine block parts.",
    ],
  },
  {
    duration: "10/02/2017 – 01/07/2017 – Craiova, Romania", // 02/10/2017 – 07/01/2017
    title: "MAILMAN<span> – POST MASTER(CURRENT PINK POST)</span>",
    responsabilities: [
      "- Delivery of advertising materials, and personal envelopes, postal activity.",
    ],
  },
  {
    duration: "14/09/2016 – 20/01/2017 – Craiova, Romania", // 09/14/2016 – 01/20/2017
    title:
      "FLUX QUALITY OPERATOR<span> – INTEGRALE MARKETING Y CONSULTING</span>",
    responsabilities: [
      "- Performing visual quality inspections on parts and components of small sizes of the Fox Classic heat engine such as: water pumps, clutches etc.",
      "- Recording the corresponding data in the IQOS computer program.",
    ],
  },
];

export { skills, projects, educations, works };
