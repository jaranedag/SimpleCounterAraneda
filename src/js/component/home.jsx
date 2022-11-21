import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({segundos}) => {
	let string = segundos.toString()
	let digitOne = string[string.length -1]
	let digitTwo = string[string.length -2]
	let digitThree = string[string.length -3]
	let digitFour = string[string.length -4]
	let digitFive = string[string.length -5]
	let digitSix = string[string.length -6]


	return (
		
             <div className="text-center">
				<button className="btn btn-dark"><i class="far fa-clock"></i></button>
				<button className="btn btn-dark">{digitSix==undefined? "0": digitSix}</button>
                <button className="btn btn-dark">{digitFive==undefined? "0": digitFive}</button>
				<button className="btn btn-dark">{digitFour ==undefined? "0": digitFour}</button>
				<button className="btn btn-dark">{digitThree==undefined? "0": digitThree}</button>
				<button className="btn btn-dark">{digitTwo==undefined? "0": digitTwo}</button>
				<button className="btn btn-dark">{digitOne==undefined? "0": digitOne}</button>
			 </div>
	);
};

export default Home;

/*
<div className="container" >

<div className="row  bg-dark" style = {{height: 150}} > */