import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import skills from '../assets/data/skills';

const BtsSectionStyles = styled.div`
  .container {
  }
  .BtsSection__allItems {
    width: 100%;
    display: flex;
    align-items: center;
    .tableaugauche {
      border: 3px solid var(--gray-2);
      width: 150px;
      border-radius: 8px;
      margin-right: 10px;

      .titre {
        border-bottom: 3px solid var(--gray-2);
        h1 {
          margin: 2rem 0;
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .contenant {
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: stretch;
        //border: 1px solid red;

        .items {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 20rem;
          padding: 0 0.5rem;

          .skill {
            display: flex;
            text-align: center;
            justify-content: center;
            height: 100%;
            //border: 1px solid yellow;

            //border: 1px solid red;
            span {
              margin: auto;
              align-items: center;
              width: 100%;
              font-size: 1.5rem;
              //border: 1px solid blue;
            }

            p {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .cours {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
          }

          .stageun {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
          }

          .stagedeux {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
          }
        }
      }
    }
    .tableau {
      display: flex;
      width: 100%;
      border: 3px solid var(--gray-2);
      border-radius: 8px;

      .colonne {
        width: 16.6%;
        border-left: 3px solid var(--gray-2);

        .titre {
          h1 {
            display: flex;
            align-items: center;
            text-align: center;
            height: 55px;
            font-size: 1rem;
          }
        }

        .contenant {
          height: 600px;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          //border: 1px solid red;

          .items {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0 0.5rem;
            border-top: 3px solid var(--gray-2);

            .skillList {
              height: 100%;
              text-align: center;
              font-size: 1rem;
              display: flex;
              align-items: center;
            }
            .vert {
              background-color: green;
              border-bottom: 3px solid var(--gray-2);
            }
            .red {
              background-color: red;
              border-bottom: 3px solid var(--gray-2);
            }
            a {
              height: 15rem;
              background-color: black;
            }
          }
        }
      }
    }
  }
`;

export default function BtsSection({ lien = '' }) {
  return (
    <BtsSectionStyles>
      <div className="container">
        <div className="BtsSection__allItems">
          <div className="tableaugauche">
            <div className="titre">
              <h1>Compétence</h1>
            </div>
            <div className="contenant">
              <div className="items">
                <div className="skill">
                  <span>Réalisation professionnelle</span>
                </div>
                <div className="cours">
                  <span>En cours</span>
                </div>
                <div className="stageun">
                  <span>1er stage</span>
                </div>
                <div className="stagedeux">
                  <span>2e stage</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tableau">
            <div className="colonne">
              <div className="titre">
                <h1>Gérer le patrimoine informatique</h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Recenser et identifier les ressources numériques <br />
                    • Exploiter des référentiels, normes et standards adoptés
                    par le prestataire informatique <br />
                    • Mettre en place et vérifier les niveaux d’habilitation
                    associés à un service
                    <br />
                    • Vérifier les conditions de la continuité d’un service
                    informatique <br />• Gérer des sauvegardes Vérifier le
                    respect des règles d’utilisation des ressources numériques
                  </p>
                  <a className="vert" href="/skill/1">
                    <div className="cours" />
                  </a>
                  <a className="vert" href="/skill/stage1/1">
                    <div className="stageun" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>

            <div className="colonne">
              <div className="titre">
                <h1>
                  Répondre aux incidents et aux demandes d’assistance et
                  d’évolution
                </h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Collecter, suivre et orienter des demandes <br />
                    • Traiter des demandes concernant les applications <br />
                    • Traiter des demandes concernant les services réseau et
                    système, applicatifs
                    <br />
                  </p>
                  <a className="vert" href="/skill/2">
                    <div className="cours" />
                  </a>
                  <a className="red">
                    <div className="stageun" />
                  </a>
                  <a className="red">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>

            <div className="colonne">
              <div className="titre">
                <h1>Développer la présence en ligne de l’organisation</h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Participer à la valorisation de l’image de l’organisation
                    sur les médias numériques en tenant compte du cadre
                    juridique et des enjeux économiques <br />
                    • Référencer les services en ligne de l’organisation et
                    mesurer leur visibilité. <br />
                    • Participer à l’évolution d’un site Web exploitant les
                    données de l’organisation.
                    <br />
                  </p>
                  <a className="vert" href="/skill/3">
                    <div className="cours" />
                  </a>
                  <a className="vert" href="/skill/stage1/3">
                    <div className="stageun" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>

            <div className="colonne">
              <div className="titre">
                <h1>Travailler en mode projet</h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Analyser les objectifs et les modalités d’organisation
                    d’un projet <br />
                    • Planifier les activités <br />
                    • Évaluer les indicateurs de suivi d’un projet et analyser
                    les écarts
                    <br />
                  </p>
                  <a className="vert" href="/skill/4">
                    <div className="cours" />
                  </a>
                  <a className="vert" href="/skill/stage1/4">
                    <div className="stageun" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>

            <div className="colonne">
              <div className="titre">
                <h1>
                  Mettre à disposition des utilisateurs un service informatique
                </h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Réaliser les tests d’intégration et d’acceptation d’un
                    service <br />
                    • Déployer un service <br />
                    • Accompagner les utilisateurs dans la mise en place d’un
                    service
                    <br />
                  </p>
                  <a className="vert" href="/skill/5"
                  >
                    <div className="cours" />
                  </a>
                  <a className="vert" href="/skill/stage1/5">
                    <div className="stageun" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>

            <div className="colonne">
              <div className="titre">
                <h1>Organiser son développement professionnel</h1>
              </div>
              <div className="contenant">
                <div className="items">
                  <p className="skillList">
                    • Mettre en place son environnement d’apprentissage
                    personnel
                    <br />
                    • Mettre en œuvre des outils et stratégies de veille
                    informationnelle <br />
                    • Gérer son identité professionnelle
                    <br />• Développer son projet professionnel
                  </p>
                  <a className="vert" href="/skill/6">
                    <div className="cours" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stageun" />
                  </a>
                  <a className="vert" href="stage">
                    <div className="stagedeux" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BtsSectionStyles>
  );
}
