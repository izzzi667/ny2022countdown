import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import activeGift1 from './static/active1.png'
import activeGift2 from './static/active2.png'
import activeGift3 from './static/active3.png'
import activeGift4 from './static/active4.png'
import inActiveGift from './static/inactive.png'
import style from './Gift.module.css'
import card from './static/card.jpg'

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

    let imgObject=null;
    switch(props.imgCount) {
      case 1:
        imgObject=activeGift1;
        break;
      case 2:
        imgObject=activeGift2;
        break;
      case 3:
        imgObject=activeGift3;
        break;        
      case 4:
        imgObject=activeGift4;
        break;   
    }


    return (<>
        <Col><img className={style.gift} src={imgObject} onClick={handleShow}/><br />{props.num} декабря</Col>
        <Modal 
          show={show} 
          onHide={handleClose}       
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Body>
            <Col className='mh-100 py-5 text-center' style={{backgroundImage: `url(${card})`, height: '80vh'}}>
              <div dangerouslySetInnerHTML={createMarkup()} /><br /><br />
              <Button variant="secondary" onClick={handleClose}>
              Закрыть
              </Button>          
            </Col>
          </Modal.Body>
        </Modal>
        </>
    );
}

export default Gift;
