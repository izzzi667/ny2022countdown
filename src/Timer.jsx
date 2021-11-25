import React, { useEffect, useState } from "react";

const Timer =(props) => { 	
	return (<span>
	<h1 className="mb-4 display-3">До нового года осталость</h1>
	<h2 className="mb-4 display-3">{props.days} дней, {props.hours} часов {props.minutes} минут {props.seconds} секунд </h2></span>);
	
}

export default Timer;