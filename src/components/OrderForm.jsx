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
const FormUpper = styled.div`
    display: flex;
    gap: 15rem;
    padding: 1rem 0;
`;
const PizzaSize = styled.div`
    font-size: 1.3rem;
`;
const FormMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-family: Barlow, sans-serif;
`;
const Hamur = styled.h3`
    margin-bottom: 0.1rem;
`;
const Boyut = styled.h3`
    margin-bottom: 2rem;
`;
const Toppings = styled.div`
    margin-top: 2rem;
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
const FormSubmit = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1.5px #5F5F5F80 solid;
    padding-top: 3rem;
`;
const PizzaNum = styled.div`
    display: flex;
    
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
`;
const NumContainer = styled.span`
    border: 1px solid #5F5F5F;
    font-size: 1.3rem;
    width: 4.5rem;
    height: 4.5rem;
    text-align: center;
    padding-top: 1.5rem;
    font-weight: bold;

`;
const SubmitSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
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
const Red = styled.span`
    color: #CE2829;
`;
const TopInfo = styled.span`
    font-size: 1.3rem;
    color: #5F5F5F;
    font-weight: 500;
`;
const StyledTextLabel = styled(Label)`
    font-size: 1.7rem;
    font-weight: 500;
`;
const StyledTextInput = styled(Input)`
    height: 4.5rem;
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
                <Logo src={logo} className="logo" alt="Teknolojik Yemekler logo" />
                <Nav>
                    <a href="/">Anasayfa</a>
                    <span> - </span>
                    <a href="/order">Sipariş Oluştur</a>
                </Nav>
            </Header>
            <Main>
                <section className="pizza-info">
                    <Pizza />
                </section>
                <section className="order-form">
                    <Form onSubmit={handleSubmit}>
                        <FormUpper className="form-upper">
                            <PizzaSize className="pizza-size">
                                <Boyut>Boyut Seç <Red className="red">*</Red></Boyut>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Küçük" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Küçük
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Orta" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Orta
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="mb-3">
                                    <Input name="size" type="radio" value="Büyük" onChange={handleChange}/>
                                    {' '}
                                    <Label check>
                                        Büyük
                                    </Label>
                                </FormGroup>
                            </PizzaSize>
                            <div className="pizza-dough">
                                <Hamur>Hamur Seç <Red className="red">*</Red></Hamur>
                                <FormGroup>
                                    <Label htmlFor="dough"></Label>
                                    <Input type="select" name="dough" id="dough" value={form.dough} onChange={handleChange}>
                                        <option value="" disabled defaultValue>Hamur Kalınlığı</option>
                                        <option value="çok ince">Çok ince</option>
                                        <option value="ince">İnce</option>
                                        <option value="normal">Normal</option>
                                    </Input>
                                </FormGroup>
                            </div>
                        </FormUpper>
                        <FormMiddle className="form-middle">
                            <h3>Ek Malzemeler</h3>
                            <TopInfo>En Fazla 10 malzeme seçebilirsiniz. 5₺</TopInfo>
                            <Toppings className="toppings">
                                <Row className="g-3">
                                    {toppings.map((topping, index) => (
                                        <Col xs="4" key={index}>
                                            <FormGroup check>
                                                <StyledTopInput type="checkbox" checked={form.toppings[index]} onChange={() => handleCheckboxChange(index)} />
                                                <StyledTopLabel check>
                                                    {topping}
                                                </StyledTopLabel>
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                            </Toppings>
                        </FormMiddle>
                        <div className="form-lower">
                            <FormGroup>
                                <StyledTextLabel htmlFor="name">İsim</StyledTextLabel>
                                <StyledTextInput type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="İsim (en az 3 karakter)" invalid={errors.name}/>
                                {errors.name && <FormFeedback>{errorMessages.name}</FormFeedback>}
                            </FormGroup>
                            <FormGroup>
                                <StyledTextLabel htmlFor="notes">Sipariş Notu</StyledTextLabel>
                                <StyledTextInput type="textarea" name="notes" id="notes" value={form.notes} onChange={handleChange} placeholder="Siparişine eklemek istediğin bir not var mı?"/>
                            </FormGroup>
                        </div>
                        <FormSubmit className="form-submit">
                            <PizzaNum className="pizza-num">
                                <NumButtonLeft onClick={handleNumMinus} color="#FDC913">-</NumButtonLeft>
                                <NumContainer className="num-container">{pizzaNum}</NumContainer>
                                <NumButtonRight onClick={handleNumPlus} color="#FDC913">+</NumButtonRight>
                            </PizzaNum>
                            <SubmitSection className="submit-button">
                                <TotalContainer className="total-price">
                                    <h3>Sipariş Toplamı</h3>
                                    <ToppingPrice><span>Seçimler</span><span>{totalPrice.toFixed(2)}₺</span></ToppingPrice>
                                    <OrderPrice><span>Toplam</span><span>{(totalPrice + basePrice) * pizzaNum}₺</span></OrderPrice>
                                </TotalContainer>
                                <SubmitButton color="#FDC913" disabled={!isValid}>SİPARİŞ VER</SubmitButton>
                            </SubmitSection>    
                        </FormSubmit>
                    </Form>
                </section>
            </Main>
        </Page>
        )
    
}