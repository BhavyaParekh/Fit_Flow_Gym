import React from "react";
import { useState } from "react";
import'./form.css'

export default function Form1() {
  const [weight, setw] = useState(0);
  const [height, seth] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setm] = useState("");

  function handlew(e) {
    setw(e.target.value);
  }
  function handleh(e) {
    seth(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter valid weight and height");
    } 
    
    else {
      let bmi = (weight / (height * height));
      setbmi(bmi);
        
      if (bmi < 18) {
        setm("you are underweight");
      } else if (bmi >= 18 && bmi < 25) {
        setm("you are healthy weight person");
      } else {
        setm("you are over weight person");
      }
    }

  }
  function reload(){
    window.location.reload()
  }

  return (
    <>
      <div className="form-container">
        
      <h1>Let's Maintain Your Weight</h1>
      <h2 className="check-weight-heading">Check Your Weight</h2>
        <form onSubmit={handlesubmit}>
        <div className="form-field">
           <label htmlFor="weight">Weight (kg):</label>
            <input
            className="weight"
            id="weight"
              type="number"
              step="0.01"
              placeholder="Enter Weight value"
              value={weight}
              onChange={handlew}
            />
          </div>
          <div className="form-field">
          <label htmlFor="height">Height (m):</label>
            <input
            className="height"
            id="height"
              type="number"
              step="0.01"
              placeholder="Enter Weight value"
              value={height}
              onChange={handleh}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button><br/><br/>
            <button className="btn1" onClick={reload} type="submit">
              Reload
            </button>
            </div>
            </form>
      {bmi && <p>Your BMI is: {bmi}</p>}
      <p><h1 style={{color : "red"}}>{message}</h1></p>

     </div>
    </>
  );
}
// <p><h1 style={{color : "yellow"}}>{message}</h1></p>
//   return (
//     <div className="form-container">
//       <h1>Let's Maintain Your Weight</h1>
//       <h2 className="check-weight-heading">Check Your Weight</h2>
//       <form onSubmit={calculateBMI}>
//         <div className="form-field">
//           <label htmlFor="weight">Weight (kg):</label>
//           <input
//             type="number"
//             id="weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="height">Height (m):</label>
//           <input
//             type="number"
//             id="height"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Calculate BMI</button>
//       </form>
//       {bmi && <p>Your BMI is: {bmi}</p>}
//     </div>
//   );
// }

// export default Form;