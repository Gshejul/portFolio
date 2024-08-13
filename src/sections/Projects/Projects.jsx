import styles from './ProjectsStyles.module.css';
import multiShop from '../../assets/multiShop.jpg';
import inpol from '../../assets/inpol.jpg';
import TweeterTube from '../../assets/tweeterTube.jpg';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={multiShop}
          link="https://multishop-gauris-projects-075e5361.vercel.app/"
          h3="multiShop"
          p="shop website"
        />
        <ProjectCard
          src={inpol}
          link="https://inpol.vercel.app/"
          h3="inpol"
          p="Polymer services"
        />
        <ProjectCard
          src={TweeterTube}
          link="https://tweetertube.netlify.app/"
          h3="tweeterTube"
          p="Educational App"
        />
        {/* <ProjectCard
          src={fitBoost}
          link=""
          h3="FitBoost"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
