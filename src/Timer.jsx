import React, { useEffect, useState } from "react";
import getNumEnding from "./getNumEnding";

const Timer =(props) => { 	
	return (<span>
	<h1 className="mb-4 display-3">До нового года осталость</h1>
	<h2 className="mb-4 display-3">
		{props.days} {getNumEnding(props.days,['день','дня','дней'])}{' '}  
		{props.hours} {getNumEnding(props.hours,['час','часа','часов'])}{' '}  
		{props.minutes} {getNumEnding(props.minutes,['минута','минуты','минут'])}{' '}   
		{props.seconds}  {getNumEnding(props.seconds,['секуда','секунды','секунд'])} 
	</h2></span>);
	
}

export default Timer;