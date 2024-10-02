import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const[height,setHeight]=useState('')
  const[weight,setWeight]=useState('')
  const[gender,setGender]=useState('')
  const[bmi,setBmi]=useState('')

  const calculateBmi =(e) =>{
      e.preventDefault();
      if(!height || !weight || !gender){
        toast.error("please enter valid height, weight, gender");
        return;
      }
      const heightInMeters = height /100;
      const bmiValue = (weight /(heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if(bmiValue < 18.5){
        toast.warning("your are underweight.seek advice from health care");
      }
      else if(bmiValue >= 18.5 && bmiValue < 25){
        toast.success("your weight is normal.keep maintaining healty lifestyle")
      }
      else if(bmiValue >=25 && bmiValue <30){
        toast.warning("your are overweight.seek advice from health care");
      }
      else{
        toast.error("your are obese.seek advice from health care");
      }
  }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBmi}>
              <div>
                <label>Height (in cm)</label>
                <input
                type='number'
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
                required
                />
              </div>
              <div>
                <label>Weight (in kg)</label>
                <input
                type='number'
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
                required
                />
              </div>
              <div>
                <label>Gender</label>
                <select 
                value={gender} 
                onChange={(e)=>setGender(e.target.value)}
                >
                  <option value="">select option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>                  
                </select>                
              </div>
              <button type='submit'>Calulate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src='/bmi.jpg' alt='BMIImage'/>
        </div>
      </div>

    </section>
  )
}

export default BMICalculator