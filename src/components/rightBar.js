import React from "react";

class RightBar extends React.Component {
  render() {
    const color = this.props.color || "#EC8E26";
    const num = this.props.num || 3;
    return (
      <div className="bar">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 230 20"
          enableBackground="new 0 0 230 20"
          xmlSpace="preserve"
        >
          <g>
            <rect
              x="21.86"
              y="1.556"
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
              points="14.86,17.036 2.975,10.174 14.86,3.312"
            />
          </g>
          <g>
            {(() => {
              let arr = [];
              for (let i = 0; i < num; i++) {
                arr.push(
                  <rect
                    className="rect"
                    x={216.36 - i * 10}
                    y="4"
                    fill={color}
                    width="8"
                    height="12"
                  />
                );
              }
              return arr;
            })()}
          </g>
        </svg>
      </div>
    );
  }
}

export default RightBar;
