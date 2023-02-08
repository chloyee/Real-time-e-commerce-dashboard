
$(function () {
    // echarts_1();
    echarts_2();
    echarts_4();
    echarts_3();
    echarts_5();
    echarts_6();
//     function echarts_1() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('echart1'));
//
//        option = {
//   //  backgroundColor: '#00265f',
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     grid: {
//         left: '0%',
// 		top:'10px',
//         right: '0%',
//         bottom: '4%',
//        containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//       		data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
//         axisLine: {
//             show: true,
//          lineStyle: {
//                 color: "rgba(255,255,255,.1)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//
//         axisTick: {
//             show: false,
//         },
// 		axisLabel:  {
//                 interval: 0,
//                // rotate:50,
//                 show: true,
//                 splitNumber: 15,
//                 textStyle: {
//  					color: "rgba(255,255,255,.6)",
//                     fontSize: '12',
//                 },
//             },
//     }],
//     yAxis: [{
//         type: 'value',
//         axisLabel: {
//            //formatter: '{value} %'
// 			show:true,
// 			 textStyle: {
//  					color: "rgba(255,255,255,.6)",
//                     fontSize: '12',
//                 },
//         },
//         axisTick: {
//             show: false,
//         },
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1	)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//         splitLine: {
//             lineStyle: {
//                color: "rgba(255,255,255,.1)",
//             }
//         }
//     }],
//     series: [
// 		{
//         type: 'bar',
//         data: [200, 300, 300, 900, 1500, 1200, 600],
//         barWidth:'35%', //柱子宽度
//        // barGap: 1, //柱子之间间距
//         itemStyle: {
//             normal: {
//                 color:'#dddc6b',
//                 opacity: 1,
// 				barBorderRadius: 5,
//             }
//         }
//     }
//
// 	]
// };
//
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: [1500, 1200, 600, 200, 300, 300, 900],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#00d887',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        var option = {
            grid: {
                left: '0',
                top: '35',
                right: '5',
                bottom: '0',
                containLabel: true
            },
            "color": [
                '#00d887',
                '#2f89cf',
                '#ffff66',
            ],
            "series": [
                {
                    "type": "bar",
                    "name": "\u53ef\u652f\u914d\u6536\u5165",
                    "yAxisIndex": 0,
                    "legendHoverLink": true,
                    "data": [
                        1484.0,
                        1700.0,
                        2522.0,
                        3116.0,
                        3417.0,
                        4178.0,
                        5009.0,
                        7643.0,
                        10427.0,
                        10743.0,
                        12867.0,
                        13149.0,
                        13632.0,
                        14432.0,
                        15110.0,
                        15870.0,
                        15320.0,
                        16602.0,
                        18347.0,
                        18908.0,
                        17671.0,
                        19290.0,
                        20949.0,
                        22859.0,
                        25382.0,
                        28731.0,
                        32978.0,
                        36375.0,
                        35287.0,
                        38322.0,
                        42537.0,
                        46826.0,
                        50713.0,
                        55219.3
                    ],
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    },
                    "showBackground": false,
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "90%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    }
                },
                {
                    "type": "bar",
                    "name": "\u6d88\u8d39\u652f\u51fa",
                    "yAxisIndex": 0,
                    "legendHoverLink": true,
                    "data": [
                        1273.0,
                        1550.0,
                        2100.0,
                        2520.0,
                        2899.0,
                        3548.0,
                        4163.0,
                        5985.0,
                        8014.0,
                        8578.0,
                        9800.0,
                        9627.0,
                        10638.0,
                        10397.0,
                        11694.0,
                        11562.0,
                        11988.0,
                        11708.0,
                        12826.0,
                        14324.0,
                        14426.0,
                        17422.0,
                        16517.0,
                        17948.0,
                        20370.0,
                        21162.0,
                        24083.0,
                        26131.0,
                        26638.0,
                        28742.0,
                        32151.0,
                        34735.0,
                        36819.0,
                        40030.5
                    ],
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    },
                    "showBackground": false,
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    }
                },
                {
                    name: "\u5168\u4f53\u53ef\u652f\u914d\u6536\u5165",
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#ffff66',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 255, 102, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(255, 255, 102, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffff66',
                            borderColor: 'rgba(255, 255, 102, .1)',
                            borderWidth: 12
                        }
                    },
                    "data": [
                        [
                            "1986\u5e74",
                            1441.8
                        ],
                        [
                            "1987\u5e74",
                            1670.0
                        ],
                        [
                            "1988\u5e74",
                            2437.6
                        ],
                        [
                            "1989\u5e74",
                            2996.8
                        ],
                        [
                            "1990\u5e74",
                            3313.4
                        ],
                        [
                            "1991\u5e74",
                            4052.0
                        ],
                        [
                            "1992\u5e74",
                            4839.8
                        ],
                        [
                            "1993\u5e74",
                            7311.4
                        ],
                        [
                            "1994\u5e74",
                            9944.4
                        ],
                        [
                            "1995\u5e74",
                            10310.0
                        ],
                        [
                            "1996\u5e74",
                            12253.6
                        ],
                        [
                            "1997\u5e74",
                            12444.6
                        ],
                        [
                            "1998\u5e74",
                            13033.2
                        ],
                        [
                            "1999\u5e74",
                            13625.0
                        ],
                        [
                            "2000\u5e74",
                            14426.8
                        ],
                        [
                            "2001\u5e74",
                            15008.4
                        ],
                        [
                            "2002\u5e74",
                            14653.6
                        ],
                        [
                            "2003\u5e74",
                            15623.2
                        ],
                        [
                            "2004\u5e74",
                            17242.8
                        ],
                        [
                            "2005\u5e74",
                            17991.2
                        ],
                        [
                            "2006\u5e74",
                            17022.0
                        ],
                        [
                            "2007\u5e74",
                            18916.4
                        ],
                        [
                            "2008\u5e74",
                            20062.6
                        ],
                        [
                            "2009\u5e74",
                            21876.8
                        ],
                        [
                            "2010\u5e74",
                            24379.6
                        ],
                        [
                            "2011\u5e74",
                            27217.2
                        ],
                        [
                            "2012\u5e74",
                            31199.0
                        ],
                        [
                            "2013\u5e74",
                            34326.2
                        ],
                        [
                            "2014\u5e74",
                            33557.2
                        ],
                        [
                            "2015\u5e74",
                            36406.0
                        ],
                        [
                            "2016\u5e74",
                            40459.8
                        ],
                        [
                            "2017\u5e74",
                            44407.8
                        ],
                        [
                            "2018\u5e74",
                            47934.2
                        ],
                        [
                            "2019\u5e74",
                            52181.54
                        ]
                    ],
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u53ef\u652f\u914d\u6536\u5165",
                        "\u6d88\u8d39\u652f\u51fa",
                        "\u5168\u4f53\u53ef\u652f\u914d\u6536\u5165"
                    ],
                    "selected": {
                        "\u53ef\u652f\u914d\u6536\u5165": true,
                        "\u6d88\u8d39\u652f\u51fa": true,
                        "\u5168\u4f53\u53ef\u652f\u914d\u6536\u5165": true
                    },
                    "show": true,
                    textStyle: {
                        color: 'rgba(255,255,255,.5)',
                        fontSize:'8',
                    }
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "cross"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    axisLabel:  {
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize:10,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)'
                        }

                    },
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "1986\u5e74",
                        "1987\u5e74",
                        "1988\u5e74",
                        "1989\u5e74",
                        "1990\u5e74",
                        "1991\u5e74",
                        "1992\u5e74",
                        "1993\u5e74",
                        "1994\u5e74",
                        "1995\u5e74",
                        "1996\u5e74",
                        "1997\u5e74",
                        "1998\u5e74",
                        "1999\u5e74",
                        "2000\u5e74",
                        "2001\u5e74",
                        "2002\u5e74",
                        "2003\u5e74",
                        "2004\u5e74",
                        "2005\u5e74",
                        "2006\u5e74",
                        "2007\u5e74",
                        "2008\u5e74",
                        "2009\u5e74",
                        "2010\u5e74",
                        "2011\u5e74",
                        "2012\u5e74",
                        "2013\u5e74",
                        "2014\u5e74",
                        "2015\u5e74",
                        "2016\u5e74",
                        "2017\u5e74",
                        "2018\u5e74",
                        "2019\u5e74"
                    ]
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "name": "\u652f\u914d\u6536\u5165/\u6d88\u8d39\u652f\u51fa",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#5793f3"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}"
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "min": 1000,
                    "max": 70000,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            color: 'rgba(255,255,255,.1)'
                        }
                    }
                },
                {
                    "type": "value",
                    "name": "\u5168\u4f53\u53ef\u652f\u914d\u6536\u5165",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#675bba"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}"
                    },
                    "inverse": false,
                    "position": "left",
                    "offset": 0,
                    "splitNumber": 5,
                    "min": 0,
                    "max": 40000,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            color: 'rgba(255,255,255,.1)'
                        }
                    }
                }
            ],

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['安卓','IOS'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '安卓',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4,3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

    }, 
{
        name: 'IOS',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









