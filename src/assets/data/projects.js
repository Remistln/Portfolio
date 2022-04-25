import { v4 as uuidv4 } from 'uuid';

import API from '../images/api.png';
import Test from '../images/projects/apisav/test.png';

import Chess from '../images/chess.jpg';
import DebutEchec from '../images/projects/chess/debutechecs.png';
import Roque from '../images/projects/chess/roque.png';
import Promotion from '../images/projects/chess/promotion.png';

import Battleship from '../images/battleship.jpeg';
import DebutGame from '../images/projects/battleship/Debutgame.png';
import Shoot from '../images/projects/battleship/shoot.png';

import Reso from '../images/projreseau.png';
import serviceReso from '../images/servicereso.png';
import archiReso from '../images/archireso.png';

import ValeeDesCroises from '../images/valee.jpg';
import valeeHome from '../images/valeedescoise1.png';
import valeeConnec from '../images/valeedescroiseconnexion.png';
import valeeActi from '../images/valeedescroisesactivite.png';

import Hopital from '../images/hopital.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'API Easy SAV',
    desc:
      "API permettant de lier un service à une base de données de techniciens et d'interventions",
    img: API,
    type: 'Projet EPSI',
    techno: 'Python',
    link: '/projects/apieasysav',
    imgun: API,
    textun:
      "Ce projet d'API a été conçu dans le cadre d'un projet de fin de module de python en 2e année. Le sujet consistait à créer une API permettant la liaison entre un site (fictif) et une base de données, afin que des techniciens puissent enregistrer des interventions.Pour cela, j'ai créée 2 classes qui correspondent chacune à des tables dans la base de données : technicien et intervention. A l'aide de la bibliotheque 'SqlLite3' de python, je pouvais alors l'utiliser pour créer notre base de données, puis la modifier.",
    imgdeux: '',
    textdeux:
      "La technologie utilisée ici est 'Flask', un framework python permettant de créer les routes de l'API. De plus, j'ai utilisé le logiciel postman pour pour voir ce que les requètes nous renvoies. Lorsque la route en méthode 'GET' de l'API est utilisée dans postman pour récupérer des interventions, cela renvois un fichier json, qu'il faudra ensuite transformer en objet python à l'aide d'une fonction. Et inversement, transformer un objet python en JSON pour la méthode POST.",
    imgtrois: Test,
    texttrois:
      "Enfin, pour évaluer l'intégration de chaque fonction, j'ai utilisé des tests unitaires sur chacune d'entre elle.",
  },
  {
    id: uuidv4(),
    name: 'Bataille navale',
    desc:
      'Jeu de bataille navale utilisant le terminal jouable a 2 ou contre une IA',
    img: Battleship,
    type: 'Projet EPSI',
    techno: 'Python',
    link: '/projects/battleship',
    imgun: DebutGame,
    textun:
      "Dans le cadre d'une évaluation de fin de module en Python en première année, j'ai dû effectuer un programme en python permettant de jouer à la bataille navale directement depuis le terminal.Tout d'abord jouable a 2 personne, le jeu peut maintenant se jouer contre une IA.",
    imgdeux: Shoot,
    textdeux:
      "Ici, les bateaux sont générés aléatoirement. Il y en a un de 5, 4, 2 et 1, et deux de 3. L'adversaire l'emporte lorsqu'il parvient à détruire les 18 cases adverses.",
    imgtrois: '',
    texttrois:
      'Une seule classe a été utilisée pour faire ce programme. Elle regroupe une multitude de fonctions permettant de créer et afficher le plateau, de créer et placer les bateaux aléatoirement, mais également de pouvoir tirer sur un bateau ennemi.',
  },
  {
    id: uuidv4(),
    name: 'Echecs',
    desc: "Jeu d'échecs utilisant le terminal a 2 joueurs ou contre une IA",
    img: Chess,
    type: 'Projet EPSI',
    techno: 'Python',
    link: '/projects/chess',
    imgun: DebutEchec,
    textun:
      "Dans le cadre d'une évaluation de fin de module en Python en première année, j'ai dû effectuer un programme en python permettant de jouer aux échecs à travers le terminal.Tout d'abord jouable a 2 personne, le jeu peut maintenant se jouer contre une IA.",
    imgdeux: Roque,
    textdeux:
      "Le programme est divisé en plusieures classes. Tout d'abord la classe 'echec', qui instancie le plateau de jeu et les règles de victoires. Puis la classe mère 'Piece', utilisée pour definir les règles de deplacement de chaque pièce, et les conditions de tours speciaux (le grand et petits roque). Et enfin les classes de chaque pièce (classe cavalier, tours, ...) utilisées pour les deplacements spéciaux qui héritent de la classe mère 'Piece'.",
    imgtrois: Promotion,
    texttrois:
      "De plus d'autres règles sont présentes, comme le fait de pouvoir avancer de 2 cases au premier tour de chaque pion, ou même de promouvoir le pion en le transformant en une autre unité. Pour savoir si un roi est en échec, le programme va regarder tous les coups possibles de chaque pièce. Si un de ces coups se trouve sur la case du roi, il est en echec. Si tous les mouvements possibles du roi se trouvent sur des cases à risque, c'est échec et mat.",
  },
  {
    id: uuidv4,
    name: 'Projet Réseau',
    desc: "Création d'un réseau informatique",
    img: Reso,
    type: 'Projet EPSI',
    techno : 'Materiel informatique, Windows server',
    link: '/projects/projetreseau',
    imgun: serviceReso,
    textun: "Dans le cadre d'un projet réseau, nous avons effectué en groupe la mise en place d'un système d'information. Nous avions du mettre en place et configurer un switch, un system de virtualisation, un serveur web, un serveur de base de données, etc.",
    imgdeux: archiReso,
    textdeux: 'Nous avions du suivre les directives de prestations souhaitées avec un pdf expliquant l\'architecture du réseau à créer, toutes les normes a suivre, les règles d\'utilisations des ressources, et les différents services à mettre en place.',
    texttrois: 'Enfin, nous devions le déployer en liant notre system informatique à ceux que les autres ont fait, pour simuler le fait que nous nous connections à d\'autres pays.'
  },
  {
    id: uuidv4(),
    name: 'Site Camping',
    desc: "Site de camping à l'occasion d'un projet de groupe",
    img: ValeeDesCroises,
    type: 'Projet EPSI',
    techno: 'PHP - SQL',
    link: '/projects/camping',
    imgun: valeeHome,
    textun: "Dans le cadre d'un projet de création d'un site web, nous avons développé un site web de site de camping sur le thème de films pour une entreprise de camping fictive. Le but de ce site etant de présenter les différents camping et services que propose l'entreprise, en plus de fournir une possibilité de réserver une place dans un de ces camping.",
    imgdeux: valeeConnec,
    textdeux: "Pour cela, nous avons utilisé le language PHP. Nous pouvons nous connecter en tant que client, dans quel cas nous pouvons voir la liste des campings disponible, leurs services, et prendre une réservation pour un camping pendant une semaine. Du coté de l'administrateur, nous pouvons voir toutes les réservations, ainsi que les personnes les ayant prises, et annuler une de ces réservations si besoin.",
    imgtrois: valeeActi,
    texttrois: "Tous ces éléments ont été demandé par l'entreprise fictive. Ce travail a été effectué en mode projet en utilisant le service Web 'Trello' pour planifier les tâches de chaqun. "
  },
  {
    id: uuidv4(),
    name: 'Hôpital',
    desc:
      "Projet Symfony permettant a un infirmier de récupérer ou de modifier des informations des patients d'un hôpital",
    img: Hopital,
    type: 'Projet EPSI',
    techno: 'SYMFONY',
    link: '/projects/hopital',
    textun: 'Dans le cadre d\'un projet transversal, j\'ai du développer une application de gestion de séjour de patient. Cette aplication serait utilisé par les infirmiers. Pour cela, j\'ai reçu un pdf avec tous les besoins et les contrainte que l\'hopital (fictif) nous a fourni. ',
    textdeux: 'Ainsi, tout au long de ce projet, j\'ai effectué la planification de projet avec le service web Trello. De plus, j\'ai effectué l\'analyse et la visualisations des différents objectifs sur Miro. Il a été décidé de développer l\'application sur symfony, un framework PHP.',
    texttrois: 'Enfin, après le devéloppement de l\'application, nous avions du le mettre en production en mettant en place un serveur de production sur notre machine. De plus, afin d\'accompagner les utilisateur, nous avons rédigé une documentation technique et une documentation utilisateur. ',
  },
];

export default projects;
