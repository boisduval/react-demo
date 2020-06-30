import React from "react";
import "./StatusView.css"
import "./styles/border.css"
import "../index.css"
import "./StatusView.css"

import DevicePicker from "../components/devicePicker";
import CommonBorder from "../components/border/status/commonBorder";
import LongerBorder from "../components/border/status/longerBorder";
import LongestBorder from "../components/border/status/longestBorder";
import Background from "../components/border/status/background";
import HigherBackground from "../components/border/status/higherBackground";
import LongerBackground from "../components/border/status/longerBackground";
import Battery from "../components/battery";

import {Scrollbars} from 'react-custom-scrollbars';
import InfiniteScroll from 'react-infinite-scroller';

class StatusView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: null,
      load: null,
      percent: null,
      weather: null,
      environment: null,
      vol: null,
      temperature: null,
      MOSTemperature: null,
      electricity: null,
      singleBattery: null,
      loading: true,
      hasMore: true,
      pageNum: 1,
      pageSize: 84,
      total: 0,
      data: [],
    }
  }

  getMore() {
    if (this.state.total === this.state.data.length) {
      this.setState({
        hasMore: false
      })
      return;
    }
    this.setState({
      // loading: true,
      pageNum: this.state.pageNum + 1
    }, () => {
      this.initData(); //请求数据接口
    });
  }

  initData() {
    this.setState({
      loading: true
    })
    const data = this.state.singleBattery.data
    if (data) {
      let list = data.slice(
        (this.state.pageNum - 1) * this.state.pageSize,
        this.state.pageNum * this.state.pageSize
      )
      this.setState({
        data: [...this.state.data, ...list]
      })
      this.setState({
        loading: false
      })
    }

  }

  getData(params) {
    console.log(params)
    this.get('/api/status.json').then(res => {
      const data = res.data.data
      this.setState({
        survey: data.survey
      })
      this.setState({
        load: data.load
      })
      this.setState({
        percent: data.percent
      })
      this.setState({
        weather: data.weather
      })
      this.setState({
        environment: data.environment
      })
      this.setState({
        vol: data.vol
      })
      this.setState({
        temperature: data.temperature
      })
      this.setState({
        MOSTemperature: data.MOSTemperature
      })
      this.setState({
        electricity: data.electricity
      })
      this.setState({
        singleBattery: data.singleBattery
      })
      this.setState({
        total: this.state.singleBattery.data.length
      })
      this.initData()
    })
  }

  render() {
    return (
      <div className="content flex-col">
        <div className="flex flex-row">
          <div className="flex">
            <DevicePicker getData={this.getData.bind(this)}/>
          </div>
          <div className="flex7 flex-col">
            {/* 上 */}
            <div className="flex flex-row">
              {/* 左 */}
              <TopLeft data={this.state.survey}/>
              {/* 右 */}
              <TopRight load={this.state.load} percent={this.state.percent} weather={this.state.weather}
                        environment={this.state.environment}/>
            </div>
            {/* 下 */}
            <div className="flex">
              <LongestBorder>
                <div className="flex-row" style={{height: "100%", padding: "2% 1.5% 1.5% 1.5%"}}>
                  {/* 左 */}
                  <div className="flex flex-col">
                    <div className="flex">
                      <Info data1={this.state.vol} data2={this.state.temperature}/>
                    </div>
                    <div className="flex" style={{marginTop: "2px"}}>
                      <Info data1={this.state.MOSTemperature} data2={this.state.electricity}/>
                    </div>
                  </div>
                  {/* 右 */}
                  <SingleBattery
                    data={this.state.singleBattery}
                    loading={this.state.loading}
                    pageNum={this.state.pageNum}
                    pageSize={this.state.pageSize}
                    total={this.state.total}
                    hasMore={this.state.hasMore}
                    list={this.state.data}
                    getMore={this.getMore.bind(this)}
                    initData={this.initData.bind(this)}
                  />
                </div>

              </LongestBorder>
            </div>
          </div>
        </div>
        <div style={{height: "10px"}}/>
      </div>
    )
  }
}

