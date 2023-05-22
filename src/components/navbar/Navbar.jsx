import './navbar.scss';
import logo from "../../images/main.png";
import { Search , Notifications , ArrowDropDown} from "@material-ui/icons";
import { useState } from 'react';

const Navbar = () => {
    const [isscrolled, setIsscrolled] = useState(false);

    window.onscroll = () =>{
        setIsscrolled(window.pageYOffset === 0 ? false : true);

        return () => (window.onscroll = null);
    };

    console.log(isscrolled);
  return (
    <div className={isscrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={logo} alt='images'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://plus.unsplash.com/premium_photo-1680721444847-33e37f1bd4d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"   />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>

                    </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
