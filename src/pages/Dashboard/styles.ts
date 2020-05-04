import styled from 'styled-components';

/* Palette HEX
  $color1: #6F6BC0ff;
  $color2: #A888FFff;
  $color3: #40538Cff;
  $color4: #B7B2E7;
  $color5: #f4ede8;
*/

export const Container = styled.div`
  height: 100vh;
  background: #f9f9f9;

  display: flex;
  align-items: stretch;
  flex-direction: column;

  h1 {
    max-width: 1080px;
    margin: 0 auto;
    color: #65656e;
    font-size: 26px;
    font-weight: 500;
    line-height: 31px;
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  place-content: center;

  height: 62px;
  width: 1080px;
  max-width: 1080px;
  margin: 36px auto 21px;
`;

export const MenuSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    color: #848597;

    margin-top: 21px;
    width: 523px;
    height: 444px;
    border: 1px solid #a4b0bb;
    border-radius: 8px;
    text-decoration: none;

    background-color: #f1f5f9;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);

    &:hover {
      img {
        filter: brightness(0) invert(1);
      }
      background: #6f6bc0ff;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
      color: #ffffff;
    }

    & + a {
      margin: 21px 0px 0px 18px;
    }

    img {
      filter: invert(51%) sepia(11%) saturate(417%) hue-rotate(199deg)
        brightness(102%) contrast(88%);
    }

    p {
      margin-top: 90px;
      font-size: 32px;
      font-weight: 500;
      line-height: 38px;
    }
  }
`;
