"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";

export default function coreimpactmodel () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Our Core Impact Model</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/our-core-impact-model#3-fold-wealthy-resilient-and-responsible-farmers'}>3 FOLD - Wealthy, Resilient and Responsible Farmers</Link></li>
                            <li><Link href={'/our-core-impact-model#why-small-producers'}>Why Small Producers</Link></li>
                            <li><Link href={'/our-core-impact-model#problem-we-are-trying-to-solve'}>Problem we are trying to Solve</Link></li>
                            <li><Link href={'/our-core-impact-model#how-we-are-doing-it'}>How we are doing it</Link></li>
                            <li><Link href={'/our-core-impact-model#where-are-we-on-this-journey'}>Where are we on this Journey</Link></li>
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
                            <h4 id="3-fold-wealthy-resilient-and-responsible-farmers">3 FOLD &ndash; Wealthy, Resilient and Responsible Farmers</h4>
                            <p>3Fold is about building wealthy, resilient and responsible farmers &ndash; making them successful entrepreneurs, and sustained job creators, having their income increased by three times. It believes in the empowerment of farmers and their entrepreneurship orientation/potential and nudging the same to achieve the impact.</p>
                            <p>It addresses the key gaps of</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li>lack of integrated services (end-to-end) which is appropriate to the farmers,</li>
                                <li>need for &apos;diversified options&apos; (value addition, farm, allied and off-farm), augmented by &apos;integrators/activators at field level&apos; and &apos;technology&apos;, and</li>
                                <li>establishment of a sustainable eco-system at a Cluster level, that enables collaborative actions for collective impact.</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <Image src={'/img/vrutti-graphic-01.png'} width={400} height={300} alt="Vrutti Graphic" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9}>
                            <h4 id="why-small-producers" style={{marginTop:"15px"}}>Why Small Producers</h4>
                            <p>When we talk of creating and sustaining millions of jobs in India, the potential of agriculture as a sector, and smallholder farmers as key constituency cannot be ignored. About 100 million smallholder farmers employ themselves in their farms, and provide employment to their own family members and a few more. But, still most are poor.</p>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <h4 id="problem-we-are-trying-to-solve" style={{marginTop:"15px"}}>Problem we are trying to Solve</h4>
                    <Image src={'/img/vrutti-graphic-02.png'} width={400} height={300} alt="Vrutti Graphic" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9}>
                            <h4 id="how-we-are-doing-it" style={{marginTop:"15px"}}>How we are doing it</h4>
                            <p>The journey of the farmer (and their families) in 3Fold starts with building a personal growth plan followed by business planning (portfolio that includes farm, allied, non-farm), for their enterprises and potential diversification. Guided by the plan, customised capacity building and deep handholding support (farm advisory) is provided to every farmer. Accelerated and assured services with an integrated package that is farmer and their enterprise focussed is facilitated with partnerships. The bundle of integrated services are categorised under &apos;6C Services&apos; as depicted here.</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Image src={'/img/vrutti-graphic03.png'} width={500} height={300} alt="PIE Large" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9} style={{marginTop:'15px',marginBottom:'15px'}}>
                            <p>The solution is &apos;end-to-end&apos; to bring an impactful change. While it starts with the farm, the support services go across the value chain to derive the maximum benefit from the value chain for farmers. The picture below captures the entire model of support to farmers.</p>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <Image src={'/img/vrutti-graphic-04.png'} width={500} height={300} alt="PIE Large" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9}>
                            <p style={{marginTop:"15px"}}>While farmers and their groups initiate and continue their journey in an entrepreneurship mode, it is important that they need to be supported continuously (handholding, mentoring, advisory, capacity building), along with exploring continuously opportunities from markets, scientific community and public investments.</p>
                            <p>To enable this (to develop and support farmers and their institutions), Vrutti incubates &apos;Clusters&apos; (district or block level) called ‘Business Acceleration Units (BAUs)’ to establish a strong ecosystem in the agricultural sector so that farming enterprises in these clusters become sustainable and scalable – institutions, technology, activators, collaborators. Through these BAUs, Vrutti stays committed to enable and empower farmers in this journey, by owning the program with two key components of integration and dependencies to reduce risks and avoid issues becoming problems.</p>
                            <p>The role and the services of Business Acceleration Units are captured here:</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Image src={'/img/vrutti-graphic-05.png'} width={500} height={300} alt="PIE Large" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9}>
                            <h4 id="where-are-we-on-this-journey" style={{marginTop:"15px"}}>Where are we on this Journey</h4>
                            <p>The model currently operational in seven Clusters across five states of India, covering about 42,500 farming families.</p>
                            <p>Four key elements of this model that brings impact and sustains are: Activators/ integrators, Partnerships, Technology (IGotCrops, by Mindtree), and Business model at the Cluster/ BAU level. Vrutti as a professional organisation continues to be supporting the producers&apos; collectives and farmers on a long-term basis, through a &apos;people-professional partnerships&apos;, building on the experiences of AMUL model</p>
                            <p>3Fold model expects the impacts in the following areas &ndash; income, resilience, environment and institutions. Each BAU, the journey is for 10 years, with the incubation investment period of five years. By the end of 5 years, the BAU reaches 7,500 farmers (10,000 by 6th year) and establishes the farmers institutions, enterprises, partnership appropriately augmented by technology and activators. For this, an amount of about Rs. 7.5 Crores over three to five years is required as incubation funding. This incubation funding over a period of 10 years journey of BAU will deliver incomes equivalent to 35 times the incubation funding in the hands of farmers.</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
        <Footer />
        </>
    );
}