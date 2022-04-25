import { v4 as uuidv4 } from 'uuid';

const skills = [
  {
    id: 1,
    title: 'Gérer le patrimoine informatique',
    items: [
      {
        id: uuidv4(),
        title: 'Recenser et identifier les ressources numériques',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Vérifier les conditions de la continuité d’un service informatique',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title: 'Gérer des sauvegardes     ',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Vérifier le respect des règles d’utilisation des ressources numériques',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Répondre aux incidents et aux demandes d’assistance et d’évolution',
    items: [
      {
        id: uuidv4(),
        title: 'Collecter, suivre et orienter des demandes ',
        cours: false,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Traiter des demandes concernant les services réseau et système, applicatifs',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title: 'Traiter des demandes concernant les applications',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Développer la présence en ligne de l’organisation',
    items: [
      {
        id: uuidv4(),
        title:
          'Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Référencer les services en ligne de l’organisation et mesurer leur visibilité.',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Travailler en mode projet',
    items: [
      {
        id: uuidv4(),
        title:
          'Analyser les objectifs et les modalités d’organisation d’un projet',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title: 'Planifier les activités',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Évaluer les indicateurs de suivi d’un projet et analyser les écarts',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Mettre à disposition des utilisateurs un service informatique',
    items: [
      {
        id: uuidv4(),
        title: 'Réaliser les tests d’intégration et d’acceptation d’un service',
        cours: true,
        stageun: false,
        stagedeux: false,
        link: '/projects/apieasysav',
      },
      {
        id: uuidv4(),
        title: 'Déployer un service',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Accompagner les utilisateurs dans la mise en place d’un service',
        cours: false,
        stageun: false,
        stagedeux: false,
      },
    ],
  },
  {
    id: 6,
    title: 'Organiser son développement professionnel',
    items: [
      {
        id: uuidv4(),
        title: 'Mettre en place son environnement d’apprentissage personnel',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title:
          'Mettre en œuvre des outils et stratégies de veille informationnelle',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title: 'Gérer son identité professionnelle',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
      {
        id: uuidv4(),
        title: 'Développer son projet professionnel',
        cours: true,
        stageun: true,
        stagedeux: false,
      },
    ],
  },
];

export default skills;
