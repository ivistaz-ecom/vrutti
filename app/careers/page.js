"use client"
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Image from "next/image";

export default function engage () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Careers</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/connect#locate-us'}>Current Openings</Link></li>
                            <li><Link href={'/connect#leave-message'}>Internships</Link></li>
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
                    <Row className="abouttxt">
                        <Col md={9}>
                            <Image src={'/img/careers.jpeg'} width={300} height={300} className="w-100" style={{height:'auto'}} />
                            <br /><br />
                            <p>Current openings</p>
                            <p>Internships</p>
                            <p>Our Internship Programme offers graduate and postgraduate to gain direct practical work experience.</p>
                            
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}