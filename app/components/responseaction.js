import Image from "next/image";
import { Container, Button } from "react-bootstrap";

export default function responseaction () {
    return (
        <Container fluid>
            <Container style={{paddingTop:'60px', paddingBottom:'60px', textAlign:'center'}}>
                <h2 style={{color:'#025745',fontWeight:'700'}}>Our Response Action</h2>
                <Image src={'/../img/response-action.png'} width={500} height={500} alt="Our Response" className="w-100 p-4"></Image>
                <Button href={'/stories-from-our-field-locations'} style={{backgroundColor:'#f05922', border:'none'}}>View Our Covid Stories</Button>
            </Container>
        </Container>
    );
}