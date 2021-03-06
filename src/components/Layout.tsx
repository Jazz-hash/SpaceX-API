import React from "react";
import Footer from "./Footer";
import Navigation from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <br />
      <br />
      <section className="mt-5 pt-5" style={{ width: "90%", margin: "auto" }}>
        {children}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
