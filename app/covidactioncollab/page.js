"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";

export default function covidactioncollab () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>#CovidActionCollab</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu" style={{position:'fixed'}}>
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/covidactioncollab/#covidactioncollab-to-communityactioncollab'}>#CovidActionCollab to CommunityActionCollab</Link></li>
                            <li><Link href={'/covidactioncollab/#about-the-collaborative'}>Abou the collaborative</Link></li>
                            <li><Link href={'covidactioncollab/#singup-now'}>SignUp Now</Link></li>
                            <li><Link href={'covidactioncollab#covid-resources'}>Covid Resources</Link></li>
                            <li><Link href={'covidactioncollab#covid-resources'}>Donate Now</Link></li>
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
                    <Row>
                        <Col md={9}>
                            <Image src={'/img/CAC-Banner.jpeg'} width={300} height={100} alt="CAC Banner" className="w-100" style={{height:'auto', marginBottom:'12px'}} id="covidactioncollab-to-communityactioncollab" />
                            <p>The COVID-19 pandemic has enabled the Catalyst Group to build a strong and dynamic pan-India multidisciplinary network with a variety of expertise. This presents the potential to build the resilience of the vulnerable and their institutions in their everyday emergencies and to be ready for future humanitarian crises (climate & health). This has led to the #COVIDActionCollab transitioning to Community Action Collab, a &apos;spring to action&apos; ready humanitarian emergency platform.</p>
                            <p>#COVIDActionCollab</p>
                            <ul>
                                <li>Humanitarian and outbreak response over the years has taught us that:</li>
                                <li>Responses need to be people-centric, localised and effective</li>
                                <li>Resources &ndash; People, Money and Materials &ndash; should flow to places required</li>
                                <li>Information and coordination needs special attention</li>
                            </ul>
                            <p>To respond to COVID-19, WE have come together as a Collaborative with expertise in the areas of Public Health, Medicine, Humanitarian Emergencies, Engineering, Technology, Sociology, Behavioral Science, Mental Health, Migration, Financing and more.</p>
                            <p>WE are individuals, organisations and networks representing Public, Private, Civil Society, Academia and several other sectors.</p>
                            <p>We believe that pooling our expertise and resources empowers us to respond effectively to COVID-19, together.</p>
                            <h4 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Purpose, results, principles of the collaborative:</h4>
                            <p>The COVID Action Collaborative (CAC) drives comprehensive and co-ordinated action with people at the very centre of the response, leading to the prevention of new infections and mitigating impacts for those affected.</p>
                            <p>Results we want to achieve: Prevention of new infections; early diagnosis; facilitation of appropriate care; mitigation of impacts including livelihoods.</p>
                            <p>Principles &ndash; community-focussed, gender and equity, strengthen existing public systems, working with existing solutions and finding new as required, aiming for sustainable outcomes</p>
                            <p style={{fontWeight:"700"}}>Strategies</p>
                            <p>S1: Deliver high impact package of services to key communities (2 million), where the collaborative members have a direct presence or reach.</p>
                            <p>S2: Setup and operate an information exchange and build capacities of key partners and actors.</p>
                            <p>S3: Solve critical challenges which can have a high impact on response.</p>
                            <p style={{fontStyle:'italic'}}>All three strategies will leverage technology and partner presence and capabilities.</p>
                            <Image src={'/img/CAC-Frameworks.png'} width={300} height={150} alt="CAC Framework" className="w-100" style={{height:'auto'}} />
                            <h4 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}} id="about-the-collaborative">About the collaborative</h4>
                            <p>To know more about the collaborative</p>
                            <p>Visit: <Button href={'https://covidactioncollab.org/'} style={{backgroundColor:'#f05922', border:'none'}}>#CovidActionCollab website</Button></p>
                            <p>Visit: <Button href={'https://communityactioncollab.org/'} style={{backgroundColor:'#f05922', border:'none'}}>#CommunityActionCollab website</Button></p>
                            <h4 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}} id="singup-now">SignUp Now</h4>
                            <p>Visit: <Button href={'https://covidactioncollab.org/login/'} style={{backgroundColor:'#f05922', border:'none'}}>Join the #CovidActionCollab</Button></p>
                            <h4 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Covid Resources</h4>
                            <p id="covid-resources">Visit: <Button href={'https://swastihc.org/covid-resources'} style={{backgroundColor:'#f05922', border:'none'}}>View All Covid Resources</Button></p>
                            <hr />
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