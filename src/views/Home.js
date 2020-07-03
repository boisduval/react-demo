import React from "react";
import { Cascader } from "antd";

import "antd/dist/antd.css";
import "./Home.css";
import "../index.css";
import "./styles/nav.css";
import "../font/iconfont.css";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入图
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

class Home extends React.Component {
  loadScript() {
    var script = document.createElement("script"); //创建虚拟dom
    script.type = "text/javascript";
    //给虚拟dom添加src属性
    script.src =
      "//api.map.baidu.com/api?v=2.0&ak=把应用里的Ak值复制过来&callback=init";
    //把虚拟dom追加到body
    document.body.appendChild(script);
  }
  init() {
    const BMap = window.BMap; //全局使用BMap
    this.map = new BMap.Map("map"); //创建地图示例，选择显示地图的容器，里面是id值
    var point = new BMap.Point(116.404, 39.915); //创建点坐标（经度，纬度）
    this.map.centerAndZoom(point, 12); //初始化地图，设置中心点坐标和地图级别
    // this.map.enableScrollWheelZoom(); // 启用滚轮放大缩小
    this.map.setMapStyle({ style: "midnight" });
  }

  getAreaList() {
    this.get("./api/areaList.json").then((res) => {
      const data = res.data.data;
      this.setState({
        areaList: data,
      });
      this.getData();
    });
  }

  getData() {
    this.get("./api/gisSurvey.json").then((res) => {
      const data = res.data.data;
      this.setState({
        runningTime: data.runningTime,
      });
      this.setState({
        survey: data.survey,
      });
      this.setState({
        status: data.status,
      });
      this.setState({
        count: data.count,
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
          name: this.state.status.name,
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
                  fontSize: "20",
                },
                b: {
                  fontSize: "14",
                },
              },
            },
          },
          labelLine: {
            show: false,
          },
          data: this.state.status.data,
        },
      ],
    });

    // 第2个图
    let myChart2 = echarts.init(document.getElementById("myChart2"));
    // 绘制图表
    myChart2.setOption({
      color: ["#11AFF6"],
      tooltip: {
        trigger: "axis",
      },
      grid: {
        top: "20%",
        bottom: "24%",
        left: "16%",
        right: "8%",
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
          data: this.state.count.xAxis,
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
          name: this.state.count.series[0].name,
          type: "bar",
          data: this.state.count.series[0].data,
        },
      ],
    });

    setTimeout(function () {
      window.onresize = () => {
        myChart1.resize();
        myChart2.resize();
      };
    }, 200);
  }

  constructor(props) {
    super(props);
    this.state = {
      areaList: null,
      runningTime: null,
      survey: null,
      status: null,
      count: null,
      color: ["#F7931D", "#7BC944", "#FF7BAC", "#3FA9F5"],
    };
  }
  componentDidMount() {
    //把当前的init方法变成全局的init方法
    window.init = this.init.bind(this);
    //异步加载
    this.loadScript();
    this.getAreaList();
  }
  render() {
    return (
      <div className="content flex-row" style={{ padding: "10px 0" }}>
        <div className="flex3 flex-col" style={{ marginRight: "10px" }}>
          <div className="flex3">
            <div className="map-box blue-border">
              <div id="map" />
              <TopBar data={this.state.areaList} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Tip data={this.state.runningTime} />
          <Survey data={this.state.survey} />
          <Status data={this.state.status} color={this.state.color} />
          <Count data={this.state.count} />
        </div>
      </div>
    );
  }
}

class TopBar extends React.Component {
  onChange(val) {
    console.log(val);
  }
  render() {
    const options = this.props.data || [];
    if (options.length !== 0) {
      return (
        <div className="map-select">
          <span
            className="font-medium title-color"
            style={{ marginRight: "20px" }}
          >
            地区
          </span>
          <Cascader
            allowClear={false}
            defaultValue={[options[0].value]}
            options={options}
            onChange={this.onChange}
            placeholder="Please select"
          />
          ,
        </div>
      );
    } else {
      return null;
    }
  }
}

class Tip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      timer: null,
    };
  }
  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        let temp = new Date().toLocaleString();
        this.setState({
          time: temp,
        });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.setState({
      timer: false,
    });
  }

  render() {
    const data = this.props.data || {};
    if (data.hasOwnProperty("data")) {
      return (
        <div className="running-time flex-row flex-space-between title-background">
          <p className="font-xs" style={{ color: "#ccc" }}>
            系统安全运行
            <span className="title-color">{data.data.years}</span>年
            <span className="title-color">{data.data.days}</span>天
          </p>
          <p className="font-xs" style={{ color: "#ccc" }}>
            <span className="title-color">{this.state.time}</span>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

class Survey extends React.Component {
  render() {
    const data = this.props.data || {};
    const iconPath = ["icon-zhiya-", "icon-shield", "icon-signal"];
    if (data.hasOwnProperty("data")) {
      return (
        <div className="flex flex-col" style={{ marginBottom: "10px" }}>
          <p className="title-background font-small title-color">
            {data.title}
          </p>
          <div
            className="flex content-background flex-col flex-space-around"
            style={{ padding: "5% 8%" }}
          >
            {data.data.map((item, index) => {
              return (
                <SurveyItem
                  data={item}
                  iconPath={iconPath[index]}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

class SurveyItem extends React.Component {
  render() {
    const data = this.props.data;
    const iconPath = this.props.iconPath;
    return (
      <div className="flex-row flex-center home-survey-item">
        <div className="home-icon flex-col flex-center">
          <i className={`font-large iconfont ${iconPath}`} />
        </div>
        <div className="flex2" style={{ color: "#ccc" }}>
          <p>{data.name}</p>
        </div>
        <div className="flex title-color">
          <p>{data.value}</p>
        </div>
      </div>
    );
  }
}

class Status extends React.Component {
  render() {
    const data = this.props.data || {};
    const color = this.props.color;
    if (data.hasOwnProperty("data")) {
      return (
        <div className="flex flex-col" style={{ marginBottom: "10px" }}>
          <p className="title-background font-small title-color blue-border">
            {data.title}
          </p>
          <div className="flex content-background flex-row flex-center">
            <div id="myChart1" className="charts flex" />
            <div className="flex">
              {data.data.map((item, i) => {
                return (
                  <StatusItem
                    name={item.name}
                    value={item.value}
                    color={color[i]}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

class StatusItem extends React.Component {
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

class Count extends React.Component {
  render() {
    const data = this.props.data || {};
    if (data.hasOwnProperty("series")) {
      return (
        <div className="flex flex-col">
          <p className="title-background font-small title-color blue-border">
            {data.title}
          </p>
          <div className="flex content-background">
            <div id="myChart2" className="charts" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Home;
