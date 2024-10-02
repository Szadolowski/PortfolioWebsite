import ArticleTitle from "./ArticleTitle";
import Paragraph from "./Paragraph";
import ServiceTitle from "./ServiceTitle";
import ServiceItem from "./ServiceItam";
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
      <ServiceItem
        title="Frontend Development"
        icon={"https://img.icons8.com/?size=100&id=PhZcqNXjSCWl&format=png&color=000000"}
      >
        Creating responsive and engaging web applications that prioritize user experience while
        utilizing cutting-edge technologies like React.js and TypeScript.
      </ServiceItem>
    </>
  );
}
