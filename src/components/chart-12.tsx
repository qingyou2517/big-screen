import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {rand} from '../shared/rand';

export const Chart12 = () => {
  const divRef = useRef(null);
  const myChart=useRef(null)
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
  const x=(data)=>{
    myChart.current.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: `${px(12)}`,
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          //解除find报错：tsconfig.json中添加 "lib": ["ES2015"],
          const value = data.find(i => i.name === name)?.value;
          return name + ' ' + value;
        }
      },
      series: [
        {
          name:'案发街道占比',
          //饼图中心的横/纵坐标
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
        const array=rand(5,20,9)
        for(let i=0;i<data.length;i++){
          data[i].value=array[i]
        }
        return data
      };
      const newData = createData(data);
      x(newData);
    }, 4000);

  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};