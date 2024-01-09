import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function ourresponse () {
    return (
        <Container fluid className="ourresponse">
            <Container>
                <h2>Our Response Actions for Small &amp; Marginal Farmers</h2>
                <Row style={{marginTop:'20px'}}>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.TelephoneFill size={60} color="#025745" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4>Health Advisory Helpline (4 States)</h4>
                                <p>Health advisory for prevention of Covid-19 through voice &amp; text messages, one-to-one communication through phone, helpline &amp; IVR<br /><b>(Karnataka, Tamil Nadu, Chattisgarh, Madhya Pradesh)</b></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.CartFill size={60} color="#025745" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4>29 FPOs</h4>
                                <p>Market linkage support for FPOs<br /><b>(Karnataka, Tamil Nadu, Chattisgarh, Madhya Pradesh, Andhra)</b></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.MegaphoneFill size={60} color="#f05922" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4 style={{color:'#f05922'}}>27,000 + Households</h4>
                                <p>Awareness Creation &amp; Facilitating Covid-19 measures from governemnt<br /><b>(Kar, TN, CH, MP, MH, TS)</b></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.Bank2 size={60} color="#f05922" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4 style={{color:'#f05922'}}>3 FPOs</h4>
                                <p>Financial linkage support for FPOs<br /><b>(Tamilnadu-Pudukkottai)</b></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.Basket2Fill size={60} color="#025745" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4>3,000 + Households</h4>
                                <p>Supply of food &amp; essentila kits<br /><b>(Tamil Nadu - Salem)</b></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.BriefcaseFill size={60} color="#025745" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4>200 + women enterpreneurs</h4>
                                <p>Income generation for women farmers through mask production<br /><b>(Andhra Pradesh &amp; Karnataka)</b></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.Prescription2 size={60} color="#f05922" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4 style={{color:'#f05922'}}>2,300 + Households</h4>
                                <p>Supply of masks, PPEs &amp; medical kits<br /><b>(Kar, TN, CH, MP, MH, TS)</b></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={4} className="greyiconbox">
                                <Icon.PeopleFill size={60} color="#f05922" />
                            </Col>
                            <Col md={8} className="respwhitebgbox">
                                <h4 style={{color:'#f05922'}}>500 + Farmers</h4>
                                <p>Banking service for farmers at doorsteps</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
}