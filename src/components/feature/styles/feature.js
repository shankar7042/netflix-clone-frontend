import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  text-align: center;
  padding: 125px 45px;
  margin: auto;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
