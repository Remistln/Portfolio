import {v4 as uuidv4} from "uuid";
import archiReso from "../assets/images/archireso.png";
import styled from "styled-components";
import projects from "../assets/data/projects";
import mediumZoom from "medium-zoom";
import {SRLWrapper} from "simple-react-lightbox";

const SkillStyle = styled.div`
  padding: 10rem 0;
  margin-left: 2rem;
  text-align: center;

  .title {
    margin-bottom: 5rem;
    font-size: 3rem;
  }

  .skill {
    display: flex;

    .div_skill_title {
      width: 40%;
      margin-right: 2rem;
      text-align: center;
      font-size: 1.5rem;
    }

    .div_skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      margin-right: 3rem;

      .skill_text {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 3rem;
      }

      .skill_img {
        max-height: 50%;
        width: auto;
      }
    }
  }
`;

export default function Skill({
	                              skill = {
		                              id: 1,
		                              title: 'Gérer le patrimoine informatique',
		                              items: [
			                              {
				                              id: uuidv4(),
				                              title:
					                              'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
				                              texte: "Dans le cadre d'un projet réseau, nous avions du mettre en place un système réseau en nous basant sur " +
					                              "un référenciel des adresses ip, de l'architecture.",
				                              img: archiReso
			                              },
			                              {
				                              id: uuidv4(),
				                              title:
					                              'jk klhrijwhmigohutghimtrehgiomhceogrmghui',
				                              texte: "Dans le cadre d'un projet réseau, nous avions du mettre en place un système réseau en nous basant sur " +
					                              "un référenciel des adresses ip, de l'architecture.",
				                              img: archiReso
			                              }
		                              ]
	                              }
                              }) {
	return (
		<SkillStyle>
			<h1 className="title">{skill.title}</h1>
			{skill.items.map((item) => (
				<div className="skill">
					<div className="div_skill_title">
						<h2 className="skill_title">{item.title}</h2>
					</div>
					<div className="div_skill">
						<p className="skill_text">{item.texte}</p>
						<SRLWrapper>
							<img className="skill_img" src={item.img} alt=""/>
						</SRLWrapper>
					</div>
				</div>
			))}
		</SkillStyle>
	)
}