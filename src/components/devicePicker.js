import React from "react";
import "./devicePicker.css";
import DeviceBorder from "./border/common/deviceBorder";

import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.css";

import { Cascader } from "antd";
import "antd/dist/antd.css";

class DevicePicker extends React.Component {
  getAreaList() {
    this.get("./api/areaList.json").then((res) => {
      const data = res.data.data;
      this.setState({
        areaList: data,
      });
      this.getDevice();
    });
  }

  getDevice() {
    this.get(
      "http://sf28090049.wicp.vip:8082/conn/api/Statement/GetDeviceNames"
    ).then((res) => {
      this.setState(
        {
          deviceList: res.data.data,
        },
        () => {
          new Swiper(".swiper-container", {
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: false,
            slideToClickedSlide: true,
            on: {
              slideChangeTransitionEnd: () => {
                let dom = document.getElementsByClassName(
                  "swiper-slide-active"
                )[0];
                var params = dom.dataset.id;
                this.props.getData(params);
              },
            },
          });
        }
      );
      this.props.getData(this.state.deviceList[0].SystemID);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      deviceList: null,
      areaList: null,
    };
  }

  componentDidMount() {
    this.getAreaList();
  }

  render() {
    const deviceList = this.state.deviceList || [];
    const options = this.state.areaList || [];
    if (options.length !== 0 && deviceList.length !== 0) {
      return (
        <DeviceBorder>
          <div className="flex-col" style={{ height: "100%" }}>
            <p className="device-picker-title">基站列表信息</p>
            {/*<div className="picker"/>*/}
            <Cascader
              allowClear={false}
              defaultValue={[options[0].value]}
              options={options}
              onChange={this.onChange}
              placeholder="Please select"
              style={{ width: "80%", margin: "auto" }}
            />
            <div
              className="flex flex-col flex-center"
              style={{ margin: "0 10px" }}
            >
              <div className="picker">
                <div
                  className="swiper-container"
                  style={{ height: "350px", marginTop: "120px" }}
                >
                  <div className="swiper-wrapper">
                    {deviceList.map((item) => {
                      return (
                        <div
                          className="swiper-slide"
                          key={item.SystemID}
                          data-id={item.SystemID}
                        >
                          <p>{item.Name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DeviceBorder>
      );
    } else {
      return null;
    }
  }
}

export default DevicePicker;
