"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";

export default function research () {
    return (
        <>
        <Navbar />
        <Container style={{marginTop:'40px', paddingTop:'100px', paddingBottom:'60px'}}>
            <h1 style={{color:'#025745', fontWeight:'700', marginBottom:'30px'}}>Research</h1>
            <Row>
                <Col md={3}>
                    <div className="aboutmenu">
                        <ul>
                            <li style={{backgroundColor:'#faf1da'}}>IN THIS SECTION</li>
                            <li><Link href={'/research#research-evidence'}>Research &amp; Evidence</Link></li>
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
                    <h4 style={{color:'#025745', fontWeight:'700'}} id="whatwedo">Research</h4>
                    <Row className="abouttxt">
                        <Col md={9}>
                            <p>Vrutti has been partnering with academic &amp; research institutions to generate evidence that will help in strengthening livelihoods of marginalised communities. Our flagship intervention and partnership is with National Rural Livelihoods Mission.</p>
                            <h4>National Rural Livelihoods Mission</h4>
                            <p>Launched in 2011, the Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM) aims to link the rural poor in India to sustainable livelihood opportunities and financial services. Vrutti and our group organisation Catalyst Management Services (CMS), in partnership with Ministry of Rural Development, Bill & Melinda Gates Foundation and World Bank, International Initiative for Impact Evaluation (3ie), has been generating rigorous evidence since 2019 on the impact of this large-scale programme on livelihood promotion and social mobilisation.</p>
                            <p>In the second phase that began in late 2022, we evaluated the overall programme and are now working to assess its impact on women&apos;s income and assets, and their control over income.</p>
                            <p>Spotlight</p>
                            <p>Spotlight 1 | Journal article | <Link href={'https://www.sciencedirect.com/science/article/pii/S0304387822000050?via%3Dihub='}>Financial access and women&apos;s role in household decisions: Empirical evidence from India&apos;s National Rural Livelihoods project</Link></p>
                            <p>Spotlight 2 | Working paper | <Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/improving-delivery-and-impacts-pro-poor-programmes'}>Improving delivery and impacts of pro-poor programmes</Link></p>
                            <p>Spotlight 3 | Working paper | <Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/womens-economic-status-and-son-preference-empirical'}>Women&apos;s economic status and son preference: empirical evidence from private school enrolment in India</Link></p>
                            <p>Overview</p>
                            <p>As key findings from first impact evaluation continue to inform the design and execution of the DAY-NRLM program, <Link href={'https://www.3ieimpact.org/'}>International Initiative for Impact Evaluation (3ie)</Link> has initiated the second phase of evidence generation in partnership with Vrutti and Catalyst Management Services (CMS). The research produced will include a diverse set of studies that will provide evidence on the overall impact of DAY-NRLM and of a subset of pilots conducted under the program. We aim to generate learnings on pathways, contextual factors and other elements that mediate policy impact. Some of the studies also focus on household and individual level outcomes, specifically the income of women and their share of household assets, consumption, and other measures of welfare.</p>
                            <p>Phase 2</p>
                            <p>As part of evaluating the impact of DAY-NRLM, we will be studying the impact of program interventions on household income, consumption, and measures of women&apos;s empowerment. The endline evaluation of one of India&apos;s largest poverty alleviation programs will use the <Link href={'https://www.3ieimpact.org/sites/default/files/2020-10/IE128-NRLP-NRLM.pdf'}>baseline data from Vrutti and 3ie&apos;s 2018-19 evaluation</Link> of the same. We will be identifying a set of intensive blocks in which new income and livelihood-enhancing activities have been undertaken since 2018 and a parallel set of non-intensive blocks. The evaluation will be based on a follow-up survey of households in these blocks.</p>
                            <p>As an extension of the DAY-NRLM program, the Ministry of Rural Development, India, introduced the National Rural Economic Transformation Project (NRETP) in 2019. The second phase of evaluation also aims to assess the impact of NRETP interventions seeking to provide financial and technical support for skills and enterprises, producer collectives, innovative livelihood methods, digital financial inclusion, among others.</p>
                            <p>Phase 1</p>
                            <p>In the first phase beginning December 2015, 3ie was commissioned by the <Link href={'https://www.gatesfoundation.org/'}>Gates Foundation</Link> for quality assuring and generating evidence on various aspects of the DAY-NRLM. 3ie in partnership with Vrutti and CMS, conducted an impact evaluation, quality-assured selected evaluations on livelihood interventions and synthesized and mapped the available evidence on the effectiveness and efficiency of group-based livelihoods interventions.</p>
                            <p>Evaluation</p>
                            <p>3ie, Vrutti and CMS collaborated with the Ministry of Rural Development, the Gates Foundation and the <Link href={'https://www.worldbank.org/en/home'}>World Bank</Link> to conduct a large-scale evaluation across nine states where the National Rural Livelihoods Project (NRLP) was implemented. NRLP was implemented from July 2011 to June 2018 and facilitated in establishing DAY-NRLM’s “proof-of-concept”. This report underscores NRLP’s impacts on a range of household and individual-level economic, social and empowerment outcomes. Its authors also assess the quality of institutions created by the program. This report is listed on the Indian government&apos;s DAY-NRLM website as one of the key documents of the National Rural Livelihoods Promotion Society (NRLPS) and can be accessed <Link href={'https://aajeevika.gov.in/'}>here</Link>.</p>
                            <p>Links to study outputs</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/impact-evaluations/impact-evaluation-national-rural-livelihoods-project'}>View impact evaluation report</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/impact-evaluation/impact-evaluation-national-rural-livelihoods-project'}>View impact evaluation brief</Link>(<Link href={'https://3ieimpact.org/sites/default/files/2020-10/NRLP-NRLM-IE-Brief.pdf'}>English</Link> | <Link href={'https://3ieimpact.org/sites/default/files/2021-04/NRLP-NRLM-IE-Brief-Hindi.pdf'}>Hindi</Link>)</li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-07/Briefing-note-on-Farm-NRLM.pdf'}>View briefing note on farm-based activities</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Briefing-note-on-finanical-inclusion.pdf'}>View briefing note on financial inclusion</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Briefing-note-on-IBCB-FI-WEC.pdf'}>View briefing note on institution building, women&apos;s empowerment and convergence</Link></li>
                                <li><Link href={'https://www.indiaspend.com/how-womens-self-help-groups-boosted-household-incomes/'}>View IndiaSpend&apos;s article on the evaluation</Link></li>
                            </ul>
                            <p>Impact</p>
                            <p>3ie and Vrutti&apos;s evaluation continues to inform discussions in the Indian Parliament</p>
                            <p>In response to a question on SHG loans and results of studies on the impact of the DAY-NRLM, India&apos;s rural development minister, Giriraj Singh, <Link href={'https://www.3ieimpact.org/evidence-hub/Evidence-impact-summaries/strengthening-case-indias-national-livelihoods-program'}>mentioned 3ie and Vrutti&apos;s study</Link> and outlined its key findings in the Upper House of Parliament on 30 July 2021. This is the second time the study has been quoted in Parliament. In September 2020, the report was cited in response to a question on the details and impacts of funding provided to SHGs under the DAY-NRLM.</p>
                            <p>ECWG draws on 3ie and Vrutti&apos;s evidence and gap analysis</p>
                            <p>The evidence gap map on group-based interventions has been <Link href={'https://www.3ieimpact.org/evidence-hub/Evidence-impact-summaries/strengthening-evidence-base-programming-and-policies-womens'}>cited heavily by Evidence Consortium on Women&apos;s Groups</Link> (ECWG) to inform their learning agenda and portfolio evaluation of the Gates Foundation&apos;s investments in South Asia and Africa.</p>
                            <p>Research</p>
                            <p>In partnership with the University of California, Berkeley, Yale University and Vrutti Livelihoods Resources Centre, 3ie is producing thematic papers using the data collected for the DAY-NRLM evaluation.</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/understanding-caste-based-differences-self-help-groups'}>Understanding caste-based differences in self help groups: Evidence from India&apos;s NRLM program</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/improving-delivery-and-impacts-pro-poor-programmes'}>Improving delivery and impacts of pro-poor programs</Link></li>
                                <li>The policies that empower women: empirical evidence from India&apos;s National Rural Livelihoods Project <Link href={'https://www.sciencedirect.com/science/article/pii/S0304387822000050?via%3Dihub'}>Journal article</Link> | <Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/policies-empower-women-empirical-evidence-indias-national'}>Report</Link> | <Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-paper/do-financial-inclusion-schemes-empower-women-evidence-what'}>Brief</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/womens-economic-status-and-son-preference-empirical'}>Women&apos;s economic status and son preference: empirical evidence from private school enrolment in India</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/evidence-hub/publications/working-papers/understanding-indias-self-help-groups-organisational'}>Understanding India&apos;s self-help groups: an organizational anatomy of functionality in a district in Madhya Pradesh</Link></li>
                            </ul>
                            <p>A full list of publications is available in the Related content section below.</p>
                            <p>Factsheets</p>
                            <p>To ensure the findings of our work are easily accessible to those working in the evaluation sector, 3ie along with Vrutti and CMS developed factsheets that provide an overview of the data collected through 3ie&apos;s evaluation (2018-2019). It includes data from 27,000 households from 1,052 villages across nine states in India.</p>
                            <p>The full dataset will be made available after 31 December 2021. For queries about these factsheets, please write to <Link href={'mailto:info@3ieimpact.org'}>info@3ieimpact.org</Link> ; <Link href={'mailto:contactus@catalysts.org'}>contactus@catalysts.org</Link></p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Bihar-factsheet-NRLM.pdf'}>Bihar</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-04/Chhattisgarh-factsheet-NRLM.pdf'}>Chhattisgarh</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Madhya-Pradesh-factsheet-NRLM.pdf'}>Madhya Pradesh</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Maharashtra-factsheet-NRLM.pdf'}>Maharashtra</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Jharkhand-factsheet-NRLM.pdf'}>Jharkhand</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Odisha-factsheet-NRLM.pdf'}>Odisha</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Rajasthan-factsheet-NRLM.pdf'}>Rajasthan</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/Uttar-Pradesh-factsheet-NRLM.pdf'}>Uttar Pradesh</Link></li>
                                <li><Link href={'https://www.3ieimpact.org/sites/default/files/2021-03/West-Bengal-factsheet-NRLM.pdf'}>West Bengal</Link></li>
                            </ul>
                            <p>News</p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li>In this <Link href={'https://www.ideasforindia.in/topics/poverty-inequality/how-financial-access-impacts-women-s-decision-making-role-in-households.html'}>Ideas for India article</Link>, Anjini Kochar, C. S. Nagabhusana, Ritwik Sarkar, Rohan Shah, Geeta Singh talk about how financial access impacts women&apos;s decision-making role in households.</li>
                                <li>In this <Link href={'https://www.ideasforindia.in/topics/social-identity/caste-based-differences-in-self-help-groups-evidence-from-a-rural-livelihood-programme.html'}>Ideas for India article</Link>, Chandan Jain, Krishna Kejriwal, Ritwik Sarkar and Pooja Sengupta analyze caste-based differences in self-help groups within the NRLM program.</li>
                                <li>This <Link href={'https://indianexpress.com/article/india/ie-thinc-third-edition-gender-women-collectives-changemakers-from-the-ground-up-8046517/'}>Indian Express article</Link> recaps a discussion on <Link href={'https://www.youtube.com/watch?v=owDBA0iv0Ls'}>&apos;Women Collectives, Changemakers from the ground up&apos;</Link> in which Dr Anjini Kochar spoke about financial inclusion. The panel discussion was held as part of the IE THINC Third edition.</li>
                                <li>In this <Link href={'https://www.hindustantimes.com/opinion/the-link-between-village-size-school-years-markets-and-women-in-the-workforce-101633415236427.html'}>Hindustan Times article</Link>, Dr Anjini Kochar examines the reasons behind the low and declining labor force participation rate of women in India.</li>
                                <li>In this <Link href={'https://www.hindustantimes.com/ht-insight/gender-equality/how-can-indians-reduce-their-lust-for-a-son-101632207585133.html'}>Hindustan Times article</Link>, Dr Anjini Kochar explains the persistence for son preference, particularly in private school enrolments in rural India.</li>
                                <li>In a <Link href={'https://www.indiaspend.com/womenwork/rural-women-collectives-struggle-to-survive-manage-covid-fallout-764367'}>recent IndiaSpend article</Link> on the impact of COVID on women&apos;s collectives, Dr Bidisha Barooah talks about what needs to change in the existing program design.</li>
                                <li>A <Link href={'https://www.orfonline.org/research/the-national-rural-livelihoods-mission-drawing-lessons-from-the-first-ten-years/'}>new issue brief on ten years</Link> of the NRLM published by the Observer Research Foundation, cites 3ie&apos;s evaluation and other work on self-help groups.</li>
                                <li>An <Link href={'https://www.indiaspend.com/how-womens-self-help-groups-boosted-household-incomes/'}>IndiaSpend article</Link> contextualizes 3ie&apos;s evaluation evidence and explores how NRLM, in particular womens SHGs, boost household income.</li>
                                <li>In this <Link href={'https://indianexpress.com/article/opinion/columns/nrlm-jeevika-farmer-producer-companies-7243590/'}>Indian Express article</Link>, 3ie staff write about the barriers to effective implementation of farmer-producer companies.</li>
                                <li>In an article for the <Link href={'https://www.financialexpress.com/opinion/explained-how-national-rural-livelihoods-mission-can-help-in-transforming-womens-lives/1772840/'}>Financial Express</Link>, Dr Anjini Kochar explains how the NRLM can help transform women&apos;s lives.</li>
                            </ul>
                            <p>Additional reading | <Link href={'https://www.3ieimpact.org/sites/default/files/2020-06/NRLM-Partner-resources.pdf'}>Compiled list of World Bank resources on rural growth</Link></p>
                            <ul style={{marginLeft:'-20px'}}>
                                <li>Financial Inclusion Week 2021, 1 November | <Link href={'https://www.youtube.com/watch?v=uLuGh9i9K68'}>Improving last-mile delivery of financial services and welfare programs</Link></li>
                                <li>India Rural Colloquy, Transform Rural India Foundation, August 2021 | <Link href={'https://www.youtube.com/watch?v=HM4-w-ej9Pk'}>Watch recorded event on women&apos;s collectives and rural economic empowerment</Link></li>
                                <li>Livelihoods India Summit, January 2021 | <Link href={'https://www.youtube.com/watch?v=p6odUcTyUcs&list=PLhSlqxX3DpdGe9vlaX9UK0g-OXDb2gpiN&index=4'}>Watch recorded event on the way ahead for NRLM</Link></li>
                                <li>Livelihoods India Summit, January 2021 | <Link href={'https://www.youtube.com/watch?v=nVEnfiJLYeQ&list=PLhSlqxX3DpdGe9vlaX9UK0g-OXDb2gpiN&index=3'}>Watch recorded event on empowering women in rural India</Link></li>
                                <li>3ie Evidence Dialogues, October 2020 | <Link href={'https://evidencedialogues.3ieimpact.org/session/womens-economic-empowerment-and-its-interactions-with-social-and-personal-empowerment/'}>Watch recorded event on women&apos;s economic empowerment</Link></li>
                                <li>Evidence-informed policymaking for rural transformation, January 2020 | <Link href={'https://www.youtube.com/watch?v=IotU0Y1ytjw&list=PLMdLqa33jxDmEPSSVp8xdtSiKl0gRkoB7'}>Watch recorded sessions</Link></li>
                            </ul>
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