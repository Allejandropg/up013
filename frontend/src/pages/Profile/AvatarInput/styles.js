import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      display: block;
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 2855, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
