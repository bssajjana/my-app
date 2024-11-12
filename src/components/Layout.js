import {outlet,Link} from 'react-router';

const Layout=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            </nav>
            
            <outlet/>
            </>
    )
};
export default Layout;