import { useNavigate } from "react-router-dom";
import { Routes } from './../routes/Routes';

export const FooterMenu = () => {
    const navigate = useNavigate();
    const options = [{ icon: "H", route: Routes.HOME}, { icon: "4", route: Routes.PAGE_404}, { icon: "P", route: Routes.PRODUCTS} ,{ icon: "F", route: Routes.PRODUCT_FORM}]

    const handleOptionNav = (url) => {
        // TODO add nagivation functionality once it gets wired 
        // with the rest of the application
        navigate(url);
    }

    return (
        <footer>
            <section className="menu-wrapper">
            {options.map((option, index) =>
                <button key={index} onClick={() => handleOptionNav(option.route)}>
                    {option.icon}
                </button>
            )}
            </section>
        </footer>
    )
}

export default FooterMenu;