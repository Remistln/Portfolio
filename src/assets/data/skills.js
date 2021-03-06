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
    title: 'G??rer le patrimoine informatique',
    link: '/skill/1',
    items: [
      {
        id: uuidv4(),
        title:
          'Exploiter des r??f??rentiels, normes et standards adopt??s par le prestataire informatique',
        texte : "Dans le cadre d'un projet r??seau, nous avions d?? mettre en place un syst??me r??seau en nous basant sur " +
            "un r??f??rentiel des adresses IP, de l'architecture.",
        img : archiReso
      },
      {
        id: uuidv4(),
        title:
          'Recenser et identifier les ressources num??riques & V??rifier les conditions de la continuit?? d???un service informatique',
        texte : "Pendant nos cours de supervisions, nous avions d?? mettre en place un outil de supervision de notre " +
            "choix. Nous avions choisi d'utiliser Zabbix. Zabbix est un outil permettant de superviser le hardware " +
            "comme le software. Dans ce projet, nous avions un serveur web et un routeur ?? monitorer.",
        img : zabbix
      },
      {
        id: uuidv4(),
        title: 'G??rer des sauvegardes',
        texte: "Lors d'un travail de groupe, il se peut qu'une personne ex??cute une action maladroite et supprime une " +
            "partie ou toute l'application. C'est pourquoi, pour le projet \"Gestion Patient\", nous avons mis en place un " +
            "r??pertoire github, o?? nous envoyons notre application afin qu'elle sit stock??. De plus, toutes les " +
            "modifications du code du projet se retrouvent sauvegard??es, pour revenir en arri??re si besoin.",
        img: sauvegarde
      },
      {
        id: uuidv4(),
        title:
          'Recenser et identifier les ressources num??riques ',
        texte: "Lors de notre projet d'infrastructure syst??me sous Linux, nous avons d?? mettre en place OCSInventory, " +
            "qui est principalement un service pour faire l'inventaire de nos ressources informatiques.",
        img: ocsinventory
      },
    ],
  },
  {
    id: 2,
    title: 'R??pondre aux incidents et aux demandes d???assistance et d?????volution',
    link: '/skill/2',
    items: [
      {
        id: uuidv4(),
        title: 'Collecter, suivre et orienter des demandes & Traiter des demandes concernant les applications',
        texte: "Dans le cadre du projet \"Gestion Patient\", dans le github de l'application, nous pouvons envoyer des " +
            "demandes de r??solution de bug, et y r??pondre.",
        img: githubincident
      },
      {
        id: uuidv4(),
        title:
          'Traiter des demandes concernant les services r??seau et syst??me, applicatifs',
        texte : "Lors d'un projet de supervision, en mettant en place OCSInventory, un service d'inventaire informatique," +
            " nous pouvions r??cup??rer les probl??mes rencontr??s par l'h??te au niveau du syst??me et des applications. " +
            "Nous pouvons ??galement effectuer des notifications et messages d'alerte en cas de probl??mes critiques " +
            "rencontr??s par l'h??te.",
        img : ocsprobleme
      },
    ],
  },
  {
    id: 3,
    title: 'D??velopper la pr??sence en ligne de l???organisation',
    link: '/skill/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
        texte : "Dans le cadre d'un projet de cr??ation d'un site \"camping\" pour une entreprise fictive, nous avons " +
            "d??velopp?? un site internet pour visionner les diff??rentes activit??s du camping, les lieux touristiques ?? " +
            "proximit??, et les r??servations.",
        img: valeeHome
      },
      {
        id: uuidv4(),
        title:
          'Participer ?? la valorisation de l???image de l???organisation sur les m??dias num??riques en tenant compte du ' +
            'cadre juridique et des enjeux ??conomiques',
        texte : " Lors du projet de cr??ation d'un site de camping pour une entreprise fictive, nous avons, " +
            "en plus de la cr??ation du site web, mis en place un compte instagram, pour mettre en valeur l'entreprise.",
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
        title: 'Planifier les activit??s',
        texte : "Dans les projets tels que la cr??ation d'une API REST en python, ou encore le projet \"Gestion Patient\"," +
            " nous ??tions en groupe. Ce pour quoi il fallait se coordonner et planifier des activit??s. Pour cela, " +
            "nous avons mis en place un Trello pour planifier les t??ches de chacun.",
        img : trello
      },
      {
        id: uuidv4(),
        title:
          'Analyser les objectifs et les modalit??s d???organisation d???un projet',
        texte : "Lors d'un module de gestion de projet, nous devions mettre en place l'organisation d'un " +
            "projet. Pour cela, nous avons mis en place avec le logiciel \"Project libre\"",
        img : projectlibre
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre ?? disposition des utilisateurs un service informatique',
    link: '/skill/5',
    items: [
      {
        id: uuidv4(),
        title: 'R??aliser les tests d???int??gration et d???acceptation d???un service',
        texte: "Lors d'un projet de cr??ation d'une API REST en python, un des points essentiels ??tait la mise en place " +
            "de tests unitaires pour le bon fonctionnement de l'application. Pour Cela, j'ai utilis?? le module \"Pytest\" " +
            "en python afin de faciliter la mise en place de tests unitaires.",
        img : testUnit
      },
      {
        id: uuidv4(),
        title: 'D??ployer un service',
        texte : "Afin d'avoir ce portfolio disponible en ligne, j'ai d?? d??ployer de projet depuis le Github grace ?? un " +
            "service du nom de Netlify. Ce service permet de d??ployer un site web ou une application depuis un r??pertoire" +
            " Github.",
        img : netflify
      }, 
      {
        id: uuidv4(),
        title:
          'Accompagner les utilisateurs dans la mise en place d???un service',
        texte : "Au terme du projet \"Gestion Patient\", j'ai d?? r??diger une documentation utilisateur afin que " +
            "l'utilisateur puisse mettre en place l'environnement de l'application et utiliser celle-ci.",
        img : docUtilisateur
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son d??veloppement professionnel',
    link: '/skill/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d???apprentissage personnel',
        texte : "Lors de plusieurs projets, natemment le projet API SAV et les projets de bataille navale et d'??checs" +
            ", qui devait ??tre fait en python, j'ai d?? mettre en place mon environnement et des outils afin de pouvoir " +
            "??tre plus facilement productif. C'est le cas de Pycharm, un IDE permettant d'??tre plus productif avec python.",
        img : pycharm

      },
      {
        id: uuidv4(),
        title:
          'Mettre en ??uvre des outils et strat??gies de veille informationnelle',
        texte : "En ??tant ?? l'EPSI, nous avons d?? d??velopper un outil de veille informationnelle. J'ai d??velopp?? cet" +
            " outil en Javascript, et en utilisant une API de news pour r??cup??rer les derniers articles d'un site web. " +
            "De ce fait, sur cet outil, je peux rechercher des articles avec des mots-cl??s, je peux rechercher des " +
            "articles par th??me, et les sauvegarder pour les lire plus tard.",
        img : veilleTechno


      },
      {
        id: uuidv4(),
        title: 'G??rer son identit?? professionnelle',
        texte : "Pour l'??preuve E4 du BTS, j'ai d?? cr??er un portfolio et recenser diverses comp??tences. Cependant, " +
            "j'utiliserai ce portfolio dans un but professionnel, afin de pouvoir, lors d'entretiens, pr??senter divers" +
            " projets effectu??s.",
        img : portfolio
      },
    ],
  },





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////// STAGE 1 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 1,
    title: 'G??rer le patrimoine informatique',
    link: '/skill/stage1/1',
    items: [
      {
        id: uuidv4(),
        title: 'G??rer des sauvegardes',
        texte: "Dans le cadre de mon 1er stage, lors de la cr??ation du service web, nous avons mis le projet sur " +
            "Github, afin de pouvoir le versionner et le sauvegarder en ligne. De ce fait, toutes les modifications li??es " +
            "au code sont sauvegard??es, et nous pouvons revenir aux anciennes versions de l'application quand nous le " +
            "voulons.",
        img: stage1Github
      },
    ],
  },
  {
    id: 3,
    title: 'D??velopper la pr??sence en ligne de l???organisation',
    link: '/skill/stage1/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
        texte : "Lors du d??veloppement du service web lors de mon premier stage, j'ai d?? cr??er et administrer la base" +
            " de donn??es d'AllyouNeed. Pour cela, j'ai d?? faire un dictionnaire des donn??es de l'entreprise.",
        img: stage1Dico
      },
      {
        id: uuidv4(),
        title:
            'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
        texte : "En d??veloppant la partie connexion et inscription du service web, j'ai d?? utiliser les donn??es de la " +
            "base de donn??es pour savoir si les identifiants et les mots de passe correspondaient avec ce qu'on avait " +
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
        title: 'Planifier les activit??s',
        texte : "Lors de ce stage, pour nous organiser efficacement, nous avons mis en place un Trello, pour que l'on " +
            "puisse savoir quelles actions doivent ??tre effectu?? par qui, et ce qu'il reste ?? faire pour le projet.",
        img : stage1Trello
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre ?? disposition des utilisateurs un service informatique',
    link: '/skill/stage1/5',
    items: [
      {
        id: uuidv4(),
        title:
            'Accompagner les utilisateurs dans la mise en place d???un service',
        texte : "Au terme du stage, nous avons d?? r??diger une petite documentation technique sur le fonctionnement de l'application." +
            " J'ai donc, fait la documentation de la base de donn??es et des diff??rentes API recherch??es.",
        img : stage1Docu
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son d??veloppement professionnel',
    link: '/skill/stage1/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d???apprentissage personnel',
        texte : "Lors de ce stage, j'ai eu l'occasion d'approfondir des technologies que je connaissais. Cependant, " +
            "j'ai ??galement pu travailler sur des nouveaux outils comme PHPStorm, un IDE pour coder en PHP.",
        img : stage1PhpStorm

      },
      {
        id: uuidv4(),
        title: 'G??rer son identit?? professionnelle',
        texte : "Ce stage m'a permis d'avoir un aper??u du monde professionnel, et il m'a ??galement permis d'agrandir " +
            "mon r??seau professionnel.",
        img : stage1Maxime

      },
    ],
  },





  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////// STAGE 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  {
    id: 1,
    title: 'G??rer le patrimoine informatique',
    link: '/skill/stage2/1',
    items: [
      {
        id: uuidv4(),
        title:
            'Exploiter des r??f??rentiels, normes et standards adopt??s par le prestataire informatique',
        texte : "Lors de mon 2e stage, j'ai d?? utiliser et modifier une base de donn??es d??j?? existante, pour cela, " +
            "je devais utiliser le m??me nommage de variable. J'ai donc utilis?? un dictionnaire de donn??es pour recenser" +
            " toutes les donn??es et ajout?? celles que je devais mettre en place.",
        img : stage2Dico
      },
      {
        id: uuidv4(),
        title: 'G??rer des sauvegardes',
        texte: "Dans le cadre de mon 2e stage, lors de la cr??ation de l'application, nous avons utilis?? le projet sur " +
            "Gitlab, qui est en quelque sorte une version priv??e de Github afin de pouvoir le versionner et le " +
            "sauvegarder en ligne. De ce fait, toutes les modifications li??es au code sont sauvegard??es, et nous pouvons " +
            "revenir aux anciennes versions de l'application quand nous le voulons.",
        img: stage2Gitlab
      },
    ],
  },
  {
    id: 3,
    title: 'D??velopper la pr??sence en ligne de l???organisation',
    link: '/skill/stage2/3',
    items: [
      {
        id: uuidv4(),
        title:
            'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
        texte : "Lors du d??veloppement du service web pendant ce 2e stage, j'ai d?? modifier et administrer la base de " +
            "donn??es d??j?? existent de Pelops",
        img: stage2baseDonnees
      },
      {
        id: uuidv4(),
        title:
            'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
        texte : "Lors de l'affichage et la cr??ation de candidats sur le service web, j'ai d?? utiliser les donn??es qui " +
            "??taient stock??es dans la base de donn??es.",
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
        title: 'Planifier les activit??s',
        texte : "Durant ce stage, nous ??tions 3 stagiaires. Pour se r??partir les t??ches et planifier les activit??s, " +
            "nous avons mis en place un Trello. Trello est un service web permettant de planifier des activit??s.",
        img : stage2Trello
      },
      {
        id: uuidv4(),
        title:
            "??valuer les indicateurs de suivi d???un projet et analyser les ??carts",
        texte : "Lors de ce stage, toutes les fins de semaine, nous faisions un appel vocal pour ??changer sur " +
            "notre avancement. De plus, notre ma??tre de stage faisait un bilan sur quelle mission nous allions faire " +
            "la semaine d'apr??s, et quelles missions avaient ??t?? finies ?? temps. Nous regroupions tout cela dans le Trello.",
        img : stage2trelloAvancement
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre ?? disposition des utilisateurs un service informatique',
    link: '/skill/stage2/5',
    items: [
      {
        id: uuidv4(),
        title: 'R??aliser les tests d???int??gration et d???acceptation d???un service',
        texte: "Afin de pouvoir v??rifier la disponibilit?? de la cr??ation des profils dans la base de donn??es, j'ai mis " +
            "en place des fixtures, qui vont nous permettre de cr??er des informations al??atoires. Ces informations " +
            "al??atoires vont ??tre trait??es dans le code comme si nous les avions directement remplis dans des champs." +
            " ?? la suite de la cr??ation de ces informations, nous les regroupons en objets (l'objet profil ou " +
            "l'objet formation par exemple). Enfin, nous les envoyons dans la base de donn??es et nous regardons " +
            "le r??sultat. Si des informations sont enregistr??es dans la base de donn??es, alors la cr??ation de " +
            "profils est fonctionnelle.",
        img : stage2CreationProfil
      },
      {
        id: uuidv4(),
        title:
            'Accompagner les utilisateurs dans la mise en place d???un service',
        texte : "Au terme du stage, j'ai d?? effectuer une documentation technique du projet, afin que les personnes qui " +
            "reprendront le projet puisse savoir comment l'utiliser.",
        img : stage2Docu
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son d??veloppement professionnel',
    link: '/skill/stage2/6',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d???apprentissage personnel',
        texte : "Pendant ma mission de mise en place d'une IA pour r??cup??rer les comp??tences d'un CV, j'ai utilis?? " +
            "ce qu'on appelle un \"notebook\", qui est principalement utilis?? dans le domaine de la data science et de l'IA" +
            ", car il permet de lancer des lignes de code une par une.",
        img : stage2Jupyter

      },
      {
        id: uuidv4(),
        title:
            'Mettre en ??uvre des outils et strat??gies de veille informationnelle',
        texte : "Ce stage m'a permis de prendre conscience de l'??tendue des technologies disponibles et toutes celles " +
            "qui le seront dans le futur. De ce fait, pour ??tre ?? la page et savoir ce qui se passe dans le monde de " +
            "la Tech, je me suis inscrit sur un service de recensement de plusieurs sources du nom de \"feedly\". O?? je " +
            "peux voir en temps r??el les derni??res news.",
        img : stage2News


      },
      {
        id: uuidv4(),
        title: 'D??velopper son projet professionnel',
        texte : "Je suis passionn?? par l'IA depuis quelque temps, mais ce stage, en utilisant un mod??le d'IA, m'a " +
            "confort?? sur le fait que je veux travailler dans ce domaine. ",
      },
    ],
  },
];
export default skills;
