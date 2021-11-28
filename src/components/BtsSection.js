import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import skills from '../assets/data/skills';

const BtsSectionStyles = styled.div`
  // Style de l aversion principale
  //.BtsTheme {
  //  height: 700px;
  //  width: 100%;
  //  padding-top: 5rem;
  //  border: 1px solid white;
  //  .heading {
  //    font-size: 2rem;
  //  }
  //  .BtsTheme__skills {
  //    height: 100%;
  //    width: 100%;
  //    text-align: center;
  //    .btsSkill {
  //      width: 100%;
  //      height: 100%;
  //      border: 1px solid blue;
  //
  //      .BtsSkills__skill {
  //        transform: rotate(-90deg);
  //        border: 1px solid black;
  //      }
  //      .BtsSkills__cours,
  //      .BtsSkills__stage1,
  //      .BtsSkills__stage2 {
  //        height: 5rem;
  //        background-color: black;
  //      }
  //    }
  //  }
  //}

  // STYLE de la version lignes
  .BtsTheme {
    height: 700px;
    width: 100%;
    padding-top: 5rem;
    border: 1px solid white;
    .heading {
      font-size: 2rem;
      tr {
        border: 1px solid white;
      }
    }
    .BtsTheme__skills {
      height: 100%;
      width: 100%;
      text-align: center;
      .btsSkill {
        width: 100%;
        height: 100%;
        border: 1px solid blue;

        .BtsSkills__skill {
          transform: rotate(-90deg);
          border: 1px solid black;
        }
        .BtsSkills__cours,
        .BtsSkills__stage1,
        .BtsSkills__stage2 {
          height: 5rem;
          background-color: black;
        }
      }
    }
  }
`;

export default function BtsSection() {
  return (
    <BtsSectionStyles>
      <div className="BtsSection__allItems">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          navigation
          // breakpoints={{
          //   // When windows width is >= 640px
          //   100: {
          //     slidesPerView: 1,
          //   },
          //   // When windows width is >= 768px
          //   640: {
          //     slidesPerView: 2,
          //   },
          //   // When windows width is >= 1200px
          //   1200: {
          //     slidesPerView: 3,
          //   },
          // }}
        >
          {skills.map((theme) => (
            <SwiperSlide key={theme.id}>
              {/* Version Ligne */}
              {/* <table className="BtsTheme"> */}
              {/*  <thead className="heading"> */}
              {/*    <tr> */}
              {/*      <th>{theme.title}</th> */}
              {/*    </tr> */}
              {/*  </thead> */}
              {/*  <tbody className="BtsTheme__skills"> */}
              {/*    <tr className="BtsSkills__skill"> */}
              {/*      {theme.items.map((skill) => ( */}
              {/*        <td> */}
              {/*          <p>{skill.title}</p> */}
              {/*        </td> */}
              {/*      ))} */}
              {/*    </tr> */}
              {/*    <tr> */}
              {/*      {theme.items.map(() => ( */}
              {/*        <td className="test"> */}
              {/*          <div className="BtsSkills__cours" /> */}
              {/*        </td> */}
              {/*      ))} */}
              {/*    </tr> */}
              {/*    <tr> */}
              {/*      <td> */}
              {/*        <div className="BtsSkills__stage1" /> */}
              {/*      </td> */}
              {/*    </tr> */}
              {/*    <tr> */}
              {/*      {theme.items.map(() => ( */}
              {/*        <td> */}
              {/*          <div className="BtsSkills__stage2" /> */}
              {/*        </td> */}
              {/*      ))} */}
              {/*    </tr> */}
              {/*  </tbody> */}
              {/* </table> */}
              {/* Version Principale */}
              <table className="BtsTheme">
                <thead className="heading">
                  <tr>
                    <th>{theme.title}</th>
                  </tr>
                </thead>
                <tbody className="BtsTheme__skills">
                  {theme.items.map((skill) => (
                    <td>
                      <table className="btsSkill">
                        <tr className="BtsSkills__skill">
                          <td>
                            <p>{skill.title}</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="test">
                            <div className="BtsSkills__cours" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="BtsSkills__stage1" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="BtsSkills__stage2" />
                          </td>
                        </tr>
                      </table>
                    </td>
                  ))}
                </tbody>
              </table>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </BtsSectionStyles>
  );
}
