import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const DotDotDot = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4z"
        fill="#000"
      />
    </Svg>
  )
}

export default DotDotDot;
