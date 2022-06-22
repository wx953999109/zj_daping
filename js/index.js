$(function () {

    var myecharts = {
        echarts_1: null,
        echarts_1_data: [
            { value: 1048, name: '句容市' },
            { value: 735, name: '丹阳市' },
            { value: 580, name: '丹徒区' },
            { value: 484, name: '润州区' },
            { value: 300, name: '京口区' },
            { value: 456, name: '扬中市' },
            { value: 123, name: '高新区' },
            { value: 88, name: '新区' }
        ],
        map: null
    };

    echarts_1();
    //echarts_2();
    map();
    echarts_3();
    //echarts_4();
    // echarts_5();
    //echarts_6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));
        myecharts.echarts_1 = myChart;
        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'left',
                padding: [0, 0],
                itemGap: 20,
                itemWidth: 30,
                orient: 'horizontal',
                textStyle: {
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 'normal',
                    fontFamily: 'SF Pro SC Light'
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: ['90%', '50%'],
                    avoidLabelOverlap: false,
                    top: 90,
                    selectedMode: 'single',
                    itemStyle: {
                        borderRadius: 0,
                        borderColor: '#fff',
                        borderWidth: 0
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: myecharts.echarts_1_data,
                    select: {
                        disabled: false,
                        label: {
                            show: true,
                            fontSize: 30,
                            borderWidth: 0,
                            textBorderWidth: 0,
                            textShadowBlur: 0,
                            color: 'white',
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.on('selectchanged', (e) => {
            console.log('e', e)
            let dataIndex = e.fromActionPayload.dataIndexInside;
            myecharts.map?.dispatchAction({
                type: 'geoSelect',
                name: myecharts.echarts_1_data[dataIndex].name,
            });
        });
        myChart.dispatchAction({
            type: 'select',
            name: '句容市',
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_2'));

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}  <br/>{c}辆"
            },
            legend: {
                x: 'center',
                y: '2%',
                data: ['车型一', '车型二', '车型三', '车型四', '车型五'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '车型',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 110],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '20%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 600,
                    name: '车型一',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 1100,
                    name: '车型二',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200,
                    name: '车型三',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300,
                    name: '车型四',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400,
                    name: '车型五',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },

                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
        myecharts.map = myChart;
        var mapName = 'zhenjiang'
        var data = []
        var geoCoordMap = {};
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function (v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
            data.push({
                name: name,
                value: Math.round(Math.random() * 100 + 10)
            })
            toolTipData.push({
                name: name,
                value: [{
                    name: "车型一",
                    value: Math.round(Math.random() * 100 + 10) + '辆'
                },
                {
                    name: "车型二",
                    value: Math.round(Math.random() * 100 + 10) + '辆'
                },
                {
                    name: "车型三",
                    value: Math.round(Math.random() * 100 + 10) + '辆'
                },
                {
                    name: "车型四",
                    value: Math.round(Math.random() * 100 + 10) + '辆'
                }
                ]
            })
        });

        var max = 480,
            min = 9; // todo
        var maxSize4Pin = 50,
            minSize4Pin = 20;

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        option = {
            geo: {
                type: 'map',
                map: 'zhenjiang',
                selectedMode: 'single', //是否支持多个选中，single单选，multiple多选
                aspectScale: 0.8,  //地图长度比
                roam: false,
                zoom: 1,
                itemStyle: {
                    borderColor: 'white',
                    borderWidth: 2,
                },
                label: {
                    show: true,
                    fontFamily: 'SF Pro SC',
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: 'white'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontFamily: 'SF Pro SC',
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: 'white'
                    }
                },
                select: {
                    label: {
                        show: true,
                        fontFamily: 'SF Pro SC',
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: 'white'
                    },
                    itemStyle: {
                        areaColor: 'black'
                    }
                },
                regions: [{
                    name: '句容市',
                    itemStyle: {
                        borderColor: 'white',
                        borderWidth: 2,
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '丹阳市',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '丹徒区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '润州区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '京口区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '扬中区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '高新区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '新区',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }, {
                    name: '扬中市',
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: 'linear', x: 0, y: 1, x2: 1, y2: 1,
                                colorStops: [{ offset: 0, color: '#97595D' }, { offset: 1, color: '#DCA7C4' }]
                            },
                        },
                        emphasis: {
                            areaColor: '#000' //鼠标悬停的颜色
                        }
                    }
                }]
            },
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: function (params) {
                    if (typeof (params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for (var i = 0; i < toolTipData.length; i++) {
                            if (params.name == toolTipData[i].name) {
                                toolTiphtml += toolTipData[i].name + ':<br>'
                                for (var j = 0; j < toolTipData[i].value.length; j++) {
                                    toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                }
                            }
                        }
                        console.log(toolTiphtml)
                        // console.log(convertData(data))
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = ''
                        for (var i = 0; i < toolTipData.length; i++) {
                            if (params.name == toolTipData[i].name) {
                                toolTiphtml += toolTipData[i].name + ':<br>'
                                for (var j = 0; j < toolTipData[i].value.length; j++) {
                                    toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                }
                            }
                        }
                        console.log(toolTiphtml)
                        // console.log(convertData(data))
                        return toolTiphtml;
                    }
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['credit_pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 600,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1]
            }
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.on('geoselectchanged', (e) => {
            myecharts.echarts_1.dispatchAction({
                type: 'select',
                name: e.name,
            });
        });
        myecharts.map?.dispatchAction({
            type: 'geoSelect',
            name: '句容市',
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_3'));
        var option;
        // prettier-ignore
        let dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        // prettier-ignore
        let data = [220, 182, 191, 234, 290, 520, 310, 123, 442, 321, 90, 149];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        option = {

            xAxis: {
                data: dataAxis,
                axisLabel: {
                    color: '#fff'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        color: "#8FD8F666"
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            grid: {
                top: 40,
                left: 40,
                bottom: 20,
                right: 0
            },
            series: [
                {
                    type: 'bar',
                    showBackground: false,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#8FD8F6' },
                            { offset: 1, color: '#FFFFFF00' }
                        ])
                    },
                    labelLine: {
                        show: false
                    },
                    // emphasis: {
                    //     itemStyle: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    //             { offset: 0, color: '#2378f7' },
                    //             { offset: 0.7, color: '#2378f7' },
                    //             { offset: 1, color: '#83bff6' }
                    //         ])
                    //     }
                    // },
                    data: data
                }
            ]
        };

        option && myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_4'));
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
            },
            series: [
                {
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };

        option && myChart.setOption(option);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_5'));

        var xData = function () {
            var data = ['NO.1', 'NO.2', 'NO.3', 'NO.4', 'NO.5'];

            return data;
        }();

        var data = [28, 22, 20, 16, 12]

        option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function (params) {
                    if (params.seriesName != "") {
                        return params.name + ' ：  ' + params.value + ' 辆';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left: 55,
                right: 30,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: '{value}',
                },
            },
            series: [{
                // name: '生师比(%)',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                zlevel: 2,
                barWidth: '20%',
                data: data,
            },
            {
                name: '',
                type: 'bar',
                xAxisIndex: 1,
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: '#121847',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
                barWidth: '20%',
                data: [30, 30, 30, 30, 30]
            }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_6'));

        var data = {
            "chart": [{
                month: "NO.1",
                value: 600,

            },

            {
                month: "NO.2",
                value: 500,

            },

            {
                month: "NO.3",
                value: 614,

            },

            {
                month: "NO.4",
                value: 442,

            },

            {
                month: "NO.5",
                value: 322

            }

            ]
        }


        var xAxisMonth = [],
            barData = [],
            lineData = [];
        for (var i = 0; i < data.chart.length; i++) {
            xAxisMonth.push(data.chart[i].month);
            barData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].value
            });
            lineData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].ratio
            });
        }

        option = {
            // backgroundColor: "#020d22",
            title: '',
            grid: {
                top: '10%',
                left: '18%',
                bottom: '3%',
                right: '5%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0]["data"].name + "<br/>" + '报警次数: ' + params[1]["data"].value + '次';
                }
            },
            xAxis: [{
                type: 'category',
                show: false,
                data: ['NO.1', 'NO.2', 'NO.3', 'NO.4', 'NO.5'],
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            },
            {
                type: 'category',
                position: "bottom",
                data: xAxisMonth,
                boundaryGap: true,
                // offset: 40,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    color: "rgba(255,255,255,0.2)"
                },
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            }

            ],
            yAxis: [{
                show: true,
                offset: 52,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    color: "rgba(255,255,255,0.2)"
                },
                axisLabel: {
                    show: true,
                    color: '#b6b5ab'
                }
            }, {
                show: false,
                type: "value",
                // name: "合格率(%)",
                nameTextStyle: {
                    color: '#ccc'
                },
                axisLabel: {
                    color: '#ccc'
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: true
                }
            }],
            color: ['#e54035'],
            series: [{
                name: '训练人次',
                type: 'pictorialBar',
                xAxisIndex: 1,
                barCategoryGap: '-80%',
                // barCategoryGap: '-5%',
                symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: barData,
            },
            {
                symbol: 'image://data:image/png;base64,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',
                symbolSize: 42,
                name: "完成率",
                type: "line",
                yAxisIndex: 1,
                data: lineData,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: '#821eff'
                            },

                            {
                                offset: 1,
                                color: '#204fff'
                            }
                            ],
                        }
                    }
                }
            }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }






})

