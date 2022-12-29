import Calculator from '../assets/Projects/calculator.webp';
import Weather from '../assets/Projects/weather.webp';
import ToDo from '../assets/Projects/todo.webp';
import CalculatorPNG from '../assets/Projects/calculator.png';
import WeatherPNG from '../assets/Projects/weather.png';
import ToDoPNG from '../assets/Projects/todo.png';
import fmvPNG from '../assets/Projects/fmv.jpg';
import Epc from '../assets/Projects/epc.webp';
import EpcPNG from '../assets/Projects/epc.png';

const projectsArray = [
  {
    title: 'Calculator',
    png: CalculatorPNG,
    webp: Calculator,
    description:
      'A simple calculator application built with HTML/CSS/JS for executing simple calculations.',
    technologies: 'Vanilla JS, CSS, HTML5',
    link: `https://www.chelsea-avery.com/calculator/`
  },
  {
    title: 'Weather',
    png: WeatherPNG,
    webp: Weather,
    description:
      'React application integrating OpenWeather Map API endpoints. User can search by city or zip code.',
    technologies: 'React.js, CSS',
    link: `https://www.chelsea-avery.com/weather/`
  },
  {
    title: 'To-Do',
    png: ToDoPNG,
    webp: ToDo,
    description:
      'Full stack application featuring full CRUD API endpoints, implementing Node with MySQL and Express middleware, React, and FontAwesome.',
    technologies: 'React.js, Node.js, Express.js, MySQL, Rest API, FontAwesome',
    link: `https://todofe.herokuapp.com/`
  },
  {
    title: 'Feed My Vibe',
    png: fmvPNG,
    description:
      'Feed My Vibe utilizes GPT-3: a powerful AI model created by OpenAI. Here, AI generates recipes based on your mood input using a prompt sent through Rest API',
    technologies: 'React.js, CSS',
    link: `https://feedmyvibe.herokuapp.com/`
  },
  {
    title: 'EPC',
    png: EpcPNG,
    webp: Epc,
    description:
      'A simple static website for a counseling center. Hosted and deployed with Netlify.',
    technologies: 'HTML, CSS, HTML5 UP',
    link: `https://golden-dasik-bf6527.netlify.app/`
  }
];

export default projectsArray;
