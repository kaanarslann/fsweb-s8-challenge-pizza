import logo from "../../images/iteration-1-images/logo.svg";
import styled from "styled-components";
import FooterSection from "./FooterSection";

const Page = styled.div`
    font-family: Roboto Condensed, sans-serif;
    background-color: #CE2829;
`;
const Header = styled.header`
    display: flex;
    justify-content: center;

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
    margin-top: 5rem;
    
    @media (max-width: 768px) {
        width: 50%;
        margin-top: -5rem;
        margin-left: 12rem;
    }
    
`;
const SuccessTitle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
    @media (max-width: 768px) {
            margin-right:2rem;
        }
    & span {
        font-family: "Satisfy", cursive;
        color: #FDC913;
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    & h1 {
        color: white;
        font-size: 6rem;
        font-weight: 300;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: 3rem;
            text-align: center;
        }
    }
`;
const Summary = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: Barlow, sans-serif;
    margin-top: 3rem;

    & h3 {
        font-size: 2rem;
    }
    @media (max-width: 768px) {
        & h3 {
        margin-right: 2rem;
        font-size: 1.5rem;
        }
    }
`;
const Bold = styled.span`
    font-weight:500;
`;
const SummaryLower = styled.div`
    display: flex;
    margin-left: 1rem;
    gap: 1rem;
    flex-direction: column;
    margin-top: 3rem;
    font-size: 1.5rem;
    width: 50%;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
            margin-right: 5rem;
        }
`;
const TotalSection = styled.section`
    border: 1px solid white;
    border-radius: 0.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;
    width: 35rem;
    aspect-ratio: 2/1;
    margin-bottom: 10rem;

    & h3 {
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
        width: 120%;
        padding: 2rem;
    }
`;
const TotalLower = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.5rem;
`;
const LowerInfo = styled.div`
    display: flex;
    gap: 15rem;
    @media (max-width: 768px) {
         gap: 10rem;
        }
`;

export default function Success({formData}) {
    const toppings = formData.toppings.join(", ");
    const toppingsPrice = `${formData.toppingsP.toFixed(2)} ₺`;
    const price = `${formData.price.toFixed(2)} ₺`;

    return (
        <Page>
            <Header>
                <Logo src={logo} alt="Teknolojik Yemekler logo" />
            </Header>
            <Main>
                <SuccessTitle>
                    <span>lezzetin yolda</span>
                    <h1>SİPARİŞ ALINDI</h1>
                </SuccessTitle>
                <Summary>
                    <h3>Position Absolute Acı Pizza</h3>
                    <SummaryLower>
                        <div>
                        <span>Boyut: </span><Bold data-cy="formData-size">{formData.size}</Bold>
                        </div>
                        <div>
                        <span>Hamur: </span><Bold>{formData.dough}</Bold>
                        </div>
                        <div>
                        <span>Ek Malzemeler: </span><Bold>{toppings}</Bold>
                        </div>
                    </SummaryLower>
                </Summary>
                <TotalSection>
                    <h3>Sipariş Toplamı</h3>
                    <TotalLower>
                        <LowerInfo>
                            <span>Seçimler</span><span>{toppingsPrice}</span>
                        </LowerInfo>
                        <LowerInfo>
                            <span>Toplam</span><span data-cy="formData-price">{price}</span>
                        </LowerInfo>
                    </TotalLower>
                </TotalSection>
            </Main>
            <footer>
                <FooterSection />
            </footer>
        </Page>
    )
}