class TopLeft extends React.Component {
  render() {
    const data = this.props.data || {}
    if (data.hasOwnProperty("data")) {
      return (
        <div className="flex">
          <CommonBorder>
            <div style={{height: "100%"}} className="flex-col">
              <div className="flex survey-img"/>
              <div className="flex-row flex-space-around" style={{padding: "3% 10% 5%"}}>
                {
                  data.data.map((val, index) => {
                    return (
                      <div className="flex-row" key={index}>
                        <p className="status-name font-small" style={{paddingRight: "5px"}}>
                          {val.name}
                        </p>
                        <p className="status-value font-small">
                          {val.value}
                        </p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </CommonBorder>
        </div>
      )
    } else {
      return null
    }

  }
}

class TopRight extends React.Component {
  render() {
    return (
      <div className="flex2">
        <LongerBorder>
          <div className="flex-row" style={{height: "100%", padding: "2.5% 2% 1.5% 2%"}}>
            <div className="flex flex-col">
              <div className="flex">
                <Instrument data={this.props.load}/>
              </div>
            </div>
            <div className="flex3">
              <Percent/>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <Weather data={this.props.weather}/>
              </div>
              <div className="flex" style={{marginTop: "2px"}}>
                <Environment data={this.props.environment}/>
              </div>
            </div>
          </div>
        </LongerBorder>
      </div>
    )
  }
}

class Instrument extends React.Component {
  render() {
    const data = this.props.data || {}
    if (data.hasOwnProperty("data") && data.hasOwnProperty("title")) {
      return (
        <HigherBackground>
          <div style={{height: "100%", padding: "7% 10%"}} className="flex-col">
            <p className="title font-xs">
              {data.title}
            </p>
            <div className="flex flex-col">
              {
                data.data.map((item, index) => {
                  return (
                    <InstrumentItem data={item} key={index}/>
                  )
                })
              }
            </div>
          </div>
        </HigherBackground>
      )
    } else {
      return null
    }
  }
}

class InstrumentItem extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex"></div>
        <p className="status-name font-xs">
          {this.props.data.name}
        </p>
        <p className="status-value font-xs">
          {this.props.data.value}
        </p>
      </div>
    )
  }
}

class Percent extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Title extends React.Component {
  render() {
    const title = this.props.title || {}
    return (
      <Background>
        <div style={{height: "100%", padding: "7%"}} className="flex-col">
          <p className="title font-xs">
            {title}
          </p>
          {
            this.props.children
          }
        </div>
      </Background>
    )
  }
}

class Weather extends React.Component {
  render() {
    const data = this.props.data || {}
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      const Weather_Forecast = data.data
      return (
        <Title title={data.title}>
          <div className="flex flex-col flex-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 190 110"
              enableBackground="new 0 0 190 110"
              xmlSpace="preserve"
            >
              <g id="图层_2">
                <text
                  transform="translate(87 91)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="60"
                  textAnchor="end"
                >
                  {Math.abs(Weather_Forecast.tem)}
                </text>
                <text
                  transform="matrix(1 0 0 1 86.7148 55)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="14"
                >
                  ℃
                </text>
                <text
                  transform="matrix(1 0 0 1 35.7148 28.1436)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="14"
                >
                  {Weather_Forecast.country} {Weather_Forecast.city}
                </text>
                <path
                  fill="#009DD9"
                  d="M27.315,15.496c-1.127-1.863-3.115-3.036-5.291-3.12h-0.556c-1.986,0.076-3.821,1.083-4.951,2.719
		c-1.168,1.669-1.497,3.787-0.888,5.731c0.11,0.336,0.25,0.661,0.417,0.973l4.918,9.416c0.143,0.297,0.445,0.485,0.774,0.483
		c0.33,0.001,0.631-0.188,0.773-0.485l5.106-9.764l0.011-0.021C28.544,19.528,28.425,17.291,27.315,15.496L27.315,15.496z
		 M21.781,21.228c-1.305,0-2.363-1.058-2.363-2.364c0-1.305,1.058-2.363,2.363-2.363c1.306,0,2.364,1.059,2.364,2.363l0,0
		C24.145,20.169,23.086,21.228,21.781,21.228z"
                />
                <text
                  transform="matrix(1 0 0 1 105.7148 72.5)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="12"
                >
                  {Weather_Forecast.win} {Weather_Forecast.win_speed}
                </text>
                <path
                  fill="#009DD9"
                  d="M166,52.072c0,3.826-3.102,6.928-6.928,6.928h-46.145c-3.826,0-6.928-3.102-6.928-6.928v-0.144
		c0-3.826,3.102-6.928,6.928-6.928h46.145c3.826,0,6.928,3.102,6.928,6.928V52.072z"
                />
                <text
                  transform="matrix(1 0 0 1 106 88.5)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="12"
                >
                  相对湿度 {Weather_Forecast.humidity}
                </text>
                <text
                  transform="matrix(1 0 0 1 123.2148 56)"
                  fill="#FFFFFF"
                  fontFamily="'MicrosoftYaHei-Bold'"
                  fontSize="10"
                >
                  {Weather_Forecast.air} {Weather_Forecast.air_level}
                </text>
                {
                  (() => {
                    if (Weather_Forecast.tem < 0) {
                      return (
                        <text
                          transform="matrix(1 0 0 1 90.25 75.75)"
                        >
                          <tspan
                            x="0"
                            y="0"
                            fill="#FFFFFF"
                            fontFamily="'MicrosoftYaHei-Bold'"
                            fontSize="10"
                          >
                            零
                          </tspan>
                          <tspan
                            x="0"
                            y="12"
                            fill="#FFFFFF"
                            fontFamily="'MicrosoftYaHei-Bold'"
                            fontSize="10"
                          >
                            下
                          </tspan>
                        </text>
                      )
                    } else {
                      return null
                    }
                  })()
                }

              </g>
              <g id="天气状态">
                <image
                  transform="matrix(1 0 0 1 120 10)"
                  width="32"
                  height="32"
                  xlinkHref={'http://sf28090049.wicp.vip:8082/conn/Weather/' + Weather_Forecast.wea_img + '.png'}
                />
              </g>
            </svg>
          </div>
        </Title>
      )
    } else {
      return null
    }
  }
}

