import logo from "../../images/iteration-1-images/logo.svg";
import ramen from "../../images/iteration-2-images/icons/1.svg";
import pizza from "../../images/iteration-2-images/icons/2.svg";
import burger from "../../images/iteration-2-images/icons/3.svg";
import fries from "../../images/iteration-2-images/icons/4.svg";
import fastfood from "../../images/iteration-2-images/icons/5.svg";
import drink from "../../images/iteration-2-images/icons/6.svg";
import termnalPizza from "../../images/iteration-2-images/pictures/food-1.png";
import positionAbsolutePizza from "../../images/iteration-2-images/pictures/food-2.png";
import useEffectTavukluPizza from "../../images/iteration-2-images/pictures/food-3.png";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import FooterSection from "./FooterSection";
import Lezzetus from "./Lezzetus";
import Kurye from "./Kurye";
import Hackathlon from "./Hackathlon";

const Page = styled.div`
    font-family: Roboto Condensed, sans-serif;
    

    @media (max-width: 768px) {
        
    }
`;
const MainUpper = styled.section`
    background-image: url("../../images/iteration-1-images/home-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 1100px;
    width: 100%;
    @media (max-width: 768px) {
        background-position: center;
        height: 700px;
        background-size: auto;
    }
`;
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
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

    @media (max-width: 768px) {
        
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
const SubTitle = styled.h3`
    font-family: "Satisfy", cursive;
    color: #FDC913;
    font-size: 2rem;
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
const Banner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35rem;
    @media (max-width: 768px) {
        margin-bottom: 25rem;
    }
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 1rem 0;
    align-items: center;

    & a {
        color: black;
        text-decoration: none;
        padding-left: 1rem;
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
        height: 240px;
    }
`;
const Components = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: #FAF7F2;
    padding-top: 3rem;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        height: 100rem;;
    }
`;
const LeftContainer = styled.div`
    width: 23%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
    }
`;
const RightContainer = styled.div`
    width: 23%;
    margin-top: -1rem;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
    }
`;
const UpperContainer = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
    }
`;
const LowerContainer = styled.div`
    width: 100%;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
    }
`;
const Menu = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FAF7F2;
    width: 100%;
    align-items: center;
    padding-top: 3rem;
    
`;
const MenuTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    gap: 2rem;
    & span {
        font-family: "Satisfy", cursive;
        color: #CE2829;
        font-size: 2rem;
    }
`;
const MenuNavItem = styled.div`
    border: 1px solid #FAF7F2;
    border-radius: 5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    &:hover {
        background-color: #292929;
        & a {
            color: white;
        }
    }
`;
const Cards = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0.5rem;

    & img {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    & span {
        font-weight: bold;
        margin-left: 1rem;
    }
`;
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    & span {
        font-weight: 400;
        margin: 0 1rem;
    }
`;
const CardInfoRight = styled.div`
    display: flex;
    
`;


export default function HomePage() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    };


    return (
        <Page>
            <Main>
                <MainUpper>
                <Header>
                    <Logo src={logo} alt="Teknolojik Yemekler logo" />
                </Header>
                <Banner>
                    <SubTitle>fırsatı kaçırma</SubTitle>
                    <Title>KOD ACIKTIRIR</Title>
                    <Title>PİZZA, DOYURUR</Title>    
                    <Button data-cy="order-form" onClick={handleClick}>ACIKTIM</Button>
                </Banner>
                </MainUpper>
                <Nav>
                    <div>
                        <img src={ramen}/>
                        <Link to="/order">YENİ! Kore</Link>
                    </div>
                    <div>
                        <img src={pizza}/>
                        <Link to="/order">Pizza</Link>
                    </div>
                    <div>
                        <img src={burger}/>
                        <Link to="/order">Burger</Link>
                    </div>
                    <div>
                        <img src={fries}/>
                        <Link to="/order">Kızartmalar</Link>
                    </div>
                    <div>
                        <img src={fastfood}/>
                        <Link to="/order">Fast food</Link>
                    </div>
                    <div>
                        <img src={drink}/>
                        <Link to="/order">Gazlı İçecek</Link>
                    </div>
                </Nav>
                <Components>
                    <LeftContainer>
                        <Lezzetus />
                    </LeftContainer>
                    <RightContainer>
                        <UpperContainer>
                            <Hackathlon />
                        </UpperContainer>
                        <LowerContainer>
                            <Kurye />
                        </LowerContainer>
                    </RightContainer>
                </Components>
                <Menu>
                    <MenuTitle>
                        <span>en çok paketlenen menüler</span>
                        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
                    </MenuTitle>
                    <Nav>
                        <MenuNavItem>
                            <img src={ramen}/>
                            <Link to="/order">Ramen</Link>
                        </MenuNavItem>
                        <MenuNavItem>
                            <img src={pizza}/>
                            <Link to="/order">Pizza</Link>
                        </MenuNavItem>
                        <MenuNavItem>
                            <img src={burger}/>
                            <Link to="/order">Burger</Link>
                        </MenuNavItem>
                        <MenuNavItem>
                            <img src={fries}/>
                            <Link to="/order">French fries</Link>
                        </MenuNavItem>
                        <MenuNavItem>
                            <img src={fastfood}/>
                            <Link to="/order">Fast food</Link>
                        </MenuNavItem>
                        <MenuNavItem>
                            <img src={drink}/>
                            <Link to="/order">Soft drinks</Link>
                        </MenuNavItem>
                    </Nav>
                    <Cards>
                        <Card>
                            <img src={termnalPizza} />
                            <span>Terminal Pizza</span>
                            <CardInfo>
                                <span>4.9</span>
                                <CardInfoRight>
                                    <span>(200)</span>
                                    <span>60₺</span>
                                </CardInfoRight>
                            </CardInfo>
                        </Card>
                        <Card>
                            <img src={positionAbsolutePizza} />
                            <span>Position Absolute Pizza</span>
                            <CardInfo>
                                <span>4.9</span>
                                <CardInfoRight>
                                    <span>(200)</span>
                                    <span>60₺</span>
                                </CardInfoRight>
                            </CardInfo>
                        </Card>
                        <Card>
                            <img src={useEffectTavukluPizza} />
                            <span>useEffect Tavuklu Pizza</span>
                            <CardInfo>
                                <span>4.9</span>
                                <CardInfoRight>
                                    <span>(200)</span>
                                    <span>60₺</span>
                                </CardInfoRight>
                            </CardInfo>
                        </Card>
                    </Cards>
                </Menu>
            </Main>
            <footer>
                <FooterSection />
            </footer>
        </Page>
    )
}