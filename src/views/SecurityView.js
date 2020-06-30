import React from "react";
import "./SecurityView.css"
import "../index.css"
import "./styles/border.css"
import TopBorder from "../components/border/security/topBorder"
import MainBorder from "../components/border/security/mainBorder"
import MainBg from "../components/border/security/mainBg"

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入图
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class SecurityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forYear: null,
      abnormal: null,
      topBar: null,
      circulation: null,
      health: null,
      areaOrder: null,
      timeOrder: null,
      color1: ['#E062AE', '#37A2DA', '#67E0E3'],
      color2: ['#37A2DA', '#FFDB5C', '#FE9D7E', '#FB7293', '#E7BCF3', '#8378EA', '#96BFFF']
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    this.get("/api/security.json").then(res => {
      this.setState({
        forYear: res.data.data.forYear
      })
      this.setState({
        abnormal: res.data.data.abnormal
      })
      this.setState({
        topBar: res.data.data.topBar
      })
      this.setState({
        circulation: res.data.data.circulation
      })
      this.setState({
        health: res.data.data.health
      })
      this.setState({
        areaOrder: res.data.data.areaOrder
      })
      this.setState({
        timeOrder: res.data.data.timeOrder
      })

      this.getChart()
    })
  }

  getChart() {
    // 第1个图
    let myChart1 = echarts.init(document.getElementById('myChart1'));
    // 绘制图表
    myChart1.setOption({
      color: ['#F6B60B', '#11AFF6'],
      title: {
        text: this.state.forYear.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: "16%",
        bottom: "10%",
        left: "8%",
        right: "8%"
      },
      legend: {
        data: [this.state.forYear.series[0].name, this.state.forYear.series[1].name],
        itemWidth: 8,
        textStyle: {
          color: '#46a6b5'
        },
        align: 'right',
        right: "5%",
        top: "4%"
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#46a6b5'
            }
          },
          splitLine: {
            show: false
          },
          data: this.state.forYear.xAxis
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#46a6b5'
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: this.state.forYear.series[0].name,
          type: 'bar',
          data: this.state.forYear.series[0].data
        },
        {
          name: this.state.forYear.series[1].name,
          type: 'bar',
          data: this.state.forYear.series[1].data
        }
      ]
    });

    // 第2个图
    let myChart2 = echarts.init(document.getElementById('myChart2'));
    // 绘制图表
    myChart2.setOption({
      color: ['#0DAFF6', '#8080FF', '#F6B60C'],
      title: {
        text: this.state.abnormal.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: "16%",
        bottom: "10%",
        left: "8%",
        right: "8%"
      },
      legend: {
        data: [this.state.abnormal.series[0].name, this.state.abnormal.series[1].name, this.state.abnormal.series[2].name],
        itemWidth: 8,
        textStyle: {
          color: '#46a6b5'
        },
        align: 'right',
        right: "5%",
        top: "4%"
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#46a6b5'
            }
          },
          splitLine: {
            show: false
          },
          data: this.state.abnormal.xAxis
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#46a6b5'
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: this.state.abnormal.series[0].name,
          type: 'line',
          data: this.state.abnormal.series[0].data,
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: this.state.abnormal.series[1].name,
          type: 'line',
          data: this.state.abnormal.series[1].data,
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: this.state.abnormal.series[2].name,
          type: 'line',
          data: this.state.abnormal.series[2].data,
          symbol: 'circle',
          symbolSize: 8
        }
      ]
    });

    // 第3个图
    let myChart3 = echarts.init(document.getElementById('myChart3'));
    // 绘制图表
    myChart3.setOption({
      color: ['#37A2DA', '#67E0E3', '#DDBDDA', '#FFDB5C', '#FF9F7F', '#E062AE'],
      title: {
        text: this.state.circulation.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      grid: {
        top: "16%",
        bottom: "10%",
        left: "8%",
        right: "8%"
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: this.state.circulation.name,
          type: 'pie',
          radius: [20, 110],
          center: ['50%', '55%'],
          roseType: 'radius',
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          },
          data: this.state.circulation.data
        },
      ]
    })

    // 第4个图
    let myChart4 = echarts.init(document.getElementById('myChart4'));
    // 绘制图表
    myChart4.setOption({
      title: {
        text: this.state.health.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      grid: {
        top: "16%",
        bottom: "10%",
        left: "8%",
        right: "8%"
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },

      series: [
        {
          color: this.state.color1,
          name: this.state.health.name,
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '40%'],
          center: ['50%', '55%'],
          label: {
            // position: 'inner',
            // formatter: '{d}%'
            show: false
          },
          labelLine: {
            show: false
          },
          data: this.state.health.data1
        },
        {
          color: this.state.color2,
          name: this.state.health.name,
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['50%', '55%'],
          label: {
            // formatter: '{d}% ',
            // position: 'inner',
            show: false
          },
          data: this.state.health.data2
        }
      ]
    });

    // 第5个图
    let myChart5 = echarts.init(document.getElementById('myChart5'));
    // 绘制图表
    myChart5.setOption({
      color: '#0DAFF6',
      title: {
        text: this.state.areaOrder.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      grid: {
        top: "16%",
        bottom: "16%",
        left: "16%",
        right: "16%"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#46a6b5'
          }
        },
        splitLine: {
          show: false
        },
      },
      yAxis: {
        type: 'category',
        data: this.state.areaOrder.yAxis,
        axisLine: {
          lineStyle: {
            color: '#46a6b5'
          }
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          name: this.state.areaOrder.name,
          type: 'bar',
          data: this.state.areaOrder.data,
          barCategoryGap: '30%'
        }
      ]
    });

    // 第6个图
    let myChart6 = echarts.init(document.getElementById('myChart6'));
    // 绘制图表
    myChart6.setOption({
      color: '#ED1E79',
      title: {
        text: this.state.timeOrder.title,
        textStyle: {
          color: '#46a6b5',
          fontSize: 14
        },
        left: '3%',
        top: "2%"
      },
      grid: {
        top: "16%",
        bottom: "16%",
        left: "16%",
        right: "16%"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#46a6b5'
          }
        },
        splitLine: {
          show: false
        },
      },
      yAxis: {
        type: 'category',
        data: this.state.timeOrder.yAxis,
        axisLine: {
          lineStyle: {
            color: '#46a6b5'
          }
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          name: this.state.timeOrder.name,
          type: 'bar',
          data: this.state.timeOrder.data,
          barCategoryGap: '30%'
        }
      ]
    });



    setTimeout(function () {
      window.onresize = () => {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
      };
    }, 200);
  }

  render() {
    const styleList = [
      {
        color: '#70B602',
        icon: {
          backgroundImage: `url(${require("../img/duandian.png")})`
        }
      },
      {
        color: '#EC808D',
        icon: {
          backgroundImage: `url(${require("../img/duandian.png")})`
        }
      },
      {
        color: '#8401FF',
        icon: {
          backgroundImage: `url(${require("../img/shield.png")})`
        }
      },
      {
        color: '#F59A23',
        icon: {
          backgroundImage: `url(${require("../img/gaojing.png")})`
        }
      },
      {
        color: '#02A7F0',
        icon: {
          backgroundImage: `url(${require("../img/querengaojing.png")})`
        }
      }
    ]
    return (
      <div className="content flex-col">
        <div className="flex2">
          {/* 上 */}
          <Top styleList={styleList} dataList={this.state.topBar}>

          </Top>
        </div>
        <div style={{height: "10px"}}/>
        <div className="flex5 flex-row">
          {/* 中 */}
          <ForYear/>
          <div style={{height: "10px"}}/>
          <Abnormal/>
        </div>
        <div style={{height: "10px"}}/>
        <div className="flex5 flex-row">
          {/* 下 */}
          <Bottom>
            <div id="myChart3" className="charts"/>
            <div id="myChart4" className="charts"/>
          </Bottom>
          <div style={{height: "10px"}}/>
          <Bottom>
            <div id="myChart5" className="charts"/>
            <div id="myChart6" className="charts"/>
          </Bottom>
        </div>
        <div style={{height: "10px"}}/>
      </div>
    )
  }
}

