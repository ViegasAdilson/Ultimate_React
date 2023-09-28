import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="container">
      <Avatar photoName="IMG_1.jpg" name="Avatar" />
      <div className="intro">
        <Intro />
        <ListTech />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img src={props.photoName} alt={props.name} />;
}
function Intro() {
  return (
    <div>
      <h1>Adilson Viegas</h1>
      <p className="paragrafo">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}
function ListTech() {
  return (
    <div className="skilList">
      {skills.map((ski) => (
        <Tech skillObj={ski} />
      ))}
    </div>
  );
}
function Tech({ skillObj }) {
  return (
    <div className="tech" style={{ background: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level === "beginner" && "👶"}</span>
      <span>{skillObj.level === "intermediate" && "👍"}</span>
      <span>{skillObj.level === "advanced" && "💪"}</span>
    </div>
  );
}
