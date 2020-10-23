import React from "react";
import { 
    Jumbotron, 
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import './style.scss'

interface PresentationProps {
    title: string;
    balance: number;
    backToHome?: boolean;
    image: string;
}

const Presentation = ({ title, balance, backToHome, image }: PresentationProps) => {
    return (
        <Jumbotron className='presentation-container'>
            <Row>
                <Col>
                    <h1 className='presentation-title'>{title}</h1>
                    <Row>
                        <Col className='align-center'>
                            <p className='presentation-subtitle'>Saldo em conta:</p>
                            <p className='presentation-subtitle'>B$ {balance}</p>
                        </Col>
                        <Col className='align-center'>
                            <p><Button className='regular-button' variant="warning">Transferir</Button></p>
                            {backToHome ? <p><Button className='regular-outline-button' variant="outline-warning" href="/">Voltar</Button></p> : null}
                        </Col>
                    </Row>
                </Col>
                <Col className='align-center'>
                    <Image className='presentation-image' src={image} />
                </Col>
            </Row>
        </Jumbotron>
    )
};

export default Presentation;
