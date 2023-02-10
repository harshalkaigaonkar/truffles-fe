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
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const dataArr = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
  ];

  const data = {
    labels: dataArr.map(row => row.year),
    datasets: [
      {
        label: 'Assets',
        data: dataArr.map(row => row.count),
        borderColor: "#82D616",
        backgroundColor: "rgba(130,214,22,1)",
        tension: 0.5,
      },
      {
        label: 'Liability',
        data: dataArr.map(row => row.count-2),
        borderColor:"#FF8540",
        backgroundColor:"rgba(255,133,64,1)",
        tension: 0.5,
      }
    ]
  }
  
  return (
    <section className='py-8 px-12 flex flex-col items-around justify-center rounded-lg shadow-lg shadow-black/50 bg-white'>
      <p className='mb-2 text-black/60 ml-5 font-medium'>Assets & Liabilities</p>
      <Line 
        data={data}
      />
    </section>
  )
}

export default ChartComponent