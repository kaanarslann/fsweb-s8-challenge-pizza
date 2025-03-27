import image from "../../images/iteration-2-images/cta/kart-3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Page = styled.div`
    background-image: url(${image});
    background-size: auto;
    background-position: center;
    width: 100%;
    aspect-ratio: 2/1;
    padding: 2rem;
    border-radius: 5%;
    font-family: Roboto, sans-serif;
`;
const Title = styled.h2`
    font-weight: 500;
`;

const Button = styled.button`
    background-color: white;
    border: none;
    color: #CE2829;
    cursor: pointer;
    border-radius: 5rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
`;
const Red = styled.span`
    color: #CE2829;
`;

export default function Kurye() {
    
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };
    
    return (
        <Page className="container">
            <Title><Red>Çoooook</Red> hızlı</Title>
            <Title>npm gibi kurye</Title>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
        </Page>
    )
}