import { Link, useMatch, useResolvedPath} from "react-router-dom";

function NavBar () {
    return (
        <div className="body"> 
            <div className="navbar">
                <img src="image.png" alt="Meloujean"/>      
                <ul>
                    <CustomLink to='/home' image="home.gif">HOME</CustomLink>
                    <CustomLink to='/about' image="about.gif">ABOUT</CustomLink>
                    <CustomLink to='/contact' image="contact.gif">CONTACT</CustomLink>
                </ul>   
            </div>
        </div>
    );
}  

function CustomLink({ image, to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <img src={image} alt={children} />
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
}

export default NavBar;