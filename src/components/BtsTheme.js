import React from 'react';
import styled from 'styled-components';
import BtsSkills from './BtsSkills';
import skills from '../assets/data/skills';

const BtsThemeStyles = styled.div`
  border: 2px solid white;
`;

export default function BtsTheme({ id = false, title = 'Theme du bts' }) {
  return (
    <BtsThemeStyles>
      <div className="heading">
        <h3>{title}</h3>
      </div>
      <div className="BtsTheme__skills">
        {skills.map((theme, index) => [
          <h1>
            {theme.items.map((skill) => (
              <BtsSkills skill={skill.title} />
            ))}
          </h1>,
        ])}
      </div>
    </BtsThemeStyles>
  );
}
