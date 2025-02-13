import React from "react";
import Bimage from "../assets/bmi.jpg";
import styled from "styled-components";

const MainContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr;
`
const LogoSection = styled.section`
    display: flex;
    flex-direction: column;
`
const CalculateSection = styled.section`

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