import React from 'react';

import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';

import CNIL from '../assets/images/formation/rgpd.png';
import python from '../assets/images/formation/pythonadvance.png';
import php from '../assets/images/formation/php.png';

const CertifStyles = styled.div`
  padding: 10rem 0;
  .container {
    text-align: center;
    .row {
      margin-top: 7rem;
      text-align: center;
      p {
        width: 20%;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
        margin-left: 48rem;
      }
      img {
        width: 50%;
        margin-top: 2rem;
      }
    }
  }
`;

export default function Certifications() {
  return (
    <CertifStyles>
      <div className="container">
        <SectionTitle heading="Certifications" subheading="Mes" />
        <div className="row">
          <SectionTitle heading="" subheading="RGPD" />
          <img src={CNIL} alt="cnil" />
        </div>
        <div className="row">
          <SectionTitle heading="" subheading="Python Intermédiaire" />
          <img src={python} alt="cnil" />
        </div>
        <div className="row">
          <SectionTitle heading="" subheading="PHP - SQL" />
          <img src={php} alt="cnil" />
        </div>
      </div>
    </CertifStyles>
  );
}
