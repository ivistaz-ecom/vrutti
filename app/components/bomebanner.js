import { Button, Container, Carousel , Col, Row} from "react-bootstrap";
import Image from "next/image";

export default function homebanner () {
    return (
        <Carousel>
            
            <Carousel.Item>
                <Container fluid className="homebanner" style={{'backgroundColor':'#025745'}}>
                    <Row className="g-0 w-100">
                        <Col><Image src={'/img/homebanner-1.jpeg'} width={500} height={700} className="left-circle" alt="Home Banner"/></Col>   
                        <Col className="">
                            
                            <div className="centerbox w-100">
                                <p style={{fontWeight:'bold'}}>COVID-19 RESPONSE UPDATES</p>
                                <div className="numcounterarea">
                                    <div id="numcounter"></div>
                                    <p style={{color:'#e7ba48', fontSize:'22px', fontWeight:'bold', margin:'0px'}}>HOUSEHOLDS</p>
                                </div>
                                <p style={{color:'white'}}>provided health advisory, awareness, food supplies, medical kits and financial services</p>
                                <Button href={'https://pages.razorpay.com/vrutticovid19'} style={{backgroundColor:'#f05922', border:'none'}}>Donate Now</Button>
                            </div>
                            
                        </Col>
                        <Col><Image src={'/img/homebanner-2.jpeg'} width={500} height={700} alt="Home Banner" className="right-circle"></Image></Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid className="homebanner" style={{'backgroundColor':'#025745'}}>
                    <Row className="g-0 w-100">
                        <Col><Image src={'/img/homebanner-12.jpeg'} width={500} height={700} className="left-circle" alt="Home Banner"/></Col>   
                        <Col className="">
                            <div className="centerbox w-100">
                                <p style={{fontWeight:'bold'}}>COVID-19 RESPONSE UPDATES</p>
                                <div className="numcounterarea">
                                    <div id="numcounter2"></div>
                                    <p style={{color:'#e7ba48', fontSize:'22px', fontWeight:'bold', margin:'0px'}}>SMALLHOLDER FARMERS</p>
                                </div>
                                <p style={{color:'white'}}>Under the 3 fold model, 26000 farmers are now Wealthy, Resilient &amp; Responsible.</p>
                                <Button href={'/our-core-impact-model/'} style={{backgroundColor:'#f05922', border:'none'}}>Donate Now</Button>
                            </div>
                        </Col>
                        <Col><Image src={'/img/homebanner-22.jpeg'} width={500} height={700} alt="Home Banner" className="right-circle"></Image></Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid className="homebanner" style={{'backgroundColor':'#025745'}}>
                    <Row className="g-0 w-100">
                        <Col>
                            <Image src={'/img/homebanner-13.jpeg'} width={500} height={700} className="left-circle" alt="Home Banner"></Image>
                        </Col>
                        <Col>
                            <div className="centerbox w-100">
                                <p style={{fontWeight:'bold'}}>COVID-19 RESPONSE UPDATES</p>
                                <div className="numcounterarea">
                                    <div id="numcounter3"></div>
                                    <p style={{color:'#e7ba48', fontSize:'22px', fontWeight:'bold', margin:'0px'}}>SPECIAL COMMUNITIES</p>
                                </div>
                                <p style={{color:'white'}}>1,20,000 special communities reduced their vulnerabilities, protected their lives and risk to HIV</p>
                                <Button href={'/our-core-impact-model/'} style={{backgroundColor:'#f05922', border:'none'}}>Donate Now</Button>
                            </div>
                        </Col>
                        <Col><Image src={'/img/homebanner-33.jpeg'} width={500} height={700} className="right-circle" alt="Home Banner"></Image></Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid className="homebanner" style={{'backgroundColor':'#025745'}}>
                    <Row className="g-0 w-100">
                        <Col><Image src={'/img/homebanner-14.jpeg'} width={500} height={700} className="left-circle" alt="Home Banner"></Image></Col>
                        <Col>
                            <div className="centerbox w-100">
                                <p style={{fontWeight:'bold'}}>COVID-19 RESPONSE UPDATES</p>
                                <div className="numcounterarea">
                                    <div id="numcounter4"></div>
                                    <p style={{color:'#e7ba48', fontSize:'22px', fontWeight:'bold', margin:'0px'}}>WOMEN OWNED BUSINESSES AND MICRO ENTERPRISES</p>
                                </div>
                                <p style={{color:'white'}}>32 women owned businesses &amp; 500 micro enterprises are successful and sustainable</p>
                                <Button href={'/our-core-impact-model/'} style={{backgroundColor:'#f05922', border:'none'}}>Donate Now</Button>
                            </div>
                        </Col>
                        <Col><Image src={'/img/homebanner-44.jpeg'} width={500} height={700} className="right-circle" alt="Home Banner"></Image></Col>
                    </Row>
                </Container>
            </Carousel.Item>

        </Carousel>
    );
}