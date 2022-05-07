import { Footer } from "../layout/Footer";

import { Header } from "../layout/Header";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
