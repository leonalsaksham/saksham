import Footer from "./footer";
import Header from "./header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        // <WithAuth>
        <div className={`main-wrapper min-h-screen`}>
            <Header />
            {children}
            <Footer />
        </div>
        // </WithAuth>
    );
};

export default Layout;