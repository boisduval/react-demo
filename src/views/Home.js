import React from "react";
import { Cascader } from "antd";

import "antd/dist/antd.css";
import "./Home.css";
import "../index.css";
import "./styles/nav.css";
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
    this.get("/api/areaList.json").then((res) => {
      const data = res.data.data;
      this.setState({
        areaList: data,
      });
      this.getData();
    });
  }

  getData() {
    this.get("/api/gisSurvey.json").then((res) => {
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
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      areaList: null,
      runningTime: null,
      survey: null,
      status: null,
      count: null,
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
          <div className="flex flex-col" style={{ marginBottom: "10px" }}>
            <p className="title-background font-small title-color">系统概况</p>
            <div className="flex content-background"></div>
          </div>
          <div className="flex flex-col" style={{ marginBottom: "10px" }}>
            <p className="title-background font-small title-color blue-border">
              设备运行状态
            </p>
            <div className="flex content-background"></div>
          </div>
          <div className="flex flex-col">
            <p className="title-background font-small title-color blue-border">
              备电统计
            </p>
            <div className="flex content-background"></div>
          </div>
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

export default Home;
