import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';


export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);

  const data = [10, 20, 36, 41, 15, 26, 37, 18, 29];
  const x=(data)=>{
    myChart.current.setOption(createEchartsOptions({

      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          },
          margin: px(12),
          lineHeight: px(16),
          interval: 0,
        },
      },
      grid: {
        x: px(45),
        y: px(30),
        x2: px(20),
        y2: px(65),
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          show: true,
          margin: px(16)
        }
      },
      series: [{
        type: 'bar',
        data: data
      }]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  useEffect(() => {
    setInterval(() => {
      const array=rand(20,50,9)
      const createData=(data)=>{
        for(let i=0;i<data.length;i++){
          data[i]=array[i]
        }
        return data
      }
      const newData = createData(data)
      x(newData);
    }, 3000);
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};