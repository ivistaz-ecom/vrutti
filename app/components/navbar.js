import 'bootstrap/dist/css/bootstrap.css';
import '../../app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Container>
                <Link href={'/'}><Image src={'/img/vrutti-logo.png'} width={105} height={50} alt='Vrutti Logo'></Image></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={'https://pages.razorpay.com/vrutticovid19'}>Donate Now</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Who we are
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="about-us">About Us</a></li>
                                <li><a className="dropdown-item" href="about-us#why">Why are we here</a></li>
                                <li><a className="dropdown-item" href="about-us#believe">What we believe in</a></li>
                                <li><a className="dropdown-item" href="about-us#journey">About our journey</a></li>
                                <li><a className="dropdown-item" href="about-us#genesis">The Genesis</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">What we do</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/what-we-do#whatwedo">What we do</a></li>
                                <li><a className="dropdown-item" href="what-we-do#wherewework">Where we work</a></li>
                                <li><a className="dropdown-item" href="what-we-do#communities">Communities we work with</a></li>
                                <li><a className="dropdown-item" href="what-we-do#partners">Partners we work with</a></li>
                                <li><a className="dropdown-item" href="what-we-do#development-goals">Sustainable Development Goals</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Core Impact Model</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/our-core-impact-model#3-fold-wealthy-resilient-and-responsible-farmers">3 Fold Model</a></li>
                                <li><a className="dropdown-item" href="/our-core-impact-model#why-small-producers">Why small producers</a></li>
                                <li><a className="dropdown-item" href="/our-core-impact-model#problem-we-are-trying-to-solve">Problem we are trying to solve</a></li>
                                <li><a className="dropdown-item" href="/our-core-impact-model#how-we-are-doing-it">How are we doing it</a></li>
                                <li><a className="dropdown-item" href="/our-core-impact-model#where-are-we-on-this-journey">Where are we</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={'/communityactioncollab'}>CAC</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" href={'/covidactioncollab'}>#CovidActionCollab</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PIE</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/platform-for-inclusive-entrepreneurship-pie#introduction">Introduction</a></li>
                                <li><a className="dropdown-item" href="/platform-for-inclusive-entrepreneurship-pie#the-challenge">The Challenge</a></li>
                                <li><a className="dropdown-item" href="/platform-for-inclusive-entrepreneurship-pie#the-solution-we-are-working-on">The solution we are working on</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" href={'/research'}>Research</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/resources#fcra">FCRA Receipts</a></li>
                                <li><a className="dropdown-item" href="resources#financials">Financials</a></li>
                                <li><a className="dropdown-item" href="resources#statutory-details">Statutory Details</a></li>
                                <li><a className="dropdown-item" href="resources#publications">Publications</a></li>
                                <li><a className="dropdown-item" href="resources#annual-reports">Annual Reports</a></li>
                                <li><a className="dropdown-item" href="resources#evidences">Evidences</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Connect</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/engage">Engage</a></li>
                                <li><a className="dropdown-item" href="/careers">Careers</a></li>
                                <li><a className="dropdown-item" href="/connect">Contact Us</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href={'https://www.facebook.com/vrutti.lh/'}>
                                <Icon.Facebook size={16} style={{marginTop:'9px', marginRight:'8px', color:'#025745'}} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'https://twitter.com/Vrutti_Catalyst'}>
                                <Icon.Twitter size={16} style={{marginTop:'9px', marginRight:'8px', color:'#025745'}} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'https://www.linkedin.com/company/vrutti-livelihood-impact-partners/'}>
                                <Icon.Linkedin size={16} style={{marginTop:'9px', color:'#025745'}} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}
export default navbar;