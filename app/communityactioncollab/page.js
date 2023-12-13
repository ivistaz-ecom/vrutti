"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Image from "next/image";

export default function communityactioncollab () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>CommunityActionCollab</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/communityactioncollab#cacintro'}>#CovidActionCollab to CommunityActionCollab</Link></li>
                            <li><Link href={'/communityactioncollab#signup'}>SignUp Now</Link></li>
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
                            <Image src={'/img/CAC1-1024x326.png'} width={300} height={300} className="w-100" style={{height:'auto'}} alt="CAC" id="cacintro" />
                            <br /><br />
                            <p>The COVID-19 pandemic has enabled the Catalyst Group to build a strong and dynamic pan-India multidisciplinary network with a variety of expertise. This presents the potential to build the resilience of the vulnerable and their institutions in their everyday emergencies and to be ready for future humanitarian crises (climate &amp; health). This has led to the <a href="https://covidactioncollab.org" target="_blank">#COVIDActionCollab</a> transitioning to <a href="https://communityactioncollab.org" target="_blank">Community Action Collab</a>, a &apos;spring to action&apos; ready humanitarian emergency platform.</p>
                            <p>Community Action Collab (CAC) is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions in their everyday emergencies and is ready for future humanitarian crises (climate &amp; health). The platform orchestrates and influences the actions and decisions of 360 partners, governments and other alliances, enabling them to solve issues affecting the vulnerable and ensuring access to critical livelihood, health, social protection and climate impact solutions.</p>
                            <p>#CovidActionCollab</p>
                            <p>The COVID-19 pandemic has created global health and societal emergency. Yet, it has also provided humanity with an incredible opportunity to make our world a better place.</p>
                            <ul>
                                <li>Humanitarian and outbreak response over the years has taught us that:</li>
                                <li>Responses need to be people-centric, localised and effective</li>
                                <li>Resources – People, Money and Materials – should flow to places required</li>
                                <li>Information and coordination needs special attention</li>
                            </ul>
                            <p>To respond to COVID-19, WE have come together as a Collaborative with expertise in the areas of Public Health, Medicine, Humanitarian Emergencies, Engineering, Technology, Sociology, Behavioral Science, Mental Health, Migration, Financing and more.</p>
                            <p>WE are individuals, organisations and networks representing Public, Private, Civil Society, Academia and several other sectors.</p>
                            <p>We believe that pooling our expertise and resources empowers us to respond effectively to COVID-19, together.</p>
                            <Button variant="primary" href="https://communityactioncollab.org" target="_blank" id="signup">Visit #CommunityActionCollab</Button>
                            <br /><br />
                            <Button variant="primary" href="https://covidactioncollab.org" target="_blank">Visit #CovidActionCollab</Button>
                            <br /><br />
                            <Button variant="primary" href="https://covidactioncollab.org/login" target="_blank">Join #CovidActionCollab</Button>
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