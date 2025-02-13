import React from "react";
import Bimage from "../assets/bmi.jpg";
import styled from "styled-components";

const MainContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10%;
`
const LogoSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10%;
    margin-left: 0;

    img{
        height: auto;
        width: 100%;
    }
`
const CalculateSection = styled.section`
    margin-left: 20%;
`
const DisplayContainer = styled.div`

`

const  BMI: React.FC = () => {
    return (
        <MainContainer>
            <LogoSection>
                <img src={Bimage} alt="bmi"/>
            </LogoSection>
            <CalculateSection>
                <form>
                    this is my form
                </form>
                <DisplayContainer>
                    something to display
                </DisplayContainer>
            </CalculateSection>
        </MainContainer>
    );
};

export default BMI;