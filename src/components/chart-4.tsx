import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [15, 13, 11, 13, 14, 15, 16, 18, 21,
    19, 17, 16, 15];

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      grid: {
        x: px(20),
        x2: px(30),
        y: px(20),
        y2: px(30),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
              sum += data[i];
            }
            return (val / sum * 100).toFixed(0) + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const createData = (data) => {
        const num = rand(5, 10, 1)[0];
        const array = rand(10, 20, 13);
        for (let i = 0; i < data.length-1; i++) {
          data[i] = array[i];
        }
        data[0] = num;
        data[data.length - 1] = num;
        return data;
      };
      const newData = createData(data);
      x(newData);
    }, 3000);
  }, []);


  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};