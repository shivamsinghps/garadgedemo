import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Bike = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 504 504"
    style={{
      enableBackground: "new 0 0 504 504",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle
      style={{
        fill: "#fd8469",
      }}
      cx={252}
      cy={252}
      r={252}
    />
    <Path
      style={{
        fill: "#334a5e",
      }}
      d="M362.3 157h-48.4v-20.4l8.7-8.7c3.3 1.9 7.1 3 11.2 3 12.4 0 22.4-10 22.4-22.4s-10-22.4-22.4-22.4-22.4 10-22.4 22.4c0 4 1.1 7.8 2.9 11L303.8 130c-1.1 1.1-1.7 2.6-1.7 4.2V157H195.5v-22.8c0-1.6-.6-3.1-1.7-4.2l-10.7-10.7c1.7-3.2 2.7-6.9 2.7-10.8 0-12.4-10-22.4-22.4-22.4s-22.4 10-22.4 22.4 10 22.4 22.4 22.4c4.2 0 8.1-1.2 11.4-3.2l8.8 8.8V157h-48.8c-4.3 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9h227.4c4.3 0 7.9-3.5 7.9-7.9s-3.5-7.9-7.8-7.9z"
    />
    <Path
      style={{
        fill: "#84dbff",
      }}
      d="M273.1 402.3h-42.3c-39 0-69.7-33.4-66.2-72.3l8-91.3c3-34.3 31.8-60.7 66.2-60.7h24.6c34 0 62.6 25.7 66.1 59.5l9.6 91.3c4.2 39.3-26.5 73.5-66 73.5z"
    />
    <Path
      style={{
        fill: "#54c0eb",
      }}
      d="M270.7 337.2h-37.6c-12.1 0-21.9 9.8-21.9 21.9v40.2c6.2 1.9 12.8 3 19.6 3h42.3c6.9 0 13.4-1.1 19.6-3v-40.2c0-12.1-9.9-21.9-22-21.9z"
    />
    <Path
      style={{
        fill: "#324a5e",
      }}
      d="M270.7 352.9h-37.6c-3.4 0-6.2 2.8-6.2 6.2v68.3c0 3.4 2.8 6.2 6.2 6.2h37.6c3.4 0 6.2-2.8 6.2-6.2v-68.3c0-3.4-2.7-6.2-6.2-6.2z"
    />
    <Circle
      style={{
        fill: "#324a5e",
      }}
      cx={248.6}
      cy={164.9}
      r={36.6}
    />
    <Circle
      style={{
        fill: "#ffd05b",
      }}
      cx={248.6}
      cy={164.9}
      r={18.3}
    />
  </Svg>
);

export default Bike;
