import styled from "styled-components/macro";
import { keyframes } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  max-width: 800px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 26px;
  background: #303030;
  font-weight: normal;
  padding: 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const bodyAnimationOpen = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 1200px;
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  margin-top: 2px;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  user-select: none;
  white-space: pre-wrap;
  animation: ${bodyAnimationOpen} 0.5s ease;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
