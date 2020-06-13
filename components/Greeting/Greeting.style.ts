import styled from "styled-components";

export const Div = styled.div`
  ${({ theme: { flexin } }) => flexin(`space-between`)};
`;
