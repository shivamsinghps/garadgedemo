import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CarPaint = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fill: "#ea5a7d",
      }}
      d="M503.214 189.335C473.876 80.279 374.321 0 256 0 114.616 0 0 114.616 0 256c0 140.631 113.401 254.758 253.745 255.971l249.469-322.636z"
    />
    <Path
      style={{
        fill: "#e0315b",
      }}
      d="M512 256c0-23.063-3.069-45.408-8.786-66.665L402.922 89.043l-25.266 52.5 48.17.948-.612 89.11L256 256l-38.957 219.27 36.701 36.702c.752.007 1.501.029 2.255.029C397.384 512 512 397.384 512 256z"
    />
    <Path
      style={{
        fill: "#a2b1b7",
      }}
      d="M267.129 322.783h-22.261v-76.625l180.315-22.26v-68.072H255.999v-22.261h191.444V243.58l-180.314 22.26z"
    />
    <Path
      style={{
        fill: "#feeb5c",
      }}
      d="M402.922 89.043H256l-22.261 55.653L256 200.348h146.922z"
    />
    <Path
      style={{
        fill: "#fff",
      }}
      d="M109.078 89.043H256v111.304H109.078z"
    />
    <Path
      style={{
        fill: "#008ccb",
      }}
      d="M294.957 300.522h-61.218L256 475.27h38.957z"
    />
    <Path
      style={{
        fill: "#3aaadc",
      }}
      d="M217.043 300.522H256V475.27h-38.957z"
    />
    <Path
      style={{
        fill: "#3aaadc",
      }}
      d="M306.087 289.391H256l-11.13 11.131 11.13 11.13h50.087z"
    />
    <Path
      style={{
        fill: "#74c8ee",
      }}
      d="M205.913 289.391H256v22.261h-50.087z"
    />
    <Path
      style={{
        fill: "#fff296",
      }}
      d="M131.339 155.826H153.6v22.261h-22.261zM164.73 122.435h22.261v22.261H164.73z"
    />
  </Svg>
)

export default CarPaint
