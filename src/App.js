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
  giftsMap.set(16,'<h3>Вопрос дня</h3>Тест вопроса дня<h3>Бонус дня</h3><a href="">Ссылка бонуса дня</a>');
  giftsMap.set(17,'<h3>Вопрос дня</h3>Тест вопроса дня<h3>Бонус дня</h3><a href="">Ссылка бонуса дня</a>');
  giftsMap.set(18,'Описание действия в день 18');
  giftsMap.set(19,'Описание действия в день 19');
  giftsMap.set(20,'<h3>Вопрос дня</h3>Что вдохновляло, подпитывало и заряжало вас в 2021 году?<br /><br /><h3>Бонус дня</h3><a href="https://hozaika.online/chaj-so-specijami.html">Рецепт новогоднего чая</a>');
  giftsMap.set(21,'<h3>Вопрос дня</h3>Вспомните ваш лучший рассвет и закат в 2021 году. Что вы тогда чувствовали?<br /><br /><h3>Бонус дня</h3><a href=" https://lifehacker.ru/kak-sdelat-snegovika-svoimi-rukami/">Инструкция, как сделать снеговика</a>');
  giftsMap.set(22,'<h3>Вопрос дня</h3>Как бы Вы продолжили фразы:<br />- За 2021 год я научился/научилась<br />- За 2021 год я понял/поняла<br />- За 2021год я стал/стала<br /><br /><h3>Бонус дня</h3><a href="https://lifehacker.ru/kak-sdelat-snezhinki-iz-bumagi/">Инструкция, как сделать красивые снежинки</a>');
  giftsMap.set(23,'<h3>Вопрос дня</h3>Какой разговор или встреча повлияла на вас особенным образом в 2021 году?<br /><h3>Бонус дня</h3><a href="https://lifehacker.ru/chto-podarit-na-novy-j-god/">Идеи "что подарить на Новый год, если вообще нет идей?"</a>');
  giftsMap.set(24,'<h3>Вопрос дня</h3>Как бы Вы описали 2021 год в трёх существительных, трёх прилагательных и трёх глаголах?<br /><h3>Бонус дня</h3><a href="https://v-spisok.ru/список-новогодних-песен/">Списко новогодних песен</a>');
  giftsMap.set(25,'<h3>Вопрос дня</h3>Выберите три лучшие фотографии 2021 года. Почему именно они?<br /><h3>Бонус дня</h3><a href="https://www.youtube.com/watch?v=2Filzttu3s4">Рецепт салат "Оливье"</a>');
  giftsMap.set(26,'<h3>Вопрос дня</h3>Какую историю из этих 12 месяцев 2021 года Вы хотели бы однажды рассказать своим детям и внукам?<br /><h3>Бонус дня</h3><a href="https://www.youtube.com/watch?v=g6E8UjqILl4">Рецепт имбирных пряников</a>');
  giftsMap.set(27,'<h3>Вопрос дня</h3>Что нового Вы поняли о людях, о счастье и о времени в 2021 году?<br /><h3>Бонус дня</h3><a href="https://go29.ru/2018/01/09/kak-igrat-v-snezhki/">Инструкция, как играть в снежки</a>');
  giftsMap.set(28,'<h3>Вопрос дня</h3>Что и как помогает Вам почувствовать волшебство зимы?<br /><h3>Бонус дня</h3><a href="https://svoimirukamy.com/novogodnie-maski-svoimi-rukami.html">Инструкция, как сделать новогоднюю маску</a>');
  giftsMap.set(29,'<h3>Вопрос дня</h3>Какой будет Ваша главная цель на следующие 365 дней?<br /> Какие у Вас есть ресурсы, которые помогут Вам двигаться к ней в 2022 году?<br /><h3>Бонус дня</h3><a href="https://www.youtube.com/watch?v=XMt7m-i089s">Рецепт глинтвейна</a>');
  giftsMap.set(30,'<h3>Вопрос дня</h3>Кому и чему стоит сказать спасибо за то, что 2021 год получился именно таким?<br /><h3>Бонус дня</h3><a href="https://www.youtube.com/watch?v=HY2a2o873BM">Музыка для новогоднего настроения</a>');
  giftsMap.set(31,'<h3>Вопрос дня</h3>Расскажите сегодня главное про 2021 год, пока горит бенгальский огонь.<br /><h3>Бонус дня</h3><a href="https://lifehacker.ru/kak-vstretit-novyj-god/">25 идей: как весело встретиться Новый год</a>');

  const [daysToNy, setDaysToNy] = useState(0);
  const [hoursToNy, setHoursToNy] = useState(0);
  const [minutesToNy, setMinutesToNy] = useState(0);
  const [secondsToNy, setSecondsToNy] = useState(0);
  const [timerEvent, updateTimerEvent] = useState(0);

  useEffect(() => {
    let now = new Date();	
    let nY = new Date('2022-01-01T00:00:00'); 
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
			<video autoPlay="autoplay" loop="loop" muted="muted" plays-inline="plays-inline" playsinline 
			style={{position: 'fixed', right:0,  bottom: 0, minWidth: '100%', minHeight: '100%', zIndex: -100}}>      
			<source src={bgVideo} type="video/mp4" /> </video>
			<div className="container py-5 bg-success opacity-75">
			  <div className="row">
				  <div className="col-lg-8 col-md-10 mx-auto">
            <Timer days={daysToNy}  hours={hoursToNy} minutes={minutesToNy} seconds={secondsToNy}/>
				    <p className="lead mb-1">Каждый день мы публикуем подарки и задания. Нажмите по подарку для просмотра</p>				  
				  </div>          
			  </div>
			</div><br />
      <Container><GiftList days={daysToNy} gifts={giftsMap} /></Container>
      
		</div>
  );
}

export default App;

