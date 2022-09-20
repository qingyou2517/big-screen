import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 8, name: '东岗路'},
    {value: 8, name: '段家滩'},
    {value: 11, name: '雁北'},
    {value: 15, name: '五泉山'},
    {value: 12, name: '中山路'},
    {value: 6, name: '庆阳路'},
    {value: 10, name: '武都路'},
    {value: 14, name: '酒泉路'},
    {value: 16, name: '天水路'},
  ];
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      grid: {x: px(20), x2: px(30), y: px(30), y2: px(20), containLabel: true},
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      xAxis: {
        data: data.map(i => i.name),
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
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(value) {
            let sum=0
            for(let i=0;i<data.length;i++){
              sum+=data[i].value
            }
            return (value/sum*100).toFixed(0) + '%';
          }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};