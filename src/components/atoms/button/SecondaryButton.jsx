import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

export const SecondaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};
