import * as React from "react"
import Svg, { SvgProps, Circle, Path, G } from "react-native-svg"

const CarTyre = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 480 480"
    style={{
      enableBackground: "new 0 0 480 480",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle
      style={{
        fill: "#033251",
      }}
      cx={240}
      cy={240}
      r={235.2}
    />
    <Path
      style={{
        fill: "#00233f",
      }}
      d="M240 4.8c129.6 0 235.2 105.6 235.2 235.2S369.6 475.2 240 475.2"
    />
    <Path
      style={{
        fill: "#00233f",
      }}
      d="M272 8.8c0 4-3.2 7.2-7.2 7.2h-57.6c-4 0-7.2-3.2-7.2-7.2V7.2c0-4 3.2-7.2 7.2-7.2h57.6c4 0 7.2 3.2 7.2 7.2v1.6zM272 472.8c0 4-3.2 7.2-7.2 7.2h-57.6c-4 0-7.2-3.2-7.2-7.2v-1.6c0-4 3.2-7.2 7.2-7.2h57.6c4 0 7.2 3.2 7.2 7.2v1.6zM432 100.8c-2.4 2.4-7.2 2.4-9.6 0l-43.2-43.2c-2.4-2.4-2.4-7.2 0-9.6 2.4-2.4 7.2-2.4 9.6 0L432 91.2c3.2 2.4 3.2 6.4 0 9.6zM100.8 432c-2.4 2.4-7.2 2.4-9.6 0L48 388.8c-2.4-2.4-2.4-7.2 0-9.6 2.4-2.4 7.2-2.4 9.6 0l43.2 43.2c2.4 2.4 2.4 7.2 0 9.6zM480 264.8c0 4-3.2 7.2-7.2 7.2h-2.4c-4 0-7.2-3.2-7.2-7.2v-57.6c0-4 3.2-7.2 7.2-7.2h2.4c4 0 7.2 3.2 7.2 7.2v57.6zM16 264.8c0 4-3.2 7.2-7.2 7.2H7.2c-4 0-7.2-3.2-7.2-7.2v-57.6c0-4 3.2-7.2 7.2-7.2h1.6c4 0 7.2 3.2 7.2 7.2v57.6zM379.2 432c-2.4-2.4-2.4-7.2 0-9.6l43.2-43.2c2.4-2.4 7.2-2.4 9.6 0 2.4 2.4 2.4 7.2 0 9.6L388.8 432c-2.4 3.2-6.4 3.2-9.6 0zM48 100.8c-2.4-2.4-2.4-7.2 0-9.6L91.2 48c2.4-2.4 7.2-2.4 9.6 0 2.4 2.4 2.4 7.2 0 9.6l-43.2 43.2c-2.4 2.4-7.2 2.4-9.6 0zM363.2 36.8c-1.6 3.2-5.6 5.6-8.8 4l-56.8-23.2c-3.2-1.6-5.6-5.6-4-8.8 1.6-3.2 5.6-5.6 8.8-4L360 28c3.2 1.6 4.8 5.6 3.2 8.8zM185.6 471.2c-1.6 3.2-5.6 5.6-8.8 4L120 452c-3.2-1.6-5.6-5.6-4-8.8 1.6-3.2 5.6-5.6 8.8-4l56.8 23.2c4 .8 5.6 5.6 4 8.8zM470.4 184c-3.2 1.6-8 0-8.8-4l-24-56c-1.6-3.2 0-8 4-8.8 3.2-1.6 8 0 8.8 4l23.2 56c2.4 3.2.8 7.2-3.2 8.8zM38.4 365.6c-3.2 1.6-8 0-8.8-4l-23.2-56c-1.6-3.2 0-8 4-8.8 3.2-1.6 8 0 8.8 4l23.2 56c.8 3.2-.8 7.2-4 8.8zM443.2 363.2c-3.2-1.6-5.6-5.6-4-8.8l23.2-56.8c1.6-3.2 5.6-5.6 8.8-4 3.2 1.6 5.6 5.6 4 8.8L452 360c-1.6 3.2-5.6 4.8-8.8 3.2zM8.8 185.6c-3.2-1.6-5.6-5.6-4-8.8L28 120c1.6-3.2 5.6-5.6 8.8-4 3.2 1.6 5.6 5.6 4 8.8l-23.2 56.8c-.8 4-5.6 5.6-8.8 4zM296 470.4c-1.6-3.2 0-8 4-8.8l56-24c3.2-1.6 8 0 8.8 4 1.6 3.2 0 8-4 8.8l-56 23.2c-3.2 2.4-7.2.8-8.8-3.2zM114.4 38.4c-1.6-3.2 0-8 4-8.8l56-23.2c3.2-1.6 8 0 8.8 4 1.6 3.2 0 8-4 8.8l-56 23.2c-3.2.8-7.2-.8-8.8-4z"
    />
    <Circle
      style={{
        fill: "#92a2a5",
      }}
      cx={240}
      cy={240}
      r={129.6}
    />
    <Path
      style={{
        fill: "#ced8db",
      }}
      d="M369.6 240c0 71.2-57.6 113.6-129.6 113.6S110.4 311.2 110.4 240 168 126.4 240 126.4 369.6 168.8 369.6 240z"
    />
    <Path
      style={{
        fill: "#b3c2c6",
      }}
      d="M309.6 240c0 38.4-31.2 77.6-69.6 77.6s-69.6-39.2-69.6-77.6 31.2-77.6 69.6-77.6 69.6 39.2 69.6 77.6z"
    />
    <Circle
      style={{
        fill: "#e6f1f4",
      }}
      cx={240}
      cy={240}
      r={69.6}
    />
    <Circle
      style={{
        fill: "#92a2a5",
      }}
      cx={240}
      cy={240}
      r={45.6}
    />
    <Path
      style={{
        fill: "#798c8e",
      }}
      d="M240 285.6c-24.8 0-45.6-20-45.6-45.6 0-24.8 20-45.6 45.6-45.6"
    />
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={120}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={133.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={146.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={159.2}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={320.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={333.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={346.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={240}
        cy={360}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={324.8}
        cy={155.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={315.2}
        cy={164.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={306.4}
        cy={173.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={296.8}
        cy={183.2}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={183.2}
        cy={296.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={173.6}
        cy={306.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={164.8}
        cy={315.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={155.2}
        cy={324.8}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={360}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={346.4}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={333.6}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={320.8}
        cy={240}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={159.2}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={146.4}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={133.6}
        cy={240}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={120}
        cy={240}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={324.8}
        cy={324.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={315.2}
        cy={315.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={306.4}
        cy={306.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={296.8}
        cy={296.8}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={183.2}
        cy={183.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={173.6}
        cy={173.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={164.8}
        cy={164.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={155.2}
        cy={155.2}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={285.6}
        cy={129.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={280.8}
        cy={141.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={276}
        cy={153.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={270.4}
        cy={165.6}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={209.6}
        cy={314.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={204}
        cy={326.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={199.2}
        cy={338.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={194.4}
        cy={350.4}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={350.4}
        cy={194.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={338.4}
        cy={199.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={326.4}
        cy={204}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={314.4}
        cy={208.8}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={165.6}
        cy={271.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={153.6}
        cy={276}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={141.6}
        cy={280.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={129.6}
        cy={285.6}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={350.4}
        cy={285.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={338.4}
        cy={280.8}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={326.4}
        cy={276}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={314.4}
        cy={270.4}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={165.6}
        cy={209.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={153.6}
        cy={204}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={141.6}
        cy={199.2}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={129.6}
        cy={194.4}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={285.6}
        cy={350.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={280.8}
        cy={338.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={276}
        cy={326.4}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={271.2}
        cy={314.4}
        r={3.2}
      />
    </G>
    <G
      style={{
        opacity: 0.3,
      }}
    >
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={208.8}
        cy={165.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={204}
        cy={153.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={199.2}
        cy={141.6}
        r={3.2}
      />
      <Circle
        style={{
          fill: "#798c8e",
        }}
        cx={194.4}
        cy={129.6}
        r={3.2}
      />
    </G>
    <Path
      style={{
        fill: "#516477",
      }}
      d="M240 438.4c-112 0-198.4-88.8-198.4-198.4h16c0 100.8 78.4 182.4 182.4 182.4v16zM438.4 240h-16C422.4 139.2 344 57.6 240 57.6v-16c112 0 198.4 88.8 198.4 198.4z"
    />
  </Svg>
)

export default CarTyre
