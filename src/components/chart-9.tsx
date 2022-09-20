import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';

export const Chart9 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [1, 14, 20, 24, 20, 15, 5, 1];

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      color: '#F7A110',
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(20),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [6, 18, 28, 38, 48, 58, 68, 78],
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
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
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
        const num = rand(1, 4, 1)[0];
        const array = rand(6, 20, 8);
        for (let i = 0; i < data.length-1; i++) {
          data[i] = array[i];
        }
        data[0] = num;
        data[data.length - 3] = num+5;
        data[data.length - 2] = num+3;
        data[data.length - 1] = num;
        return data;
      };
      const newData = createData(data);
      x(newData);
    }, 3000);
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};