/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

    'use strict';


    var shangzhengData = [3020, 3010, 2980, 2950, 2930, 2900, 2870, 2865];
    var guotaijuxin = [1.13, 1.12, 1.08, 1.05, 1.03, 1.04, 1.01, 0.98];
    var nuodechengzhang = [1.08, 1.09, 1.10, 1.11, 1.12, 1.15, 1.13, 1.08];

    var lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'ShangHai Index',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: shangzhengData,
            yAxisID: 'y-axis-1',
        },
        {
            label: 'My Second dataset',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: guotaijuxin,
            yAxisID: 'y-axis-2'
        },
        {
            label: 'My Third dataset',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: nuodechengzhang,
            yAxisID: 'y-axis-3'
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
                  }
                ],
            }
        }
    });

    var url = "http://fundgz.1234567.com.cn/js/003561.js?rt=20160518155842";
    $.ajax(url, {
        data: {},
        type: "get",
        dataType: 'jsonp',
        jsonpCallback: "jsonpgz",
        crossDomain: true,
        success: function (data) {
            if (data) {



                //alert(data.name);
                /*
{
dwjz:"1.0999"
fundcode : "003561" 
gsz : "1.1057" 
gszzl : "0.53" 
gztime : "2018-07-13 15:00" 
jzrq : "2018-07-12" 
name : "诺德成长精选A"
}
                 */

            }
        }

    });



    var statsticUrl = "http://fund.eastmoney.com/pingzhongdata/005245.js?v=20160518155842";
    $.ajax(statsticUrl, {
        data: {},
        type: "get",
        dataType: 'jsonp',
        jsonpCallback: "jsonpgz",
        crossDomain: true,
        success: function (data2) {
            if (data2) {

                alert(data2.name);

            }
        }

    });

    $('#timeSlider').on('slideStop', function (ev) {
        var newVal = $('#timeSlider').data('slider').getValue();


    });
})
