import "./Layout.scss";
import NavBar from "../../containers/NavBar/NavBar";
import Header from "../Header/Header";

const Layout = ({heading, children}) => {
  return (
    <div className="layout">
        <aside className="layout__navbar">
            <NavBar />
        </aside>
        <div className="layout__container">
            <header className="layout__header">
                <Header heading={heading}/>
            </header>
            <main>
                {children}
            </main>            
        </div>
    </div>
  )
}

export default Layout