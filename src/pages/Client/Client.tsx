import React, { useState, useEffect } from 'react';
import Presentation from '../../components/Presentation';
import CarouselComponent from "../../components/Carousel/index"
import NavbarComponent from '../../components/NavbarComponent';
import { Row, Col } from 'react-bootstrap';
import { useAppState } from '../../AppContext';

import ReceiptTable from '../../components/ReceiptTable';
import OperationsTable from '../../components/OperationsTable';
import contentImage from '../../assets/images/client.svg';
import './style.scss';

export default function Client() {
  const { user } = useAppState();

  return (
    <>
      <NavbarComponent />
      <Presentation title={`Olá, ${user.Nome}`} image={contentImage} />
      <Row className='client-container'>
        <Col xs={6}>
          <Row className="justify-content-center resumed-table" style={{ marginBottom: '20px' }}>
            <h2>Últimos lançamentos</h2>
            <ReceiptTable tableSize={3} />
          </Row>
          <Row className="justify-content-center resumed-table" style={{ marginBottom: '20px' }}>
            <h2>Extrato</h2>
            <OperationsTable tableSize={3} />
          </Row>
        </Col>
        <Col className='rewards-preview-container'>
          <div className='rewards-preview'>
            <CarouselComponent />
          </div>
        </Col>
      </Row>
    </>
  )
}