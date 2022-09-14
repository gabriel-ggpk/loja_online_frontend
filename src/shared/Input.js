import styled from "styled-components";
const Input = styled.input`
  width: ${(props) => (props.small ? "180px" : "298px")};
  height: ${(props) => (props.small ? "30px" : "52px")};
  border-radius: 8px;
  background: #ffffff;
`;
export default Input;
