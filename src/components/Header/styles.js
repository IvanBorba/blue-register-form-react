import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #120d31;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
  padding-right: 3rem;

  a {
    font-size: 22px;
    cursor: pointer;
    font-family: Helvetica, sans-serif;

    :hover {
      text-decoration: underline;
    }
  }
`;
