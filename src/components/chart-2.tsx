import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

// const px = (n) => n / 2420 * (window as any).pageWidth;
export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '城关区公安局', 2021: 1, 2022: 2},
    {name: '七里河区公安局', 2021:3, 2022: 4},
    {name: '西固区公安局', 2021: 5, 2022: 6},
    {name: '安宁区公安局', 2021: 7, 2022: 8},
    {name: '红古区公安局', 2021: 9, 2022:  10},
    {name: '永登县公安局', 2021: 1, 2022: 2},
    {name: '皋兰县公安局', 2021: 3, 2022: 5},
    {name: '榆中县公安局', 2021:7, 2022: 9},
    {name: '兰州新区公安局', 2021: 4, 2022: 6},
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '城关区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '七里河区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '西固区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '安宁区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '红古区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '永登县公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '皋兰县公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '榆中县公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
        {name: '兰州新区公安局', 2021: Math.random() * 10, 2022: Math.random() * 10},
      ];
      x(newData);
    }, 3000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
        grid: {
          x: px(85),
          y: px(25),
          x2: px(10),
          y2: px(20),
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {show: false},
          axisLabel: {show: false}
        },
        yAxis: {
          axisTick: {show: false},
          type: 'category',
          data: data.map(i => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            },
            lineHeight: px(14),
          }
        },
        series: [{
          name: '2021年',
          type: 'bar',
          data: data.map(i => i[2021]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }
          }
        },
          {
            name: '2022年',
            type: 'bar',
            data: data.map(i => i[2022]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#b92ae8'
                }, {
                  offset: 1,
                  color: '#6773e7'
                }]),
              }
            }
          }]
      }
    ));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 破案排名1
        <span className="second"/> 破案排名2
      </div>
    </div>
  );
};