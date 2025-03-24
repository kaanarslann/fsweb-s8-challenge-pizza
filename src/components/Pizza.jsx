import styled from "styled-components";

const Header = styled.header`
    padding: 1rem 0;
    margin-top: 2rem;
`;
const Title = styled.h3`
    font-family: Roboto Condensed, sans-serif;
    font-size: 1.7rem;
`;
const Main = styled.main`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;
const InfoUpper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Price = styled.span`
    font-family: Barlow, sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;
const UserRating = styled.div`
    font-family: Barlow, sans-serif;
    display: flex;
    gap: 4rem;
    font-size: 1.2rem;
    padding-right: 4rem;
`;
const InfoLower = styled.section`
    font-family: Barlow, sans-serif;
    line-height: 2.2rem;
    font-size: 1.3rem;
`;

export default function Pizza() {
    return (
        <div>
            <Header>
                <Title>Position Absolute Acı Pizza</Title>
            </Header>
            <Main>
                <InfoUpper className="info-upper">
                    <Price className="price">85.50₺</Price>
                    <UserRating className="upper-right">
                        <span className="user-rating">4.9</span>
                        <span className="user-comments">(200)</span>
                    </UserRating>
                </InfoUpper>
                <InfoLower className="info-lower">
                    <p>Forntent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                </InfoLower>
            </Main>
        </div>
    )
}