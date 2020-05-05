import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    position: relative;
    right: 750px;
    color: #606060;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;

    img {
      border-radius: 50%;
      box-shadow: -1px 1px 6px 0 rgba(0, 0, 0, 0.24);
      width: 34px;
      height: 34px;
      margin-right: 32px;
    }

    span {
      color: #2c2c2c;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      text-align: left;
      margin-right: 13px;
    }
  }

  button {
    color: #606060;

    svg {
      margin-right: 22px;
    }
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
