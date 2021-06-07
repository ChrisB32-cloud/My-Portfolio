import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chris Brown Web Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Front-end Web-developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Chris Brown',
  subtitle: `I'm a Front-end Developer.`,
  cta: 'MORE',
};

// ABOUT DATA
export const aboutData = {
  img: 'myPic.png',
  // img: 'profile.jpg',
  paragraphOne: 'Hello there, my name is Chris Brown and I am a Front-end Developer out of Clarkville Tn. Some of the tools I use are JavaScript, React-JS, Next-JS, Gatsby-JS, Firebase, Strapi, Filemaker, Html, Css, Sass, as well as some Css frame works like Bootstrap and Material-Ui',
  paragraphTwo: 'I have worked and helped develop multiple projects ranging from html websites to web-apps using varise different tools to come up with the best solutions for clients. A solution in partical I have developed for clients, is a CMS Admin panel where they can update status, events, and other sections of their website that regularly changes.',
  paragraphThree: 'I love learning new technologies but a deeper passion is helping others learn.',
  resume: 'https://github.com/ChrisB32-cloud/resume/raw/main/MyResume.pdf', // if no resume, the button will not show up
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'screenPrint.png',
    codeSource: false,
    title: 'Ink Pressive',
    info: 'Ink Pressive is a first responder owned and operated Screen Printing company specilizing in sublamtion process. I helped them create a solution where they could have a website and change/update sections that change frequently with a CMS/admin panel where they recieve messages from companies interested in their services that is simple and easy to use. Another option for contact is via service form for returning clients. Sections that include new offerings, events and a section for displaying instagram post.',
    info2: 'The tools I used for this project are React-JS (Currently refactoring for NEXT-JS), JavaScript, Css, Material-UI and Firbase.  ',
    url: 'https://60b6497e8408a500081ecc91--angry-sammet-9ba266.netlify.app',
    repo: 'https://github.com/ChrisB32-cloud/Ink-Pressive-Dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burger.png',
    codeSource: false,
    title: 'The Burger Store',
    info: 'The Burger Store is a locally own and operated, non francise restuarant that prides its self is locally sourced ingredents. I helped them create a solution where they could have a website and change/update sections that change frequently with a CMS/admin panel where they recieve messages from companies interested learning more about their business. Sections that include new offerings, events and a section for displaying menu items. Also I included google maps API for their three locations.
    ,
    info2: 'The tools I used for this project are Next-JS, React-JS, JavaScript, Css, Sass, bootstrap and Firbase. ',
    url: 'https://theburgerstorenashville.com/',
    repo: 'https://the-burger-strore-ia14ayw1g-chrisb32-cloud.vercel.app/', // if no repo, the button will not show up
  }
];

export const expData = [
  {
    id: nanoid(),
    img: 'simplePort.jpg',
    codeSource: true,
    liveCode: true,
    title: 'Local Events',
    info: 'Now that the pandemic is finally getting under control, I wanted to build an app that would allow people to reconnect through local events. For myself and my partner I know it was tough this past year not having that social environment as we loved attending events and trying new restauarants. This app is amming to allow users to create and display upcoming events in their area. Local Events App has full CRUD functionality with jwt for authentication and authorization',
    info2: 'The tools I used for this project are Next.JS, React.JS, JavaScript, JSX, Css, bootstrap, Strapi, google maps Api',
    url: 'https://localevents.vercel.app/',
    repo: 'https://github.com/ChrisB32-cloud/Local-Events-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.png',
    codeSource: true,
    liveCode: false,
    title: 'Covid Tracker',
    info: 'Covid Tracker was a project created at the height of the Covid-19 epidemic. Knowing people who were personally afflicted with this virus I decided to build a small web-app that people could visit so they could see daily changes in their state as well as the national trends represented graphically that start from the first reported case in the United State in January 2020 to present day.',
    info2: 'The tools I used for this project are JavaScript, React-JS, JSX, Css, and Charts-JS',
    url: 'https://github.com/ChrisB32-cloud/React-Covid-Tracker',
    repo: 'https://github.com/ChrisB32-cloud/React-Covid-Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.jpg',
    codeSource: true,
    liveCode: true,
    title: 'Weather app',
    info: 'The weather app is built with open weather api. When using the app, user has to enter in their city and country and the api returns the weather conditions for that area. The conditions provided are temperature in fahrenheit, humidity, feels like temperature, Pressure, wind speed and wind direction. This app is built with vanilla JS. (Currently refactoring to use area code instead on city.)',
    info2: 'The tools I used for this project are JavaScript, HTML, CSS',
    url: 'https://chrisb32-cloud.github.io/Weather-App/',
    repo: 'https://github.com/ChrisB32-cloud/Weather-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cbrowndev88@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Chrisltd1',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chris-brown-48477b1bb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ChrisB32-cloud',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
