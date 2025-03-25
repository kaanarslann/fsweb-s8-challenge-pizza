import logo from "../../images/iteration-1-images/logo.svg";
import styled from "styled-components";

const Page = styled.div`
    font-family: Roboto Condensed, sans-serif;
    background-color: #CE2829;
    height: 100vh;
    width: 100vw;
`;
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        margin-bottom: 12rem;
    }
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
    margin-top: 20rem;
    
    @media (max-width: 768px) {
        width: 50%;
        margin: 0 auto;
    }
    
    h1 {
        color: white;
        font-size: 5rem;
        font-weight: 300;

        @media (max-width: 768px) {
            font-size: 3rem;
            text-align: center;
    }
`;

export default function Success() {
    return (
        <Page>
            <Header>
                <Logo src={logo} alt="Teknolojik Yemekler logo" />
            </Header>
            <Main>
                <h1>TEBRİKLER!</h1>
                <h1>SİPARİŞİNİZ ALINDI!</h1>
            </Main>
        </Page>
    )
}