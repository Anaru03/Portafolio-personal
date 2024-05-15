import { Link } from "react-scroll"

const Nav = () => {
    const content = <>
    <div className="">
        <ul>
            <Link>
                <li>Home</li>   
            </Link>

            <Link>
                <li>About Me</li>
            </Link>

            <Link>
                <li>Academic</li>
            </Link>

            <Link>
                <li>Knowledge</li>
            </Link>

            <Link>
                <li>Projects</li>
            </Link>

            <Link>
                <li>Contact Me</li> 
            </Link>
            
                
        </ul>

    </div>

    </>
    return(
        <nav>

        </nav>
    );
};

export default Nav;