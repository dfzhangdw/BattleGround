/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

    'use strict';

    var rawData = [
        [4.02, 4.03, 4.04, 4.09, 4.1, 4.11, 4.12, 4.13, 4.16, 4.17, 4.18, 4.19, 4.2, 4.23, 4.24, 4.25, 4.26, 4.27, 5.02, 5.03, 5.04, 5.07, 5.08, 5.09, 5.1, 5.11, 5.14, 5.15, 5.16, 5.17, 5.18, 5.21, 5.22, 5.23, 5.24, 5.25, 5.28, 5.29, 5.3, 5.31, 6.01, 6.04, 6.05, 6.06, 6.07, 6.08, 6.11, 6.12, 6.13, 6.14, 6.15, 6.19, 6.2, 6.21, 6.22, 6.25, 6.26, 6.27, 6.28, 6.29, 7.02, 7.03, 7.04, 7.05, 7.06, 7.09, 7.1, 7.11, 7.12, 7.13],
        [3163.18, 3136.63, 3131.11, 3138.29, 3190.32, 3208.08, 3180.16, 3159.05, 3110.65, 3066.8, 3091.4, 3117.38, 3071.54, 3068.01, 3128.93, 3117.97, 3075.03, 3082.23, 3081.18, 3100.86, 3091.03, 3136.64, 3161.5, 3159.15, 3174.41, 3163.26, 3174.03, 3192.12, 3169.57, 3154.28, 3193.3, 3213.84, 3214.35, 3168.96, 3154.65, 3141.3, 3135.08, 3120.46, 3041.44, 3095.47, 3075.14, 3091.19, 3114.21, 3115.18, 3109.5, 3067.15, 3052.78, 3079.8, 3049.8, 3044.16, 3021.9, 2907.82, 2915.73, 2875.81, 2889.76, 2859.34, 2844.51, 2813.18, 2786.9, 2847.42, 2775.56, 2786.89, 2759.13, 2733.88, 2747.23, 2815.11, 2827.63, 2777.77, 2837.66, 2831.18],
        [1.1117, 1.1092, 1.1138, 1.1147, 1.1204, 1.1189, 1.1184, 1.1138, 1.1111, 1.103, 1.1049, 1.1101, 1.1048, 1.1008, 1.1145, 1.1152, 1.1026, 1.1047, 1.111, 1.1176, 1.1195, 1.1328, 1.1371, 1.1368, 1.1405, 1.1339, 1.14, 1.1444, 1.142, 1.1368, 1.138, 1.1412, 1.1417, 1.1385, 1.1344, 1.1342, 1.142, 1.1364, 1.1309, 1.1402, 1.1327, 1.141, 1.1503, 1.1504, 1.1505, 1.1455, 1.1447, 1.1556, 1.1488, 1.1429, 1.1387, 1.118, 1.1288, 1.1195, 1.1249, 1.1159, 1.1089, 1.0869, 1.0765, 1.1022, 1.0832, 1.0817, 1.0649, 1.0518, 1.0508, 1.0794, 1.0881, 1.0804, 1.0999, 1.1064],
        [0.9517, 0.9427, 0.9402, 0.9389, 0.9507, 0.9605, 0.9526, 0.9456, 0.9393, 0.9208, 0.9311, 0.9346, 0.9129, 0.9089, 0.9346, 0.9318, 0.9163, 0.9159, 0.9278, 0.9341, 0.9313, 0.9515, 0.9559, 0.9536, 0.9534, 0.9475, 0.9507, 0.9578, 0.9475, 0.9438, 0.9527, 0.9685, 0.9672, 0.9532, 0.9467, 0.935, 0.9294, 0.9248, 0.9065, 0.9182, 0.9109, 0.915, 0.9285, 0.9321, 0.9295, 0.9201, 0.9168, 0.9301, 0.9223, 0.9219, 0.912, 0.8769, 0.8808, 0.872, 0.8793, 0.8693, 0.8682, 0.8606, 0.8525, 0.8755, 0.8546, 0.8598, 0.8532, 0.8445, 0.8501, 0.8714, 0.8765, 0.8637, 0.8845, 0.8884],
        [1.212, 1.204, 1.202, 1.2, 1.213, 1.244, 1.241, 1.237, 1.242, 1.213, 1.204, 1.205, 1.179, 1.173, 1.193, 1.202, 1.177, 1.171, 1.172, 1.182, 1.193, 1.213, 1.227, 1.226, 1.237, 1.218, 1.238, 1.263, 1.285, 1.29, 1.301, 1.307, 1.322, 1.317, 1.31, 1.302, 1.295, 1.271, 1.251, 1.281, 1.248, 1.239, 1.262, 1.262, 1.258, 1.243, 1.221, 1.228, 1.217, 1.201, 1.18, 1.119, 1.124, 1.092, 1.1, 1.082, 1.09, 1.08, 1.063, 1.097, 1.089, 1.089, 1.075, 1.059, 1.071, 1.095, 1.103, 1.099, 1.123, 1.123]
    ];
    var timelineData = rawData[0];
    var shangzhengData = rawData[1];
    var nuodechengzhang = rawData[2];
    var guotaijuyou = rawData[3];
    var shennongchengyu = rawData[4];

  var lineChartData = {
      labels: timelineData,
      datasets: [{
          label: 'Shang Zheng',
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          fill: false,
          data: shangzhengData,
          yAxisID: 'y-axis-1',
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
          yAxisID: 'y-axis-3'
      },
      {
          label: 'Chen Yu',
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          fill: false,
          data: shennongchengyu,
          yAxisID: 'y-axis-4'
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
                    id: 'y-axis-3',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },

                {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-4',

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
