import bgVideo from './static/bg.mp4';
import bgAudio from './static/bgsound.mp3';
import './App.css';
import Timer from './Timer';
import React, { useEffect, useState } from "react";
import GiftList from './GiftList';
import { Container } from 'react-bootstrap';



function App() {  

  const giftsMap = new Map();
  giftsMap.set(1,'Описание действия в день 1. И пример <a href="https://yandex.ru" target="_blank">ссылки</a>');
  giftsMap.set(2,'Описание действия в день 2');
  giftsMap.set(3,'Описание действия в день 3');
  giftsMap.set(4,'Описание действия в день 4');
  giftsMap.set(5,'Описание действия в день 5');
  giftsMap.set(6,'Описание действия в день 6');
  giftsMap.set(7,'Описание действия в день 7');
  giftsMap.set(8,'Описание действия в день 8');
  giftsMap.set(9,'Описание действия в день 9');
  giftsMap.set(10,'Описание действия в день 10');
  giftsMap.set(11,'Описание действия в день 11');
  giftsMap.set(12,'Описание действия в день 12');
  giftsMap.set(13,'Описание действия в день 13');
  giftsMap.set(14,'Описание действия в день 14');
  giftsMap.set(15,'Описание действия в день 15');
  giftsMap.set(16,'Описание действия в день 16');
  giftsMap.set(17,'Описание действия в день 17');
  giftsMap.set(18,'Описание действия в день 18');
  giftsMap.set(19,'Описание действия в день 19');
  giftsMap.set(20,'Описание действия в день 20');
  giftsMap.set(21,'Описание действия в день 21');
  giftsMap.set(22,'Описание действия в день 22');
  giftsMap.set(23,'Описание действия в день 23');
  giftsMap.set(24,'Описание действия в день 24');
  giftsMap.set(25,'Описание действия в день 25');
  giftsMap.set(26,'Описание действия в день 26');
  giftsMap.set(27,'Описание действия в день 27');
  giftsMap.set(28,'Описание действия в день 28');
  giftsMap.set(29,'Описание действия в день 29');
  giftsMap.set(30,'Описание действия в день 30');
  giftsMap.set(31,'Описание действия в день 31');

  const [daysToNy, setDaysToNy] = useState(0);
  const [hoursToNy, setHoursToNy] = useState(0);
  const [minutesToNy, setMinutesToNy] = useState(0);
  const [secondsToNy, setSecondsToNy] = useState(0);
  const [timerEvent, updateTimerEvent] = useState(0);

  useEffect(() => {
    let now = new Date();	
    let nY = new Date('2021-12-01T00:00:00'); 
    let diff = (nY-now)/1000;
    var days        = Math.floor(diff/24/60/60);
    var hoursLeft   = Math.floor((diff) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = Math.floor(diff % 60);

    setDaysToNy(days);
    setHoursToNy(hours);
    setMinutesToNy(minutes);
    setSecondsToNy(remainingSeconds);

    const timerId = setInterval(() => {
          updateTimerEvent(timerEvent + 1);
      }, 1000);

    return () => clearInterval(timerId);
  }, [timerEvent]);


  return (
		<div className={"mh-100 py-5 text-center text-white"} style={{position: 'relative', overflow: 'hidden'}} > 
			<video autoPlay="autoplay" loop="loop" muted="muted" plays-inline="plays-inline" 
			style={{position: 'fixed', right:0,  bottom: 0, minWidth: '100%', minHeight: '100%', zIndex: -100}}>      
			<source src={bgVideo} type="video/mp4" /> </video>
      <audio autoPlay="autoplay" src={bgAudio} />
			<div className="container-fluid py-5 bg-dark opacity-75">
			  <div className="row">
				  <div className="col-lg-8 col-md-10 mx-auto">
            <Timer days={daysToNy}  hours={hoursToNy} minutes={minutesToNy} seconds={secondsToNy}/>
				    <p className="lead mb-1">Каждый день мы публикуем подарки и задания. Нажмите по подарку для просмотра</p>				  
				  </div>          
			  </div>
			</div>
      <Container><GiftList days={daysToNy} gifts={giftsMap} /></Container>
      
		</div>
  );
}

export default App;

