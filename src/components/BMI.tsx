import React from "react";
import Bimage from "../assets/bmi.jpg";
import styled from "styled-components";

const MainContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10%;
    margin-left: -5%;
`
const LogoSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10%;

    img{
        height: auto;
        width: 90%;
    }
`
const CalculateSection = styled.section`
    margin-left: 15%;
    margin-right: 5%;
    width: 70%;
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4%;
    }
    form input{
        height: 35px;
        width: 60%;
        margin-bottom: 7%;
        border: none;
        border-bottom: 2px solid gray;
        outline: none;
        transition: border-color 0.5s ease;
        background: transparent;
        color: black;
    }
    
    form input:focus{
        border: 2px solid rgba(173, 23, 68, 0.747);
        border-radius: 10px;
        outline: none;
    }

    form label{
        font-weight: 100;
        margin-bottom: 3%;
        font-size: 120%;
    }
`
const DisplayContainer = styled.div`
    justify-self: center;
`

const  BMI: React.FC = () => {
    return (
        <MainContainer>
            <LogoSection>
                <img src={Bimage} alt="bmi"/>
            </LogoSection>
            <CalculateSection>
                <form>
                    <label for="height"> Enter your height in M :</label>
                    <input type="number" id="height" name="height"/>
                    <label for="weight">Enter your weight in KG :</label>
                    <input type="number" id="weight" name="height"/>
                </form>
                <DisplayContainer>
                    something to display
                </DisplayContainer>
            </CalculateSection>
        </MainContainer>
    );
};

export default BMI;