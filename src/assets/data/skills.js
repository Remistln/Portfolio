import { v4 as uuidv4 } from 'uuid';

//EN COURS

// Gerer le atrimoine info
import archiReso from '../images/archireso.png';
import zabbix from '../images/zabbix.png';
import sauvegarde from '../images/sauvegardesgithub.png'
import ocsinventory from '../images/ocscomputer.png'

//  Incidents
import githubincident from '../images/githubprobleme.png'
import ocsprobleme from '../images/ocsinventoryerror.png'

// Valorisation entreprise
import instavaleedescroises from '../images/instacroises.png'
import valeeHome from '../images/valeedescoise1.png'

// Mode Projet
import trello from '../images/trello.png'
import projectlibre from '../images/projectlibre.png'

// Mettre a disposition
import testUnit from '../images/projects/apisav/test.png'
import netflify from '../images/netlify.png'
import docUtilisateur from '../images/docutilisateur.png'

//Dev perso
import pycharm from '../images/pycharm.png'
import veilleTechno from '../images/veilletechno.png'
import portfolio from '../images/portfolio.png'

// STAGE 1

// Gerer le patrimoine info
import stage1Github from '../images/stage1_github.png'

// Valorisation entreprise
import stage1Dico from '../images/stage1_dicodonnees.png'
import stage1Connexion from '../images/stage1_connexion.png'

// Projet
import stage1Trello from '../images/stage1_trello.png'

// Mettre a dispo
import stage1Docu from '../images/stage1_docu.png'

// Projet pro
import stage1PhpStorm from '../images/stage1_phpstorm.png'
import stage1Maxime from '../images/stage1_maxime.png'

