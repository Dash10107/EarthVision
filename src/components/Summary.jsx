import React from 'react';

const CarbonFootprintSummary = ({ totalFootprint, breakdown }) => {
  const { categoryA, categoryB, categoryC } = breakdown;
console.log(totalFootprint)
console.log(breakdown)
  // Function to determine the footprint range and messages
  const getFootprintDetails = (value) => {
    if (value < 0.5) {
      return {
        impact: 'Low Impact',
        message: 'Your carbon footprint is quite low! Great job maintaining sustainable habits.',
        suggestions: ['Keep it up!', 'Consider reducing even further by using public transport or biking.'],
      };
    } else if (value < 1.5) {
      return {
        impact: 'Moderate Impact',
        message: 'Your carbon footprint is moderate. You can make a few adjustments to reduce it further.',
        suggestions: [
          'Consider using energy-efficient appliances.',
          'Reduce single-use plastics and increase recycling efforts.',
          'Try to use public transport or carpool more often.',
        ],
      };
    } else {
      return {
        impact: 'High Impact',
        message: 'Your carbon footprint is high. There are significant opportunities to reduce your emissions.',
        suggestions: [
          'Consider adopting a plant-based diet.',
          'Look into renewable energy sources for your home.',
          'Minimize air travel and choose alternative transportation methods.',
          'Focus on energy conservation and waste reduction.',
        ],
      };
    }
  };

  const { impact, message, suggestions } = getFootprintDetails(totalFootprint);

  return (
    <div style={styles.container}>
      <h2>Total Carbon Footprint: {totalFootprint} Metric Tons</h2>
      <p>Impact Level: <strong>{impact}</strong></p>
      <p>{message}</p>

      <h3>Breakdown:</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Emissions (Metric Tons)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Category A</td>
            <td>{categoryA}</td>
          </tr>
          <tr>
            <td>Category B</td>
            <td>{categoryB}</td>
          </tr>
          <tr>
            <td>Category C</td>
            <td>{categoryC}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>{totalFootprint}</strong></td>
          </tr>
        </tfoot>
      </table>

      <h4>Suggestions for Reduction:</h4>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default CarbonFootprintSummary;
