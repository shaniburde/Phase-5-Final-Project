import styled from "styled-components";

const Input = styled.input`
  color: #011F28;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: #F7F7F3;
  transition: all .4s ease-in-out;

  &:hover {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.35);
  }
`;

export default Input;
