import styled from "styled-components";

export const InputDefault = styled.input`
  border: 2px solid;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 125px;
  padding: 0.5rem;
  transition: background-color 0.5s ease-out;

  :optional {
    border-color: grey;
  }

  :required:valid {
    border-color: green;
  }

  :invalid {
    border-color: red;
  }
`;
