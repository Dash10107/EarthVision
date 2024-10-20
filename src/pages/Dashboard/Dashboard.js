import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import Header from "@/components/Header";

const Dashboard = () => {
  const data = {
    userProgress: {
      totalGoal: 100, // kg of CO2 saved as goal
      contributionsOverTime: [5, 15, 25, 35], // Dynamic data showing progress over 4 weeks
      weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    communityImpact: {
      communityContribution: 1200, // total CO2 saved in kg by community
      co2Goal: 2000, // Community goal
    },
    activities: [
      { name: "Reduce Plastic Usage", contribution: 10 },
      { name: "Switch to Renewable Energy", contribution: 25 },
      { name: "Composting Waste", contribution: 15 },
      { name: "Cycling to Work", contribution: 5 },
      { name: "Energy Efficient Lighting", contribution: 20 },
    ],
    comparisonData: [
      { user: "You", contribution: 35 },
      { user: "Alice", contribution: 50 },
      { user: "Bob", contribution: 70 },
      { user: "Charlie", contribution: 40 },
    ],
  };

  const { userProgress, communityImpact, activities, comparisonData } = data;

  // Data for Line Chart (User Progress Tracker) with dynamic points
  const lineChartData = {
    labels: userProgress.weeks,
    datasets: [
      {
        label: "CO2 Saved (kg)",
        data: userProgress.contributionsOverTime,
        fill: false,
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
    ],
  };

  // Data for Doughnut Chart (Community Impact)
  const doughnutChartData = {
    labels: ["Community Contribution", "Remaining Goal"],
    datasets: [
      {
        data: [
          communityImpact.communityContribution,
          communityImpact.co2Goal - communityImpact.communityContribution,
        ],
        backgroundColor: ["#60A5FA", "#E5E7EB"],
      },
    ],
  };

  // Data for Doughnut Chart (User Contribution)
  const userDoughnutChartData = {
    labels: ["Your Contribution", "Remaining Goal"],
    datasets: [
      {
        data: [
          userProgress.contributionsOverTime[
            userProgress.contributionsOverTime.length - 1
          ],
          userProgress.totalGoal -
            userProgress.contributionsOverTime[
              userProgress.contributionsOverTime.length - 1
            ],
        ],
        backgroundColor: ["#34D399", "#F87171"],
      },
    ],
  };

  // Data for Bar Chart (Activity Breakdown)
  const barChartData = {
    labels: activities.map((activity) => activity.name),
    datasets: [
      {
        label: "CO2 Saved (kg)",
        data: activities.map((activity) => activity.contribution),
        backgroundColor: "#6366F1",
      },
    ],
  };

  // Data for Community Comparison
  const comparisonChartData = {
    labels: comparisonData.map((data) => data.user),
    datasets: [
      {
        label: "CO2 Saved (kg)",
        data: comparisonData.map((data) => data.contribution),
        backgroundColor: ["#34D399", "#FB923C", "#F87171", "#60A5FA"],
      },
    ],
  };

  return (
    <>
      <Header
        text1={"The winner for Minithon is"}
        text2={"Akhand Bharat"}
        linktext={"profiles"}
        // setNeonDark={setNeonDark}                neonDark={neonDark}
        tabs={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Events", link: "/Events/event" },
          { name: "Profile", link: "/Auth/profile", underline: true },
          { name: "Calendar", link: "/Calendar/calendar" },
        ]}
      />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Sustainability Dashboard
        </h1>

        {/* Grid layout for charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* User Progress */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
            <p className="text-sm mb-2">Goal: Save 100 kg of CO2</p>
            <Line data={lineChartData} height={100} />
            <div className="mt-4">
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${
                      (userProgress.contributionsOverTime[
                        userProgress.contributionsOverTime.length - 1
                      ] /
                        userProgress.totalGoal) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Community Impact (Smaller Doughnut Chart) */}
          <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-start space-x-8">
            <div className="flex-1">
              {/* First Doughnut Chart (Community Impact) */}
              <h3 className="text-lg font-medium mt-4">
                Community Contribution
              </h3>
              <p className="text-sm mb-2">
                Current Contribution: {communityImpact.communityContribution} kg
                of CO2
              </p>
              <div className="flex justify-center">
                <Doughnut data={doughnutChartData} height={40} />
              </div>
            </div>

            <div className="flex-1">
              {/* Second Doughnut Chart (User Contribution) */}
              <h3 className="text-lg font-medium mt-4">Your Contribution</h3>
              <p className="text-sm mb-2">
                Your Goal: {userProgress.totalGoal} kg of CO2
              </p>
              <p className="text-sm mb-2">
                Your Contribution:{" "}
                {
                  userProgress.contributionsOverTime[
                    userProgress.contributionsOverTime.length - 1
                  ]
                }{" "}
                kg of CO2
              </p>
              <div className="flex justify-center">
                <Doughnut data={userDoughnutChartData} height={40} />
              </div>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Activity Breakdown</h2>
            <Bar data={barChartData} height={100} />
          </div>

          {/* Community Comparison */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Community Comparison</h2>
            <Bar data={comparisonChartData} height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
