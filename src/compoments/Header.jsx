import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mainLogo from "../assets/imges/png/main-logo.png";
import { Link } from 'react-router-dom';
import { CrossIcon, InstagramIcon, MenuIcon, TelegramIcon, WhatsppIcon } from './Icon';

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header className='bg-image broder-radius'>
                <nav>
                    <Container className='pt-3 pt-md-4 pt-lg-5'>
                        <div className='pt-sm-2 pt-md-4 pt-lg-5 d-flex justify-content-between align-items-center'>
                            <div className='d-md-none '>
                                <img className='w-99' src={mainLogo} alt="mainLogo" />
                            </div>
                            <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                                <div className='d-md-none z-index-100 crossIconset'
                                    onClick={() => setMenu(false)}>
                                    <Link><CrossIcon /></Link>
                                </div>
                                <div className='d-flex gap-80 align-items-center opcity'>
                                    <Link className='d-none d-md-block'><img src={mainLogo} alt="mainlogo" /></Link>
                                    <Link className='ff_primary line position-relative fs_md color_white fw_light opcity_1'>Особенности</Link>
                                    <Link className='ff_primary line position-relative fs_md color_white fw_light opcity_1'>Отзывы</Link>
                                    <Link className='ff_primary line position-relative fs_md color_white fw_light opcity_1'>Инвестиция</Link>
                                </div>
                            </div>
                            <div className='gap-3 d-flex  opcity'>
                                <Link className='opcity_1' to="https://www.instagram.com/" target='_'><InstagramIcon /></Link>
                                <Link className='opcity_1' to="https://telegram.org/" target='_'><TelegramIcon /></Link>
                                <Link className='opcity_1' to="https://www.whatsapp.com/" target='_'><WhatsppIcon /></Link>
                            </div>
                            <div className='d-md-none'>
                                <Link onClick={() => setMenu(true)}>
                                    <MenuIcon /></Link>
                            </div>
                        </div>
                    </Container>
                </nav>
                <Container>
                    <div className='pt-176 pb-120'>
                        <Row className='justify-content-sm-end'>
                            <Col lg={8} xl={6} md={9}>
                                <p className='fs_3md ff_primary fw_regular color_blue mb-0'>Лучший проект</p>
                                <h1 className='color_white fs_xxl fw_extraBold ff_primary'>Крипто <span className='d-lg-block color_blue'>Инвестиции</span></h1>
                                <p className='fs_2md ff_primary fw_regular color_white mb-0'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                                <div className='d-block d-sm-flex mt-3 gap-sm-3 pt-lg-40'>
                                    <div className='ff_primary'>
                                        <button className='border-0 inline-btn hover-white bg_dark color_white fw_bold fs_3sm'>Присоединиться</button>
                                    </div>
                                    <button className='ff_primary fw_bold fs_3sm border-0 ms-xl-40 ms-lg-30 inline-btn hover-dark mt-3 mt-sm-0 mt-lg-0 bg_white color_secondary'>Подробнее</button>

                                </div>
                                <div className='d-sm-flex gap-80 pt-lg-58'>
                                    <div className='d-flex align-items-center'>
                                        <p className='color_blue fs_2xl fw_bold ff_primary mb-0 me-2'>360</p>
                                        <span className='color_blue fs_2xs mb-0'>Довольных
                                            <span className='d-block mb-0'> клиентов</span></span>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <p className='color_blue fs_2xl fw_bold ff_primary mb-0 me-2'>330K</p>
                                        <span className='color_blue fs_2xs mb-0'>заработанных
                                            <span className='d-block mb-0'> долларов</span></span>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header >
        </>
    )
}

export default Header