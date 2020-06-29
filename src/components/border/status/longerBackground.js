import React from "react";

class LongerBackground extends React.Component {
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
            viewBox="0 0 1380 460"
            enableBackground="new 0 0 1380 460"
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
              x1="1379.5"
              y1="1"
              x2="1379.5"
              y2="16"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1365"
              y1="0.5"
              x2="1380"
              y2="0.5"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1"
              y1="459.5"
              x2="16"
              y2="459.5"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="0.5"
              y1="445"
              x2="0.5"
              y2="460"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1379.5"
              y1="459"
              x2="1379.5"
              y2="444"
            />
            <line
              fill="#2BD0E3"
              stroke="#2BD0E3"
              strokeMiterlimit="10"
              x1="1365"
              y1="459.5"
              x2="1380"
              y2="459.5"
            />
            <linearGradient
              id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
              gradientUnits="userSpaceOnUse"
              x1="1363"
              y1="230"
              x2="1379"
              y2="230"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect
              id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
              x="1363"
              y="1"
              fill="url(#右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
              width="16"
              height="458"
            />
            <linearGradient
              id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
              gradientUnits="userSpaceOnUse"
              x1="1453"
              y1="230"
              x2="1469"
              y2="230"
              gradientTransform="matrix(-1 0 0 1 1470 0)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect
              id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
              x="1"
              y="1"
              fill="url(#左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
              width="16"
              height="458"
            />
            <linearGradient
              id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
              gradientUnits="userSpaceOnUse"
              x1="953"
              y1="190"
              x2="969"
              y2="190"
              gradientTransform="matrix(0 -1 1 0 500.0005 970)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect
              id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
              x="1"
              y="1"
              fill="url(#上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
              width="1378"
              height="16"
            />
            <linearGradient
              id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
              gradientUnits="userSpaceOnUse"
              x1="943"
              y1="190"
              x2="959"
              y2="190"
              gradientTransform="matrix(0 1 1 0 500.0005 -500)"
            >
              <stop offset="0" style={{stopColor:"#2BD0E3",stopOpacity:0}}/>
              <stop offset="0.9944" style={{stopColor:"#2BD0E3",stopOpacity:0.2}}/>
            </linearGradient>
            <rect
              id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
              x="1"
              y="443"
              fill="url(#下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
              width="1378"
              height="16"
            />
          </svg>
        </div>
        <div className="content-box">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default LongerBackground