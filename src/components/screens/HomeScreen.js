import Layout from "./../layout/Layout";
import './../../styles/home-page.css';

export const HomeScreen = () => {

    return (
        <Layout>
            <article className="home-page">
                <h1>Products CRUD</h1>
                <p>
                    This is the Home Page of our Market Place application.
                </p>
                <p>
                    To see all the available products click on the footer menu option: "P".
                </p>
                <p>
                    To add a new Product to the inventory go to option "F".
                </p>
            </article>
        </Layout>
    )
}

export default HomeScreen;