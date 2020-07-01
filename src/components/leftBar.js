import React from "react";

class LeftBar extends React.Component {
  render() {
    const color = this.props.color || "#EC8E26"
    const num = this.props.num || 3
    return (
      <div className="bar">
        <svg version="1.1" id="progress_x5F_bar"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             viewBox="0 0 230 20"
             enableBackground="new 0 0 230 20"
             xmlSpace="preserve"
        >
          <g id="outline_x5F_border">
            <rect
              x="1.5"
              y="1.5"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeMiterlimit="10"
              width="207"
              height="17"
            />
            <polygon
              fill={color}
              stroke={color}
              strokeWidth="3"
              strokeMiterlimit="10"
              points="215.5,2.964 227.386,9.826 215.5,16.688 	"
            />
          </g>
          <g id="grid">
            {
              (() => {
                let arr = []
                for (let i = 0; i < num; i++) {
                  arr.push(
                    <rect className="rect" x={6 + i * 10} y="4" fill={color} width="8" height="12"/>
                  )
                }
                return arr
              })()
            }
          </g>
        </svg>

      </div>
    )
  }
}

export default LeftBar