import React,{useEffect,useState} from 'react';
import './Nav.css';
import img from './images/netflix-logo.png';
import img2 from './images/avatar.jpg';

function Nav(){
	const [show,handleShow] = useState(false);
	useEffect(()=>{
		window.addEventListener("scroll",()=>{
			if(window.scrollY > 100){
				handleShow(true);
			}else handleShow(false);
		});
		return ()=>{
			window.removeEventListener("scroll");
		};

	},[]);
	return(
		<div className={`nav ${show && "nav_black"}`}>
			<img
				className="nav_logo"
				src={img}
				alt="Interest Logo"

			/>

			<img
				className="nav_avatar"
				src={img2}
				alt="Interest Logo"

			/>

		</div>

	)
}
export default Nav;