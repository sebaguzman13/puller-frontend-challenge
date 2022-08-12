import { useEffect } from "react";
import Avatar from "./Avatar";

export const ProductItem = ({ item, onClick }) => {

    const handleItemClick = () => {
        !!onClick && onClick();
    }

    return (
        <article style={{ backgroundImage: `url(${item.image})` }} className="item-card" onClick={handleItemClick} >
            <img src={item.image} className="item-image" alt={`${item.title}'s image`}/>
            <div className="item-card-info">
                <Avatar />
                <h3 className="item-title">{item.title.substring(0, 20)}</h3>
                <p>$<span className="item-price">{item.price}</span></p>
            </div>
        </article>
    )
}

export default ProductItem;