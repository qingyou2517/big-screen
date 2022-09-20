import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [{value: 6, name: '女'}, {value: 14, name: '男'},];

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              let sum = 0;
              for (let i = 0; i < data.length; i++) {
                sum += data[i].value;
              }
              return (options.value / sum * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: data
        }
      ]
    }));
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const createData = (data) => {
        const female= rand(5, 10, 1)[0];
        const male = rand(6, 15, 1)[0];
        data[0].value= female;
        data[1].value = male;
        return data;
      };
      const newData = createData(data);
      x(newData);
    }, 3000);
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male"/>男
        <span className="female"/>女
      </div>
    </div>
  );
};