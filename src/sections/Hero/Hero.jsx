import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import LinkedInIcon from '../../assets/linkedin-light.svg'

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of random guy" 
      />
      <img 
        className={styles.colorMode}
        src={themeIcon}  
        alt="Colour mode on" 
      />
    </div>
    <div className={styles.info}> 
      <h1>
        Ashley's face 
        <br />
        soon lol..
      </h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href="https://www.linkedin.com/in/amdricalde/" target="_blank">
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
        </a>
      </span>
    </div>
  </section>;
}

export default Hero;