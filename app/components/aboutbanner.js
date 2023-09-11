import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function aboutbanner () {
    return (
        <Container fluid style={{marginTop:'60px',padding:'0px'}}>
            <Row className="gx-0">
                <Col lg={5} sm={12} xs={12} style={{backgroundColor:'#025745'}} className="txtbox">
                    <h2 id="about">Who we are</h2>
                    <p>Vrutti is a not for profit organization registered under the Karnataka State Societies Registration Act 1960 . We have been working in the social impact space for over 23 years as part of the Catalyst Group and have made a difference to the lives and livelihoods of over a million poor and marginalized individuals and households. We work through an ecosystem approach, integrating and delivering end to end services that empower small producers graduate out of poverty and uncertainty and become three times more profitable.</p>
                </Col>
                <Col lg={7} className="imgsize">
                    <Image src={'/../img/aboutus-img.jpg'} width={400} height={200} alt="About Us" className="w-100" style={{height:'auto'}} />
                </Col>
            </Row>
        </Container>
    );
}