import React, { useState } from 'react'
import { useUserContext } from '../UserContext'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Lottie from 'lottie-react';
import loading from '../../images/loading.json'; 
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaClinicMedical } from "react-icons/fa";

function Slider1() {
  const { Culinary,setCulinary,medical,setmedical,pregnancy,setPregnancy,cosmetic,setCosmetic,formData, setFormData }=useUserContext()
  const [recommendation,setRedommendation]=useState([])
  const [nxtbtn,setNextbtn] =useState(true)




  function handleMedical(){
    if(medical){
        const addRecommendation = (newRecommendation) => {
    setRedommendation(prevRecommendations => [
      ...prevRecommendations,
      newRecommendation
    ]);
   setmedical(false)};
  addRecommendation("medical use")

    }
    else{
        const removeRecommendation = (recommendationToRemove) => {
    setRedommendation(prevRecommendations =>
      prevRecommendations.filter(
        recommendation => recommendation !== recommendationToRemove
      )
    );
    setmedical(true) };
  removeRecommendation("medical use")

    }

  }
  function handleCosmetic(){
    if(cosmetic){
        const addRecommendation = (newRecommendation) => {
    setRedommendation(prevRecommendations => [
      ...prevRecommendations,
      newRecommendation
    ]);
    setCosmetic(false)};
  addRecommendation("cosmetic use")

    }
    else{
        const removeRecommendation = (recommendationToRemove) => {
    setRedommendation(prevRecommendations =>
      prevRecommendations.filter(
        recommendation => recommendation !== recommendationToRemove
      )
    );
    setCosmetic(true) };
  removeRecommendation("cosmetic use")

    }

  }
  function handleCulinary(){
    if(Culinary){
        const addRecommendation = (newRecommendation) => {
    setRedommendation(prevRecommendations => [
      ...prevRecommendations,
      newRecommendation
    ]);
    setCulinary(false)};
  addRecommendation("culinary use")

    }
    else{
        const removeRecommendation = (recommendationToRemove) => {
    setRedommendation(prevRecommendations =>
      prevRecommendations.filter(
        recommendation => recommendation !== recommendationToRemove
      )
    );
    setCulinary(true) };
  removeRecommendation("culinary use")

    }

  }
  function handlePregnancy(){
    if(pregnancy){
        const addRecommendation = (newRecommendation) => {
    setRedommendation(prevRecommendations => [
      ...prevRecommendations,
      newRecommendation
    ]);
   setPregnancy(false)};
  addRecommendation("pregnancy use")

    }
    else{
        const removeRecommendation = (recommendationToRemove) => {
    setRedommendation(prevRecommendations =>
      prevRecommendations.filter(
        recommendation => recommendation !== recommendationToRemove
      )
    );
    setPregnancy(true) };
  removeRecommendation("pregnancy use")

    }

  }
  function handleNext(){
    setNextbtn(false)
      setFormData(prevState => ({
        ...prevState,
        recommendations: recommendation,
      }));
    
  }
  console.log(recommendation)
  console.log( formData)




  return (
    <div className='slider1_main'>
       <div className='slider1_div1'>
            <button><IoArrowBackCircleOutline />
            </button>
        </div>
        <div className='slider1_div2'>
            Pick Your UseCase
        </div>
        <div className='slider1_div3'>
            <div onClick={handleCulinary} className={`slider1_div3_1 ${Culinary?"":"culinary"}`}>
                Culinary Use
            </div>
            <div   onClick={handleMedical} className={`slider1_div3_1 ${medical?"":"medical"}`}>
                Medical Use
            </div>
            <div onClick={handleCosmetic}  className={`slider1_div3_1 ${cosmetic?"":"cosmetic"}`}>
                Cosmetic Use
            </div>
            <div onClick={handlePregnancy}  className={`slider1_div3_1 ${pregnancy?"":"pregnancy"}`}>
                Pregnancy Use
            </div>
        </div>
        <div className='slider1_div4'>
            <button onClick={handleNext}>    {nxtbtn?"Next":( <AiOutlineLoading3Quarters className='loading_txt' />)} 

            </button>
        </div>
    </div>
  )
}

export default Slider1