/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

    'use strict';

    function calculateDelta(numberArrary) {
        var result = new Array();
        for (var i = 0; i < numberArrary.length - 1; i++) {
            var delta = (((numberArrary[i + 1] - numberArrary[i]) / numberArrary[i]) * 100 ).toFixed(4);
            result.push(parseFloat(delta));
        }
        return result;
    }

    function accumulateDelta(numberArrary) {
        var result = new Array();
        for (var i = 0; i < numberArrary.length; i++) {
            var sumDelta = 0;
            for (var j = 0; j <= i; j++) {
                sumDelta = parseFloat(sumDelta.toFixed(4)) + parseFloat(numberArrary[j].toFixed(4));
            }
            
            result.push(parseFloat(sumDelta).toFixed(4));
        }
        return result;
    }

    var rawData = [
        [3.01, 3.02, 3.05, 3.06, 3.07, 3.08, 3.09, 3.12, 3.13, 3.14, 3.15, 3.16, 3.19, 3.2, 3.21, 3.22, 3.23, 3.26, 3.27, 3.28, 3.29, 3.3, 4.02, 4.03, 4.04, 4.09, 4.1, 4.11, 4.12, 4.13, 4.16, 4.17, 4.18, 4.19, 4.2, 4.23, 4.24, 4.25, 4.26, 4.27, 5.02, 5.03, 5.04, 5.07, 5.08, 5.09, 5.1, 5.11, 5.14, 5.15, 5.16, 5.17, 5.18, 5.21, 5.22, 5.23, 5.24, 5.25, 5.28, 5.29, 5.3, 5.31, 6.01, 6.04, 6.05, 6.06, 6.07, 6.08, 6.11, 6.12, 6.13, 6.14, 6.15, 6.19, 6.2, 6.21, 6.22, 6.25, 6.26, 6.27, 6.28, 6.29, 7.02, 7.03, 7.04, 7.05, 7.06, 7.09, 7.1, 7.11, 7.12, 7.13, 7.16, 7.17, 7.18, 7.19, 7.2, 7.23, 7.24, 7.25, 7.26, 7.27, 7.30, 7.31, 8.01,8.02,8.03,8.06,8.07,8.08,8.09,8.10,8.13,8.14],
        [3273.75, 3254.53, 3256.93, 3289.64, 3271.67, 3288.41, 3307.16, 3326.7, 3310.24, 3291.38, 3291.11, 3269.88, 3279.25, 3290.64, 3280.95, 3263.48, 3152.76, 3133.72, 3166.65, 3122.29, 3160.53, 3168.9, 3163.18, 3136.63, 3131.11, 3138.29, 3190.32, 3208.08, 3180.16, 3159.05, 3110.65, 3066.8, 3091.4, 3117.38, 3071.54, 3068.01, 3128.93, 3117.97, 3075.03, 3082.23, 3081.18, 3100.86, 3091.03, 3136.64, 3161.5, 3159.15, 3174.41, 3163.26, 3174.03, 3192.12, 3169.57, 3154.28, 3193.3, 3213.84, 3214.35, 3168.96, 3154.65, 3141.3, 3135.08, 3120.46, 3041.44, 3095.47, 3075.14, 3091.19, 3114.21, 3115.18, 3109.5, 3067.15, 3052.78, 3079.8, 3049.8, 3044.16, 3021.9, 2907.82, 2915.73, 2875.81, 2889.76, 2859.34, 2844.51, 2813.18, 2786.9, 2847.42, 2775.56, 2786.89, 2759.13, 2733.88, 2747.23, 2815.11, 2827.63, 2777.77, 2837.66, 2831.18, 2814.04, 2798.13, 2787.26, 2772.55, 2829.27, 2859.54, 2905.56, 2903.65, 2875.7, 2873.59, 2869.05, 2876.40,2824.53,2768.02,2740.44,2705.16,2779.37,2744.07,2794.38,2795.31,2785.87,2780.96,2723.26],
        [1744.34, 1777.46, 1780.82, 1798.03, 1795.17, 1783.1, 1794.25, 1872.03, 1879.63, 1863.57, 1833.77, 1847.18, 1822.6, 1828.01, 1866.81, 1830.56, 1751.74, 1704.35, 1799.15, 1819.66, 1843.44, 1850.2, 1911.57, 1869.87, 1880.33, 1830.88, 1838.88, 1840.09, 1830.91, 1840.87, 1818.25, 1843.75, 1793.83, 1815.45, 1813.75, 1784.15, 1753.64, 1798, 1818.69, 1790.3, 1814.63, 1797.12, 1821.02, 1819.67, 1852.69, 1853.83, 1857.99, 1866.93, 1835.7, 1830.84, 1850.01, 1845.28, 1829.06, 1845.76, 1860.63, 1869.5, 1847.81, 1835.41, 1804.78, 1795.72, 1744.24, 1741.33, 1734.35, 1709.57, 1702.37, 1744.17, 1747.93, 1726.3, 1707.14, 1692.67, 1711.53, 1682.84, 1673.9, 1612.9, 1540.61, 1562.37, 1514.04, 1563.74, 1518.5, 1564.29, 1544.65, 1547.15, 1605.21, 1589.5, 1595.89, 1560.98, 1532.05, 1546.01, 1583.74, 1562.59, 1563.79, 1612.19, 1616.91, 1621.63, 1607.88, 1590.06, 1609.55, 1620.97, 1629.61, 1632.32, 1606.12, 1594.57, 1559.64,1561.26, 1541.86,1510.09,1481.61],
        [1.1172, 1.1107, 1.1131, 1.1201, 1.1174, 1.1258, 1.1332, 1.1396, 1.1327, 1.1305, 1.1367, 1.1271, 1.1318, 1.1328, 1.1292, 1.1201, 1.1077, 1.112, 1.1173, 1.1055, 1.1105, 1.1139, 1.1117, 1.1092, 1.1138, 1.1147, 1.1204, 1.1189, 1.1184, 1.1138, 1.1111, 1.103, 1.1049, 1.1101, 1.1048, 1.1008, 1.1145, 1.1152, 1.1026, 1.1047, 1.111, 1.1176, 1.1195, 1.1328, 1.1371, 1.1368, 1.1405, 1.1339, 1.14, 1.1444, 1.142, 1.1368, 1.138, 1.1412, 1.1417, 1.1385, 1.1344, 1.1342, 1.142, 1.1364, 1.1309, 1.1402, 1.1327, 1.141, 1.1503, 1.1504, 1.1505, 1.1455, 1.1447, 1.1556, 1.1488, 1.1429, 1.1387, 1.118, 1.1288, 1.1195, 1.1249, 1.1159, 1.1089, 1.0869, 1.0765, 1.1022, 1.0832, 1.0817, 1.0649, 1.0518, 1.0508, 1.0794, 1.0881, 1.0804, 1.0999, 1.1064, 1.1047, 1.0999, 1.0933, 1.0941, 1.1009, 1.0997, 1.1073, 1.108, 1.0986, 1.0934, 1.0834,1.0837,1.0738,1.0639,1.0524],
        [0.9897, 0.9771, 0.981, 0.9949, 0.9867, 0.9946, 1.0001, 1.0075, 0.9976, 0.9932, 0.9943, 0.9856, 0.9863, 0.9884, 0.9841, 0.9751, 0.9369, 0.9382, 0.9505, 0.9392, 0.9513, 0.9541, 0.9517, 0.9427, 0.9402, 0.9389, 0.9507, 0.9605, 0.9526, 0.9456, 0.9393, 0.9208, 0.9311, 0.9346, 0.9129, 0.9089, 0.9346, 0.9318, 0.9163, 0.9159, 0.9278, 0.9341, 0.9313, 0.9515, 0.9559, 0.9536, 0.9534, 0.9475, 0.9507, 0.9578, 0.9475, 0.9438, 0.9527, 0.9685, 0.9672, 0.9532, 0.9467, 0.935, 0.9294, 0.9248, 0.9065, 0.9182, 0.9109, 0.915, 0.9285, 0.9321, 0.9295, 0.9201, 0.9168, 0.9301, 0.9223, 0.9219, 0.912, 0.8769, 0.8808, 0.872, 0.8793, 0.8693, 0.8682, 0.8606, 0.8525, 0.8755, 0.8546, 0.8598, 0.8532, 0.8445, 0.8501, 0.8714, 0.8765, 0.8637, 0.8845, 0.8884, 0.8831, 0.8816, 0.8786, 0.8797, 0.895, 0.9019, 0.9128, 0.9204, 0.9085, 0.9049, 0.9018,0.9036, 0.8901,0.8801,0.8679],
        [1.204, 1.197, 1.202, 1.214, 1.209, 1.21, 1.224, 1.23, 1.222, 1.214, 1.215, 1.202, 1.213, 1.221, 1.22, 1.208, 1.18, 1.192, 1.202, 1.193, 1.188, 1.201, 1.212, 1.204, 1.202, 1.2, 1.213, 1.244, 1.241, 1.237, 1.242, 1.213, 1.204, 1.205, 1.179, 1.173, 1.193, 1.202, 1.177, 1.171, 1.172, 1.182, 1.193, 1.213, 1.227, 1.226, 1.237, 1.218, 1.238, 1.263, 1.285, 1.29, 1.301, 1.307, 1.322, 1.317, 1.31, 1.302, 1.295, 1.271, 1.251, 1.281, 1.248, 1.239, 1.262, 1.262, 1.258, 1.243, 1.221, 1.228, 1.217, 1.201, 1.18, 1.119, 1.124, 1.092, 1.1, 1.082, 1.09, 1.08, 1.063, 1.097, 1.089, 1.089, 1.075, 1.059, 1.071, 1.095, 1.103, 1.099, 1.123, 1.127, 1.138, 1.132, 1.128, 1.124, 1.128, 1.112, 1.109, 1.106, 1.101, 1.098, 1.080, 1.075, 1.067,1.065],
        [9985, 9976, 9974, 10007, 9999, 10008, 10001, 10055, 10057, 10076, 10089, 10062, 10079, 10084, 10106, 10111, 9946, 9988, 10013, 10010, 10032, 10010, 10042, 10039, 9977, 10009, 10002, 10009, 10011, 9996, 10012, 9986, 9986, 9968, 9915, 9927, 9912, 9924, 9914, 9840, 9835, 9825, 9802, 9828, 9842, 9865, 9888, 9850, 9860, 9870, 9876, 9894, 9876, 9911, 9950, 9969, 9986, 9951, 9957, 9945, 9898, 9892, 9846, 9822, 9824, 9819, 9819, 9784, 9769, 9769, 9741, 9739, 9654, 9439, 9378, 9305, 9255, 9237, 9241, 9228, 9207, 9194, 9175, 9191, 9138, 9089, 9054, 9038, 9033, 8989, 9012, 8975, 8979, 8987, 8980, 8961, 8936.47, 8922.71, 8922.71, 8933, 8953, 8925, 8924.50, 8923.09, 8917.40, 8902.11]
    ];
    var timelineData = rawData[0];
    var shangzhengData = accumulateDelta(calculateDelta(rawData[1]));
    var chuangyeData = accumulateDelta(calculateDelta(rawData[2]));
    var nuodechengzhang = accumulateDelta(calculateDelta(rawData[3]));
    var guotaijuyou = accumulateDelta(calculateDelta(rawData[4]));
    var shennongchengyu = accumulateDelta(calculateDelta(rawData[5]));
    var rongziData = accumulateDelta(calculateDelta(rawData[6]));



  var lineChartData = {
      labels: timelineData,
      datasets: [{
          label: 'Shang Zheng',
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          fill: false,
          data: shangzhengData,
          yAxisID: 'y-axis-1'
      },
      {
          label: 'Chuangye',
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          fill: false,
          data: chuangyeData,
          yAxisID: 'y-axis-1'
      },
      {
          label: 'RongZi',
          borderColor: window.chartColors.grey,
          backgroundColor: window.chartColors.grey,
          fill: false,
          data: rongziData,
          yAxisID: 'y-axis-1'
      },
      {
          label: 'Hao Xudong',
          borderColor: window.chartColors.purple,
          backgroundColor: window.chartColors.purple,
          fill: false,
          data: nuodechengzhang,
          yAxisID: 'y-axis-2'
      },
      {
          label: 'Chen Zhou',
          borderColor: window.chartColors.orange,
          backgroundColor: window.chartColors.orange,
          fill: false,
          data: guotaijuyou,
          yAxisID: 'y-axis-2'
      },
      {
          label: 'Chen Yu',
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          fill: false,
          data: shennongchengyu,
          yAxisID: 'y-axis-2'
      }
      ]
  };

  var ctx = $("#canvas")[0].getContext('2d');
  window.myLine = Chart.Line(ctx, {
      data: lineChartData,
      options: {
          responsive: true,
          hoverMode: 'index',
          stacked: false,
          title: {
              display: true,
              text: 'Chart.js Line Chart - Multi Axis'
          },
          scales: {
              yAxes: [
                  {
                  type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                  display: true,
                  position: 'left',
                  id: 'y-axis-1',
                  },
                {
                  type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                  display: true,
                  position: 'right',
                  id: 'y-axis-2',

                  // grid line settings
                  gridLines: {
                      drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
                },

                {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },

                {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }
              ],
          }
      }
  });


  $('#timeSlider').on('slideStop', function (ev) {
      var newVal = $('#timeSlider').data('slider').getValue();

      
  });
})
