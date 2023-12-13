import Image from "next/image";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function supportus () {
    return (
        <Container fluid>
            <Container style={{paddingTop:'60px', paddingBottom:'60px', textAlign:'center'}}>
                <h2 style={{color:'#025745',fontWeight:'700', paddingBottom:'40px'}}>Support Us:</h2>
                <Row style={{textAlign:'left'}}>
                    <Col md={6} style={{padding:'30px', backgroundColor:'#00000005'}}>
                        <h4>For small and marginal farmers:</h4>
                        <p>Cash for work for households who have lost their livelihoods completely- Rs. 200 per day per person. Promotion of Kitchen Garden to households affected by Covid-19 - Rs.500/-</p>
                        <ol>
                            <li>One Acre Kit for Production for vulnerable farmers - Rs.5000/Farmer</li>
                            <li>Affordable credit services for input purchase through FPO - Rs.10,000/Farmer</li>
                            <li>Compensation package for loss/damage to existing crops, especially perishable items - Rs.6000/Acre</li>
                            <li>Support for promotion of enterprises-Milch Animal, Goat/Sheep, Poultry, non-farm activities, etc to households affected by Covid-19
                                <ul style={{marginLeft:'-20px'}}>
                                    <li>Milch Animal -Rs.30,000</li>
                                    <li>Goat/ Sheep (4+1) -Rs.20,000</li>
                                    <li>Poultry (20 nos) -Rs.10,000</li>
                                    <li>Non-Farm: Rs.10,000 to Rs.20,000</li>
                                </ul>
                            </li>
                        </ol>
                    </Col>
                    <Col md={6} style={{padding:'30px',backgroundColor:'#00000005'}}>
                        <h4>For fisherfolk and women fish vendors</h4>
                        <ol>
                            <li>Compensation package for women fish vendors who lost their livelihoods (fully or partially) due to Covid-19- ₹300 / day</li>
                            <li>Working capital for resuming fishing operations after Covid-19 - ₹10,000/Fishermen</li>
                        </ol>
                    </Col>
                </Row>
                <Button href={'https://milaap.org/fundraisers/support-women-farmers-in-kanakapura?utm_source=shorturl'} style={{backgroundColor:'#f05922', border:'none', marginTop:'60px', marginBottom:'30px'}}>Support Us By Donating Now</Button>
            </Container>
        </Container>
    );
}