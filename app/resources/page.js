"use client"
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Image from "next/image";

export default function connect () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Resources</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/resources#fcra'}>FCRA Receipts</Link></li>
                            <li><Link href={'/resources#financials'}>Financials</Link></li>
                            <li><Link href={'/resources#statutory-details'}>Statutory Details</Link></li>
                            <li><Link href={'/resources#publications'}>Publications</Link></li>
                            <li><Link href={'/resources#annual-reports'}>Annual Reports</Link></li>
                            <li><Link href={'/resources#evidences'}>Evidences</Link></li>
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
                    <h4 className="fcra" id="fcra">FCRA Receipts</h4>
                    <Row className="gx-0">
                        <Col md={3}>
                            <div className="greybox">2022-2023<br /><br /><a href="/img/FCRA-RECEIPTS-Q1-FY-22-23.pdf" target="_blank">Download Receipt for Q1</a></div>
                        </Col>
                        <Col md={3}>
                            <div className="whitebox">2021-2022<br />
                                <a href="/img/FCRA-RECEIPTS-Q1-FY-21-22.pdf" target="_blank">Download Receipt for Q1</a><br />
                                <a href="/img/FCRA-Q2-RECEIPTS-FY-2021-22.pdf" target="_blank">Download Receipt for Q2</a><br />
                                <a href="/img/FCRA-Q3-RECEIPTS-FY-2021-22.pdf" target="_blank">Download Receipt for Q3</a><br />
                                <a href="/img/FCRA-Q4-RECEIPTS-FY-2021-22.pdf" target="_blank">Download Receipt for Q4</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="greybox">2020-2021<br />
                                <a href="/img/FCRA-RECEIPTS-Q1-FY-20-21.pdf" target="_blank">Download Receipt for Q1</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q2-FY-20-21.pdf" target="_blank">Download Receipt for Q2</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q3-FY-20-21.pdf" target="_blank">Download Receipt for Q3</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q4-FY-20-21.pdf" target="_blank">Download Receipt for Q4</a>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row className="gx-0">
                        <Col md={3}>
                            <div className="whitebox">2019-2020<br />
                                <a href="/img/FCRA-RECEIPTS-Q1-FY-19-20.pdf" target="_blank">Download Receipt for Q1</a><br />
                                <a href="/img/Foreign-Receipts-Vrutti-15-seal.pdf" target="_blank">Download Receipt for Q2</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q3-FY-19-20.pdf" target="_blank">Download Receipt for Q3</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q4-FY-19-20.pdf" target="_blank">Download Receipt for Q4</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="greybox">2018-2019<br />
                                <a href="/img/FCRA-RECEIPTS-Q1-FY-18-19.pdf" target="_blank">Download Receipt for Q1</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q2-FY-18-19.pdf" target="_blank">Download Receipt for Q2</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q3-FY-18-19.pdf" target="_blank">Download Receipt for Q3</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q4-FY-18-19.pdf" target="_blank">Download Receipt for Q4</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="whitebox">2017-2018<br />
                                <a href="/img/FCRA-RECEIPTS-Q1-FY-17-18.pdf" target="_blank">Download Receipt for Q1</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q2-FY-2017-18.pdf" target="_blank">Download Receipt for Q2</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q3-FY-17-18pdf.pdf" target="_blank">Download Receipt for Q3</a><br />
                                <a href="/img/FCRA-RECEIPTS-Q4-FY-17-18.pdf" target="_blank">Download Receipt for Q4</a>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row className="gx-0">
                        <Col md={3}>
                            <div className="greybox">2016-2017<br />
                                <a href="/img/FCRA-RECEIPTS-Q3-FY-16-17.pdf" target="_blank">Download Receipt</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <h4 className="fcra mt-4" id="financials">Financials</h4>
                    <p><a href="/img/Vrutti-Audited-Report-FY-2021-22.pdf" target="_blank">Annual Audit Report 2021 - 22</a></p>
                    <p><a href="/img/Vrutti-Audited-Report-FY-2020-21.pdf" target="_blank">Annual Audit Report 2020 - 21</a></p>
                    <p><a href="/img/Vrutti-Audited-Financials-2019-20.pdf" target="_blank">Annual Audit Report 2019 - 20</a></p>
                    <p><a href="/img/Vrutti Audited Financials-2018-19.pdf" target="_blank">Annual Audit Report 2018 - 19</a></p>
                    <p><a href="/img/Vrutti Audited Financials-2017-18.pdf" target="_blank">Annual Audit Report 2017 - 18</a></p>
                    <p><a href="/img/Vrutti Audited Financials-2016-17.pdf" target="_blank">Annual Audit Report 2016 - 17</a></p>
                    <p><a href="/img/Vrutti Audited Financials-2015-16.pdf" target="_blank">Annual Audit Report 2015 - 16</a></p>
                    <p><a href="/img/Vrutti Audited Financials-2014-15.pdf" target="_blank">Annual Audit Report 2014 - 15</a></p>
                    <h4 className="fcra mt-4" id="statutory-details">Statutory Details</h4>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>Legal Name</Col>
                        <Col md={9}>Vrutti</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>Registered & Communication Address</Col>
                        <Col md={9}>Raghavendra Nilaya, 25, 2nd Floor, 1st Main Rd, AECS Layout, Bengaluru, Karnataka 560094</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>CEO</Col>
                        <Col md={9}>Raghini B; ceo_vrutti@catalysts.org; +91-94430 78087</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>Registration Under</Col>
                        <Col md={9}>Karnataka Societies Registration Act,196</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>PAN</Col>
                        <Col md={9}>AAAJC0156H</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>12A Certificate</Col>
                        <Col md={9}>CIT(E)BLR/12A/K-113/AAAJC0156H/ITO(E)-2 Vol 2014-2015 – Renewed AAAJC0156HF20214 dt 28/05/2021 Valid till 31/03/2026</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>80G Certificate</Col>
                        <Col md={9}>CIT(E)BLR/80G/K-114/AAAJC0156H/ITO(E)-2 Vol 2014-2015 – Renewed – AAAJC0156HF20214 dt 31/05/2021 Valid till 31/03/2026</Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #d2d2d2'}}>
                        <Col md={3}>FCRA Registration no.</Col>
                        <Col md={9}>094421378</Col>
                    </Row>
                    <h4 className="fcra mt-4" id="publications">Publications</h4>
                    <Row>
                        <Col md={4}>
                            <Link href="/img/GI-Case-Studies_5June2023.pdf" target="_blank">
                                <Image src={'/img/GI-Case-Studies_5June2023.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Vrutti-Article-empowerment-or-exploitation-global-perspectives-on-womens-work-in-the-platform-economy_may-2023.pdf" target="_blank">
                                <Image src={'/img/Empowerment-or-exploitation-global-perspectives-on-womens-work-in-the-platform-economy_may-2023.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Digitally_Empowered_Feb2023.pdf" target="_blank">
                                <Image src={'/img/OSR_fishMARC-Case-Studies-scaled.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Link href="/img/UNDP-NITI-AAYOG-Best-Practices-in-Social-sector-Compendium.pdf" target="_blank">
                                <Image src={'/img/UNDP-Best-Practices-cover.jpeg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/TowardsAcceleratedGrowthInDairying.pdf" target="_blank">
                                <Image src={'/img/Towards-Accelerated-Growth-In-Dairying-641x1024.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Developing-climate-resilience-in-karnataka.pdf" target="_blank">
                                <Image src={'/img/Developing-climate-resilience-in-karnataka-724x1024.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Link href="/img/Reducing-Vulnerabilities.pdf" target="_blank">
                                <Image src={'/img/Reducing-Vulnerabilities-777x1024.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Climate-Change-and-Children.pdf" target="_blank">
                                <Image src={'/img/Climate-Change-and-Children-e1607151737829-225x300.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/CottonReport.pdf" target="_blank">
                                <Image src={'/img/Cotton-Report.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                    </Row>
                    <h4 className="fcra mt-4" id="annual-reports">Annual Reports</h4>
                    <Row>
                        <Col md={4}>
                            <Link href="/img/Annual-Report-2022-23.pdf" target="_blank">
                                <Image src={'/img/AnnualReport_2022-23.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Vrutti_Annual_Report_2021-22.pdf" target="_blank">
                                <Image src={'/img/Vriutti-Annual-report-2021-22.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/img/Vrutti-Annual-Report_2020-21.pdf" target="_blank">
                                <Image src={'/img/Vrutti-Annual-Report-2020-21-212x300.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                        </Col>
                    </Row>
                    <h4 className="fcra mt-4" id="evidences">Evidences</h4>
                    <iframe loading="lazy" title="Ambuliaara Farmer Producer Company | Vrutti Livelihood Impact Partners" width="500" height="281" src="https://www.youtube.com/embed/GjrJmPaOs-E?start=47&amp;feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link href="https://www.villagesquare.in/2020/05/25/farmer-producer-company-successfully-implements-farm-to-home-model-during-lockdown/" target="_blank">
                                <Image src={'/img/Pic-03-2-300x161.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                            <p>Farmer producer company successfully implements farm-to-home model during lockdown</p>
                        </Col>
                        <Col md={4}>
                            <Link href="https://www.villagesquare.in/2020/07/10/resourceful-producer-companies-address-farmers-lockdown-challenges/" target="_blank">
                                <Image src={'/img/Pudukottai-01.jpg'} width={600} height={100} className="w-100" style={{height:'auto'}} alt="GreenLiving" />
                            </Link>
                            <p>Resourceful producer companies address farmers’ lockdown challenges</p>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}