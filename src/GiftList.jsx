import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Gift from "./Gift";


const GiftList = (props) =>
{
    const [giftList, setGiftList] = useState([]);
    useEffect(() => {
      let giftArray = [];
      let imgCount=1;
      for(let i=1;i<=31;i++){

        giftArray.push(
        <Gift 
          key={'gift'+i} 
          num={i} 
          status={-31+i+props.days<=0?true:false} 
          gift={props.gifts.get(i)}
          imgCount={imgCount}
        />)
        imgCount++;
        if(imgCount>4) imgCount=1;
          
      }      
      setGiftList(giftArray);
    }, [props.days])
    
    return(
        <Row>{giftList}</Row>
    );
}

export default GiftList;