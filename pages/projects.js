// import project from '../info/projects.js'
import Project from '../components/Projects.js'
import styles from '../styles/projects.module.css'
import medi from '../assets/medi-check.PNG'
import port from '../assets/week9.PNG'
import scrabble from '../assets/scrabbledit.PNG'
import scrabbleTwo from '../assets/scrabbledit2.PNG'
import scorer from '../assets/topscorerlogo.PNG'
import scorerTwo from '../assets/topscorerhome.PNG'
import oneshop from '../assets/onestop.PNG'
import oneshopTwo from '../assets/onestopshop.PNG'
import study from '../assets/studystaxx.PNG'
import studyTwo from '../assets/studyhome.PNG'
import quizOne from '../assets/quizLogo.png'
import quizTwo from '../assets/quizapp.PNG'
import resultsSummary from '../assets/results-summary.PNG'
import NFT from '../assets/NFT-preview.PNG'
import boxShooter from '../assets/box-shooter.PNG'


const projects = [
  {
    name: 'Study Staxx',
    img: study.src,
    imgTwo: studyTwo.src,
    live: 'https://studystaxx.netlify.app/',
    frontend: 'https://github.com/TomBirbeck/homework-helper',
    backend: 'https://github.com/TomBirbeck/homework-helper-backend',
    info: "A web app written in Typescript that enables a student to create, update, prioritise and track a list of study tasks that they have outstanding, the student side is then linked to a parent side, where progress can be tracked and tasks can be removed when completed. Database is hosted on render.",
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Netlify', 'Node.js', 'Express.js', 'Jest', 'SuperTest', 'Render', 'Thunder Client'],
  },
  {
      name: 'Medi-Check',
      img: medi.src,
      imgTwo: medi.src,
      live: 'https://medi-check.netlify.app/',
      frontend:
        'https://github.com/SchoolOfCode/final-project_front-end-five-guys',
      backend: 'https://github.com/SchoolOfCode/final-project_back-end-five-guys',
      info: 'Worked in a team of five for four weeks to produce an app to help reduce the amount of errors made when patients were being prescribed medication. We designed the patient side for mobile first and the doctor side for computer usage. The database and servers are hosted using railway.',
      tech: [ 'React', 'MaterialUI', 'CSS', 'Netlify', 'Node.js', 'Express.js', 'Railway', 'Auth0', 'Jest', 'SuperTest', 'Cypress',]
    //   techfront: 'Frontend: React, MaterialUI, CSS, Cypress, Auth0, Netlify.',
    //   techback:
    //     'Backend: Node.js, Express.js, dotenv, Heroku, Jest, Supertest, Postman, cors.',
    },
  {
    name: 'Scrabbledit',
    img: scrabble.src,
    imgTwo: scrabbleTwo.src,
    live: 'https://scrabbledit.netlify.app/',
    frontend: 'https://github.com/TomBirbeck/scrabbledit',
    info: "A PWA that will calculate the scrabble score for any word that is entered and will allow up to four players to keep track of their cumulative scores as a game progresses. I enjoyed the challenge of trying to get all the functioning parts working together.",
    tech: ['React', 'CSS', 'Netlify', 'Jest'],
  },
  {
    name: 'One Stop Shop',
    img: oneshop.src,
    imgTwo: oneshopTwo.src,
    live: 'https://one-stop-shopping.netlify.app/',
    frontend:
      'https://github.com/TomBirbeck/shopping-cart',
    info:'A small multipage e-commerce project where I used React, Bootstrap, Typescript and the fakestoreAPI to create a site that allows users to add/remove items in a cart. Users are also able to filter items by their category. Currently working on integrating a payment system using Stripe.',
    tech: ['React', 'Bootstrap', 'Typescript'],
  },
    {
      name: 'Topscorers',
      img: scorer.src,
      imgTwo: scorerTwo.src,
      live: 'https://topscorers.netlify.app/',
      frontend:
        'https://github.com/TomBirbeck/topscorer/tree/main/backend',
      backend:
        'https://github.com/TomBirbeck/topscorer/tree/main/backend',
      info: `A full stack application that allows users to search through the top scorers in the English Premier League from the 1992/93 season to present day. The React front end, hosted on Netlify, utilisises a stand alone API built using a TDD method, that I'm looking to extend to be able to supply data from the top 5 European leagues over the same time period. The database is hosted using ElephantSQL, with the server hosted through Render.`,
      tech: ['React', 'CSS', 'Netlify', 'Node.js', 'Express.js', 'ElephantSQL', 'Render', 'Jest', 'Supertest', 'Postman'],
    },
    {
      name: "It's a Quiz",
      img: quizOne.src,
      imgTwo: quizTwo.src,
      live: 'https://toms-its-a-quiz.netlify.app/',
      frontend:
        'https://github.com/TomBirbeck/topscorer/tree/main/backend',
      info: "A responsive web application made using HTML, CSS and Javascript. Players are able to select from multiple quiz lengths and categories. The app will track the question number, current score and a player's high score, which are tracked independently so a user can accurately judge how they do in each category for each quiz length. The high scores are stored using local storage. The app sources quiz questions from an api.",
      tech: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      name: "Box Shooter",
      img: boxShooter.src,
      imgTwo: boxShooter.src,
      live: 'https://tombirbeck.github.io/js-box-shooter/',
      frontend:
        'https://github.com/TomBirbeck/js-box-shooter',
      info: "A browser base game made using JavaScript, HTML and CSS. The game involves a player piece moving around a zone shooting bullets at enemies pieces that are constantly in motion. The aim of the game is for the player to destroy as many enemies as they can within a time limit. Creating this game was great for learning to work with classes and partical collision in JavaScript.",
      tech: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      name: "Results Summary Component",
      img: resultsSummary.src,
      imgTwo: resultsSummary.src,
      live: 'https://tombirbeck.github.io/frontend-mentor-results-summary-component/',
      frontend:
        'https://github.com/TomBirbeck/frontend-mentor-results-summary-component',
      info: "A responsive results summary card component made using HTML, CSS and JavaScript. This was a Frontend Mentor challenge that I have recently completed.",
      tech: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      name: "NFT preview card",
      img: NFT.src,
      imgTwo: NFT.src,
      live: 'https://tombirbeck.github.io/nft-preview-card/',
      frontend:
        'https://github.com/TomBirbeck/nft-preview-card',
      info: "A responsive NFT preview card made using HTML, CSS and JavaScript. This was a Frontend Mentor challenge that I have recently completed.",
      tech: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      name: 'Portfol.io',
      img: port.src,
      imgTwo: port.src,
      frontend:
        'https://github.com/SchoolOfCode/w9_frontend-project-tom-hannah-ben-and-idman',
      backend:
        'https://github.com/SchoolOfCode/w9_backend-project-tom-hannah-ben-and-idman',
      info: 'I worked in a team of four for one week to produce an app to assist current boot-campers. We decided on a portfolio hosting website where users would be to view and upload portfolios at different experience levels, allowing people to always find something to help them and encourage them to keep going on their learning journey.',
      tech: ['React', 'CSS', 'Fontawesome', 'Node.js', 'Express.js', 'Heroku', 'Jest', 'Supertest', 'Postman'],
    },
    
  ];

export default function Projects(){
    return (
        <>
        <h2 className={styles.projects_header}>Projects</h2>
        <div>
        {projects.map((p)=>{return <Project key={p.name} projects={p}/>})}
        </div>
        </>
    )
}