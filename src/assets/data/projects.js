import { v4 as uuidv4 } from 'uuid';
import Chess from '../images/chess.jpg';
import Battleship from '../images/battleship.jpeg';
import VoyageR from '../images/voyager.png';
import ValeeDesCroises from '../images/valee.jpg';
import Sightseeing from '../images/Sightseeing.jpg';
import API from '../images/api.png';
import Hopital from '../images/hopital.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Chess',
    desc: "Jeu d'échecs utilisant le terminal a 2 joueurs ou contre une IA",
    img: Chess,
    type: 'School project',
    techno: 'Python',
  },
  {
    id: uuidv4(),
    name: 'Battleship',
    desc:
      'Jeu de bataille navale utilisant le terminal jouable a 2 ou contre une IA',
    img: Battleship,
    type: 'School project',
    techno: 'Python',
  },
  {
    id: uuidv4(),
    name: 'VoyageR',
    desc:
      "Blog de voyage au travers de la VR, 1er site web à l'occation d'un projet de début de première année,",
    img: VoyageR,
    contain: true,
    type: 'School project',
    techno: 'HTML - CSS',
  },
  {
    id: uuidv4(),
    name: 'Camping Site Project',
    desc: "Site de camping à l'occasion d'un projet de groupe",
    img: ValeeDesCroises,
    type: 'School project',
    techno: 'PHP - SQL',
  },
  {
    id: uuidv4(),
    name: 'Sightseeing tours',
    desc: 'Site de réservations de circuits touristiques',
    img: Sightseeing,
    type: 'School project',
    techno: 'PHP - SQL',
  },
  {
    id: uuidv4(),
    name: 'APIEasySAV',
    desc:
      "API permettant de lier un service à une base de données de techniciens et d'interventions",
    img: API,
    type: 'School project',
    techno: 'Python',
  },
  {
    id: uuidv4(),
    name: 'Hospital',
    desc:
      "Projet Symfony permettant a un infirmier de récupérer ou de modifier des informations des patients d'un hôpital",
    img: Hopital,
    type: 'School project',
    techno: 'SYMFONY',
  },
];

export default projects;
