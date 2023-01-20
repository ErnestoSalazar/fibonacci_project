import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  & > p > span{
    display: inline-block;
    font-size: 2rem;
    vertical-align: middle;
    margin-left: 1rem;
  }
`;
