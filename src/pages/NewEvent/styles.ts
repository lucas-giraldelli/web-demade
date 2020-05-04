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
    width: 100%;
    margin: 0px auto 21px;
    color: #65656e;
    font-size: 26px;
    font-weight: 500;
    line-height: 31px;
  }
`;

export const CreateEventSection = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);

  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  width: 1080px;
  height: 590px;

  h1 {
    color: #999999;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin: 30px auto 30px;
  }

  form {
    display: flex;
    flex-direction: row;
    place-content: center;

    div {
      width: 480px;
    }

    div.primaryDiv,
    div.secondDiv {
      margin-top: 30px;
    }

    div + div.secondDiv {
      margin-left: 57px;
      margin-top: 30px;
    }

    input {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    div:nth-of-type(2),
    div:nth-of-type(3) {
      margin-top: 24px;
    }
  }

  button {
    align-self: center;
    width: 480px;
    margin-top: 125px;
  }
`;
