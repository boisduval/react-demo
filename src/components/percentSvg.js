import React from "react";

class PercentSvg extends React.Component {
  render() {
    const data = this.props.data;
    const centerData = this.props.center;
    const left = data.slice(0, 2);
    const right = data.slice(2, 4);
    const center = data.slice(4, 5);
    return (
      <div className="percent-svg flex">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          x="0px"
          y="0px"
          viewBox="0 0 650 460"
          enableBackground="new 0 0 650 460"
          xmlSpace="preserve"
        >
          {left.map((item, index) => {
            return <LeftItem data={item} distance={index * 220} key={index} />;
          })}
          {right.map((item, index) => {
            return <RightItem data={item} distance={index * 220} key={index} />;
          })}

          <g>
            <path
              fill="none"
              stroke="#0090FF"
              strokeMiterlimit="10"
              d="M376.122,270.637c0,5.151-4.178,9.33-9.33,9.33h-81.639
			c-5.153,0-9.331-4.179-9.331-9.33v-10.108c0-5.152,4.177-9.33,9.331-9.33h81.639c5.152,0,9.33,4.178,9.33,9.33V270.637z"
            />
            <g>
              <text
                transform="matrix(1 0 0 1 324 272.0781)"
                fill="#29C2F8"
                fontFamily="'MicrosoftYaHeiLight'"
                fontSize="16.7039"
                textAnchor="middle"
              >
                {centerData.name}
              </text>
            </g>
            <text
              transform="matrix(1 0 0 1 324 225.6777)"
              fill="#FFFFFF"
              fontFamily="'MicrosoftYaHei-Bold'"
              fontSize="44.5438"
              textAnchor="middle"
            >
              {centerData.value}
            </text>
          </g>
          <g>
            <g>
              <path
                fill="none"
                stroke="#00CAFC"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M316.793,328.988
				c2.799-0.646,5.713-0.988,8.707-0.988c10.159,0,19.4,3.936,26.28,10.365"
              />
              <path
                fill="none"
                stroke="#00CAFC"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M289.932,351.736
				c3.325-8.002,9.273-14.64,16.769-18.842"
              />
              <path
                fill="none"
                stroke="#00CAFC"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M303.651,398.205
				C293.592,391.259,287,379.649,287,366.5c0-2.108,0.169-4.178,0.496-6.193"
              />
              <path
                fill="none"
                stroke="#00CAFC"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M357.82,345.572
				c3.909,6.024,6.18,13.211,6.18,20.928c0,21.264-17.237,38.5-38.5,38.5c-4.311,0-8.455-0.709-12.325-2.016"
              />
            </g>
            <radialGradient
              id="percent_7"
              cx="325.3901"
              cy="366.2842"
              r="32.3899"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                style={{ stopColor: "#3D2189", stopOpacity: "0" }}
              />
              <stop
                offset="0.824"
                style={{ stopColor: "#144B7E", stopOpacity: "0.824" }}
              />
              <stop offset="1" style={{ stopColor: "#0B557C" }} />
            </radialGradient>
            <circle fill="url(#percent_7)" cx="325.39" cy="366.284" r="32.39" />
            <path
              fill="none"
              stroke="#01BEF0"
              strokeMiterlimit="10"
              d="M358,388h42c6.627,0,12,5.373,12,12v38c0,6.627-5.373,12-12,12H251
			c-6.627,0-12-5.373-12-12v-38c0-6.627,5.373-12,12-12h42.125"
            />
            <line
              fill="none"
              stroke="#01BEF0"
              strokeMiterlimit="10"
              x1="253"
              y1="451.5"
              x2="309"
              y2="451.5"
            />
            <line
              fill="none"
              stroke="#01BEF0"
              strokeMiterlimit="10"
              x1="341"
              y1="451.5"
              x2="397"
              y2="451.5"
            />
            <line
              fill="none"
              stroke="#01BEF0"
              strokeMiterlimit="10"
              x1="274"
              y1="387.5"
              x2="293"
              y2="387.5"
            />
            <line
              fill="none"
              stroke="#01BEF0"
              strokeMiterlimit="10"
              x1="358"
              y1="387.5"
              x2="377"
              y2="387.5"
            />
            <text
              transform="matrix(1 0 0 1 324 372.3447)"
              fill="#FFFFFF"
              fontFamily="'MicrosoftYaHei-Bold'"
              fontSize="18"
              textAnchor="middle"
            >
              {center[0].value}
            </text>
            <text
              transform="matrix(1 0 0 1 324 429.3447)"
              fill="#F7931E"
              fontFamily="'MicrosoftYaHei-Bold'"
              fontSize="21"
              textAnchor="middle"
            >
              {center[0].name}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

class LeftItem extends React.Component {
  render() {
    const data = this.props.data;
    const distance = this.props.distance;
    return (
      <g transform={`translate(0, ${distance})`}>
        <g>
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M207.108,117.984
				c-1.53,2.431-3.357,4.727-5.481,6.836c-7.21,7.159-16.541,10.877-25.953,11.162"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M210.142,82.916
				c3.278,8.021,3.734,16.922,1.376,25.186"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M167.665,59.607
				c12.033-2.159,24.891,1.435,34.156,10.767c1.485,1.496,2.822,3.084,4.011,4.744"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M166.31,135.123
				c-7.019-1.521-13.693-5.021-19.13-10.497c-14.982-15.089-14.895-39.465,0.194-54.447c3.059-3.037,6.5-5.454,10.167-7.253"
          />
        </g>
        <radialGradient
          id="percent_3"
          cx="174.3901"
          cy="97.2842"
          r="32.3899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: "#3D2189", stopOpacity: "0" }} />
          <stop
            offset="0.824"
            style={{ stopColor: "#144B7E", stopOpacity: "0.824" }}
          />
          <stop offset="1" style={{ stopColor: "#0B557C" }} />
        </radialGradient>
        <circle fill="url(#percent_3)" cx="174.39" cy="97.284" r="32.39" />
        <g>
          <line
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            x1="27"
            y1="130.5"
            x2="83"
            y2="130.5"
          />
          <line
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            x1="135"
            y1="64.5"
            x2="154"
            y2="64.5"
          />
          <path
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            d="M154,129.5H25.064c-6.387,0-11.564-5.373-11.564-12v-40
				c0-6.627,5.177-12,11.564-12H152"
          />
        </g>
        <text
          transform="matrix(1 0 0 1 175 103.0879)"
          fill="#FFFFFF"
          fontFamily="'MicrosoftYaHei-Bold'"
          fontSize="18"
          textAnchor="middle"
        >
          {data.value}
        </text>
        <text
          transform="matrix(1 0 0 1 75 103.0879)"
          fill="#F7931E"
          fontFamily="'MicrosoftYaHei-Bold'"
          fontSize="18"
          textAnchor="middle"
        >
          {data.name}
        </text>
      </g>
    );
  }
}

class RightItem extends React.Component {
  render() {
    const data = this.props.data;
    const distance = this.props.distance;
    return (
      <g transform={`translate(0, ${distance})`}>
        <g>
          <path
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            d="M497,63.5h127.436c6.387,0,11.064,5.373,11.064,12v40
				c0,6.627-4.678,12-11.064,12H497"
          />
          <line
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            x1="498"
            y1="62.5"
            x2="517"
            y2="62.5"
          />
          <line
            fill="none"
            stroke="#01BEF0"
            strokeMiterlimit="10"
            x1="566"
            y1="128.5"
            x2="622"
            y2="128.5"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M449.773,67.778
				c2.07-1.992,4.396-3.782,6.965-5.318c8.719-5.215,18.67-6.582,27.875-4.595"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M438.398,101.088
				c-1.253-8.574,0.443-17.323,4.72-24.778"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M474.026,133.925
				c-12.198-0.797-23.815-7.377-30.565-18.663c-1.083-1.809-1.999-3.672-2.754-5.569"
          />
          <path
            fill="none"
            stroke="#00CAFC"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M493.496,60.949
				c6.447,3.164,12.084,8.166,16.046,14.788c10.915,18.248,4.97,41.889-13.277,52.803c-3.699,2.213-7.621,3.732-11.612,4.597"
          />
        </g>
        <radialGradient
          id="percent_4"
          cx="476.3906"
          cy="95.2842"
          r="32.3896"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: "#3D2189", stopOpacity: "0" }} />
          <stop
            offset="0.824"
            style={{ stopColor: "#144B7E", stopOpacity: "0.824" }}
          />
          <stop offset="1" style={{ stopColor: "#0B557C" }} />
        </radialGradient>
        <circle fill="url(#percent_4)" cx="476.39" cy="95.284" r="32.39" />
        <text
          transform="matrix(1 0 0 1 477 103.0879)"
          fill="#FFFFFF"
          fontFamily="'MicrosoftYaHei-Bold'"
          fontSize="18"
          textAnchor="middle"
        >
          {data.value}
        </text>
        <text
          transform="matrix(1 0 0 1 573 101.0879)"
          fill="#F7931E"
          fontFamily="'MicrosoftYaHei-Bold'"
          fontSize="18"
          textAnchor="middle"
        >
          {data.name}
        </text>
      </g>
    );
  }
}

export default PercentSvg;
