import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BMI from "../assets/bmi.jpg";
import TIPS from "../assets/healthtips.jpg";
import CAL from "../assets/caloriesimg.jpg";

const MainContainer = styled.div`
    display: grid;
    align-items: column
    grid-template-rows: 1fr 2fr 1fr;
`
const HeadingSection = styled.section`
    font-size: 20px;
    line-height: 0.5;
    h1{
        font-size: 30px;
    }
    span{
        color: rgba(173, 23, 68, 0.747);
    }
`
const BodySection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 5%;
`
const Footer = styled.footer`
    align-self: center;
    justify-self: center;
    padding: 5%;
`
const Navbutton = styled(Link)`
    all: unset;
    cursor: pointer;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: none;
    padding: 10px;

    &:hover{
        border: 2px solid rgba(173, 23, 68, 0.747);
    }

    img{
        width: 100%;
        height: 200px;
        padding: 10px;
    }
    p{
        margin-top: 0;
        padding: 5px 0;
        font-weight: 300;
        font-size: 120%;
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Home: React.FC = () => {
    return (
        <MainContainer>
            <HeadingSection>
                <h1>Welcome to <span>WEIGHVY!</span></h1>
                <p>Your favorite weight management platform</p>
            </HeadingSection>
            <BodySection>
                <Navbutton>
                    <div class="content">
                        <img src={TIPS} alt="tips"/>
                        <p>Be informed of trendy updates</p>
                    </div>
                </Navbutton>
                <Navbutton to="/bmi" as >
                    <div class="content">
                        <img src={BMI} alt="bmi"/>
                        <p>Know your Body Mass Index</p>
                    </div>
                </Navbutton>
                <Navbutton>
                    <div class="content">
                        <img src={CAL} alt="calorie"/>
                        <p>Track your daily energy</p>
                    </div>
                </Navbutton>
            </BodySection>
            <Footer>
            <a href="#">More about us</a>
            </Footer>
        </MainContainer>
        
    );
};

export default Home;