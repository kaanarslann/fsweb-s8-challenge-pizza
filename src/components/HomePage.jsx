import logo from "../../images/iteration-1-images/logo.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
    background-image: url("../../images/iteration-1-images/home-banner.png");
    font-family: Roboto Condensed, sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        background-position: center;
    }
`;
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const Logo = styled.img`
    margin-top: 6rem;

    @media (max-width: 768px) {
        width: 60%;
        margin-top: 3rem;
    }
`;
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;

    @media (max-width: 768px) {
        width: 50%;
        margin: 2rem auto;
    }
`;
const Title = styled.h2`
    color: white;
    display: flex;
    justify-content: center;
    font-size: 5rem;
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 3rem;
        text-align: center;
    }
`;
const Button = styled.button`
    background-color: #FDC913;
    color: black;
    border-radius: 5rem;
    width: 12rem;
    height: 3.5rem;
    text-align: center;
    font-weight: bold;
    border: none;
    margin-top: 2rem;

    @media (max-width: 768px) {
        width: 10rem;
        height: 3rem;
    }
`;



export default function HomePage() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };


    return (
        <Page>
            <Header>
                <Logo src={logo} alt="Teknolojik Yemekler logo" />
            </Header>
            <Main>
                <Title>KOD ACIKTIRIR</Title>
                <Title>PİZZA, DOYURUR</Title>    
                <Button data-cy="order-form" onClick={handleClick}>ACIKTIM</Button>
            </Main>
        </Page>
    )
}