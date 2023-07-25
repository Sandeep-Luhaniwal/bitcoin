import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import feedBack_man from '../assets/imges/png/Feedback-man.png'

const Feedbackpage = () => {
    return (
        <>
            <Container className='py-30 py-sm-60 py-md-90 py-lg-120 overflow-hidden'>
                <h2 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='ff_primary fw_regular fs_xl color_secondary text-center'>Напишите нам</h2>
                <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className='fs_3md ff_primary fw_regular color_secondary text-center ltr_spacing'>Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить <span className='d-xl-block'>быстро и нам важно узнать ваше мнение.</span></p>
                <Row className='pt-4 pt-lg-5'>
                    <Col md={6} className='order-1 order-md-0 pt-4 pt-md-0' data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1500">
                        <div className='sin-box w-100 p-2 p-md-3'>
                            <input type="text" placeholder='Ваше имя' className='p-2 border-0 ff_poppins fw_medium fs_2md outline-none w-100' />
                        </div>
                        <div className='sin-box mt-3 mt-md-4 mt-lg-5 p-2 p-md-3'>
                            <input type="text" placeholder='Страна' className='p-2 border-0 ff_poppins fw_medium fs_2md outline-none w-100' />
                        </div>
                        <div className='sin-box mt-3 mt-md-4 mt-lg-5 p-2 p-md-3'>
                            <textarea type="text" placeholder='Сообщение' className='p-2 w-100 min-h-150 min-h-md-230 border-0 ff_poppins fw_medium fs_2md outline-none resize-none scroll' />
                        </div>
                        <button data-aos="fade-down" data-aos-easing="ease" data-aos-duration="2000" className='border-0 coinbtn inline-btn bg_dark color_white fw_bold fs_3sm ff_primary mt-3 mt-md-4 mt-lg-5'>Отправить</button>
                    </Col>
                    <Col md={6} className='order-0' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className='w-535 h-700' src={feedBack_man} alt="feedback" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Feedbackpage