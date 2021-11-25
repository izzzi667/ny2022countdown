import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import activeGift from './static/active.png'
import inActiveGift from './static/inactive.png'
import style from './Gift.module.css'

const GiftList = (props) =>
{
    let giftArray = [];
    for(let i=1;i<=31;i++){
        giftArray.push(<Gift key={'gift'+i} num={i} status={-31+i+props.days<=0?true:false} gift={props.gifts.get(i)}/>)
    }

    return(
        <Row>{giftArray}</Row>
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
        return(<Col><img src={inActiveGift} onClick={handleShow}/></Col>)
    }

    return (<>
        <Col><img src={activeGift} onClick={handleShow}/></Col>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Сюрприз за {props.num} день</Modal.Title>
        </Modal.Header>
        <Modal.Body><div dangerouslySetInnerHTML={createMarkup()} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Да!
          </Button>          
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default GiftList;