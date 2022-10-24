import "./NavBar.scss";
import LogoSmall from "../../components/LogoSmall/LogoSmall";
import NavLinks from "../../components/NavLinks/NavLinks";
import Footer from "../../components/Footer/Footer";

const Navbar = () => {
  return (
    <div className="navbar">
        <LogoSmall />
        <NavLinks />
        <Footer />
    </div>
  )
}

export default Navbar