import {px} from './px';

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(45),
    y: px(30),
    x2: px(20),
    y2: px(65),
    containLabel: true
  },
};