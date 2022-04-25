import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DlButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: var(--gray-1_);
    p {
      color: black;
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function DlButton({ btnLink = 'test', btnText = 'test' }) {
  return (
    <DlButtonStyle>
      {/* <form */}
      {/*  className="button" */}
      {/*  method="get" */}
      {/*  onClick={btnLink} */}
      {/*  onKeyPress="none" */}
      {/*  target="_blank" */}
      {/*  rel="noopener noreferrer" */}
      {/* > */}
      {/*  <p>{btnText}</p> */}
      {/* </form> */}
    </DlButtonStyle>
  );
}
