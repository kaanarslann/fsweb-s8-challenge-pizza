import styled from "styled-components";
import footerLogo from "../../images/iteration-2-images/footer/logo-footer.svg";
import location from "../../images/iteration-2-images/footer/icons/icon-1.png";
import mail from "../../images/iteration-2-images/footer/icons/icon-2.png";
import phone from "../../images/iteration-2-images/footer/icons/icon-3.png";
import instagram1 from "../../images/iteration-2-images/footer/insta/li-0.png";
import instagram2 from "../../images/iteration-2-images/footer/insta/li-1.png";
import instagram3 from "../../images/iteration-2-images/footer/insta/li-2.png";
import instagram4 from "../../images/iteration-2-images/footer/insta/li-3.png";
import instagram5 from "../../images/iteration-2-images/footer/insta/li-4.png";
import instagram6 from "../../images/iteration-2-images/footer/insta/li-5.png";
import {Link} from "react-router-dom";

const Page = styled.div`
    display: flex;
    padding: 0 25rem;
    flex-direction: column;
    background-color: #292929;
    color: white;
    align-items: center;
    font-family: Barlow, sans-serif;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`;
const FooterUpper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 3rem 0;
    gap: 0.5rem;
    border-bottom: 1px solid white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const FooterLower = styled.section`
    margin-left: -65rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        margin-left: -30rem;
    }
`;
const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 33%;

    & span {
        margin-left: 1rem;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
`;
const FooterLogo = styled.img`
    width: 50%;
    @media (max-width: 768px) {
        width: 50%;
    }
`;
const FooterMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-bottom: 2rem;

    & span {
        margin: 2rem 0;
        font-weight: bold;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
`;
const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & a {
        color: white;
        text-decoration: none;
    }
`;
const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;

    & span {
        margin: 2rem 0;
        font-weight: bold;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 5rem;
    }
`;
const Instagram = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const IntaRow = styled.div`
    display: flex;
    gap: 1rem;
`;
export default function FooterSection() {
    return (
        <Page>
                <FooterUpper>
                    <FooterLeft>
                        <FooterLogo src={footerLogo}/>
                        <div>
                            <img src={location}/>
                            <span>341 Londonderry Road, İstanbul Türkiye</span>
                        </div>
                        <div>
                            <img src={mail}/>
                            <span>aciktim@teknolojikyemekler.com</span>
                        </div>
                        <div>
                            <img src={phone}/>
                            <span>+90 216 123 45 67</span>
                        </div>
                    </FooterLeft>
                    <FooterMiddle>
                        <span>Hot Menu</span>
                        <FooterNav>
                            <Link to="/order">Terminal Pizza</Link>
                            <Link to="/order">5 Kişilik Hackathlon Pizza</Link>
                            <Link to="/order">useEffect Tavuklu Pizza</Link>
                            <Link to="/order">Beyaz Console Frosty</Link>
                            <Link to="/order">Testler Geçti Mutlu Burger</Link>
                            <Link to="/order">Position Absolute Acı Burger</Link>
                        </FooterNav>
                    </FooterMiddle>
                    <FooterRight>
                        <span>Instagram</span>
                        <Instagram>
                            <IntaRow>
                            <img src={instagram1}/>
                            <img src={instagram2}/>
                            <img src={instagram3}/>
                            </IntaRow>
                            <IntaRow>
                            <img src={instagram4}/>
                            <img src={instagram5}/>
                            <img src={instagram6}/>
                            </IntaRow>
                        </Instagram>
                    </FooterRight>
                </FooterUpper>
                <FooterLower>
                    <span>© 2023 Teknolojik Yemekler.</span>
                </FooterLower>
            </Page>
    )
}