"use client"
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Contactform from '../components/contactform';
import Metatags from "../components/metatags";
import Head from "next/head";

export default function connect () {
    const title = "Vrutti | Livelihood Impact Partners";
    const desc = "Livelihood Impact Partners";
    const url = "Test URL";
    const banner = "Banner";
    return (
        <>
        <Head>
            <title>Vrutti | Livelihood Impact Partners</title>
        </Head>
        <Metatags desc={desc} url={url} />
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Connect</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/connect#locate-us'}>Locate us</Link></li>
                            <li><Link href={'/connect#leave-message'}>Leave a message</Link></li>
                        </ul>
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>SHARE THIS PAGE</li>
                            <li><Link href={'https://www.facebook.com/vrutti.lh/'}><Icon.Facebook size={15} style={{marginRight:'14px'}} />Via Facebook</Link></li>
                            <li><Link href={'https://twitter.com/Vrutti_Catalyst'}><Icon.Twitter size={15} style={{marginRight:'14px'}} />Via Tweet this page</Link></li>
                            <li><Link href={'https://www.linkedin.com/company/vrutti-livelihood-impact-partners/'}><Icon.Linkedin size={15} style={{marginRight:'14px'}} />Via on LinkedIn</Link></li>
                            <li><Icon.Share size={15} style={{marginRight:'14px'}} />Share the URL</li>
                        </ul>
                    </div>
                </Col>
                <Col md={9}>
                    <h4 id="locate-us" style={{color:'#025745', fontWeight:'700'}}>Locate Us</h4>
                    <Row className="abouttxt">
                        <Col md={9}>
                            <p>Vrutti</p>
                            <p>Raghavendra Nilaya, 25, 2nd Floor, 1st Main Rd,<br />AECS Layout, Bengaluru, Karnataka 560094</p>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1230121557237!2d77.57742777538274!3d13.027837613642195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c6c1000793%3A0xfd2711540a564c86!2sVrutti!5e0!3m2!1sen!2sin!4v1694689271975!5m2!1sen!2sin" className="w-100" height="450" allowfullscreen="1" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <h4 id="leave-message" style={{marginTop:'20px'}}>Leave us a message</h4>
                    <p>And we will respond as quickly as we can.</p>
                    <Contactform />
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}