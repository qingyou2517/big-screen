import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Home = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    console.log(px(12));
    const h2=document.querySelector('h2')
    console.log(h2.style.fontSize)
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          },
          margin:px(16),
          interval:0
        },
      },
      grid: {
        x: px(45),
        y: px(30),
        x2: px(20),
        y2: px(60),
        // left:px(60),
        // top:px(30),
        // bottom:px(60),
        // right:px(30)
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          show:true,
          margin:px(16)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
  }, []);
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};