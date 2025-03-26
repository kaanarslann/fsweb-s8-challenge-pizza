import image from "../../images/iteration-2-images/cta/kart-2.png";
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

export default function Hackathlon() {
    
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };
    
    return (
        <Page className="container">
            <Title>Hackathlon</Title>
            <Title>Burger Menü</Title>
            <Button onClick={handleClick}>SİPARİŞ VER</Button>
        </Page>
    )
}