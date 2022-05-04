import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import projects from "../assets/data/projects";
import AboutInfoItem from "../components/AboutInfoItem";

const ProjectStyle = styled.div`
  padding: 10rem 0;

  .premligne {
    margin-top: 5rem;
  }
  .premligne,
  .deuxligne,
  .troisligne {
    display: flex;
    align-items: center;
    img {
      width: 30%;
    }
    p {
      width: 100%;
      font-size: 2rem;
      text-align: justify;
    }
    img,
    p {
      margin: 2rem;
    }
  }
`;

export default function Project({
  name = 'Project Name',
  photo1 = 'none',
  textun = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt iure nihil quisquam repellendus sequi sit. Adipisci, beatae dolores eos, esse maiores molestias obcaecati quibusdam quisquam quo ratione sunt velit veniam.',
  photo2 = 'none',
  textdeux = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo libero saepe veritatis. Accusantium aperiam at dolorem facere minima perspiciatis quas repellendus similique ullam veritatis? Impedit nam nemo optio reiciendis?',
  photo3 = 'none',
  texttrois = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo libero saepe veritatis. Accusantium aperiam at dolorem facere minima perspiciatis quas repellendus similique ullam veritatis? Impedit nam nemo optio reiciendis?',
  competences = ['coucou', "non"]
}) {
  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle heading={name} subheading="" />
        <div className="premligne">
          <img src={photo1} alt="" />
          <p>{textun}</p>
        </div>
        <div className="deuxligne">
          <p>{textdeux}</p>
          <img src={photo2} alt="" />
        </div>
        <div className="troisligne">
          <img src={photo3} alt="" />
          <p>{texttrois}</p>
        </div>
         <div className="competences">
           <AboutInfoItem
               title="Compétences utilisées :"
               items={competences}
           />
         </div>
      </div>
    </ProjectStyle>
  );
}
