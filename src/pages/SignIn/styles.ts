import styled from 'styled-components';
import { shade, lighten } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-bg.jpg';

/* Palette HEX
  $color1: #6F6BC0ff;
  $color2: #A888FFff;
  $color3: #40538Cff;
  $color4: #B7B2E7;
  $color5: #f4ede8;
*/

export const Container = styled.div`
  height: 100vh;
  background: #b7b2e7;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 90px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: black;
      }
    }
  }

  > a {
    color: #40538cff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: ${lighten(0.2, '#40538cff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
