import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from './Popup';
// import Popup from './Popup';



const BtnToTeam = () => {

     

    const [popup, setPopup] = React.useState(false)

    const popupSwitch = () => {
        setPopup((pev) => !popup)
        
    }




    
    



    return ( 
        <>
        <Container fluid>
            <Row className=' '>
                <Col className='col-12 d-flex justify-content-center '>
                <button onClick={popupSwitch} className='col-8 col-lg-5 btnToteam'>Долучитися до команди</button>
                </Col>
            </Row>
        </Container>

        

        <Popup popup={popup} popupSwitch={popupSwitch}/>


        

        

        

     

     </>


    );


}


 
export default BtnToTeam;


