"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";
import Metatags from "../components/metatags";

export default function whatwedo () {

    const title = "Vrutti | Livelihood Impact Partners";
    const description = "Livelihood Impact Partners";
    const url = "Test URL";

    return (
        <>
        <Metatags title={title} desc={description} url={url} />
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>What We Do</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/what-we-do#whatwedo'}>What we do</Link></li>
                            <li><Link href={'what-we-do#wherewework'}>Where we work</Link></li>
                            <li><Link href={'what-we-do#communities'}>Communities we work with</Link></li>
                            <li><Link href={'what-we-do#partners'}>Partners we work with</Link></li>
                            <li><Link href={'what-we-do#development-goals'}>Sustainable Development Goals</Link></li>
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
                    <h4 style={{color:'#025745', fontWeight:'700'}} id="whatwedo">What We Do</h4>
                    <Row className="abouttxt">
                        <Col md={6}>
                            <p>Vrutti works with economically and socially marginalized groups through sustainable livelihood approaches</p>
                            <ul>
                                <li>Small and marginal farmers through its flagship 3fold model, building wealthy, resilient and responsible farmers, covering over 130,000 farming families across India;</li>
                                <li>Women in sex work, transgendered people and MSMs who are vulnerable to HIV, in reducing their vulnerability to HIV risk, covering 120,000 population</li>
                                <li>Artisanal marine fisherfolk in improving their livelihoods and lives while balancing the fisheries and coastal resources, covering 21,000 fisherfolk</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <Image src={'/img/Kalavathi.jpg'} width={400} height={300} alt="Kavita" className="w-100" style={{height:'auto'}} />
                            <small style={{fontStyle:'italic'}}>Kalavathi explaining silkworm rearing. Photo by Priya Pillai (Swasti)</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <p>We do this by</p>
                            <ul>
                                <li>Designing models that are directly executed by Vrutti</li>
                                <li>Co-creating models/collaborating with partners for scale-up</li>
                                <li>Providing technical support to partners to integrate and improve efficiency</li>
                                <li>Knowledge sharing, building perspectives towards integrating models, scale-up and replication</li>
                                <li>Meaningful engagement to contribute to policy shaping</li>
                            </ul>
                            <p>Vrutti also has a financial inclusion division, called Vrutti &ndash; Livelihoods Impact Finance Enabler (V-LIFE) which works with banks and financial institutions for enabling financial services and literacy for producer institutions, enterprise groups and communities. Vrutti undertakes studies and research in various areas, with recent being impact evaluation of National Rural Livelihood Mission, literature review of Farmer Producer Organisations (FPOs).</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <h4 id="wherewework">Where we work</h4>
                    <Image src={'/img/farmers-map.png'} width={400} height={300} alt="Farmers Map" className="w-100" style={{height:'auto'}} />
                    <Row>
                        <Col md={9}>
                            <h4 style={{marginTop:'30px'}}>Communities we work with</h4>
                            <p>People born in the world&apos;s poorest places and difficult circumstances deserve the chance to achieve their full potential, because every human life is valuable.</p>
                            <h4>Farming Communities</h4>
                            <p>Vrutti has focused on working with farming communities as agriculture is the primary source of livelihood for over 50% of Indians, and over 70% of farmers are smallholder producers. We revved up our direct engagement with farming communities from 2010-2011 when we piloted, and subsequently developed a proof of concept for the “Agriculture Enterprise Facilitation Centre” (AEFC). Scaling up from two districts in Madhya Pradesh and 2,000 farmers, to 9 districts across six states ( Andhra Pradesh, Chattisgarh ,Madhya Pradesh, Karnataka,Tamil Nadu, Telangana, ) and over 42,500 farmers, the model is constantly evolving and growing, with its latest avatar being the 3 Fold Model &ndash; which involves intensive engagement with farmers and their institutions.</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>We also are working in Maharashtra and Madhya Pradesh on Integrated Village Development Models. We focus on regions that are largely rainfed, in districts identified by the government for special assistance under the Backward Regions Grant Fund, and communities that are socially and economically marginalised such as scheduled castes and scheduled tribes, and small and marginal farmers.</p>
                            <h4>Fishers</h4>
                            <p>Our long term goal is strengthening livelihoods of small scale fishing community and sustainable use of fishing resources.</p>
                            <p>FishMARC has a history of its own. Its origin can be traced to the South Indian Federation of Fishermen Societies (SIFFS), a Trivandrum based cooperative organisation of small scale fishermen in Tamil Nadu and Kerala. Started in 2008, fishMARC has been working in Kutch, where it organised a Fishermen Producer Company.</p>
                        </Col>
                        <Col md={6}>
                            <Image src={'/img/Sumathi.jpg'} width={300} height={200} alt="Sumathi" className="w-100" style={{height:'auto'}} />
                            <small style={{fontStyle:'italic'}}>Sumathi and Suma with Oil Mill Unit. Photo by Vandana R (Vrutti)</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <p>It has also been working in Tamil Nadu with the State Government to promote better management of fish resources and has promoted three co-management pilot projects. In August 2017, fishMARC has been operating as part of Vrutti, in order to access the benefits of a larger pool of professionals and improve its resource mobilisation. The Secretary and founder of fishMARC is heading this new vertical in Vrutti. Though a part and parcel of Vrutti, the fishMARC label is being retained by the vertical in recognition of its history and brand value.</p>
                            <h4 id="communities">Marginalised Communities</h4>
                            <p>Vrutti works with communities in difficult circumstances, women in sex work, communities living with or vulnerable to HIV. Our work with these communities started around 2005. These communities are disempowered and unable to take decisions on their lives and livelihoods. A critical component that triggers and sustains this situation relates to finance. Vrutti steps in to provide support related to financial literacy, financial inclusion, livelihoods support, which provides them a sense of security and of pride, empowering them to take decisions for their and their family&apos;s well-being. In the past year, Vrutti has been working closely with women in sex work, transgender communities and their institutions.</p>
                            <h4 id="partners">Partners we work with</h4>
                            <p>Our partners play a huge part in supporting the important work we do, helping us deliver services to those who need it the most.</p>
                            <h4>Rural India Livelihoods Project</h4>
                            <p>Launched in 2011, the Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM) aims to link the rural poor in India to sustainable livelihood opportunities and financial services.</p>
                            <p>Vrutti in collaboration with Catalyst Management Services (CMS), Ministry of Rural Development, Bill &amp; Melinda Gates Foundation, World Bank and International Initiative for Impact Evaluation (3ie) has been generating rigorous evidence since 2019 on the impacts of this large-scale program on livelihood promotion and social mobilization.</p>
                            <h4 id="development-goals">Our initiatives contribute to Sustainable Development Goals</h4>
                            <p style={{fontStyle:'italic'}}>Our Vision, Mission, strategies and actions contribute to “No Poverty” and SDG 5,8,10,12,13,14,15</p>
                            <Image src={'/img/SDG-Logo.png'} width={400} height={200} className="w-100" style={{height:'auto'}} alt="SDG Logo" />
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