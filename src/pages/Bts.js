import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import BtsSection from '../components/BtsSection';

const BtsStyles = styled.div`
  margin-top: 10rem;
`;

export default function Bts() {
  return (
    <BtsStyles>
      <div className="container">
        <SectionTitle heading="Grille BTS" subheading="" />
        <BtsSection />
      </div>
    </BtsStyles>
  );
}
