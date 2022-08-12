import { useEffect, useState } from 'react';
import SearchComponent from "./SearchComponent";
import ProductList from "./ProductList";
import FooterMenu from "./FooterMenu";

export const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({name: "", categories: []})

    useEffect(() => {
        let fetchedCategories = localStorage.getItem("c");
        if (fetchedCategories !== null) {
            setCategories(fetchedCategories);
        } else {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>{
                    localStorage.setItem("c", json)
                    setCategories(json);
                })
        }
    })

    const updateFilters = (filters) => {
        setFilters(filters);
    }

    return (
        <>
            <SearchComponent categories={categories} setFilters={updateFilters}/>
            <main>
                <ProductList filters={filters}/>
            </main>
            <FooterMenu />
        </>
    )
}

export default HomeScreen;