import logo from "../../images/iteration-1-images/logo.svg";
import Pizza from "./Pizza";
import {Form, FormGroup, Input, Label, FormFeedback, Row, Col} from "reactstrap";
import {useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Page = styled.div`
    font-family: Roboto Condensed, sans-serif;
    margin-bottom: 3rem;
`;
const Header = styled.header`
    background-color: #CE2829;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
`;
const Logo = styled.img`
    margin: 2rem 0;
`;
const Nav = styled.nav`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-right: 20%;
    a {
        color: white;
        text-decoration: none;
    }
`;
const Main = styled.main`
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

`;
const PizzaInfo = styled.section`
    
`;
const FormUpper = styled.div`
    display: flex;
    gap: 18rem;
    padding: 1rem 0;
    justify-content: flex-start;

    @media (max-width: 768px) {
        gap: 9.5rem;
        justify-content: center;
    }
`;
const PizzaSize = styled.div`
    @media (max-width: 768px) {
        min-width: 50%;
    }
`;
const Boyut = styled.h3`
    margin-bottom: 2rem;
    font-size: 1.5rem;
`;
const PizzaDough = styled.div`
    @media (max-width: 768px) {
        min-width: 55%;
    } 
`;
const Hamur = styled.h3`
    margin-bottom: 0.1rem;
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 1,3rem;
    }
`;
const FormMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-family: Barlow, sans-serif;
    @media (max-width: 768px) {
        min-width: 100%;
        h3 {
            margin-left: -5rem;
        }
        span {
            margin-left: -5rem;
}
    }
`;
const TopInfo = styled.span`
    font-size: 1.3rem;
    color: #5F5F5F;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;
const Toppings = styled.div`
    margin-top: 2rem;
    @media (max-width: 768px) {
        margin-left: -5rem;
        margin-right: -13rem;
    }
`;
const StyledTopLabel = styled(Label)`
    font-size: 1.2rem;
    font-weight: 600;
    color: #292929;
    margin-left: 0.8rem;
`;
const StyledTopInput = styled(Input)`
    width: 1.2rem;
    height: 1.2rem;
`;
const FormLower = styled.div`
    @media (max-width: 768px) {
        min-width: 100%;
        
    }
`;
const StyledTextLabel = styled(Label)`
    font-size: 1.7rem;
    font-weight: 500;
    @media (max-width: 768px) {
        margin-left: -5rem;
    }
`;
const StyledTextInput = styled(Input)`
    height: 4.5rem;
    @media (max-width: 768px) {
           width: 160%;
           height: 3.5rem;
           margin-left: -5rem;
    }
`;
const FormSubmit = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1.5px #5F5F5F80 solid;
    padding-top: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        min-width: 160%;
        margin-left: -5rem;
    }
`;
const PizzaNum = styled.div`
    display: flex;
    @media (max-width: 768px) {
        
    }
`;
const NumButtonLeft = styled.button`
    background-color: #FDC913;
    color: black;
    border: none;
    width: 4.5rem;
    height: 4.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;
const NumButtonRight = styled.button`
    background-color: #FDC913;
    color: black;
    border: none;
    width: 4.5rem;
    height: 4.5rem;
    font-size: 1.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;
const NumContainer = styled.span`
    border: 1px solid #5F5F5F;
    font-size: 1.3rem;
    width: 4.5rem;
    height: 4.5rem;
    text-align: center;
    padding-top: 1.5rem;
    font-weight: bold;
    @media (max-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;
        font-size: 1.1rem;
        padding-top: 1rem;
    }
`;
const SubmitSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 0.5px solid #5F5F5F;
    border-bottom: none;
    padding: 2.5rem 3rem;
    border-radius: 0.5rem 0.5rem 0 0;
    font-family: Barlow, sans-serif;

`;
const ToppingPrice = styled.div`
    display: flex;
    justify-content: space-between;
    color: #5F5F5F;
    font-weight: 600;
    span {
        font-size: 1.5rem;
    }
`;
const OrderPrice = styled.div`
    display: flex;
    justify-content: space-between;
    color: #CE2829;
    font-weight: 600;
    span {
        font-size: 1.5rem;
    }
`;
const SubmitButton = styled.button`
    background-color: #FDC913;
    color: black;
    text-align: center;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    height: 4.5rem;
    font-family: Barlow, sans-serif;
    font-size: 1.5rem;
    @media (max-width: 768px) {
        height: 3.5rem;
    }
`;
const Red = styled.span`
    color: #CE2829;
`;

