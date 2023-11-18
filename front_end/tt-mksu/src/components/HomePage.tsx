import { Link } from "react-router-dom";





    const HomePage = () =>{return (
        <>
        
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/LoginPage">LoginPage</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/RegisterPage">RegisterPage</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/TimeTable">TimeTable</Link>
                </li>
            </ul>
            </div></>
      );
    }
export default HomePage;