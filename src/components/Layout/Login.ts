import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContainerImg = styled.img`
  height: 100%;
  width: 80%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10%;
`;
