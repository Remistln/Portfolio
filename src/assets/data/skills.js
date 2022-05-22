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

// Stage 2

// Gerer le patrimoine info
import stage2Dico from '../images/stage2_dicodonnees.png'
import stage2Gitlab from '../images/stage2_gitlab.png'

// Presence en ligne
import stage2baseDonnees from '../images/stage2_basedonnees.png'
import stage2profils from '../images/stage2_users.png'

// Mode projet
import stage2Trello from '../images/stage2_trello.png'
import stage2trelloAvancement from '../images/stage2_trelloavancement.png'

// mettre a disposition
import stage2CreationProfil from '../images/stage2_creationprofil.png'
import stage2Docu from '../images/stage2_docu.png'

// projet pro
import stage2Jupyter from '../images/stage2_jupyter.png'
import stage2News from '../images/stage2_news.png'

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
        texte : "Dans le cadre d'un projet réseau, nous avions dû mettre en place un système réseau en nous basant sur " +
            "un référentiel des adresses IP, de l'architecture.",
        img : archiReso
      },
      {
        id: uuidv4(),
        title:
          'Recenser et identifier les ressources numériques & Vérifier les conditions de la continuité d’un service informatique',
        texte : "Pendant nos cours de supervisions, nous avions dû mettre en place un outil de supervision de notre " +
            "choix. Nous avions choisi d'utiliser Zabbix. Zabbix est un outil permettant de superviser le hardware " +
            "comme le software. Dans ce projet, nous avions un serveur web et un routeur à monitorer.",
        img : zabbix
      },
      {
        id: uuidv4(),
        title: 'Gérer des sauvegardes',
        texte: "Lors d'un travail de groupe, il se peut qu'une personne exécute une action maladroite et supprime une " +
            "partie ou toute l'application. C'est pourquoi, pour le projet \"Gestion Patient\", nous avons mis en place un " +
            "répertoire github, où nous envoyons notre application afin qu'elle sit stocké. De plus, toutes les " +
            "modifications du code du projet se retrouvent sauvegardées, pour revenir en arrière si besoin.",
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
        texte: "Dans le cadre du projet \"Gestion Patient\", dans le github de l'application, nous pouvons envoyer des " +
            "demandes de résolution de bug, et y répondre.",
        img: githubincident
      },
      {
        id: uuidv4(),
        title:
          'Traiter des demandes concernant les services réseau et système, applicatifs',
        texte : "Lors d'un projet de supervision, en mettant en place OCSInventory, un service d'inventaire informatique," +
            " nous pouvions récupérer les problèmes rencontrés par l'hôte au niveau du système et des applications. " +
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
        texte : "Dans le cadre d'un projet de création d'un site \"camping\" pour une entreprise fictive, nous avons " +
            "développé un site internet pour visionner les différentes activités du camping, les lieux touristiques à " +
            "proximité, et les réservations.",
        img: valeeHome
      },
      {
        id: uuidv4(),
        title:
          'Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du ' +
            'cadre juridique et des enjeux économiques',
        texte : " Lors du projet de création d'un site de camping pour une entreprise fictive, nous avons, " +
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
        texte : "Dans les projets tels que la création d'une API REST en python, ou encore le projet \"Gestion Patient\"," +
            " nous étions en groupe. Ce pour quoi il fallait se coordonner et planifier des activités. Pour cela, " +
            "nous avons mis en place un Trello pour planifier les tâches de chacun.",
        img : trello
      },
      {
        id: uuidv4(),
        title:
          'Analyser les objectifs et les modalités d’organisation d’un projet',
        texte : "Lors d'un module de gestion de projet, nous devions mettre en place l'organisation d'un " +
            "projet. Pour cela, nous avons mis en place avec le logiciel \"Project libre\"",
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
        texte: "Lors d'un projet de création d'une API REST en python, un des points essentiels était la mise en place " +
            "de tests unitaires pour le bon fonctionnement de l'application. Pour Cela, j'ai utilisé le module \"Pytest\" " +
            "en python afin de faciliter la mise en place de tests unitaires.",
        img : testUnit
      },
      {
        id: uuidv4(),
        title: 'Déployer un service',
        texte : "Afin d'avoir ce portfolio disponible en ligne, j'ai dû déployer de projet depuis le Github grace à un " +
            "service du nom de Netlify. Ce service permet de déployer un site web ou une application depuis un répertoire" +
            " Github.",
        img : netflify
      }, 
      {
        id: uuidv4(),
        title:
          'Accompagner les utilisateurs dans la mise en place d’un service',
        texte : "Au terme du projet \"Gestion Patient\", j'ai dû rédiger une documentation utilisateur afin que " +
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
        texte : "Lors de plusieurs projets, natemment le projet API SAV et les projets de bataille navale et d'échecs" +
            ", qui devait être fait en python, j'ai dû mettre en place mon environnement et des outils afin de pouvoir " +
            "être plus facilement productif. C'est le cas de Pycharm, un IDE permettant d'être plus productif avec python.",
        img : pycharm

      },
      {
        id: uuidv4(),
        title:
          'Mettre en œuvre des outils et stratégies de veille informationnelle',
        texte : "En étant à l'EPSI, nous avons dû développer un outil de veille informationnelle. J'ai développé cet" +
            " outil en Javascript, et en utilisant une API de news pour récupérer les derniers articles d'un site web. " +
            "De ce fait, sur cet outil, je peux rechercher des articles avec des mots-clés, je peux rechercher des " +
            "articles par thème, et les sauvegarder pour les lire plus tard.",
        img : veilleTechno


      },
      {
        id: uuidv4(),
        title: 'Gérer son identité professionnelle',
        texte : "Pour l'épreuve E4 du BTS, j'ai dû créer un portfolio et recenser diverses compétences. Cependant, " +
            "j'utiliserai ce portfolio dans un but professionnel, afin de pouvoir, lors d'entretiens, présenter divers" +
            " projets effectués.",
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
            "Github, afin de pouvoir le versionner et le sauvegarder en ligne. De ce fait, toutes les modifications liées " +
            "au code sont sauvegardées, et nous pouvons revenir aux anciennes versions de l'application quand nous le " +
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
        texte : "Lors du développement du service web lors de mon premier stage, j'ai dû créer et administrer la base" +
            " de données d'AllyouNeed. Pour cela, j'ai dû faire un dictionnaire des données de l'entreprise.",
        img: stage1Dico
      },
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "En développant la partie connexion et inscription du service web, j'ai dû utiliser les données de la " +
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
            "puisse savoir quelles actions doivent être effectué par qui, et ce qu'il reste à faire pour le projet.",
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
        texte : "Au terme du stage, nous avons dû rédiger une petite documentation technique sur le fonctionnement de l'application." +
            " J'ai donc, fait la documentation de la base de données et des différentes API recherchées.",
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
        texte : "Lors de ce stage, j'ai eu l'occasion d'approfondir des technologies que je connaissais. Cependant, " +
            "j'ai également pu travailler sur des nouveaux outils comme PHPStorm, un IDE pour coder en PHP.",
        img : stage1PhpStorm

      },
      {
        id: uuidv4(),
        title: 'Gérer son identité professionnelle',
        texte : "Ce stage m'a permis d'avoir un aperçu du monde professionnel, et il m'a également permis d'agrandir " +
            "mon réseau professionnel.",
        img : stage1Maxime

      },
    ],
  },





  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////// STAGE 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  {
    id: 1,
    title: 'Gérer le patrimoine informatique',
    link: '/skill/stage2/1',
    items: [
      {
        id: uuidv4(),
        title:
            'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        texte : "Lors de mon 2e stage, j'ai dû utiliser et modifier une base de données déjà existante, pour cela, " +
            "je devais utiliser le même nommage de variable. J'ai donc utilisé un dictionnaire de données pour recenser" +
            " toutes les données et ajouté celles que je devais mettre en place.",
        img : stage2Dico
      },
      {
        id: uuidv4(),
        title: 'Gérer des sauvegardes',
        texte: "Dans le cadre de mon 2e stage, lors de la création de l'application, nous avons utilisé le projet sur " +
            "Gitlab, qui est en quelque sorte une version privée de Github afin de pouvoir le versionner et le " +
            "sauvegarder en ligne. De ce fait, toutes les modifications liées au code sont sauvegardées, et nous pouvons " +
            "revenir aux anciennes versions de l'application quand nous le voulons.",
        img: stage2Gitlab
      },
    ],
  },
  {
    id: 3,
    title: 'Développer la présence en ligne de l’organisation',
    link: '/skill/stage2/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "Lors du développement du service web pendant ce 2e stage, j'ai dû modifier et administrer la base de " +
            "données déjà existent de Pelops",
        img: stage2baseDonnees
      },
      {
        id: uuidv4(),
        title:
            'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        texte : "Lors de l'affichage et la création de candidats sur le service web, j'ai dû utiliser les données qui " +
            "étaient stockées dans la base de données.",
        img: stage2profils
      },
    ],
  },
  {
    id: 4,
    title: 'Travailler en mode projet',
    link: '/skill/stage2/4',
    items: [
      {
        id: uuidv4(),
        title: 'Planifier les activités',
        texte : "Durant ce stage, nous étions 3 stagiaires. Pour se répartir les tâches et planifier les activités, " +
            "nous avons mis en place un Trello. Trello est un service web permettant de planifier des activités.",
        img : stage2Trello
      },
      {
        id: uuidv4(),
        title:
            "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
        texte : "Lors de ce stage, toutes les fins de semaine, nous faisions un appel vocal pour échanger sur " +
            "notre avancement. De plus, notre maître de stage faisait un bilan sur quelle mission nous allions faire " +
            "la semaine d'après, et quelles missions avaient été finies à temps. Nous regroupions tout cela dans le Trello.",
        img : stage2trelloAvancement
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre à disposition des utilisateurs un service informatique',
    link: '/skill/stage2/5',
    items: [
      {
        id: uuidv4(),
        title: 'Réaliser les tests d’intégration et d’acceptation d’un service',
        texte: "Afin de pouvoir vérifier la disponibilité de la création des profils dans la base de données, j'ai mis " +
            "en place des fixtures, qui vont nous permettre de créer des informations aléatoires. Ces informations " +
            "aléatoires vont être traitées dans le code comme si nous les avions directement remplis dans des champs." +
            " À la suite de la création de ces informations, nous les regroupons en objets (l'objet profil ou " +
            "l'objet formation par exemple). Enfin, nous les envoyons dans la base de données et nous regardons " +
            "le résultat. Si des informations sont enregistrées dans la base de données, alors la création de " +
            "profils est fonctionnelle.",
        img : stage2CreationProfil
      },
      {
        id: uuidv4(),
        title:
            'Accompagner les utilisateurs dans la mise en place d’un service',
        texte : "Au terme du stage, j'ai dû effectuer une documentation technique du projet, afin que les personnes qui " +
            "reprendront le projet puisse savoir comment l'utiliser.",
        img : stage2Docu
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son développement professionnel',
    link: '/skill/stage2/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d’apprentissage personnel',
        texte : "Pendant ma mission de mise en place d'une IA pour récupérer les compétences d'un CV, j'ai utilisé " +
            "ce qu'on appelle un \"notebook\", qui est principalement utilisé dans le domaine de la data science et de l'IA" +
            ", car il permet de lancer des lignes de code une par une.",
        img : stage2Jupyter

      },
      {
        id: uuidv4(),
        title:
            'Mettre en œuvre des outils et stratégies de veille informationnelle',
        texte : "Ce stage m'a permis de prendre conscience de l'étendue des technologies disponibles et toutes celles " +
            "qui le seront dans le futur. De ce fait, pour être à la page et savoir ce qui se passe dans le monde de " +
            "la Tech, je me suis inscrit sur un service de recensement de plusieurs sources du nom de \"feedly\". Où je " +
            "peux voir en temps réel les dernières news.",
        img : stage2News


      },
      {
        id: uuidv4(),
        title: 'Développer son projet professionnel',
        texte : "Je suis passionné par l'IA depuis quelque temps, mais ce stage, en utilisant un modèle d'IA, m'a " +
            "conforté sur le fait que je veux travailler dans ce domaine. ",
      },
    ],
  },
];
export default skills;
