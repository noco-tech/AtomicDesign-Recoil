import { Header } from "../layout/Header";

export const HeaderOnly = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
