import React, { useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const dataArr = [
    { year: 2010, assets: 40, liabilities: 20, },
    { year: 2011, assets: 20, liabilities: 70, },
    { year: 2012, assets: 40, liabilities: 20, },
    { year: 2013, assets: 30, liabilities: 10, },
    { year: 2014, assets: 50, liabilities: 40, },
    { year: 2015, assets: 40, liabilities: 70, },
    { year: 2016, assets: 60, liabilities: 30, },
    { year: 2017, assets: 50, liabilities: 40, },
    { year: 2018, assets: 70, liabilities: 80, },
    { year: 2019, assets: 60, liabilities: 20, },
    { year: 2020, assets: 80, liabilities: 40, },
  ];

 const options = {
    plugins: {
      legend: {
        position:"bottom" as const,
        align: "start" as const,
        labels: {
          boxWidth: 20,
          boxHeight: 0,
          padding: 25
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: "white",
        }
      },
      y: {
        border: {
          dash: [5, 5],
          color: "white"
        }
      }
    }
  }

  const data = {
    labels: dataArr.map(row => row.year),
    datasets: [
      {
        label: 'Assets',
        data: dataArr.map(row => row.assets),
        borderColor: "#82D616",
        backgroundColor: "rgba(130,214,22,.1)",
        fill: true,
        tension: 0.5,
        pointStyle: 'circle',
        pointRadius: 0
      },
      {
        label: 'Liability',
        data: dataArr.map(row => row.liabilities),
        borderColor:"#FF8540",
        backgroundColor:"rgba(255,133,64,.1)",
        fill: true,
        tension: 0.5,
        pointStyle: 'circle',
        pointRadius: 0
      }
    ]
  }
  
  return (
    <section className='py-6 px-12 flex flex-col items-around justify-center rounded-lg shadow-lg shadow-black/50 bg-white'>
      <p className='mb-6 text-black/60 ml-2 font-medium'>Assets & Liabilities</p>
      <Line 
        options={options}
        data={data}
      />
    </section>
  )
}

export default ChartComponent