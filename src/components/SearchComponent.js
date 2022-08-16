import { useEffect, useState } from "react";
import { Toggable } from "./Toggable";

export const SearchComponent = ({ categories, setFilters }) => {
    const [searchName, setSearchName] = useState("");
    const [categoryFilter, setCategoryFilter] = useState([]);
console.log("Search componente!!")
    const handleChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleCategoryFilter = (value) => {
        let index = categoryFilter.findIndex(category => category === value);
        if (index === -1) {
            setCategoryFilter(prevState => [...prevState, value]);
        } else {
            let updatedCategoryFiter =  [...categoryFilter];
            updatedCategoryFiter.splice(index, 1);
            setCategoryFilter(updatedCategoryFiter);
        }
    }

    useEffect(() => {
        setFilters({ name: searchName, categories: categoryFilter })
    }, [searchName, categoryFilter])

    return (
        <header>
            <input
                name="name"
                type="text"
                value={searchName}
                onChange={handleChange}
            />
            <>
                {!!categories && categories.map((category, index) =>
                    <Toggable
                        key={index}
                        value={category}
                        className="chip"
                        onClick={() => handleCategoryFilter(category)}
                    >
                        {category}
                    </Toggable>)
                }
            </>
        </header>
    )
}

export default SearchComponent;