import React from "react";
import Bimage from "../assets/bmi.jpg";
import styled from "styled-components";
import { useState } from 'react';
import { useEffect } from "react";
import { AiOutlineCloseCircle, AiTwotoneFrown, AiTwotoneMeh } from "react-icons/ai";
import { AiTwotoneSmile } from "react-icons/ai";
import { AiOutlineMeh } from "react-icons/ai";
import { AiOutlineFrown } from "react-icons/ai";

const pageColorWine = "rgba(173, 23, 68, 0.747)";
const pageColorGray = "rgba(196, 188, 187, 0.1)";

const MainContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10%;
    margin-left: -5%;
`
const Title = styled.span`
    color: ${pageColorWine};
    align-self: center;
    font-weight: 500;
    font-size: 30px;
    margin-top: -10%;
`
const LogoSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10%;
    div:first-of-type{
        font-size: 1000%;
        align-self: center;
        font-weight: 700;
    
        padding: 20px 60px;
        margin-top: 6%;
        color: #333444;
    }
    .healthy{
        border: 5px solid green;
        border-radius: 12%;
    }
    .unhealthy{
        border: 5px solid red;
        border-radius: 12%;
    }
    div:not(:first-of-type){
        align-self: center;
        margin-top: 5%;
        font-weight: 700;
        font-size: 28px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
    P{
    padding-right: 10px;
    }

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
        border: 2px solid ${pageColorWine};
        border-radius: 10px;
        outline: none;
    }
    form button{
        height: 45px;
        width: 60%;
        align-self: center;
        margin-top: 5%;
        outline:none;
        border: none;
        background-color: ${pageColorWine};
        padding: 10px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 1000;
    }
    form button:hover{
        background-color: gray;
    }

    form label{
        font-weight: 100;
        margin-bottom: 3%;
        font-size: 120%;
    }

`
const DisplayContainer = styled.div`
    justify-self: center;
    color: red;
    font-weight: 500;
    display: flex;
    align-items: center;
    
    span{
    padding-left: 10px;
    }
`

const  BMI: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [bodyMassIndex, setBodyMassIndex] = useState(0);
    const [inputError, setInputError] = useState(false);
    useEffect(() => {
        if (inputError) {
            const timer = setTimeout(() => {
                setInputError(false); // Clear error after 3 seconds
            }, 3000);
            return () => clearTimeout(timer); // Cleanup on re-render
        }
    }, [inputError]);


    const handleHeightChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/[eE]/g, "");
        setHeightValue(value);
    }
    const handleWeightChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/[eE]/g, "");
        setWeightValue(value);
    }
    const handleSubmitForm = (event: React.ChangeEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(!heightValue || !weightValue){
            setInputError(true);
            return;
        }
        let value = Math.floor(Number(weightValue)/(Number(heightValue)*Number(heightValue)));
        setBodyMassIndex(value);
        setIsSubmitted(true);
        setHeightValue("");
        setWeightValue("");
        setInputError(false);
    }
    return (
        <MainContainer>
            <LogoSection>
                {!isSubmitted ?(
                    <img src={Bimage} alt="bmi"/>
                ):(
                    <>
                    <Title>
                        Body Mass Index
                    </Title>
                    <div className={bodyMassIndex < 25 && bodyMassIndex > 18 ? "healthy" : "unhealthy"}>
                        {bodyMassIndex}
                    </div>
                    {bodyMassIndex < 18 && 
                        <div>
                            <p>You are underweight</p>
                            <AiTwotoneFrown size={50} />
                        </div>}
                    {bodyMassIndex > 18 && bodyMassIndex < 25 && 
                        <div>
                            <p>Your weight is healthy</p>
                            <AiTwotoneSmile size={50} />
                        </div>
                    }
                    {bodyMassIndex > 25 && 
                    <div>
                        <p>You are overweight</p>
                        <AiTwotoneMeh size={50}/>
                    </div>}
                    </>
                )}
            </LogoSection>
            <CalculateSection>
                <form>
                    <label for="height"> Enter your height in M :</label>
                    <input type="number" id="height" name="height" onChange={handleHeightChange} value={heightValue}/>
                    <label for="weight">Enter your weight in KG :</label>
                    <input type="number" id="weight" name="height" onChange={handleWeightChange} value={weightValue}/>
                    <button type="submit" onClick={handleSubmitForm}>Calculate</button>
                </form>
                <DisplayContainer>
                    {inputError && 
                    <>
                    <AiOutlineCloseCircle size={30}/>
                    <span>Please provide input values!</span>
                    </>
                    }
                </DisplayContainer>
            </CalculateSection>
        </MainContainer>
    );
};

export default BMI;