class Environment extends React.Component {
  render() {
    const data = this.props.data || {}
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      return (
        <Title title={data.title}>
          <div className="flex flex-row">
            {
              data.data.map((item, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <div className="flex">

                    </div>
                    <div>
                      <p className="status-name font-xs">
                        {item.name}
                      </p>
                      <p className="status-value font-xs">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Title>
      )
    } else {
      return null
    }
  }
}

class Info extends React.Component {
  render() {
    const data1 = this.props.data1 || {}
    const data2 = this.props.data2 || {}
    const data = [data1, data2]
    return (
      <Background>
        <div className="flex-col" style={{height: "100%", padding: "6% 10%"}}>
          {
            data.map((item, index) => {
              if (item.hasOwnProperty("title") && item.hasOwnProperty("data")) {
                return (
                  <div className="flex info font-xs flex-col flex-space-around" key={index + '1'}>
                    <p className="title">
                      {item.title}
                    </p>
                    {
                      (item.data).map((val, index) => {
                        return (
                          <div className="info-item flex-row flex-space-between" key={index}>
                            <p className="name">
                              {val.name}
                            </p>
                            <p className="value">
                              {val.value}
                            </p>
                            <p className="position">
                              {val.position}
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              } else {
                return null
              }
            })
          }
        </div>
      </Background>
    )
  }
}

class SingleBattery extends React.Component {
  render() {
    const data = this.props.data || {}
    if (data.hasOwnProperty("title") && data.hasOwnProperty("data")) {
      return (
        <div className="flex7" style={{marginLeft: "2px"}}>
          <LongerBackground>
            <div style={{height: "100%", padding: "3% 40px"}}>
              <div className="longest-title flex-col flex-center">
                <p className="title font-xs" style={{width: "18px"}}>
                  {data.title}
                </p>
              </div>
              <Scrollbars style={{height: "100%", width: "100%"}} autoHide>
                <InfiniteScroll
                  className="list-contents flex-row flex-wrap"
                  initialLoad={false}
                  pageStart={0}
                  loadMore={this.props.getMore.bind(this)}
                  hasMore={!this.props.loading && this.props.hasMore}
                  useWindow={false}
                >
                  {
                    this.props.list.map((val, i) => {
                      return (
                        <div className="battery" key={i}>
                          <Battery name={val.name} value={val.value}/>
                        </div>
                      )
                    })
                  }
                </InfiniteScroll>
              </Scrollbars>
              {this.props.loading ? <Loading text="加载中..."/> : ""}
              {!this.props.hasMore ? <Loading text="没有更多了"/> : ""}
            </div>
          </LongerBackground>
        </div>
      )
    } else {
      return null
    }
  }
}

class Loading extends React.Component {
  render() {
    const text = this.props.text
    return (
      <div className="loading">
        <p>
          {text}
        </p>
      </div>
    )
  }
}

export default StatusView;