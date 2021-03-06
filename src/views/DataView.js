import React from "react";
import "./styles/border.css";
import "./DataView.css";
import Left from "../components/border/data/left";
import Right from "../components/border/data/right";
import Center from "../components/border/data/center";
import CenterBg from "../components/border/data/centerBg";
import LeftBar from "../components/leftBar";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入图
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/radar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
// 引入地图
import "echarts/map/js/china";

import "../http/http";
import RightBar from "../components/rightBar";

class DataView extends React.Component {
  getData() {
    this.get("./api/data.json").then((res) => {
      this.setState({
        area: res.data.data.area,
      });
      this.setState({
        runningTime: res.data.data.runningTime,
      });
      this.setState({
        countOrder: res.data.data.countOrder,
      });
      this.setState({
        areaOrder: res.data.data.areaOrder,
      });
      this.setState({
        countForDay: res.data.data.countForDay,
      });
      this.setState({
        percentForYear: res.data.data.percentForYear,
      });
      this.setState({
        realtimeStatus: res.data.data.realtimeStatus,
      });
      this.setState({
        powerCut: res.data.data.powerCut,
      });
      this.setState({
        systemInfo: res.data.data.systemInfo,
      });
      this.setState({
        otherInfo: res.data.data.otherInfo,
      });
      this.getChart();
    });
  }

