import React from "react";
import "./instrument.css"

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        delay: false
      })
    }, 200)
  }

  render() {
    const rotate = this.props.rotate || "0"
    return (
      <div style={{position: "relative", height: "100%"}}>
        <div style={{height: "100%"}}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 180 180"
            enableBackground="new 0 0 180 180"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <circle
                  fill="none"
                  stroke="#46A6B5"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  cx="89.895"
                  cy="89.228"
                  r="79.472"
                />
                <path
                  fill="none"
                  stroke="#46A6B5"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  d="M105.101,119.673
			c0.01,0.226,0.015,0.452,0.015,0.681c0,8.475-6.871,15.346-15.346,15.346c-8.476,0-15.347-6.871-15.347-15.346
			c0-0.175,0.003-0.349,0.009-0.521"
                />
                <line
                  fill="none"
                  stroke="#46A6B5"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  x1="103"
                  y1="120.5"
                  x2="164"
                  y2="120.5"
                />
                <line
                  fill="none"
                  stroke="#46A6B5"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  x1="17"
                  y1="120.5"
                  x2="77"
                  y2="120.5"
                />
              </g>
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="58.976"
                y1="34.458"
                x2="64.441"
                y2="43.958"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="123.801"
                y1="36.684"
                x2="117.618"
                y2="45.732"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="28.321"
                y1="76.204"
                x2="39.095"
                y2="78.213"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="151.097"
                y1="76.204"
                x2="140.322"
                y2="78.213"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="45.214"
                y1="52.61"
                x2="50.05"
                y2="56.548"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="138.228"
                y1="56.85"
                x2="133.039"
                y2="60.309"
              />
              <line
                fill="none"
                stroke="#F7931E"
                strokeWidth="5"
                strokeMiterlimit="10"
                x1="92.799"
                y1="31.466"
                x2="92.468"
                y2="37.692"
              />
            </g>
          </svg>
        </div>
        <div
          className="indicating-instrument-svg"
          style={{
            transform: this.state.delay ? 0 : 'rotate(' + rotate + 'deg)',
            transition: "all 1s ease-in-out",
            transformOrigin: "50% 66%"
          }}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 180 180"
            enableBackground="new 0 0 180 180"
            xmlSpace="preserve"
          >
            <g>
              <circle fill="#F7931E" cx="90" cy="119" r="12"/>
              <polygon fill="#F7931E" points="86,126 62,101 95,114"/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default Instrument