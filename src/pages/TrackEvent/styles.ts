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

export const TrackEventSection = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);

  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  width: 1080px;
  height: 600px;

  aside {
    max-width: 536px;
    width: 100%;

    header {
      display: flex;
      margin: 18px 0px 20px 48px;
      padding-bottom: 20px;
      border-bottom: 2px solid #7b8b99;
      color: black;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        font-weight: 500;

        & + p {
          margin-left: 195px;
        }

        span {
          text-align: center;
          font-size: 40px;
          color: #6356f5;
        }
      }
    }

    section {
      border-right: 2px solid #7b8b99;

      div {
        display: flex;
        justify-content: center;
        margin-left: 46px;
      }

      p {
        display: flex;
        flex-direction: column;
        place-items: center;
        color: black;
        margin: 40px 0px 40px 0px;
        font-size: 20px;
        font-weight: 500;

        span {
          text-align: center;
          font-size: 40px;
          color: #e88239;
        }
      }

      ul {
        margin: 0px 0px 23px 57px;
        span {
          text-align: center;
          font-size: 20px;
          color: black;
        }
        li {
          list-style: none;
          color: #7b8b99;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }

  div {
    max-width: 450px;
    width: 100%;
    margin-left: 57px;

    h2 {
      margin-top: 78px;
      margin-bottom: 23px;
      color: black;
    }

    div {
      margin-left: 0px;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      color: black;

      li {
        font-size: 18px;
        border-bottom: 1px solid #7b8b99;

        & + li {
          margin-top: 5px;
        }
      }

      li:nth-child(even) {
        svg {
          margin-right: 10px;
          color: green;
        }
      }
      li:nth-child(odd) {
        svg {
          margin-right: 10px;
          color: red;
        }
      }
    }
    nav {
      color: black;
      margin-top: 55px;
      text-align: center;
    }
  }
`;
