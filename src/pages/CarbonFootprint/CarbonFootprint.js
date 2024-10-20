import Extrainput from "@/components/Extrainput";
import Header from "@/components/Header";
import CarbonFootprintSummary from "@/components/Summary";
import React, { useState, useEffect } from "react";

// Component to calculate carbon footprint
const CarbonFootprintCalculator = () => {
  const [inputs, setInputs] = useState({
    electricityUsage: '',
    vehicleDistance: '',
    flightDistance: '',
  });

  const [vehicleModels, setVehicleModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const API_KEY = process.env.NEXT_PUBLIC_CARBONINTERFACE_API_KEY;

  useEffect(() => {
    const fetchVehicleModels = async () => {
      try {
        const response = await fetch(
          'https://www.carboninterface.com/api/v1/vehicle_makes/2b1d0cd5-59be-4010-83b3-b60c5e5342da/vehicle_models',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setVehicleModels(data);
      } catch (error) {
        console.error('Error fetching vehicle models:', error);
      }
    };

    fetchVehicleModels();
  }, []);

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { electricityUsage, vehicleDistance, flightDistance } = inputs;
    const requests = [];

    if (electricityUsage) {
      requests.push(
        fetch("https://www.carboninterface.com/api/v1/estimates", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "electricity",
            electricity_unit: "kwh",
            electricity_value: electricityUsage,
            country: "US"
          })
        }).then(res => res.json())
      );
    }

    if (vehicleDistance) {
      requests.push(
        fetch("https://www.carboninterface.com/api/v1/estimates", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "vehicle",
            distance_unit: "km",
            distance_value: vehicleDistance,
            vehicle_model_id: selectedModel
          })
        }).then(res => res.json())
      );
    }

    if (flightDistance) {
      requests.push(
        fetch("https://www.carboninterface.com/api/v1/estimates", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "flight",
            passengers: 1,
            legs: [{ departure_airport: "LAX", destination_airport: "JFK" }]
          })
        }).then(res => res.json())
      );
    }

    try {
      const responses = await Promise.all(requests);
      const totalCarbonFootprint = responses.reduce((total, current) => total + current.data.attributes.carbon_mt, 0);
      setResults({
        totalCarbonFootprint: totalCarbonFootprint.toFixed(2),
        breakdown: responses.map(response => response.data.attributes)
      });
    } catch (error) {
      console.error("Error fetching data from Carbon Interface API", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <Header
            tabs={[
            { name: "Home", link: "/", underline: true },
            { name: "About", link: "/about" },
            { name: "Events", link: "/Events/event" },
            { name: "Profile", link: "/Auth/profile" },
            { name: "Calendar", link: "/Calendar/calendar" },
            ]}
        />
        <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Personal Carbon Footprint Calculator</h2>

        <div className="md:flex gap-4">
            <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                <label className="block text-gray-700 mb-1">Electricity Usage (kWh): </label>
                <input
                    type="number"
                    name="electricityUsage"
                    value={inputs.electricityUsage}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                    required
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 mb-1">Select Vehicle Model: </label>
                <select value={selectedModel} onChange={handleModelChange} className="border rounded p-2 w-full" required>
                    <option value="">-- Select a model --</option>
                    {vehicleModels.map((model) => (
                    <option key={model.id} value={model.data.id}>
                        {model.data.attributes.name}
                    </option>
                    ))}
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 mb-1">Vehicle Distance (km): </label>
                <input
                    type="number"
                    name="vehicleDistance"
                    value={inputs.vehicleDistance}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                    required
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 mb-1">Flight Distance (km): </label>
                <input
                    type="number"
                    name="flightDistance"
                    value={inputs.flightDistance}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                />
                </div>

                <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded transition duration-300"
                >
                {loading ? "Calculating..." : "Calculate Footprint"}
                </button>
            </form>

            <div className="mt-5">
                {results && (
                    <CarbonFootprintSummary totalFootprint={results.totalCarbonFootprint} breakdown={results.breakdown} />
                )}
            </div>
        </div>

        <Extrainput />
        </div>
    </>
  );
};

export default CarbonFootprintCalculator;
