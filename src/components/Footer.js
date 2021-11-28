import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterColumn from './FooterColumn';

const FooterStyle = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Staelen Remi</h1>
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            augue mauris, elementum eget arcu nec, ullamcorper finibus nisi.
            Suspendisse elementum et erat sit amet dapibus. Suspendisse at
            cursus mi, vitae blandit sem. Duis convallis malesuada tellus, vel
            mattis velit faucibus ac.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'BTS',
                path: '/bts',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Infos"
            links={[
              {
                title: '+33628476589',
                path: 'tel:+33628476589',
              },
              {
                title: 'remistpro@gmail.com',
                path: 'mailto:webciafr@gmail.com',
              },
              {
                title: '59126 Linselles, France',
                path:
                  'https://www.google.com/maps/place/59126+Linselles/@50.7366282,2.9323087,11z/data=!3m1!4b1!4m5!3m4!1s0x47c32c65c22d8e0d:0x40af13e81646340!8m2!3d50.739197!4d3.080101',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/rémi-staelen-401ba4204/',
              },
              {
                title: 'Github',
                path: 'https://github.com/Remistln',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Ayan Khan | Designed by web cifar </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
