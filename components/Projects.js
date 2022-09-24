import styles from '../styles/Projects_card.module.css'
import Image from 'next/image'

export default function Project({projects}){
    const tech = projects.tech
return (
    <>
     {/* <h3 className={styles.project_name}>{projects.name}</h3> */}
    <div className={styles.project_con}>
        <div className={styles.imgbuttongroup}>
        <Image height={330} width={500} className={styles.img} src={projects.img} alt={projects.name}/>
        <div className={styles.project_links}>
        {projects.live? <a
      href={projects.live}
      rel='noopener noreferrer'
      target='_blank'
    >
      <button className={styles.links_buttons}>Live site</button>
    </a>: null}
    {projects.frontend? <a
      href={projects.frontend}
      rel='noopener noreferrer'
      target='_blank'
    >
      <button className={styles.links_buttons}>Frontend Source</button>
    </a>: null}
    {projects.backend? <a
      href={projects.backend}
      rel='noopener noreferrer'
      target='_blank'
    >
      <button className={styles.links_buttons}>Backend Source</button>
    </a>: null}
    </div>
        </div>
        
        <div className={styles.textarea}>
     <h3 className={styles.project_name}>{projects.name}</h3>
     <div className={styles.textarea_bottom}>
        <p>{projects.info}</p>
        <div className={styles.portfolio_tech}>{tech ? tech.map((tech)=> {return <button key={tech} className={styles.tech_used}>{tech}</button>}):null}
        </div>
        </div>
</div>
</div>
    </>
  );
}