  getChart() {
    // 第一个图
    let myChart1 = echarts.init(document.getElementById("myChart1"));
    // 绘制图表
    myChart1.setOption({
      tooltip: {
        position: "right",
      },
      color: this.state.color,
      series: [
        {
          name: this.state.area.name,
          type: "pie",
          tooltip: {},
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontWeight: "bold",
              lineHeight: "24",
              formatter: (param) => {
                return `{a|${param.value}}\n{b|${param.seriesName}}`;
              },
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 14,
                },
              },
            },
          },
          labelLine: {
            show: false,
          },
          data: this.state.area.data,
        },
      ],
    });

    // 第二个图
    let myChart2 = echarts.init(document.getElementById("myChart2"));
    // 绘制图表
    myChart2.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },

      series: [
        {
          color: this.state.color1,
          name: this.state.runningTime.name,
          type: "pie",
          selectedMode: "single",
          radius: [0, "40%"],

          label: {
            // position: 'inner',
            // formatter: '{d}%'
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: this.state.runningTime.data1,
        },
        {
          color: this.state.color2,
          name: this.state.runningTime.name,
          type: "pie",
          radius: ["55%", "70%"],
          label: {
            // formatter: '{d}% ',
            // position: 'inner',
            show: false,
          },
          data: this.state.runningTime.data2,
        },
      ],
    });

    // 第三个图
    let myChart3 = echarts.init(document.getElementById("myChart3"));
    // 绘制图表
    myChart3.setOption({
      color: ["#F6B60B", "#11AFF6"],
      title: {
        text: this.state.countForDay.title,
        textStyle: {
          color: "#46a6b5",
          fontSize: 12,
        },
        left: "center",
        top: "6%",
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        top: "20%",
        bottom: "24%",
        left: "8%",
        right: "8%",
      },
      legend: {
        data: [
          this.state.countForDay.series[0].name,
          this.state.countForDay.series[1].name,
        ],
        orient: "vertical",
        itemWidth: 6,
        textStyle: {
          color: "#46a6b5",
        },
        align: "right",
        right: "5%",
        top: "6%",
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#46a6b5",
            },
          },
          splitLine: {
            show: false,
          },
          data: this.state.countForDay.xAxis,
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#46a6b5",
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: this.state.countForDay.series[0].name,
          type: "bar",
          data: this.state.countForDay.series[0].data,
        },
        {
          name: this.state.countForDay.series[1].name,
          type: "bar",
          data: this.state.countForDay.series[1].data,
        },
      ],
    });

    // 第4个图
    let myChart4 = echarts.init(document.getElementById("myChart4"));
    // 绘制图表
    myChart4.setOption({
      color: ["#F6B60B", "#11AFF6"],
      title: {
        text: this.state.percentForYear.title,
        textStyle: {
          color: "#46a6b5",
          fontSize: 12,
        },
        left: "center",
        top: "6%",
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        top: "20%",
        bottom: "24%",
        left: "8%",
        right: "8%",
      },
      legend: {
        data: [
          this.state.percentForYear.series[0].name,
          this.state.percentForYear.series[1].name,
        ],
        orient: "vertical",
        itemWidth: 6,
        textStyle: {
          color: "#46a6b5",
        },
        align: "right",
        right: "5%",
        top: "6%",
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#46a6b5",
            },
          },
          splitLine: {
            show: false,
          },
          data: this.state.percentForYear.xAxis,
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#46a6b5",
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: this.state.percentForYear.series[0].name,
          type: "line",
          data: this.state.percentForYear.series[0].data,
          symbol: "circle",
          symbolSize: 8,
        },
        {
          name: this.state.percentForYear.series[1].name,
          type: "bar",
          data: this.state.percentForYear.series[1].data,
          barMaxWidth: 20,
        },
      ],
    });

    // 第5个图
    var myChart5 = echarts.init(document.getElementById("myChart5"));
    myChart5.setOption({
      radar: {
        // shape: 'circle',
        center: ["50%", "50%"],
        // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: "50%",
        name: {
          textStyle: {
            color: "#46a6b5",
            // fontSize: "14px",
            padding: [-5, 5],
          },
        },
        indicator: this.state.realtimeStatus.IndicatorList,
        // [{ name: this.Event_statistics.IndicatorList[0].Name, max: this.Event_statistics.IndicatorList.Max },],
        splitArea: {
          areaStyle: {
            color: [
              "rgba(147, 39, 143, 0.6)",
              "rgba(237, 30, 121, 0.6)",
              "rgba(0, 103, 188, 0.6)",
              "rgba(34, 181, 115, 0.6)",
              "rgba(76, 191, 191, 0.6)",
            ],
            shadowColor: "rgba(0, 0, 0, 0.6)",
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(179, 228, 161, 0.5)",
          },
        },
        splitLine: {
          lineStyle: {
            color: [
              "rgba(179, 228, 161, 0.1)",
              "rgba(179, 228, 161, 0.2)",
              "rgba(179, 228, 161, 0.4)",
              "rgba(179, 228, 161, 0.6)",
              "rgba(179, 228, 161, 0.8)",
              "rgba(179, 228, 161, 1)",
            ].reverse(),
          },
        },
      },
      series: [
        {
          name: this.state.realtimeStatus.name,
          type: "radar",
          // areaStyle: {normal: {}},
          data: [{ value: this.state.realtimeStatus.data }],
          itemStyle: {
            color: "#B3E4A1",
          },
          symbol: "none",
          areaStyle: {
            opacity: 0.05,
          },
          lineStyle: {
            normal: {
              width: 1,
              opacity: 1,
            },
          },
        },
      ],
      tooltip: {},
      grid: {
        top: "20%",
        bottom: "24%",
        left: "8%",
        right: "8%",
      },
    });

    // 第6个图
    var myChart6 = echarts.init(document.getElementById("myChart6"));
    myChart6.setOption({
      color: ["#37A2DA", "#68E0E3", "#DDBCDA", "#FEDB5C", "#FF9F7F", "#E062AE"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          label: {
            color: "#46a6b5",
          },
          labelLine: {
            lineStyle: {
              color: "#46a6b5",
            },
          },
          radius: "50%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" },
            { value: 1548, name: "搜索引擎1" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    // 地图
    var myChart7 = echarts.init(document.getElementById("chinaMap"));
    myChart7.setOption({
      backgroundColor: "rgba(0,0,0,0)",
      title: {},
      tooltip: {
        trigger: "item",
        formatter: (params) => {
          if (params.name !== "") {
            var res = params.name + "<br/>";
            if (params.data) {
              var arrays = params.data.value;
              for (var i = 0; i < arrays.length; i++) {
                res +=
                  arrays[i].name +
                  " : " +
                  arrays[i].value +
                  arrays[i].unit +
                  "<br/>";
              }
              return res;
            } else {
              for (var j = 0; j < this.state.arr.length; j++) {
                res +=
                  this.state.arr[j].name +
                  " : 0" +
                  this.state.arr[j].unit +
                  "<br/>";
              }
              return res;
            }
          }
        },
        backgroundColor: "rgba(255,255,255,0.8)",
        textStyle: {
          color: "black",
        },
        borderColor: "#4594EC",
        borderWidth: 1,
      },
      series: {
        map: "china",
        name: "数据",
        type: "map",
        roam: false,
        itemStyle: {
          normal: {
            areaColor: "#7DB5EC",
            borderColor: "#fff",
          },
          emphasis: {
            label: {
              color: "#666",
              show: true,
            },
            areaColor: "#A4ECBA",
          },
        },
        data: this.state.myData,
        center: ["50%", "50%"],
      },
    });

    setTimeout(function () {
      window.onresize = () => {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
      };
    }, 200);
  }

  constructor(props) {
    super(props);
    this.state = {
      area: null,
      runningTime: null,
      countOrder: null,
      areaOrder: null,
      countForDay: null,
      percentForYear: null,
      realtimeStatus: null,
      powerCut: null,
      systemInfo: null,
      otherInfo: null,
      color: ["#F7931D", "#7BC944", "#FF7BAC", "#3FA9F5"],
      color1: ["#68E0E3", "#FEDB5C", "#37A2DA", "#E062AE"],
      color2: [
        "#96BFFF",
        "#37A2DA",
        "#FFDB5C",
        "#FF9F7F",
        "#FB7293",
        "#E7BCF3",
        "#8377EA",
      ],
      myData: [
        {
          name: "杭州市",
          value: [
            { name: "装机数量", value: "126", unit: "台" },
            { name: "装机容量", value: "1.3", unit: "兆瓦" },
            { name: "完成进度", value: "98.6", unit: "%" },
          ],
        },
      ],
      arr: [
        { name: "装机数量", value: "0", unit: "台" },
        { name: "装机容量", value: "0", unit: "兆瓦" },
        { name: "完成进度", value: "0", unit: "%" },
      ],
    };
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="content flex-col">
        <div style={{ height: "10px" }} />

        {/* 上半 */}
        <Box>
          {/* 左 */}
          {/* 上 */}
          <div className="flex" style={{ marginBottom: "5px" }}>
            <SystemInfo data={this.state.systemInfo} />
          </div>

          {/* 下 */}
          <div className="flex" style={{ marginTop: "5px" }}>
            <Area colorList={this.state.color} dataList={this.state.area} />
          </div>

          {/* 中 */}
          <Map />

          {/* 右 */}
          {/* 上 */}
          <div className="flex" style={{ marginBottom: "5px" }}>
            <Count data={this.state.otherInfo} />
          </div>

          {/* 下 */}
          <div className="flex" style={{ marginTop: "5px" }}>
            <RunningTime
              colorList={this.state.color1}
              dataList={this.state.runningTime}
            />
          </div>
        </Box>

        <div style={{ height: "10px" }} />

        {/* 下半 */}
        <Box>
          {/* 左 */}
          {/* 上 */}
          <div className="flex" style={{ marginBottom: "5px" }}>
            <Left title="系统信息概况">
              <Order dataList={this.state.countOrder} />
            </Left>
          </div>

          {/* 下 */}
          <div className="flex" style={{ marginTop: "5px" }}>
            <Left title="地区分布概况">
              <Order dataList={this.state.areaOrder} />
            </Left>
          </div>

          {/* 中 */}
          <Center>
            <div
              className="flex-col flex-center"
              style={{ height: "100%", padding: "3%" }}
            >
              <div className="flex" style={{ width: "100%" }}>
                <CenterBg>
                  <div id="myChart3" className="charts" />
                </CenterBg>
              </div>
              <div style={{ height: "2px" }} />
              <div className="flex" style={{ width: "100%" }}>
                <CenterBg>
                  <div id="myChart4" className="charts" />
                </CenterBg>
              </div>
            </div>
          </Center>

          {/* 右 */}
          {/* 上 */}
          <div className="flex" style={{ marginBottom: "5px" }}>
            <Right>
              <div id="myChart5" className="charts" />
            </Right>
          </div>

          {/* 下 */}
          <div className="flex" style={{ marginTop: "5px" }}>
            <Right title={"设备运行时间分布情况"}>
              <div id="myChart6" className="charts" />
            </Right>
          </div>
        </Box>

        <div style={{ height: "10px" }} />
      </div>
    );
  }
}

