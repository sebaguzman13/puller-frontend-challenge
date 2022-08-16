import { useState } from "react";

export const Toggable = ({ onClick, children }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        !!onClick && onClick();
    }

    return (
        <button className={active ? "chip active" : "chip"} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Toggable;