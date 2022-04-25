import React from 'react';
import styled from 'styled-components';
import {Document, Page} from 'react-pdf';
import {Link} from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import stage2021 from '../assets/images/stage.pdf';
import stage2022 from '../assets/images/Rapport de stage 2022.pdf'
import Boutton from '../components/Bouton';
import AboutInfoItem from '../components/AboutInfoItem';
import PText from '../components/PText';

const StageStyled = styled.div`
  padding: 10rem 0;
  text-align: center;
  margin-top: 5rem;

  .stage {
    margin-top: 10rem;
  }
  .realisations{
    h1{
      font-size: 3rem;
    }
    margin-top: 5rem;
  }
  
  
  .realisation{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10rem;
    margin-bottom: 15rem;
    position: relative;
    .title {
      font-size: 1.5rem;
    }
    .items {
      display: flex;
      gap: 1.5rem;
      position: absolute;
      left: 50rem;
    }
    .item {
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 8px;
    }
  }
`;

export default function Stage() {
	return (
		<StageStyled>
			<div className="container">
				<SectionTitle heading="Rapport de Stage" subheading=""/>
				<div className="stage">
					<Boutton btnLink={stage2022} btnText="Stage 2022"/>
				</div>
				<div className="realisations">
					<h1>Réalisations :</h1>
					<div className="realisation">
						<h1 className="title">Réutilisation et modification de la base de données</h1>
						<div className="items">
							<div className="item">
								<PText>Gérer le patrimoine informatique</PText>
							</div>
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
						</div>
					</div>

					<div className="realisation">
						<h1 className="title">Affichage des candidats</h1>
						<div className="items">
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Développer la présence en ligne de l’organisation</PText>
							</div>
							<div className="item">
								<PText>Travailler en mode projet</PText>
							</div>
						</div>
					</div>

					<div className="realisation">
						<h1 className="title">Création des candidats</h1>
						<div className="items">
							<div className="item">
								<PText>Gérer le patrimoine informatique</PText>
							</div>
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Développer la présence en ligne de l’organisation</PText>
							</div>
							<div className="item">
								<PText>Travailler en mode projet</PText>
							</div>
							<div className="item">
								<PText>Mettre à disposition des utilisateurs un service informatique</PText>
							</div>
						</div>
					</div>

					<div className="realisation">
						<h1 className="title">Utilisation d'une IA pour récupérer des compétences</h1>
						<div className="items">
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Travailler en mode projet</PText>
							</div>
							<div className="item">
								<PText>Développer la présence en ligne de l’organisation</PText>
							</div>
							<div className="item">
								<PText>Mettre à disposition des utilisateurs un service informatique</PText>
							</div>
							<div className="item">
								<PText>Organiser son développement professionnel</PText>
							</div>
						</div>
					</div>
				</div>

				<div className="stage">
					<Boutton btnLink={stage2021} btnText="Stage 2021"/>
				</div>
				<div className="realisations">
					<h1>Réalisations :</h1>
					<div className="realisation">
						<h1 className="title">Administration de la base de données</h1>
						<div className="items">
							<div className="item">
								<PText>Gérer le patrimoine informatique</PText>
							</div>
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Organiser son développement professionnel</PText>
							</div>
						</div>
					</div>

					<div className="realisation">
						<h1 className="title">Systeme d'inscription et de connexion à l'application</h1>
						<div className="items">
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Développer la présence en ligne de l’organisation</PText>
							</div>
							<div className="item">
								<PText>Travailler en mode projet</PText>
							</div>
						</div>
					</div>

					<div className="realisation">
						<h1 className="title">Utilisation d'API tiers</h1>
						<div className="items">
							<div className="item">
								<PText>Répondre aux incidents et aux demandes d’assistance et d’évolution</PText>
							</div>
							<div className="item">
								<PText>Travailler en mode projet</PText>
							</div>
							<div className="item">
								<PText>Mettre à disposition des utilisateurs un service informatique</PText>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StageStyled>
	);
}
