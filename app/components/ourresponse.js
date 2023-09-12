import Image from "next/image";
import { Container } from "react-bootstrap";

export default function ourresponse () {
    return (
        <Container fluid className="ourresponse">
            <Container>
                <h2>Our Response Actions for Small &amp; Marginal Farmers</h2>
                <Image src={'/img/Vrutti-response.jpeg'} width={500} height={700} alt="Our Response" className="w-100"></Image>
            </Container>
            
        </Container>
    );
}