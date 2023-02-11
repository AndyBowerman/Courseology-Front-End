import "./NavBar.scss";
import LogoSmall from "../../components/LogoSmall/LogoSmall";
import NavLinks from "../../components/NavLinks/NavLinks";
import Footer from "../../components/Footer/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleDisplayMenu = () => setDisplayMenu(!displayMenu);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <LogoSmall />
      </div>
      <div className="navbar__menu">
        <LogoSmall />
        <MenuIcon onClick={toggleDisplayMenu} sx={{ fontSize: 40 }} />
      </div>
      <div className="navbar__links" id={displayMenu ? "links" : ""}>
        <NavLinks name="layout" />
      </div>
      <div className="navbar__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
