import image from "../../images/iteration-2-images/cta/kart-3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Page = styled.div`
    background-image: url(${image});
    background-size: cover;
    height: 50%;
    padding: 2rem;
    border-radius: 5%;
`;
const Title = styled.h2`
    font-family: "Quattrocento", serif;
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

export default function Kurye() {
    
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };
    
    return (
        <Page className="container">
            <Title>Çoooook hızlı</Title>
            <Title>npm gibi kurye</Title>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
        </Page>
    )
}