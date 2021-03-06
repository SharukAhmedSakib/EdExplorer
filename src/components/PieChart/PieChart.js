import { Animation, Chart, PieSeries } from '@devexpress/dx-react-chart';
import React from 'react';

const PieChart = () => {

    const data = [
        { country: 'Russia', area: 12 },
        { country: 'Canada', area: 7 },
        { country: 'USA', area: 7 },
        { country: 'China', area: 7 },
        { country: 'Brazil', area: 6 },
        { country: 'Australia', area: 5 },
        { country: 'India', area: 2 },
        { country: 'Others', area: 55 },
      ];

    return (
        <div className="card">
        <Chart
          data={data}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Animation />
        </Chart>
      </div>
    );
};

export default PieChart;