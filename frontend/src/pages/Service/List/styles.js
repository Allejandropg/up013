import styled from 'styled-components';

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: 50px auto;
  color: #fff;
  a {
    display: flex;
    align-items: center;
    /* text-decoration: underline; */
    color: #fff;
    border-bottom: 1px solid;
    padding: 0;
    transition: all linear 500ms;
    &:hover {
      padding: 0 6px;
      border: 1px solid;
      transition: all linear 500ms;
    }
    svg {
      margin-left: 4px;
    }
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  ul {
    display: flex;
    flex-direction: column;
    background: #fff;
  }
`;

export const Service = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  /* background: #fff; */
  & + li {
    border-top: 1px dashed #060c62;
  }

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: #060c62;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    color: #060c62;
    margin-top: 3px;
  }
`;
