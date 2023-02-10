import "./Layout.scss";
import NavBar from "../../containers/NavBar/NavBar";
import Header from "../Header/Header";
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";

const Layout = ({
  heading,
  children,
  displayConfirmation,
  message,
  confirmationFunction,
  cancelFunction,
}) => {
  return (
    <div className="layout">
      <aside className="layout__navbar">
        <NavBar />
      </aside>
      <div className="layout__container">
        <header className="layout__header">
          <Header name="header__text header__text--large" heading={heading} />
        </header>
        <main className="layout__main">{children}</main>
      </div>
      {displayConfirmation && (
        <ConfirmationPopUp
          message={message}
          confirmationFunction={confirmationFunction}
          cancelFunction={cancelFunction}
        />
      )}
    </div>
  );
};

export default Layout;
