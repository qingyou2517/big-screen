import {baseEchartOptions} from './base-echart-options';
import {px} from './px';

export const createEchartsOptions = (options) => {
  const result = {
    ...baseEchartOptions,
    ...options,
  };
  const objX = options?.xAxis?.axisLabel;
  result.xAxis = result.xAxis || {};
  result.xAxis.axisLabel = result.xAxis.axisLabel || {};

  if (!(objX?.fontSize)) {
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if (!(objX?.margin)) {
    result.xAxis.axisLabel.margin = px(12);
  }
  if (!(objX?.interval)) {
    result.xAxis.axisLabel.interval = 0;
  }
  if (!(objX?.lineHeight)) {
    result.xAxis.axisLabel.lineHeight = px(16);
  }

  const objY = options?.yAxis?.axisLabel;
  result.yAxis = result.yAxis || {};
  result.yAxis.axisLabel = result.yAxis.axisLabel || {};

  if (!(objY?.fontSize)) {
    result.yAxis.axisLabel.fontSize = px(12);
  }
  if (!(objY?.margin)) {
    result.yAxis.axisLabel.margin = px(16);
  }

  return result;
};