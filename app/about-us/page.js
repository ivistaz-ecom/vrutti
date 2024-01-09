"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Aboutbanner from "../components/aboutbanner";
import Link from "next/link";
import Metatags from "../components/metatags";
import Head from "next/head";

export default function aboutus () {

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
        <Aboutbanner />
        <Container style={{paddingTop:'100px', paddingBottom:'60px'}}>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={"/about-us#about"}>About Us</Link></li>
                            <li><Link href={'/about-us#why'}>Why are we here</Link></li>
                            <li><Link href={'about-us#believe'}>What we believe in</Link></li>
                            <li><Link href={'about-us#journey'}>About our journey</Link></li>
                            <li><Link href={'about-us#genesis'}>The Genesis</Link></li>
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
                    <h4 style={{color:'#025745', fontWeight:'700'}}>About Us</h4>
                    <Row className="abouttxt">
                        <Col md={6}>
                            <p>Vrutti was ideated in 2002 by two graduates from the Institute of Rural Management Anand We are committed to find solutions to end poverty, marginalisation and create wealth and build resilience for small producers. As social entrepreneurs, we pursue problem solving with entrepreneurial zeal, business acumen, courage to innovate, and consistently challenge traditional practices. To us, scale is about reach and impact at the community &ndash; the depth and breadth of our contributions to change (at individual producer, ecosystem and national levels) and sustainability of benefits. Our solutions are modelled to take us to the scale. We are not satisfied with localised and limited interventions. We therefore &apos;model&apos; our approaches, &apos;cost&apos; them, and &apos;integrate&apos; them to be adopted by communities or market or public policy. We are passionate about unbiased measurement, self-critique and learning. We work through result-based planning tools, performance measurement metrics, impact and value for money assessments and use technology as augmenter.</p>
                        </Col>
                        <Col md={6}>
                            <Image src={'/img/Gulbarga.jpeg'} width={400} height={300} alt="Gulbarga" className="w-100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <h4>Vision</h4>
                            <p>Enhancing people&apos;s wellbeing through knowledge, innovations and transformative actions.</p>
                            <h4>Our Mision</h4>
                            <p>Building the wealth and resilience of small producers and vulnerable communities through transformative livelihoods solutions.</p>
                            <h4 id="why">Why are we here</h4>
                            <ul>
                                <li>We are here as there are a number of societal problems such as poverty and inequity, marginalization and vulnerabilities, low capabilities and lack of voice of people that persist and grow!</li>
                                <li>Solutions exists but are isolated, verticalised, and hardly converge to create lasting impact. We are enablers and system integrators and we integrate solutions.</li>
                                <li>As social entrepreneurs we are well placed to facilitate solutions.</li>
                            </ul>
                            <h4 id="believe">What we believe in</h4>
                            <ul>
                                <li>We strongly believe that &apos;Sustainable Livelihood Approaches&apos; can be a great lever to address poverty, marginalization and inclusive development</li>
                                <li>People first &ndash; All our work starts with &apos;empathy-led design&apos; with people and their issues at the centre &ndash; distinct from technical/ scientific design</li>
                                <li>DNA of any sustainable change and transformation requires integration of four key ecosystem elements &ndash; capacity of the communities, efficiency of the market, reach of the facilitators and power of the state</li>
                                <li>We impose constraints on ourselves, compelling us to be creative.</li>
                                <li>Uncompromising compassion, affordable excellence, sustenance of support are non-negotiable principles of our engagements</li>
                                <li>We are passionate about measurement, critiquing ourselves and improve… There is always a healthy impatience for success!</li>
                                <li>We believe in the innate capacity of all people to contribute meaningfully to development and generating and facilitating shared value is critical</li>
                            </ul>
                            <h4 id="journey">About our Journey</h4>
                            <p>Our transition from a livelihood resource center to a livelihood impact partner</p>
                            <p>The new Vrutti logo is a reflection of Vrutti&apos;s position and status in the livelihood impact space; a status borne of many years of passion and diligent work across a multitude of initiatives by many committed individuals.</p>
                            <Image src={'/img/vrutti-graphic.png'} width={300} height={200} alt="Vrutti Graphic" className="w-100" style={{height:'auto'}} />
                            <h4>Where we work</h4>
                            <p>The evolution of the organization &ndash; in multiple ways &ndash; is reflected in the way the brand and the logo is now defined and depicted.</p>
                            <p>From being a &apos;livelihood resource centre&apos; the organization has grown to be a &apos;livelihood impact partner&apos; &ndash; expanding far beyond a centre that ensures resources, to being a partner (to small producers) who assures impact.</p>
                            <p>Quantifying this impact, as a tagline, by saying &apos;ensuring small producers are 3 times more profitable&apos; is both a statement of commitment and a manifestation of the confidence in our ability to attain this endgame.</p>
                            <p>The role that Vrutti Livelihood Impact Partners plays is unique &ndash; it has the capability and capacity to lead, support or implement such interventions that make a small producer more relevant and competitive (in relation to large producers) &ndash; it can get involved from, and at any stage in the production, manufacturing to sale or market process and enhance and ensure magnitude of impact overall and at each stage.</p>
                            <p>The key visual element in the logo is the &apos;u&apos; of Vrutti constructed as an amalgamation of three leaves of different colours. The three leaves represent the elements of the 3 fold model that is at the core of Vrutti&apos;s philosophy &ndash; ensuring wealthy, resilient and responsible small producers.</p>
                            <p>The primary colour of the new logo &ndash; dark green &ndash; is not only representative of our strong farmer connect but also of harmony, nature (and eco friendly), renewal and plenty. The typeface or writing style of the logo is neat, clean and simple, representative of a contemporary and modern organization.</p>
                            <p>And thus, our journey goes on, with a new beginning. Vrutti Livelihood Impact Partners will continue to work with small producers to ensure that the promise of enabling them to be 3 times more profitable becomes a reality. This will take some doing, but every individual associated with Vrutti is determined and committed to give it their all in reaching this goal. Our new logo serves to act as a catalyst to re-energize this effort.</p>
                            <h4 id="genesis">The Genesis</h4>
                            <p>It started with data! An evaluation by CMS- Social Impact Specialists of a tribal livelihoods initiative for the State Planning Commission of Madhya Pradesh found that agriculture as a livelihood option was unproductive for small holder tribal farmers; leaving them without a profitable livelihood option. We, at Vrutti, unpacked the situation further &ndash; understanding on the whys and hows through data.</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Through our research, we saw that small farmers focused first on their own subsistence needs, not as an enterprise. Any extension support or knowledge enhancement they received, was geared towards improving productivity and yields, and not for improving profitability and ensuring that their livelihoods were sustainable.</p>
                            <p>We realized that in only a a revolution – a transformation of perspective and of practice would make agriculture and viable livelihoods option. We needed a paradigm innovation to change the way we viewed livelihoods in general and agriculture in specific. For the innovation to reap success we had to redraw our own mental map and translate the changed perspectives to all other stakeholders.</p>
                        </Col>
                        <Col md={6}>
                            <Image src={'/img/genesis.jpeg'} width={300} height={200} className="w-100" alt="Genesis" style={{height:'auto'}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <p>The elements of this change were:</p>
                            <ul>
                                <li>Agriculture to be considered an enterprise; the farmer, an entrepreneur; and the goal, profitability enhancement in place of productivity enhancement.</li>
                                <li>The focus of engagement moving from the macro &ndash; agriculture, to the micro &ndash; the farming family</li>
                                <li>Changing our perspective from poverty reduction, wealth creation</li>
                                <li>An ecosystem approach being recognized that converges the capacity of the communities, the efficiency of the markets, the power of the state and the reach of the facilitator</li>
                            </ul>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <p>These elements became the building blocks of our impact model!</p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}