import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/remi2.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import DlButton from '../components/DLButton';
import CV from '../assets/download/Staelen Rémi.pdf';
import Boutton from '../components/Bouton';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    padding-bottom: 2rem;
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and(max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Bonjour, je suis <span>Remi Staelen</span>
            </p>
            <h2 className="about__heading">Un étudiant en programmation</h2>
            <div className="about__info">
              <PText>
                J'ai 19 ans et je suis en 2ème année à l'EPSI, une école privée
                d'informatique située à Lille.
                <br />
                <br />
                J'ai découvert l'informatique il y a 4 ans et je n'ai jamais
                cessé de de coder depuis. J'aime apprendre de nouveaux langages
                pour élargir mon champ de vision. Cependant, je tends a me
                spécialiser en python afin de pouvoir entrer dans le domaine de
                la datascience.
                <br />
                <br />
                Je veux créer autant d'outils utiles que possible, et rencontrer
                des personnes que je n'aurais pas pu rencontrer ailleurs que
                dans l'informatique.
              </PText>
            </div>
            <Boutton btnText="Télécharger CV" btnLink={CV} />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Remi img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Etablissement actuel"
              items={['EPSI (Seconde année avec option BTS SIO)', 'Lille']}
            />
            <AboutInfoItem
              title="BAC S"
              items={[
                "Section européenne et option Sciences de l'ingénieur",
                'Gustave Eiffel',
                'Armentieres',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Compétences</h1>
            <AboutInfoItem title="Front" items={['HTML', 'CSS', 'JS']} />
            <AboutInfoItem title="Back" items={['PHP', 'SQL']} />
            <AboutInfoItem
              title="Frameworks"
              items={['SYMFONY', 'REACT-JS', 'REACT-NATIVE']}
            />
            <AboutInfoItem title="Data" items={['PYTHON']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">
              Expériences professionelles
            </h1>
            <AboutInfoItem
              title="Stage en Backend"
              items={['ALLYOUNEED', 'Mai - Juin 2021']}
            />
            <AboutInfoItem
              title="Employé administratif"
              items={['Damart', 'été 2020-2021']}
            />
            <AboutInfoItem
              title="Conseil municipal des jeunes"
              items={['Comines', '2011 - 2013']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}
