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
`;
const Logo = styled.img`
    margin-top: 6rem;
`;
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20rem;
    h1 {
        color: white;
        font-size: 5rem;
        font-weight: 300;
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