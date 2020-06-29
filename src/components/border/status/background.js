import React from "react";

class Background extends React.Component {
  render() {
    return (
      <div className="svg-box">
        <div className="svg-border">
          <svg
            version="1.1"
            id="图层_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 230 230"
            enableBackground="new 0 0 230 230"
            xmlSpace="preserve"
            preserveAspectRatio="none"
          >
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1"
              y1="0.5"
              x2="16"
              y2="0.5"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="0.5"
              y1="15"
              x2="0.5"
              y2="0"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="229.5"
              y1="1"
              x2="229.5"
              y2="16"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="215"
              y1="0.5"
              x2="230"
              y2="0.5"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1"
              y1="229.5"
              x2="16"
              y2="229.5"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="0.5"
              y1="215"
              x2="0.5"
              y2="230"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="229.5"
              y1="229"
              x2="229.5"
              y2="214"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="215"
              y1="229.5"
              x2="230"
              y2="229.5"
            />
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="213"
              y1="115"
              x2="229"
              y2="115"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect x="213" y="1" fill="url(#SVGID_1_)" width="16" height="228"/>
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="303"
              y1="115"
              x2="319"
              y2="115"
              gradientTransform="matrix(-1 0 0 1 320 0)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect x="1" y="1" fill="url(#SVGID_2_)" width="16" height="228"/>
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="263"
              y1="75"
              x2="279"
              y2="75"
              gradientTransform="matrix(0 -1 1 0 40.0005 280)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect x="1" y="1" fill="url(#SVGID_3_)" width="228" height="16"/>
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="253"
              y1="75"
              x2="269"
              y2="75"
              gradientTransform="matrix(0 1 1 0 40.0005 -40)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect x="1" y="213" fill="url(#SVGID_4_)" width="228" height="16"/>
          </svg>
        </div>
        <div className="content-box">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Background