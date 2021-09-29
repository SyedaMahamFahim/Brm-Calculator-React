import React, { useState } from "react";
import "./style.css";
import workoutOptions from "./WorkoutOption";

const BrmCalculator = () => {
  const genderOptions = ["Female", "Male"];
  const [gender, setGender] = useState("Female");
  const [weight, setWeight] = useState();
  const [heightInches, setHeightInches] = useState();
  const [age, setAge] = useState();
  const [workout, setWorkout] = useState();
  const [bmr, setBmr] = useState(0);
  var bmrTemp = 0;
  let calories = 0;
  const calculateBRM = () => {
    if (gender === "Male") {
       bmrTemp = 66 + 6.2 * weight + 12.7 * heightInches - 6.76 * age;
      alert(`Your Imperial BRM is ${bmrTemp}`);
    } else {
       bmrTemp = 665.1 + 4.35 * weight + 4.7 * heightInches - 4.7 * age;
      alert(`Your BRM is ${bmrTemp}`);
    }
    setBmr(bmrTemp)
  };
  
  const calculateCalorie = () => {
    console.log(bmr)
   
    if(bmr== 0){
        alert(`Kindly,find the BMR first`)
    }
    else{
        console.log(workout)
        if (workout == 1.2) {
            calories = bmr * 1.2;
            alert(`Daily kilocalories needed = ${calories}`);
          } else if (workout == 1.375) {
            calories = bmr * 1.375;
            alert(`Daily kilocalories needed = ${calories}`);
          } else if (workout == 1.55) {
            calories = bmr * 1.55;
            alert(`Daily kilocalories needed = ${calories}`);
          } else if (workout == 1.725) {
            calories = bmr * 1.725;
            alert(`Daily kilocalories needed = ${calories}`);
          } else if (workout == 1.9) {
            calories = bmr * 1.9;
            alert(`Daily kilocalories needed = ${calories}`);
          } else {
            alert(`Kindly select any one option`);
          }
        }
    
  };

  return (
    <div>
      <div id="bmrcalc">
        <div className="form">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          <div className="inputwrap">
            <label className="label">Gender</label>
            {genderOptions.map((value, index) => {
              return (
                <>
                  <label>
                      <span><input
                      key={index}
                      type="radio"
                    //   className="genderF"
                      name="gender"
                      value={value}
                      onChange={(e) => setGender(e.target.value)}
                    /> {value}</span>
                    
                   
                  </label>
                </>
              );
            })}
          </div>

          <div className="inputwrap">
            <label className="label">Weight</label>
            <input
              type="number"
              name="weight"
              className="weight"
              min="0"
              max="999"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height</label>

            <label htmlFor="">Inches</label>
            <input
              type="number"
              name="heightInches"
              className="heightInches"
              min="0"
              max="11"
              onChange={(e) => setHeightInches(e.target.value)}
            />
          </div>

          <div className="inputwrap">
            <label className="label">Age </label>
            <input
              type="number"
              className="age"
              name="age"
              min="0"
              max="120"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="button" onClick={calculateBRM}>
            Calculate BMR
          </button>
          <div className="workout">
            <div className="inputwrap">
              <label className="label">Workout in a Week</label>
              <select
                className="activity"
                name="activity"
                onChange={(e) => setWorkout(e.target.value)}
              >
                <option value="">Select your Activity</option>
                {workoutOptions.map((value, index) => {
                  return (
                    <>
                      <option value={value.value} key={value.id}>
                        {value.title}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <button type="button" onClick={calculateCalorie}>
              Calculate Calories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrmCalculator;
