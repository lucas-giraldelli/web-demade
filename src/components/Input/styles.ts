import styled from 'styled-components';

export const Container = styled.div`
  background: #6f6bc0ff;
  border-radius: 10px;
  border: 2px solid #6f6bc0ff;
  padding: 15px;
  width: 100%;
  color: #f4ede8;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #f4ede8;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #6f6bc0ff inset !important;
      -webkit-box-shadow: 0 0 0 30px #6f6bc0ff inset !important;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
