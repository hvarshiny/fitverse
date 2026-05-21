import { useState } from "react"

import "../styles/BMI.css"

function BMICalculator() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [status, setStatus] = useState("")

  const calculateBMI = () => {

    const heightInMeters = height / 100

    const bmiValue =
      (weight / (heightInMeters * heightInMeters)).toFixed(1)

    setBmi(bmiValue)

    if (bmiValue < 18.5) {
      setStatus("Underweight")
    }

    else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("Normal Weight")
    }

    else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("Overweight")
    }

    else {
      setStatus("Obese")
    }

  }

  return (

    <div className="page-content">

      <div className="bmi-container">

        <h1>BMI Calculator</h1>

        <input
          type="number"
          placeholder="Enter Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="result">

            <h2>Your BMI: {bmi}</h2>

            <p>Status: {status}</p>

          </div>
        )}

      </div>

    </div>
  )
}

export default BMICalculator