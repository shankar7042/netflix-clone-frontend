import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border: 0;
  padding: 15px;
  height: 70px;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  flex: 1;
  font-size: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: #e50914;
  color: white;
  padding: 5px 20px;
  font-size: 23px;
  border: 0;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    padding: 15px;
    border-radius: 3px;
  }
`;

export const Text = styled.p`
  color: white;
  margin: auto;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