class Box extends React.Component {
  render() {
    return (
      <div className="flex flex-row">
        {/* 左 */}
        <div className="flex flex-col">
          {this.props.children[0]}
          {this.props.children[1]}
        </div>

        {/* 中 */}
        <div className="flex2">{this.props.children[2]}</div>

        {/* 右 */}
        <div className="flex flex-col">
          {this.props.children[3]}
          {this.props.children[4]}
        </div>
      </div>
    );
  }
}

class Map extends React.Component {
  render() {
    return (
      <div className="map" id="chinaMap">
        Map
      </div>
    );
  }
}

class SystemInfo extends React.Component {
  render() {
    const data = this.props.data || {};
    const colorList = ["#C77A20", "#0A6ECD", "#C81CBD", "#54CA21"];
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      return (
        <Left title={data.title}>
          <div
            className="flex-col flex-space-around"
            style={{ height: "100%", padding: "8% 3% 6%" }}
          >
            {data.data.map((item, index) => {
              return (
                <SystemInfoItem
                  name={item.name}
                  value={item.value}
                  key={index}
                  color={colorList[index]}
                />
              );
            })}
          </div>
        </Left>
      );
    } else {
      return null;
    }
  }
}

class SystemInfoItem extends React.Component {
  render() {
    const name = this.props.name || "";
    const value = this.props.value || "";
    const color = this.props.color;
    const style = {
      color: color,
    };
    return (
      <div className="flex-row flex-center">
        <p className="sys-item-name flex2 font-small" style={style}>
          {name}
        </p>
        <div className="flex5">
          <LeftBar color={color} />
        </div>
        <p className="sys-item-value flex3 font-small">{value}</p>
      </div>
    );
  }
}

