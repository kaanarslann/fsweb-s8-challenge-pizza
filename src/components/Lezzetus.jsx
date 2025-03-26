import image from "../../images/iteration-2-images/cta/kart-1.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Page = styled.div`
    background: url(${image});
    background-size: cover;
    height: 105%;
    padding: 2rem;
    border-radius: 5%;
`;
const Title = styled.h2`
    font-family: "Quattrocento", serif;
    color: white;
    font-weight: bold;
    font-size: 3rem;
`;
const Detail = styled.p`
    font-family: Roboto, sans-serif;
    color: white;
`;
const Button = styled.button`
    font-family: Roboto, sans-serif;
    background-color: white;
    border: none;
    color: #CE2829;
    cursor: pointer;
    border-radius: 5rem;
    height: 2.5rem;
    padding: 0.5rem;
`;

export default function Lezzetus() {
    
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };
    
    return (
        <Page className="container">
            <Title>Özel</Title>
            <Title>Lezzetus</Title>
            <Detail>Position:Absolute Acı Burger</Detail>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
        </Page>
    )
}