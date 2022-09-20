import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型:echarts.registerMap注册的类型
          //地图块上的圆点
          data: [
            {name: '甘肃省', value: 1},
          ],
          //地图块的文本说明标签:设为选中时才显示
          label: {show: false, color: 'white'},
          //地图块样式
          itemStyle: {
            //地图块背景色
            areaColor: '#010D3D',
            //地图块上：圆点的颜色
            color: colors['甘肃省'],
            //地图块边框线颜色
            borderColor: '#01A7F7',
            //高亮状态下
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['四川省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN',
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['青海省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },

      ]
    }));
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
          <span className="icon" style={{background: colors['四川省']}}/>四川籍
          <span className="icon" style={{background: colors['青海省']}}/>青海籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};