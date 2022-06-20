import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header/>
            <div className="">{children}</div>
            <Footer/>
        </div>
    );
}