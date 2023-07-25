import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import main_Logo from '../assets/imges/png/main-logo.png'
import { Link } from 'react-router-dom';
import { TopIcon } from './Icon';

const Footer = () => {
  return (
    <>
      <div className='bg_secondary'>
        <Container className='py-lg-120 py-md-90 py-sm-60 py-30'>
          <Row>
            <Col lg={2} sm={4}>
              <img src={main_Logo} alt="mainlogo" />
            </Col>
            <Col lg={5} sm={8} className='pt-4 pt-sm-0'>
              <address className='ff_secondary fw_regular color_white fs_2md mb-0'>
                123 Market St. #22B
                <span className='d-lg-block'>Charlottesville, California</span> 44635
              </address>
              <p className='mb-0 pt-lg-3'><Link className='underline fs_2xs ff_poppins fw_regular color_white position-relative'>contact@exmpl.page</Link></p>
            </Col>
            <Col lg={2} xs={4} sm={5} className='pt-4 pt-lg-0 mb-3 mb-md-4 mb-lg-5'>
              <ul className='mb-0 ps-0'>
                <li><Link className='fs_xs ff_poppins fw_regular color_white op-75'>About</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Growers</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Merchants</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Partners</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Contact</Link></li>
              </ul>
            </Col>
            <Col lg={2} xs={4} sm={5} className='pt-4 pt-lg-0'>
              <ul className='mb-0 ps-0'>
                <li><Link className='fs_xs ff_poppins fw_regular line position-relative color_white op-75'>Facebook</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Telegram</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Whatsapp</Link></li>
                <li className='pt-lg-2'><Link className='fs_xs line position-relative ff_poppins fw_regular color_white op-75'>Instagram</Link></li>
              </ul>
            </Col>
            <Col lg={1} xs={4} sm={2} className='pt-4 pt-lg-0 '>
              <div className='box_circle d-flex justify-content-center align-items-center'>
                <TopIcon />
              </div>
            </Col>
          </Row>
          <p className='fs_xs ff_poppins fw_regular color_white text-center pt-3 pt-md-4 pt-lg-5 op-64 mb-0'>© 2022 Invest Coin. All rights reserved.</p>
        </Container>
      </div>
    </>
  )
}

export default Footer