import { useEffect, useState } from 'react';
import SearchComponent from "./SearchComponent";
import FooterMenu from "./FooterMenu";
import { fetchCategories } from '../service/productServices';

export const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({name: "", categories: []})

    useEffect(() => {
        fetchCategories().then(res => setCategories(res))
    }, [])

    const updateFilters = (filters) => {
        setFilters(filters);
    }

    return (
        <>
            <SearchComponent categories={categories} setFilters={updateFilters}/>
            <main>
                This is the Home Page of our Marketing application.
                To see all the available products click on the footer menu option: "P".
                To add a new Product to the inventory go to option "F".
            </main>
            <FooterMenu />
        </>
    )
}

export default HomeScreen;