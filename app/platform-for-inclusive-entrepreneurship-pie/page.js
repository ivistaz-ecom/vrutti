"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";
import Metatags from "../components/metatags";
import Head from "next/head";

export default function covidactioncollab () {
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
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Platform for Inclusive Entrepreneurship (PIE)</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/platform-for-inclusive-entrepreneurship-pie#introduction'}>Introduction</Link></li>
                            <li><Link href={'/platform-for-inclusive-entrepreneurship-pie#the-challenge'}>The Challenge</Link></li>
                            <li><Link href={'/platform-for-inclusive-entrepreneurship-pie#the-solution-we-are-working-on'}>The solution we are working on</Link></li>
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
                            <h4 id="introduction">Introduction to PIE</h4>
                            <p>Platform for Inclusive Entrepreneurship (PIE) is a producer-centric digital platform, a transformative systemic solution being built on the Societal Platform approach to improve the incomes (3-10 times) and resilience of small producers; helping them to access all key services in their livelihood journey.</p>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>PIE is a work in progress with substantial traction on the field, by a collaboration of three passionate partners with complementary skills (farmers, artisans, technology).</p>
                            <h4 id="the-challenge">The Challenge</h4>
                            <p>Throughout the world, millions of small farmers and artisans (‘small producers’) with unique skills to produce wholesome products have been reduced to mere labor in the value chain. They receive meager compensation and have negligible control and ownership, while taking maximum risk in the value chain. Most are poor and vulnerable to vagaries of climate and market. Improving their incomes is high on the agenda of Governments (reflected in favourable policies, programs); civil society, and increasingly start-ups and social enterprises.</p>
                        </Col>
                        <Col md={6}>
                            <Image src={'/img/photo-pie.jpeg'} width={300} height={200} alt="PIE" className="w-100" style={{height:'auto'}} />
                            <p style={{fontStyle:'italic', fontSize:'small'}}>Photo by Nandhu Kumar on Unsplash</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <p>The challenges to small producers are many and inter-connected.</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li>To make their farm and artisanal work more profitable, these producers need to strengthen their enterprises and move up in the value chain by accessing a variety of services from public, market and civil society systems. But, there is no &apos;single system&apos; that focuses on their requirements.</li>
                                <li>While the existing stakeholders are cognizant of this, the proposed and implemented solutions are siloed.</li>
                                <li>Each of the solutions focuses on one element of the challenge and do not holistically work together to understand the interdependencies at a macro and micro level.</li>
                                <li>Policies and the services currently being provided are inappropriate and not contextualized to the local requirements, thus often leading to poor uptake.</li>
                                <li>In addition, the focus has always been on large and medium farmers as it is difficult to find solutions that work for the most vulnerable. The producers are seen as beneficiaries and not potential customers which reduce the potential to scale.</li>
                            </ul>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Image src={'/img/photo-large.jpeg'} width={500} height={300} alt="PIE Large" className="w-100" style={{height:'auto'}} />
                    <p style={{fontStyle:'italic', fontSize:'small'}}>Photo by BBH Singapore on Unsplash</p>
                    <Row>
                        <Col md={9}>
                            <h4 id="the-solution-we-are-working-on">The Solution we are working on</h4>
                            <p>Platform for Inclusive Entrepreneurship (PIE) Its base is an effective impact model &ndash; 3Fold &ndash; which provides a programmatic framework to align the work towards impact. 3Fold Model focuses on the journey of the farmers and artisans, suggests a portfolio of work to improve their enterprises, links up for a variety of services (6C services- Create, Construct, Capacity, Channel, Capital, Connect) with providers, through hand-holding.</p>
                            <p>PIE with its open digital infrastructure provides</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li>A collective operational space for knowledge assets (content, processes, tools, solutions),</li>
                                <li>Services provision (6C services), and</li>
                                <li>Data analytics (to innovate, respond), enabling every stakeholder to bring their strengths in a unified way.</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <Image src={'/img/app-usage.jpeg'} width={200} height={200} alt="Usage" className="w-100" style={{height:'auto'}} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
        <Footer />
        </>
    );
}