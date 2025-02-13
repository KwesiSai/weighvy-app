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
    border: 1px solid black;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4%;
    }
    form input{
         height: 30px;
         width: 60%;
         margin-bottom: 7%;
    }
         form label{
            font-weight: 100;
            margin-bottom: 3%;
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
                    <label for="height"> Enter your height in M</label>
                    <input type="number" id="height" name="height"/>
                    <label for="weight">Enter your weight in KG</label>
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