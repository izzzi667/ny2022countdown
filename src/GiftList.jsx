import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import activeGift from './static/active.png'
import inActiveGift from './static/inactive.png'
import style from './Gift.module.css'
import card from './static/card.jpg'

const GiftList = (props) =>
{
    const [giftList, setGiftList] = useState([]);
    useEffect(() => {
      let giftArray = [];
      for(let i=1;i<=31;i++){
        giftArray.push(<Gift key={'gift'+i} num={i} status={-31+i+props.days<=0?true:false} gift={props.gifts.get(i)}/>)
      }      
      setGiftList(giftArray);
    }, [props.days])
    
    return(
        <Row>{giftList}</Row>
    );
}

const Gift = (props) =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function createMarkup() {
        return {__html: props.gift};
    }

    if (!props.status){
        return(<Col><img src={inActiveGift} onClick={handleShow}/><br />{props.num} декабря</Col>)
    }

    return (<>
        <Col><img className={style.gift} src={activeGift} onClick={handleShow}/><br />{props.num} декабря</Col>
        <Modal 
          show={show} 
          onHide={handleClose}       
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Body>
            <Col className='mh-100 py-5 text-center' style={{backgroundImage: `url(${card})`, height: '80vh'}}>
              <h1 class="display-3">Сюрприз за {props.num} день</h1>
              <div dangerouslySetInnerHTML={createMarkup()} /><br /><br />
              <Button variant="secondary" onClick={handleClose}>
              Да!
              </Button>          
            </Col>
          </Modal.Body>
        </Modal>
        </>
    );
}

export default GiftList;