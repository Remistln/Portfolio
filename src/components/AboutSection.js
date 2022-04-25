import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: inline-block;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .aboutSection {
    align-items: center;
  }
  .section-title {
    text-align: center;
  }
  .para {
    width: 50%;
    margin-top: 2rem;
  }
  .aboutSection__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      text-align: center;
    }
    .aboutSection {
      width: 100%;
    }
  }
  @media only screen and (max-width: 330px) {
    .container {
      text-align: center;
    }
    .aboutSection {
      width: 100%;
    }
    .aboutSection__buttons {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="className">
        <div className="aboutSection">
          <SectionTitle
            className="section-title"
            subheading="Présentation"
            heading="A propos de moi"
          />

          <PText>
            Étudiant en 2ème année d'informatique à l'EPSI de Lille. J'aime le
            potentiel infini que nous offre la programmation.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Projets" />
            <Button btnLink="/about" btnText="En savoir plus" />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
