import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const date = new Date();
    const y = date.getFullYear();
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [y-8, y-7, y-6, y-5, y-4, y-3, y-2, y-1, y],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          // smooth: true,
          stack: 'all',
          data: [0.01, 0.02, 0.01, 0.02, 0.05, 0.01, 0.02, 0.01, 0.02].reverse()
        },
        {
          name: '醉驾',
          type: 'line',
          // smooth: true,
          stack: 'all',
          data: [0.02, 0.03, 0.04, 0.02, 0.01, 0.03, 0.02, 0.05, 0.04].reverse()
        },
        {
          name: '盗窃',
          type: 'line',
          // smooth: true,
          stack: 'all',
          data: [0.03, 0.04, 0.05, 0.06, 0.01, 0.04, 0.04, 0.06, 0.06].reverse()
        },
        {
          name: '故意杀人',
          type: 'line',
          // smooth: true,
          stack: 'all',
          data: [0.01, 0.02, 0.06, 0.01, 0.02, 0.07, 0.01, 0.02, 0.05].reverse()
        },
        {
          name: '故意伤人',
          type: 'line',
          // smooth: true,
          stack: 'all',
          data: [0.01, 0.06, 0.03, 0.04, 0.03, 0.06, 0.02, 0.04, 0.05].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};