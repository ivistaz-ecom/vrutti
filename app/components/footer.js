import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function mainfooter () {
    return (
        <Container fluid style={{backgroundColor:'#000', paddingTop:'30px', paddingBottom:'20px', color:'white'}}>
            <Container>
                <Row style={{marginBottom:'15px'}}>
                    <Col md={2}>
                        <p>Useful Links</p>
                        <ul className="footerlinks">
                            <li><Link href={'/'}>Vrutti</Link></li>
                            <li><Link href={'/about-us'}>Who we are</Link></li>
                            <li><Link href={'/what-we-do'}>What we do</Link></li>
                            <li><Link href={'/platform-for-inclusive-entrepreneurship-pie'}>Platform for Inclusive Entrepreneurship (PIE)</Link></li>
                            <li><Link href={'/our-core-impact-model'}>Our Core Impact Model</Link></li>
                            <li>Engage</li>
                            <li>Connect</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <p>About Vrutti</p>
                        <p style={{fontSize:'small'}}>Vrutti is a not for profit organization registered under the Karnataka State Societies Registration Act 1960 . We are in the social impact space for more than 23 years as part of the Catalyst Group and made a difference to the lives and livelihoods of over a million poor and marginalized individuals and households. We work through an ecosystem approach integrating and delivering end to end services that empower small producers and marginalized grow their way out of poverty and uncertainty and to be 3 times more profitable.</p>
                    </Col>
                    <Col md={4}>
                        <p>Our Vision</p>
                        <p style={{fontSize:'small'}}>Enhancing People&apos;s Wellbeing through Knowledge, Innovations and Transformative Actions.</p>
                        <h6>Our Mission</h6>
                        <p style={{fontSize:'small'}}>Building Wealth and Resilience of Small Producers and Vulnerable Communities through Transformative Livelihoods Solutions.</p>
                    </Col>
                    <Col md={2}>
                        <p>Legal</p>
                        <ul style={{listStyleType:'none', marginLeft:'-30px', fontSize:'small',color:'#f05922'}}>
                            <li>&copy; 2018-2023 | Vrutti</li>
                            <li>Foreign Contribution Receipts (FCRA)</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}