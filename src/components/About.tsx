import ArticleTitle from "./ArticleTitle";
import Paragraph from "./Paragraph";
import ServiceTitle from "./ServiceTitle";
import ServiceItem from "./ServiceItam";

interface serviceItemType {
  title: string;
  icon: string;
  description: string;
}

const SERVICEITEMS: serviceItemType[] = [
  {
    title: "Frontend Development",
    icon: "https://img.icons8.com/?size=100&id=PhZcqNXjSCWl&format=png&color=000000",
    description:
      " Creating responsive and engaging web applications that prioritize user experience while utilizing cutting-edge technologies like React.js and TypeScript.",
  },
  {
    title: "Quality Assurance",
    icon: "https://img.icons8.com/?size=100&id=121319&format=png&color=000000",
    description:
      "Conducting thorough testing to ensure high-quality code and a seamless user experience, delivering reliable applications every time.",
  },
  {
    title: "API Integration",
    icon: "https://img.icons8.com/?size=100&id=121319&format=png&color=000000",
    description:
      "Integrating third-party APIs to expand functionality and provide users with enhanced features, making applications more versatile.",
  },
  {
    title: "Performance Optimization",
    icon: "https://img.icons8.com/?size=100&id=VWymbD0s5esn&format=png&color=000000",
    description:
      "Continuously refining code to improve application speed and efficiency, ensuring optimal performance across all devices.",
  },
];

export default function About() {
  return (
    <>
      <ArticleTitle>About Me</ArticleTitle>
      <Paragraph>
        Hello! I'm Rafał Curzydło, a passionate Frontend Developer with a flair for creating
        intuitive, modern web applications. My coding journey began at the age of 14, and since
        then, I've built a solid foundation in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>,
        expanding into
        <b>React.js</b> and <b>TypeScript</b>.
      </Paragraph>
      <Paragraph>
        I thrive on solving complex problems through clean and efficient code, ensuring that my
        solutions are not only effective but also maintainable. While I understand the importance of
        design, my primary passion is creating seamless interactions and enhancing user experiences
        through high-quality coding practices.
      </Paragraph>
      <Paragraph>
        Currently, I am actively seeking new opportunities to further develop my skills and
        contribute to innovative projects. I believe in continuous growth and learning in this
        dynamic field, and I'm excited about the prospect of joining a team where I can make a
        meaningful impact.
      </Paragraph>
      <ServiceTitle>What I`m Doing</ServiceTitle>

      {SERVICEITEMS.map((item: serviceItemType, index: number) => (
        <ServiceItem key={index} title={item.title} icon={item.icon}>
          {item.description}
        </ServiceItem>
      ))}
    </>
  );
}
