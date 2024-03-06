import React from 'react';


function History() {
  return (
    <div className="history-container">
      <h1>Your History</h1>
      {/* Display date, name, BMI reports, weight, height here */}
      <div className="history-info">
        <p>Date: [Date]</p>
        <p>Name: [Name]</p>
        <p>BMI Reports: [BMI Reports]</p>
        <p>Weight: [Weight]</p>
        <p>Height: [Height]</p>
      </div>
    </div>
  );
}

export default History;