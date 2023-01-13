import styles from '../styles/tech.module.css'
import Html from '../assets/html5.svg'
import Css from '../assets/css3.svg'
import JS from '../assets/javascript.svg'
import JestLogo from '../assets/jest.svg'
import Heroku from '../assets/heroku.svg'
import MatLogo from '../assets/materialui.svg'
import NodeLogo from '../assets/nodejs.svg'
import TypeLogo from '../assets/typescript.svg'
import PostLogo from '../assets/postgresql.svg'
import ReactLogo from '../assets/react.svg'
import Tailwind from '../assets/tailwind.svg'
import NextJs from '../assets/nextjs.svg'

export default function Tech(){
    return (
        <>
        <h2 className={styles.tech_header}>My Tech Stack</h2>
        <div className={styles.tech_con}>
            <div className={styles.tech_section}>
                 {/* HTML5 */}
                 <div>
                    <Html className={styles.logos}/>
            
            <p>HTML5</p>
            </div>

            {/* CSS3 */}
            <div>
            <Css className={styles.logos} />
            <p>CSS3</p>
            </div>

            {/* JavaScript */}
            <div>
            <JS className={styles.logos}/>
            <p>JAVASCRIPT</p>
            </div>

            {/* Typescript */}
            <div>
            <TypeLogo className={styles.logos} />
            <p>TYPESCRIPT</p>
            </div>

            {/* React */}
            <div>
            <ReactLogo className={styles.logos} />
            <p>REACT</p>
            </div>
            </div>
          
            <div className={styles.tech_section}>
                {/* Heroku */}
            <div>
            <Heroku className={styles.logos} />
            <p>HEROKU</p>
            </div>
           
            {/* PostgresSQL */}
            
            <div>
            <PostLogo className={styles.logos}/>
            <p>POSTGRES-SQL</p>
            </div>
          
           {/* Node.JS */}
           <div>
            <NodeLogo className={styles.logos}/>
            <p>NODE.JS</p>
            </div>
      
            {/* Jest */}
            <div>
            <JestLogo className={styles.logos}/>
            <p>JEST</p>
            </div>
          
          {/* materialUI */}
            <div>
            <MatLogo className={styles.logos}/>
            <p>MATERIALUI</p>
            </div>
            </div>
            <div  className={styles.tech_section}>
                {/* tailwindCSS */}
            <div>
            <Tailwind className={styles.logos}/>
            <p>Tailwind CSS</p>
            </div>
            <div>
            <NextJs className={styles.logos}/>
            <p>NextJs</p>
            </div>
            </div>
        </div>
        </>
    )
}