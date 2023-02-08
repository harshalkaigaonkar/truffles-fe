import React from 'react'
import { Line } from 'react-chartjs-2'

const ChartComponent = () => {
  // Needs Correction.
  const labels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
const config = {
  type: 'line',
  data: data,
};
  // return (
  //   <section>
  //     <Line data={data} />
  //   </section>
  // )
  return (
    <></>
  )
}

export default ChartComponent