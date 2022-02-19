import Footer from "../Footer";
import Header from "../Header";
import Homebanner from "../Homebanner";

const Layout = ({ children }) => {
 
    return (
        <>
            <Header />           
            <Homebanner />           
                <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
