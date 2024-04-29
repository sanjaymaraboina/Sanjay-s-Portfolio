import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Admin dashboard",
    img: "https://themewagon.com/wp-content/uploads/2022/05/screencapture-technext-github-io-darkpan-2022-05-10-09_44_07-1.png",
    desc: "Here it is: ReactJS-driven is a powerful admin dashboard that streamlines company administration. Examine dynamic graphs that show the company's financial status and the careful balancing of sales, expenses, and revenue. which guarantees a smooth and user-friendly experience. You may effortlessly handle transactions and merchandise by using it as your control centre. Every detail is correct, and it is easy to add, remove, and modify. See how this admin dashboard, which takes business insights to new heights, strikes the perfect mix between state-of-the-art technology and user-friendly",
    skill: "#React #CSS #HTML",
    url: "https://sanjaymaraboina.github.io/koundinya/",
  },
  {
    id: 2,
    title: "Tech Evaluation Edu tech ",
    img: "https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "This project rethinks the digital experience with its fluid navigation via the Home, About, Services, and Contact areas. Discover the genius of our group with in-depth summaries of six exceptional workers elegantly displayed on the sidebar. Our dynamic and user-friendly platform has been created with the help of React. Absorb the future of technology-based learning with ease. Discover 'Tech Evaluation' right now!",
    skill: "#React #CSS #HTML",
    url: "https://sanjaymaraboina.github.io/TechEvalution",
  },
  {
    id: 3,
    title: "A1 Drive.in",
    img: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Welcome to 'A1-Drive.in,' where digital innovation and the art of dining collide. Our restaurant websitestreamlines your experience while also tantalising your taste buds with a wide variety of gastronomic options. Experience a world of flavours and information as you browse through the Home, Services, About, and Contact areas with ease.In addition to the culinary experience, our platform offers a smooth invoicing system that computes your order and GST automatically",
    skill: "#Javascript #CSS #HTML",
    url: "https://sanjaymaraboina.github.io/GST-DOM/",
  },
  {
    id: 4,
    title: "Samaha Connect Widely",
    img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Samaha is a travel website that caters to explorers looking to discover new destinations. It offers comprehensive guides, tips, and user-generated content to help travelers plan their adventures effectively. With a focus on user-friendly features and community engagement, Samaha is the go-to platform for those seeking travel inspiration and guidance.",
    skill: "#Javascript #CSS #HTML",
    url: "https://sanjaymaraboina.github.io/form-validation/",
  },
  {
    id: 4,
    title: "Samaha Connect Widely",
    img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Samaha is a travel website that caters to explorers looking to discover new destinations. It offers comprehensive guides, tips, and user-generated content to help travelers plan their adventures effectively. With a focus on user-friendly features and community engagement, Samaha is the go-to platform for those seeking travel inspiration and guidance.",
    skill: "#Javascript #CSS #HTML",
    url: "https://sanjaymaraboina.github.io/form-validation/",
  },

];

const Single = ({ item, getSkillColor }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              {item.skill.split(" ").map((skill, index) => (
                <span
                  key={index}
                  style={{ marginRight: "8px", color: getSkillColor(index) }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const getSkillColor = (index) => {
    const colors = ["#6495ed", "#e4007c ", "#bcd426", "orange"];
    return colors[index % colors.length];
  };

  return (
    <div className="projects" ref={ref} id="projects">
      <div className="progress">
        <div className="wave">
          <span style={{ "--i": 1 }}>P</span>
          <span style={{ "--i": 2 }}>r</span>
          <span style={{ "--i": 3 }}>o</span>
          <span style={{ "--i": 4 }}>j</span>
          <span style={{ "--i": 5 }}>e</span>
          <span style={{ "--i": 6 }}>c</span>
          <span style={{ "--i": 7 }}>t</span>
          <span style={{ "--i": 8 }}>s</span>
        </div>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
     <div className="project-lists">
     {items.map((item) => (
        <Single item={item} key={item.id} getSkillColor={getSkillColor} />
      ))}
     </div>
    </div>
  );
};

export default Projects;
