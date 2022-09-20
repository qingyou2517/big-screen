import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';

export const Chart8 = () => {
  const divRef = useRef(null);
  const myChart=useRef(null)
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];

  const data=[{value: 17, name: '10-20'}, {value: 30, name: '20-30'},{value: 33, name: '30-40'}, {value: 16, name: '40-50'}, {value: 4, name: '50-60'},]

  const x = (data) =>{
    myChart.current.setOption(createEchartsOptions({
      color: colors,
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

  useEffect(()=>{
    myChart.current = echarts.init(divRef.current);
    x(data);
  })
  useEffect(() => {
    setInterval(() => {
      const createData = (data) => {
        const array=rand(4,40,5)
        for(let i=0;i<data.length;i++){
          data[i].value=array[i]
        }
        return data
      };
      const newData = createData(data);
      x(newData);
    }, 3000);
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />10-20
        <span style={{background: colors[1]}} />20-30
        <span style={{background: colors[2]}} />30-40
        <span style={{background: colors[3]}} />40-50
        <span style={{background: colors[4]}} />50-60
      </div>
    </div>
  );
};