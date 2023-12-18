"use client"
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Image from "next/image";
import Metatags from "../components/metatags";
import Head from "next/head";

export default function engage () {
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
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Engage</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/connect#locate-us'}>Locate us</Link></li>
                            <li><Link href={'/connect#leave-message'}>Leave a message</Link></li>
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
                    <h4 id="locate-us" style={{color:'#025745', fontWeight:'700'}}>Validation from <Link href={'https://www.cafamerica.org/'}>CAF America</Link></h4>
                    <Row className="abouttxt">
                        <Col md={9}>
                            <Image src={'/img/caf-international.png'} width={300} height={300} className="w-100" style={{height:'auto'}} />
                            <h4 style={{marginTop:'30px'}}>Partner with us for Impact</h4>
                            <p>Our partners play a huge part in supporting the important work we do, helping us deliver services to those who need it the most</p>
                            <p>Several corporations and organizations are playing an active role in building inclusive societies. While many such engagements are done in isolated pockets, the others are not delivering appropriate impact. Partnering with us can help you redirect the philanthropic investments and the volunteering activities towards areas that the nation needs the most.</p>
                            <p>We develop relationships with a vast array of businesses to create mutually beneficial partnership for our primary producers</p>
                            <h4>Partner organisations</h4>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <Image src={'/img/cms-logo.png'} width={400} height={100} className="w-100" style={{height:'auto'}} alt="Logos" />
                    <h4 style={{marginTop:'30px'}}>Our Current Partners</h4>
                    <p style={{color:'red'}}>Co &ndash; Creators</p>
                    <Image src={'/img/logos-2.png'} width={800} height={100} style={{height:'auto'}} alt="Logos" />
                    <br /><br />
                    <p style={{color:'red'}}>Model Partners</p>
                    <Image src={'/img/Logos-1223.png'} width={800} height={100} className="w-100" style={{height:'auto'}} alt="Logos" />
                    <br /><br />
                    <p style={{color:'red'}}>Business Partners</p>
                    <Image src={'/img/Logos-1224.png'} width={800} height={100} className="w-100" style={{height:'auto'}} alt="Logos" />
                    <br /><br />
                    <p style={{color:'red'}}>Project Partners</p>
                    <Image src={'/img/Logos-1225.jpeg'} width={800} height={100} className="w-100" style={{height:'auto'}} alt="Logos" />
                    <br /><br />
                    <p style={{color:'red'}}>Network Partners</p>
                    <Image src={'/img/Logos-1226.png'} width={600} height={100} style={{height:'auto'}} alt="Logos" />
                    <h4 className="mt-4">How can you contribute</h4>
                    <p style={{color:'red'}}>Patient and long term Philanthropic Investments</p>
                    <p>Working on some of the toughest challenges requires patience and long term commitment to impact communities . In addition emerging global challenges like climate change will have a disproportionate impact on poor populations, who are both more exposed to climatic changes and also have less resources to deal with the adverse effects</p>
                    <p style={{color:'red'}}>Catalytic Capital</p>
                    <p>Investment capital that is patient, risk-tolerant, concessionary, and flexible in ways that differ from conventional investment. It is an essential tool to bridge capital gaps and achieve breadth and depth of impact, while complementing conventional investing.</p>
                    <p style={{color:'red'}}>Expert Volunteers</p>
                    <p>Your time and skills are valuable to us. While the actual engagement is carefully planned and designed our volunteering programme is designed for individuals looking to gain personal experience in social impact sector. There are multiple ways in which volunteers can create value, both for themselves and the communities that they will volunteer with. The opportunities range from office work to event organisation to public awareness raising and fundraising, social media outreach etc.</p>
                    <h4>Why we need Support ?</h4>
                    <ul>
                        <li>The 3Fold Model, with our ideas, efforts and bootstrapped level has reached reasonable scale and proving impact; Many people have contributed to evolving this</li>
                        <li>Time to intensify in the existing areas and build strong scale organisation (core team, technology, systems and leadership)</li>
                        <li>We are looking for access to long-term financing, primarily grants, for activities across the value chain from capacity building to program implementation and scale-up.</li>
                    </ul>
                    <h4>Why should you partner?</h4>
                    <ul>
                        <li>Focus on societal projects that deliver high impact.</li>
                        <li>Alignment with United Nations Sustainable Development Goals (SDGs) and Schedule VII of the Companies Act 2013 ( India )</li>
                    </ul>
                    <Image src={'/img/sdg-logos.jpeg'} width={700} height={100} style={{height:'auto'}} alt="Logos" />
                    <br /><br />
                    <p><span style={{color:'red'}}>Partner with us and be an impact catalyst. Write to us – </span><a href="mailto:contactus_vrutti@catalysts.org">contactus_vrutti@catalysts.org</a></p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}