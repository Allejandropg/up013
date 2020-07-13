import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 450px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      &[type='password'] {
        border: 2px solid;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0;
      height: 44px;
      background: #060c62;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#060c62')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    h1,
    p {
      color: #fff;
      margin: 0 0 15px;
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#f64c75')};
    }
  }
`;

export const Provider = styled.div`
  position: relative;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #060c62;
    border: 1px solid;
    height: 35px;
    width: 35px;
    margin: auto;
    border-radius: 25px;
    opacity: 0.3;
    svg {
      stroke: #fff;
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked + label {
      background: #060c62;
      opacity: 1;
    }
  }
  /* input {
    height: 0;
    width: 0;
    &::before {
    }
    &:checked {
      background: #f00;
    }
  } */
`;
