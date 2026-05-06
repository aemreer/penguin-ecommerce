import { Link } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header className=" w-full bg-primary   text-background sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ">
            <nav className="container mx-auto flex items-center justify-between py-1 px-6 ">
                {/* SOL */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="font-medium transition-colors hover:text-accent" >
                        Anasayfa
                    </Link>
                    <Link to="/products" className="font-medium transition-colors hover:text-accent">
                        Ürünler
                    </Link>
                </div>
                {/* ORTA */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 w-auto"
                    />
                </Link>
                {/* SAĞ */}
                <HeaderIcons />
            </nav>
        </header>
    );
};

export default Header;