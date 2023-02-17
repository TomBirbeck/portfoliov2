import styles from '../styles/Projects_card.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function Project({projects}){
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
    const tech = projects.tech
return (
    <>
    <div className={styles.project_con}>
        <div className={styles.imgbuttongroup}>
        {!isHovering ?
        <Image height={330} width={500} className={styles.img} src={projects.img} alt={projects.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/> :
        <Image height={330} width={500} className={styles.img} src={projects.imgTwo} alt={projects.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        }
        <div className={styles.project_links}>
        {projects.live? <a
        className={styles.link_text}
      href={projects.live}
      rel='noopener noreferrer'
      target='_blank'
    >
      <button className={styles.links_buttons}>Live site</button>
    </a>: null}
    {projects.frontend? <a
    className={styles.link_text}
      href={projects.frontend}
      rel='noopener noreferrer'
      target='_blank'
    >
      <button className={styles.links_buttons}>Frontend Source</button>
    </a>: null}
    {projects.backend? <a
    className={styles.link_text}
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
        <div className={styles.portfolio_tech}>{tech ? tech.map((tech)=> {return <span key={tech} className={styles.tech_used}>{tech}</span>}):null}
        </div>
        </div>
</div>
</div>
    </>
  );
}