// 地区分布概况
class Area extends React.Component {
  render() {
    const colorList = this.props.colorList;
    const data = this.props.dataList || {};
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      const dataList = data.data;
      return (
        <Left title={data.title}>
          <div className="flex-row flex-center" style={{ height: "100%" }}>
            <div className="flex charts" id="myChart1" />
            <div
              className="flex flex-col flex-center"
              style={{ height: "100%" }}
            >
              {dataList.map((item, i) => {
                return (
                  <AreaItem
                    color={colorList[i]}
                    name={item.name}
                    value={item.value}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </Left>
      );
    } else {
      return null;
    }
  }
}

// 地区分布概况---右侧
class AreaItem extends React.Component {
  render() {
    return (
      <div className="area-item flex-row">
        <div className="legend" style={{ background: this.props.color }} />
        <div className="context flex flex-row flex-space-between font-small">
          <p className="name">{this.props.name}</p>
          <p className="value">{this.props.value}</p>
        </div>
      </div>
    );
  }
}

// 设备运行时间
class RunningTime extends React.Component {
  render() {
    const colorList = this.props.colorList;
    const data = this.props.dataList || {};
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data1")) {
      const dataList = data.data1;
      return (
        <Right title={data.title}>
          <div className="flex-row flex-center" style={{ height: "100%" }}>
            <div
              className="flex flex-col flex-center"
              style={{ height: "100%" }}
            >
              {dataList.map((item, i) => {
                return (
                  <RunningTimeItem
                    color={colorList[i]}
                    name={item.name}
                    value={item.value}
                    key={i}
                  />
                );
              })}
            </div>
            <div className="flex charts" id="myChart2" />
          </div>
        </Right>
      );
    } else {
      return null;
    }
  }
}

// 设备运行时间---左侧
class RunningTimeItem extends React.Component {
  render() {
    return (
      <div className="running-item flex-row">
        <div className="context flex flex-row flex-space-between font-small">
          <p className="name">{this.props.name}</p>
          <p className="value">{this.props.value}</p>
        </div>
        <div className="legend" style={{ background: this.props.color }} />
      </div>
    );
  }
}

// 排行榜
class Order extends React.Component {
  render() {
    const data = this.props.dataList || {};
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      const list = data.data;
      return (
        <div
          className="flex-col flex-center"
          style={{ height: "100%", padding: "4% 10%" }}
        >
          {list.map((item, i) => {
            return (
              <div
                className="flex-row font-small order-item"
                key={i}
                style={{ width: "100%" }}
              >
                <p className="num">{i + 1}</p>
                <p className="flex name">{item.name}</p>
                <p className="value">{item.value}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

class Count extends React.Component {
  render() {
    const data = this.props.data || {};
    const colorList = ["#C77A20", "#0A6ECD", "#C81CBD", "#54CA21"];
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      return (
        <Right>
          <div
            className="flex-col flex-space-around"
            style={{ height: "100%", padding: "8% 3% 6%" }}
          >
            {data.data.map((item, index) => {
              return (
                <CountItem
                  name={item.name}
                  value={item.value}
                  key={index}
                  color={colorList[index]}
                />
              );
            })}
          </div>
        </Right>
      );
    } else {
      return null;
    }
  }
}

class CountItem extends React.Component {
  render() {
    const name = this.props.name || "";
    const value = this.props.value || "";
    const color = this.props.color;
    const style = {
      color: color,
    };
    return (
      <div className="flex-row flex-center">
        <p className="sys-item-value flex2 font-small">{value}</p>
        <div className="flex5">
          <RightBar color={color} />
        </div>
        <p className="sys-item-name flex3 font-small" style={style}>
          {name}
        </p>
      </div>
    );
  }
}

export default DataView;
