import React from 'react';
import styled from 'styled-components';
import PText from './PText';
// import MapImg from '../assets/images/map.png';
import MapImg from '../assets/images/location.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    width: 300px;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Je suis ici</h3>
          <PText>Linselles, Nord, France</PText>
          <a
            href="https://www.google.com/maps/place/59126+Linselles/@50.7367069,3.0373721,13z/data=!3m1!4b1!4m5!3m4!1s0x47c32c65c22d8e0d:0x40af13e81646340!8m2!3d50.739197!4d3.080101"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
