import reactImg from '../assets/react-core-concepts.png'
import '../index.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(3)]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }