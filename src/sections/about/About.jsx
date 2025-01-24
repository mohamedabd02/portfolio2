import AboutImage from "../../assets/Med.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            As a full stack developer with three years of experience, I'm
            passionate about crafting projects that delight my clients. Having
            served numerous satisfied clients during my time in the industry,
            I'm eager to continue learning and growing in order to create even
            better solutions. Let's collaborate and turn your ideas into
            reality!
          </p>
          <p>
            Hello, I'm Mohamed Abdallah, originally from Tunisia and currently
            residing in Montreal, Canada. I hold a Bachelor's degree in Computer
            Science and a Diploma of College Studies (DEC) in Web and Mobile
            Programming. My educational background showcases my dedication to
            expanding my expertise and staying at the forefront of technology.
            I'm passionate about delivering high-quality solutions and
            collaborating on innovative projects. Check out my resume below, and
            let's create something extraordinary together!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
