import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Mackbook from '../assets/imges/png/Macbook-Pro.png'

const InverstCoinAgain = () => {
    return (
        <>
            <Container className='overflow-hidden py-3'>
                <Row>
                    <Col lg={6} className='order-1 order-lg-0 pt-4 pt-lg-0'>
                        <h2 data-aos="zoom-out" data-aos-duration="2000" className='ff_primary fs_xl color_secondary fw_regular ltr_spacing'>Invest Coin - это про
                            безопасность!</h2>
                        <p className='ff_primary color_secondary fs_md fw_regular'>И как выражается безопасность? <span className='d-xl-block'>Чем меньше вложений в инвестиции, тем</span> больше риска потерпеть неудачу. Чем больше <span className='d-xl-block'>вложений, тем тем меньше риска.</span> Безопасность инвестии означает что <span className='d-xl-block'>ваши вложения (10$ или 100$) отдельно не</span> инвестируются. Наши опытные инвесторы <span className='d-xl-block'>делают ставки с общего счета, где на балансе</span> всегда больше 100 000$. </p>
                        <p className='ff_primary color_secondary fs_md fw_regular mb-0 pb-2 pb-md-3 pb-lg-4'>Нажмите на кнопку ниже и узнайте все лично <span className='d-xl-block'>от наших менеджеров</span></p>
                        <button data-aos="fade-down" data-aos-easing="ease" data-aos-duration="2000" className='br_35 bg_blue color_dark border-0 coinbtn fw_bold fs_3sm py-2 py-md-3 w-200 w-md-242 mt-3 mt-md-4 mt-lg-5'>Узнать подробнее</button>
                    </Col >
                    <Col lg={6} className='d-flex justify-content-center align-items-center order-0'>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-100' src={Mackbook} alt="mackbook Pro" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InverstCoinAgain