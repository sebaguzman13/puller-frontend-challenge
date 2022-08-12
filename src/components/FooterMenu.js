import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

export const FooterMenu = () => {
    const options = [{ icon: "ICON", route: "home"}, { icon: "ICON", route: "aux1"}, { icon: "ICON", route: "list"} ,{ icon: "ICON", route: "aux2"}]

    const handleOptionNav = (url) => {
        // TODO add nagivation functionality once it gets wired 
        // with the rest of the application
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