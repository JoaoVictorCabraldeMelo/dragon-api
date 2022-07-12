import styled from "styled-components";

type ButtonProps = {
  margin?: string;
};

export const SignInButton = styled.div<ButtonProps>`
  width: 100px;
  height: 40px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};

  :hover {
    cursor: pointer;
  }
`;

export const RedButton = styled.div<ButtonProps>`
  width: 100px;
  height: 40px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};

  :hover {
    cursor: pointer;
  }
`;

export const GreenButton = styled.div<ButtonProps>`
  width: 100px;
  height: 40px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};

  :hover {
    cursor: pointer;
  }
`;
