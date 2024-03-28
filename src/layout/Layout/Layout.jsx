import Footer from "../base/Footer/Footer";
import Header from "../base/Header/Header";
import Main from "../base/Main/Main";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
