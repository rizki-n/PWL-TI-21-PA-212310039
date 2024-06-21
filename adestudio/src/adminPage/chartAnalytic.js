import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "./../App.css";

// Register all necessary components
Chart.register(...registerables);

const ChartAnalytic = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Penjualan Perhari',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    fetchOrderStats();
  }, []);

  const fetchOrderStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/customer/order-stats', {
        params: {
          start: '2023-06-01', // Adjust this to the start of the month you want to analyze
          end: '2023-06-30', // Adjust this to the end of the month you want to analyze
        },
      });

      const orders = response.data;
      const labels = orders.map((order) => `Day ${order._id}`);
      const data = orders.map((order) => order.count);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Penjualan Perhari',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    } catch (error) {
      console.error("There was an error fetching the order stats!", error);
    }
  };

  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <h1>Data Penjualan</h1>
      </div>

      <div className="dataCard customerCard">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default ChartAnalytic;