const skills = [
  {
    id: 1,
    title: 'Gérer le patrimoine informatique',
    link: '/skill/1',
    items: [
      {
        id: uuidv4(),
        title:
          'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        texte : "Dans le cadre d'un projet réseau, nous avions du mettre en place un système réseau en nous basant sur " +
            "un référenciel des adresses ip, de l'architecture.",
        img : archiReso
      },
      {
        id: uuidv4(),
        title:
          'Recenser et identifier les ressources numériques & Vérifier les conditions de la continuité d’un service informatique',
        texte : "Pendant nos cours de supervisions, nous avions du mettre en place un outil de supervision de notre " +
            "choix. Nous avions choisis d'utiliser Zabbix. Zabbix est un outil permettant de superviser le hardware " +
            "comme le software. Dans ce projet, nous avions un serveur web et un routeur à monitorer.",
        img : zabbix
      },
      {
        id: uuidv4(),
        title: 'Gérer des sauvegardes',
        texte: "Lors d'un travail de groupe, il se peut qu'une personne exécute une action maladroite et supprime une " +
            "partie ou tout l'application. C'est pourquoi, pour le projet Gestion Patient, nous avons mis n place un " +
            "répertoire github, où nous envoyons notre application afin qu'elle sit stocké. De plus, toutes les " +
            "modification du code du projet se retrouvent sauvegardées, pour revenir en arrière si besoin.",
        img: sauvegarde
      },
      {
        id: uuidv4(),
        title:
          'Recenser et identifier les ressources numériques ',
        texte: "Lors de notre projet d'infrastructure système sous Linux, nous avons dû mettre en place OCSInventory, " +
            "qui est principalement un service pour faire l'inventaire de nos ressources informatiques.",
        img: ocsinventory
      },
    ],
  },
  {
    id: 2,
    title: 'Répondre aux incidents et aux demandes d’assistance et d’évolution',
    link: '/skill/2',
    items: [
      {
        id: uuidv4(),
        title: 'Collecter, suivre et orienter des demandes & Traiter des demandes concernant les applications',
        texte: "Dans le cadre du projet Gestion Patient, dans le github de l'application, nous pouvons envoyer des " +
            "demande de résolution de bug, et y répondre.",
        img: githubincident
      },
      {
        id: uuidv4(),
        title:
          'Traiter des demandes concernant les services réseau et système, applicatifs',
        texte : "Lors d'un projet de supervision, en mettant en place OCSInventory, un service d'inventaire informatique," +
            "Nous pouvions récupérer les problèmes rencontrés par l'hôte au niveau du système et des applications. " +
            "Nous pouvons également effectuer des notifications et messages d'alerte en cas de problèmes critiques " +
            "rencontrés par l'hôte.",
        img : ocsprobleme
      },
    ],
  },
  {
    id: 3,
    title: 'Développer la présence en ligne de l’organisation',
    link: '/skill/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "Dans le cadre d'un projet de création de site 'camping' pour une entreprise fictive, nous avons " +
            "développé un site internet pour visionner les différentes activité du camping, les lieux touristiques à " +
            "proximité, et les réservations.",
        img: valeeHome
      },
      {
        id: uuidv4(),
        title:
          'Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du ' +
            'cadre juridique et des enjeux économiques',
        texte : " Lors du projet de création de site de camping pour une entreprise fictive, nous avons, " +
            "en plus de la création du site web, mis en place un compte instagram, pour mettre en valeur l'entreprise.",
        img : instavaleedescroises
      },
    ],
  },
  {
    id: 4,
    title: 'Travailler en mode projet',
    link: '/skill/4',
    items: [
      {
        id: uuidv4(),
        title: 'Planifier les activités',
        texte : "Dans les projets tels que la création d'une API REST en python, ou encore le projet de Gestion Patient," +
            " nous étions en groupe. Ce pourquoi il fallait se coordonner et planifier des activités. Pour cela, " +
            "nous avons mis en place un trello pour planifier les tâches de chaquns.",
        img : trello
      },
      {
        id: uuidv4(),
        title:
          'Analyser les objectifs et les modalités d’organisation d’un projet',
        texte : "Lors d'un module de gestion de projet, nous devions mettre en place l'organisation d'un " +
            "projet. Pour cela, nous avons mis en place avec le logiciel project libre",
        img : projectlibre
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre à disposition des utilisateurs un service informatique',
    link: '/skill/5',
    items: [
      {
        id: uuidv4(),
        title: 'Réaliser les tests d’intégration et d’acceptation d’un service',
        texte: "Lors d'un projet de creation d'une API REST en python, un des points essentiels était la mise en place " +
            "de tests unitaire pour le bon fonctionnement de l'application. Pour Cela, j'ai utilisé le module 'pytest' " +
            "en python afin de faciliter la mise en place de tests unitaires",
        img : testUnit
      },
      {
        id: uuidv4(),
        title: 'Déployer un service',
        texte : "Afin d'avoir ce portfolio disponible en ligne, j'ai du deployer de projet depuis le github grace a un " +
            "service du nom de netlify. Ce service permet de déployer un site web ou une application depuis un répertoire" +
            " github.",
        img : netflify
      }, 
      {
        id: uuidv4(),
        title:
          'Accompagner les utilisateurs dans la mise en place d’un service',
        texte : "Au terme du projet Gestion Patient, j'ai du rediger une documentation utilisateur afin que " +
            "l'utilisateur puisse mettre en place l'environnement de l'application et utiliser celle-ci.",
        img : docUtilisateur
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son développement professionnel',
    link: '/skill/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d’apprentissage personnel',
        texte : "Lors de plusieurs projets, notemment le projet API SAV et les projets de bataille navele et d'echecs" +
            ", qui devait être fait en python, j'ai du mettre en place mon environnement et des outils afin de pouvoir " +
            "etre plus facilement productif. C'est le cas de Pycharm, un IDE permettant d'etre plus productif avec python.",
        img : pycharm

      },
      {
        id: uuidv4(),
        title:
          'Mettre en œuvre des outils et stratégies de veille informationnelle',
        texte : "En étant à l'EPSI, nous avons du développer un outil de veille informationnelle. J'ai développé cet" +
            "outil en javascript, et en utilisant une API de news pour récupérer les derniers articles d'un site web." +
            "De ce fait, sur cet outil, je peux rechercher des articles avec des mot clés, je peux rechercher des " +
            "articles par thème, et les sauvegarder pour les lire plus tard.",
        img : veilleTechno


      },
      {
        id: uuidv4(),
        title: 'Gérer son identité professionnelle',
        texte : "Pour l'épreuve E5 du BTS, j'ai du créer un portfolio et ressencer diverses compétences. Cependant, " +
            "j'utiliserai ce portfolio dans un but professionnel, afin de pouvoir, lors d'entretiens, présenter divers" +
            "projets effectués.",
        img : portfolio
      },
    ],
  },





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////// STAGE 1 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 1,
    title: 'Gérer le patrimoine informatique',
    link: '/skill/stage1/1',
    items: [
      {
        id: uuidv4(),
        title: 'Gérer des sauvegardes',
        texte: "Dans le cadre de mon 1er stage, lors de la création du service web, nous avons mis le projet sur " +
            "github, afin de pouvoir le versionner et le sauvegarderr en ligne. De ce fait, toutes les modification lié " +
            "au code est sauvegarder, et nous pouvons revenirs aux anciennes versions de l'application quand nous le " +
            "voulons.",
        img: stage1Github
      },
    ],
  },
  {
    id: 3,
    title: 'Développer la présence en ligne de l’organisation',
    link: '/skill/stage1/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "Lors du développement du service web lors de mon premier stage, j'ai du créer et administrer la base" +
            " de données de AllyouNeed. Pour cela, j'ai du faire un dictionnaire des données de l'entreprise",
        img: stage1Dico
      },
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "En développant la partie connexion et inscription du service web, j'ai du utiliser les données de la " +
            "base de données pour savoir si les identifiants et les mots de passe correspondaient avec ce qu'on avait " +
            "mis dans les champs respectifs.",
        img: stage1Connexion
      },
    ],
  },
  {
    id: 4,
    title: 'Travailler en mode projet',
    link: '/skill/stage1/4',
    items: [
      {
        id: uuidv4(),
        title: 'Planifier les activités',
        texte : "Lors de ce stage, pour nous organiser efficacement, nous avons mis en place un Trello, pour que l'on " +
            "puisse savoir quels actions doivent être éffectuées par qui, et ce qu'il reste à faire pour le projet.",
        img : stage1Trello
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre à disposition des utilisateurs un service informatique',
    link: '/skill/stage1/5',
    items: [
      {
        id: uuidv4(),
        title:
            'Accompagner les utilisateurs dans la mise en place d’un service',
        texte : "Au terme du stage, nous avons du rédiger une petite documentation technique sur le fonctionnement de l'application." +
            "J'ai donc, fait la documentation de la base de données et des différentes API recherchées.",
        img : stage1Docu
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son développement professionnel',
    link: '/skill/stage1/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d’apprentissage personnel',
        texte : "Lors de ce stage, j'ai eu l'occasion d'approfondir des technologies que je conaissait. Cependant, " +
            "j'ai également pu travailler sur des nouveaux outils comme PHPStorm, un IDE pour coder en php.",
        img : stage1PhpStorm

      },
      {
        id: uuidv4(),
        title: 'Gérer son identité professionnelle',
        texte : "Ce stage m'a permis d'avoir un aperçu du monde professionnel, et il m'a également permis d'aggrandir " +
            "mon réseau professionnel",
        img : stage1Maxime

      },
    ],
  },
];
export default skills;