class ForYear extends React.Component {
  render() {
    return (
      <div className="flex">
        <MainBorder>
          <div style={{height: "100%", padding: "2%"}}>
            <div id="myChart1" className="charts"/>
          </div>
        </MainBorder>
      </div>
    )
  }
}

class Abnormal extends React.Component {
  render() {
    return (
      <div className="flex">
        <MainBorder>
          <div style={{height: "100%", padding: "2%"}}>
            <div id="myChart2" className="charts"/>
          </div>
        </MainBorder>
      </div>
    )
  }
}

class Bottom extends React.Component {
  render() {
    return (
      <div className="flex">
        <MainBorder>
          <div className="flex-row" style={{height: "100%", padding: "2% 3%"}}>
            <div className="flex">
              <MainBg>
                {this.props.children[0]}
              </MainBg>
            </div>
            <div style={{height: "100%", width: "2px"}}/>
            <div className="flex">
              <MainBg>
                {this.props.children[1]}
              </MainBg>
            </div>
          </div>
        </MainBorder>
      </div>
    )
  }
}

class Top extends React.Component {
  render() {
    const styleList = this.props.styleList
    const dataList = this.props.dataList || []
    if (dataList.hasOwnProperty("data")) {
      return (
        <TopBorder>
          <div className="flex-row" style={{height: "100%", padding: "1.5% 2%"}}>
            {
              styleList.map((item, i) => {
                return (
                  <TopItem key={i} color={item.color} data={dataList.data[i]} icon={item.icon}/>
                )
              })
            }
          </div>
        </TopBorder>
      )
    } else {
      return null
    }

  }
}

class TopItem extends React.Component {
  render() {
    const color = this.props.color
    const data = this.props.data
    const icon = this.props.icon
    return (
      <div className="flex top-item flex-row" style={{backgroundColor: color}}>
        <div className="flex icon" style={icon}/>
        <div className="flex3 flex-col flex-center-end">
          <p className="name font-small">{data.name}</p>
          <p className="value font-medium">{data.value}</p>
        </div>
      </div>
    )
  }
}


export default SecurityView;