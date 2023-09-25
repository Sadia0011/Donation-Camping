import PropTypes from 'prop-types'


const StatisticsChartName = ({ data, colors }) => {
    return (
      <div className="flex gap-2 ">
        {data.map((entry, index) => (
          <div key={`${index}`} className='flex items-center justify-center'>
            <span className="text-base mr-2">{entry.name}</span> 
            <span><hr className='w-24 h-2' style={{ backgroundColor: colors[index] }} /></span>
         </div>
        ))}
      </div>
    );
  };
  StatisticsChartName.propTypes={
    data:PropTypes.array,
    colors:PropTypes.array
  }

  export default StatisticsChartName;
  