export default function OrderForm() {
    const toppings = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"];
    const basePrice = 85.50;
    const errorMessages = {
        name: "İsim en az 3 karakter olmalıdır.",
        toppings: "En az 4, en fazla 10 malzeme seçebilirsiniz.",
        size: "Pizza boyutu seçmelisiniz.",
        dough: "Hamur kalınlığı seçmelisiniz.",
    };
    const initialForm = {
        name: "",
        size: "",
        dough: "",
        notes: "",
        toppings: Array(toppings.length).fill(false),
    };
    const history = useHistory();
    const [pizzaNum, setPizzaNum] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [form, setForm] = useState(initialForm);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});

        if (name == "name") {
            if (value.length < 3) {
                setErrors({...errors, name: true});
            } else {
                setErrors({...errors, name: false});
            }
        }
        if (name == "size") {
            if (value === "") {
                setErrors({...errors, size: true});
            } else {
                setErrors({...errors, size: false});
            }
        }
        if (name == "dough") {
            if (value === "") {
                setErrors({...errors, dough: true});
            } else {
                setErrors({...errors, dough: false});
            }
        }
    };

    const handleNumPlus = (event) => {
        event.preventDefault();
        setPizzaNum(pizzaNum + 1);
    }
    const handleNumMinus = (event) => {
        event.preventDefault();
        if (pizzaNum > 1) {
            setPizzaNum(pizzaNum - 1);
        }
    }

    const handleCheckboxChange = (index) => {
        const updatedToppings = [...form.toppings];
        updatedToppings[index] = !updatedToppings[index];
        const priceChange = updatedToppings[index] ? 5 : -5;
        setTotalPrice(totalPrice + priceChange);
        setForm({...form, toppings: updatedToppings});

        const selectedToppings = updatedToppings.filter((topping) => topping);
        if (selectedToppings.length < 4 || selectedToppings.length > 10) {
            setErrors({...errors, toppings: true});
        } else {
            setErrors({...errors, toppings: false});
        }
    }

    useEffect(() => {
        const selectedToppings = form.toppings.filter((topping) => topping);
        if (form.name.length >= 3 && form.size !== "" && form.dough !== "" && selectedToppings.length >= 4 && selectedToppings.length <= 10) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [form]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            axios.post("https://reqres.in/api/pizza", form)
            .then((response) => {
                console.log(response.data);
                setForm(initialForm);
                history.push("/success");
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    return (
        <Page>
            <Header>
                <Logo src={logo} alt="Teknolojik Yemekler logo" />
                <Nav>
                    <a href="/">Anasayfa</a>
                    <span> - </span>
                    <a href="/order">Sipariş Oluştur</a>
                </Nav>
            </Header>
            <Main>
                <PizzaInfo>
                    <Pizza />
                </PizzaInfo>
                <section>
                    <Form onSubmit={handleSubmit}>
                        <FormUpper>
                            <PizzaSize>
                                <Boyut>Boyut Seç <Red className="red">*</Red></Boyut>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Küçük" data-cy="radio-small" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Küçük
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Orta" data-cy="radio-medium" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Orta
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Büyük" data-cy="radio-big" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Büyük
                                    </Label>
                                </FormGroup>
                            </PizzaSize>
                            <PizzaDough>
                                <Hamur>Hamur Seç <Red className="red">*</Red></Hamur>
                                <FormGroup>
                                    <Label htmlFor="dough"></Label>
                                    <Input type="select" name="dough" id="dough" value={form.dough} data-cy="select" onChange={handleChange}>
                                        <option value="" disabled defaultValue>Hamur Kalınlığı</option>
                                        <option value="çok ince">Çok ince</option>
                                        <option value="ince">İnce</option>
                                        <option value="normal">Normal</option>
                                    </Input>
                                </FormGroup>
                            </PizzaDough>
                        </FormUpper>
                        <FormMiddle>
                            <h3>Ek Malzemeler</h3>
                            <TopInfo>En Fazla 10 malzeme seçebilirsiniz. 5₺</TopInfo>
                            <Toppings>
                                <Row className="g-3">
                                    {toppings.map((topping, index) => (
                                        <Col xs="6" md="4" key={index}>
                                            <FormGroup check>
                                                <StyledTopInput type="checkbox" data-cy="checkbox" checked={form.toppings[index]} onChange={() => handleCheckboxChange(index)}/>
                                                <StyledTopLabel check>
                                                    {topping}
                                                </StyledTopLabel>
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                            </Toppings>
                        </FormMiddle>
                        <FormLower>
                            <FormGroup>
                                <StyledTextLabel htmlFor="name">İsim</StyledTextLabel>
                                <StyledTextInput type="text" name="name" id="name" data-cy="name-input" value={form.name} onChange={handleChange} placeholder="İsim (en az 3 karakter)" invalid={errors.name}/>
                                {errors.name && <FormFeedback>{errorMessages.name}</FormFeedback>}
                            </FormGroup>
                            <FormGroup>
                                <StyledTextLabel htmlFor="notes">Sipariş Notu</StyledTextLabel>
                                <StyledTextInput type="textarea" name="notes" id="notes" data-cy="textarea" value={form.notes} onChange={handleChange} placeholder="Siparişine eklemek istediğin bir not var mı?"/>
                            </FormGroup>
                        </FormLower>
                        <FormSubmit>
                            <PizzaNum>
                                <NumButtonLeft onClick={handleNumMinus} color="#FDC913">-</NumButtonLeft>
                                <NumContainer className="num-container">{pizzaNum}</NumContainer>
                                <NumButtonRight onClick={handleNumPlus} color="#FDC913">+</NumButtonRight>
                            </PizzaNum>
                            <SubmitSection>
                                <TotalContainer>
                                    <h3>Sipariş Toplamı</h3>
                                    <ToppingPrice><span>Seçimler</span><span>{totalPrice.toFixed(2)}₺</span></ToppingPrice>
                                    <OrderPrice><span>Toplam</span><span>{(totalPrice + basePrice) * pizzaNum}₺</span></OrderPrice>
                                </TotalContainer>
                                <SubmitButton data-cy="submit-button" disabled={!isValid}>SİPARİŞ VER</SubmitButton>
                            </SubmitSection>    
                        </FormSubmit>
                    </Form>
                </section>
            </Main>
        </Page>
        )
    
}