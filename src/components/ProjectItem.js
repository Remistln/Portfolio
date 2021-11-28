import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';
import BtsSkills from './BtsSkills';
import ProjectInfo from '../assets/data/projects';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      width: 100%;
      }
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__techno, 
  .projectItem__type{
    width: 100%;
    font-size: 1.6rem;
    margin-top: 2rem;
    span{
      margin-left: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project name',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type = 'none',
  techno = 'none',
}) {
  return (
    <ProjectItemStyle>
      <Link to={`/projects/${title}`} className="projectItem__img">
        <img src={img} alt="Project img" />
      </Link>
      <div className="projectItem__info">
        <Link to={`/${title}`}>
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <p className="projectItem__type">
          <th>Type :</th>
          <span>{type}</span>
        </p>
        <p className="projectItem__techno">
          <th>Technologies :</th>
          <span>{techno}</span>
        </p>
      </div>
    </ProjectItemStyle>
  );
}
