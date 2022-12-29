// import project from '../info/projects.js'
import Project from '../components/Projects.js'
import styles from '../styles/projects.module.css'
import medi from '../assets/medi-check.PNG'
import port from '../assets/week9.PNG'
import scrabble from '../assets/scrabbledit.PNG'
import scorer from '../assets/topscorer-logo.PNG'
import oneshop from '../assets/oneshop.PNG'
import study from '../assets/studystaxx.PNG'

const projects = [
  {
      name: 'Medi-Check',
      img: medi.src,
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
    live: 'https://scrabbledit.netlify.app/',
    frontend: 'https://github.com/TomBirbeck/scrabbledit',
    info: "A PWA that will calculate the scrabble score for any word that is entered and will allow up to four players to keep track of their cumulative scores as a game progresses. I enjoyed the challenge of trying to get all the functioning parts working together.",
    tech: ['React', 'CSS', 'Netlify'],
  },
  {
    name: 'Study Staxx',
    img: study.src,
    live: 'https://studystaxx.netlify.app/',
    frontend: 'https://github.com/TomBirbeck/homework-helper',
    backend: 'https://github.com/TomBirbeck/homework-helper-backend',
    info: "A web app written in Typescript that enables a student to create and update a list of study tasks that they have outstanding, the student side is then linked to a parent side, where progress can be tracked and tasks can be removed when completed. Database is hosted on render",
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Netlify', 'Node.js', 'Express.js', 'Render'],
  },
  {
    name: 'One Stop Shop',
    img: oneshop.src,
    live: 'https://one-stop-shopping.netlify.app/',
    frontend:
      'https://github.com/TomBirbeck/shopping-cart',
    info:'A small multipage e-commerce project where I used React, Bootstrap, Typescript and the fakestoreAPI to create a site that allows users to add/remove items in a cart. Users are also able to filter items by their category. Currently working on integrating a payment system using Stripe',
    tech: ['React', 'Bootstrap', 'Typescript'],
  //   techfront: 'Frontend: React, CSS, Fontawesome, Jest.',
  //   techback:
  //     'Backend: Node.js, Express.js, dotenv, Heroku, Jest, Supertest, Postman, cors.',
  },
    {
      name: 'Topscorers',
      img: scorer.src,
      live: 'https://topscorers.netlify.app/',
      frontend:
        'https://github.com/TomBirbeck/topscorer/tree/main/backend',
      backend:
        'https://github.com/TomBirbeck/topscorer/tree/main/backend',
      info: `A full stack application that allows users to search through the top scorers in the English Premier League from the 1992/93 season to present day. The React front end, hosted on Netlify, utilisises a stand alone API built using a TDD method, that I'm looking to extend to be able to supply data from the top 5 European leagues over the same time period. The database is hosted using ElephantSQL, wih the server hosted through Render.`,
      tech: ['React', 'CSS', 'Netlify', 'Node.js', 'Express.js', 'ElephantSQL', 'Render', 'Jest', 'Supertest', 'Postman'],
    },
    {
      name: 'Portfol.io',
      img: port.src,
      frontend:
        'https://github.com/SchoolOfCode/w9_frontend-project-tom-hannah-ben-and-idman',
      backend:
        'https://github.com/SchoolOfCode/w9_backend-project-tom-hannah-ben-and-idman',
      info: 'Worked in a team of four for one week to produce an app to assist current boot-campers. We decided on a portfolio hosting website where users would be to view and upload portfolios at different experience levels, allowing people to always find something to help them and encourage them to keep going on their learing journey.',
      tech: ['React', 'CSS', 'Fontawesome', 'Node.js', 'Express.js', 'Heroku', 'Jest', 'Supertest', 'Postman'],
    //   techfront: 'Frontend: React, CSS, Fontawesome, Jest.',
    //   techback:
    //     'Backend: Node.js, Express.js, dotenv, Heroku, Jest, Supertest, Postman, cors.',
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