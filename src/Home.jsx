import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}

export default Home;