import styles from '../About/AboutStyles.module.css';

function About() {
  return (
    <>
    <section className={styles.container}>
        <div>
            <h1 className='sectionTitle'>About Me</h1>
            <p className={styles.description}>
                Hi, I'm Gauri, a passionate MERN stack developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. 
                As a recent graduate, I've honed my skills through various projects and am eager to apply my knowledge to real-world applications. 
                I am dedicated to continuous learning and am excited to contribute to innovative and dynamic web development projects. 
                Explore my portfolio to see the projects I've worked on and the skills I bring to the table.
            </p>
        </div>
    </section>    
    </>
  )
}

export default About