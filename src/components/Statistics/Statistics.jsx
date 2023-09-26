
// import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDataFromLocalStorage } from '../../Utility/LocalStorage';
import { useState ,useEffect} from 'react';
import StatisticsChartName from '../StatisticsChartName/StatisticsChartName';
const Statistics = () => {
    const AllData=useLoaderData();
    const [totalDonation,setTotalDonation]=useState(0);
   useEffect(()=>{
    const storedData=getStoredDataFromLocalStorage();
    if(AllData.length > 0){
        const giveDonation=AllData.filter(data=>storedData.includes(data.id))
        // console.log(giveDonation)
        const total=giveDonation.length
    
   setTotalDonation(total)
    }
     
   },[])


const data = [
  { name: 'Total donation', value: 12 - totalDonation },
  { name: 'Your Donation', value: totalDonation }
];

const COLORS = ['#FF444A',  '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div>
        <div className='flex justify-center items-center'>

        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            //   <span style={{ backgroundColor: colors[index] }}>entry.name</span>
           
           ))}
          </Pie>
        </PieChart>
        </div>
        <div className=' max-w-lg mx-auto'>
        <StatisticsChartName data={data} colors={COLORS} ></StatisticsChartName>
        </div>
       </div>
    );
};

export default Statistics;