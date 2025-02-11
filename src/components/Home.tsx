import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BMI from "../assets/bmi.jpg";
import TIPS from "../assets/healthtips.jpg";
import CAL from "../assets/caloriesimg.jpg";


const Home: React.FC = () => {
    return (
        <mainContainer>
            <headingSection>
                <h1>Welcome to weighvy!</h1>
                <p>Your favorite weight management platform</p>
                <p>Get to know more!</p>
            </headingSection>
            <bodySection>
                <navbutton as={Link} to="/article">
                    <img src={TIPS} alt="tips"/>
                    <p> Be informed of trendy updates</p>
                </navbutton>
                <navbutton as={Link} to="/bmi">
                    <img src={BMI} alt="bmi"/>
                    <p>Know your Body Mass Index</p>
                </navbutton>
                <navbutton as={Link} to="/calcounter">
                    <img src={CAL} alt="calorie"/>
                    <p>Track your daily energy</p>
                </navbutton>
            </bodySection>
        </mainContainer>
    );
};

export default Home;