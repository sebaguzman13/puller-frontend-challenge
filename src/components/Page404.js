import { Routes } from "../routes/Routes"
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

export const Page404 = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <article className="page-404">
                <h2>404</h2>
                <p>
                    Looks like you've reached a dead end.
                    If you think this is a mistake get in touch with our Support Team or
                    return to the <Link to={Routes.HOME}>Main Page</Link>
                </p>
                <br />
                <p>
                    Or try to get <Link onClick={() => navigate(-1)} to={''} >back</Link> to the previous screen.
                </p>
            </article>
        </Layout>
    )
}

export default Page404;