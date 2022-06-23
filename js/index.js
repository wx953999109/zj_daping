const toThousands = (num = 0) => {
    return num.toString().replace(/\d+/, function (n) {
        return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    });
};

function transitionNumber(start, end) {
    if (start == end) return;
    let direction = 'up';
    if (start > end) {
        direction = 'down';
    }

}

$(function () {

    var myecharts = {
        echarts_1: null,
        echarts_1_data: [
            { value: 1, name: '句容市' },
            { value: 2, name: '丹阳市' },
            { value: 1, name: '丹徒区' },
            { value: 1, name: '润州区' },
            { value: 2, name: '京口区' },
            { value: 2, name: '扬中市' },
            { value: 0, name: '高新区' },
            { value: 2, name: '新区' }
        ],
        map: null
    };

    echarts_1();
    map();
    echarts_3();


    var testdata = [
        {
            name: '句容市',
            data: [
                [14278, 9566, 1339, 249],
                [11420, 2626, 840, 76],
                [1256, 477, 24, 2],
                [1, 1, 0, 0],
                [0, 0, 0, 0]
            ]
        }, {
            name: '丹阳市',
            data: [
                [20314, 13610, 1905, 354],
                [16250, 3730, 1194, 107],
                [1788, 679, 34, 2],
                [2, 2, 1, 0],
                [1, 1, 0, 0]
            ]
        }, {
            name: '丹徒区',
            data: [
                [8745, 5859, 820, 152],
                [6996, 1609, 515, 46],
                [770, 293, 15, 1],
                [1, 1, 1, 0],
                [1, 0, 0, 0]
            ]
        }, {
            name: '润州区',
            data: [
                [8961, 6003, 840, 156],
                [7169, 1648, 527, 47],
                [789, 300, 15, 1],
                [1, 0, 0, 0],
                [1, 0, 0, 0]
            ]
        }, {
            name: '京口区',
            data: [
                [7664, 5134, 719, 134],
                [6131, 1410, 451, 41],
                [674, 256, 13, 0],
                [2, 1, 0, 0],
                [0, 0, 0, 0]
            ]
        }, {
            name: '扬中市',
            data: [
                [22471, 15055, 2108, 391],
                [17679, 4066, 1301, 117],
                [1945, 739, 37, 2],
                [2, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        }, {
            name: '高新区',
            data: [
                [12645, 8472, 1186, 220],
                [10916, 2511, 804, 72],
                [1201, 456, 23, 1],
                [0, 1, 1, 0],
                [0, 0, 0, 0]
            ]
        }, {
            name: '新区',
            data: [
                [7039, 4379, 512, 175],
                [5133, 1360, 504, 35],
                [247, 118, 13, 2],
                [2, 1, 0, 0],
                [1, 0, 0, 0]
            ]
        },
    ];

    var randomIndex = 0;
    setInterval(() => {
        if (!testdata) return;
        console.log('setInterval');
        if (randomIndex >= testdata.length) {
            randomIndex = 0;
        }

        let name = testdata[randomIndex].name;

        myecharts.echarts_1?.dispatchAction({
            type: 'select',
            name: name,
        });

        randomIndex++;
    }, 2000);

    function switchData(name) {
        if (!testdata) return;
        let data;
        for (let i = 0; i < testdata.length; i++) {
            if (testdata[i].name == name) {
                data = testdata[i];
                break;
            }
        }
        if (!data) return;
        $(".data-jczs").html(toThousands(data.data[0][0]));
        $(".data-jczs-jsn").html(toThousands(data.data[0][1]));
        $(".data-jczs-jn").html(toThousands(data.data[0][2]));
        $(".data-jczs-dy").html(toThousands(data.data[0][3]));

        $(".data-scxg").html(toThousands(data.data[1][0]));
        $(".data-scxg-jsn").html(toThousands(data.data[1][1]));
        $(".data-scxg-jn").html(toThousands(data.data[1][2]));
        $(".data-scxg-dy").html(toThousands(data.data[1][3]));

        $(".data-sczs").html(toThousands(data.data[2][0]));
        $(".data-sczs-jsn").html(toThousands(data.data[2][1]));
        $(".data-sczs-jn").html(toThousands(data.data[2][2]));
        $(".data-sczs-dy").html(toThousands(data.data[2][3]));

        $(".data-wzzs").html(toThousands(data.data[3][0]));
        $(".data-wzzs-jsn").html(toThousands(data.data[3][1]));
        $(".data-wzzs-jn").html(toThousands(data.data[3][2]));
        $(".data-wzzs-dy").html(toThousands(data.data[3][3]));

        $(".data-zgzs").html(toThousands(data.data[4][0]));
        $(".data-zgzs-jsn").html(toThousands(data.data[4][1]));
        $(".data-zgzs-jn").html(toThousands(data.data[4][2]));
        $(".data-zgzs-dy").html(toThousands(data.data[4][3]));

    }

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
            let dataIndex = e.fromActionPayload.dataIndexInside;

            let name;
            if (dataIndex && myecharts.echarts_1_data && myecharts.echarts_1_data[dataIndex]) {
                name = myecharts.echarts_1_data[dataIndex].name;
                switchData(name);
            } else if (e.fromActionPayload.name) {
                name = e.fromActionPayload.name;
                switchData(name);
            }
            if (name) {
                myecharts.map?.dispatchAction({
                    type: 'geoSelect',
                    name: name,
                });
            }
        });
        myChart.dispatchAction({
            type: 'select',
            name: '句容市',
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
            console.log('geoselectchanged');
            myecharts.echarts_1.dispatchAction({
                type: 'select',
                name: e.name,
            });
            myecharts.map?.dispatchAction({
                type: 'geoSelect',
                name: e.name,
            });
            switchData(e.name);
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
        let data = [1880, 1731, 1901, 1920, 1997, 1066, 1399,
            1215, 1121, 1073, 1302, 1223];
        let yMax = 500;
        option = {
            animation: true,
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


})


$("#list .processbar").each((index, item) => {
    let value = parseInt($(item).next(".value").html());
    $(item).css("width", "0%");
});

setTimeout(() => {
    $("#list .processbar").each((index, item) => {
        let value = parseInt($(item).next(".value").html());
        $(item).css("width", value / 800 * 100 * 0.35 + "%");
    });
}, 500);

$.each($(".transitionnumber"), (index, item) => {
    $(item).attr("data", parseInt($(item).html().trim().replace(',', '')));
    $(item).html('0');
    console.log($(item).attr("data"))
});

$(".transitionnumber").each((i, e) => {
    new TWEEN.Tween({ num: 0 })
        .to({ num: parseInt($(e).attr('data')) }, 800)
        .onUpdate(newValue => {
            $(e).html(toThousands(parseInt(newValue.num)));
        })
        .start()
})

function animate() {
    if (TWEEN.update()) {
        requestAnimationFrame(animate);
    }
}
animate()