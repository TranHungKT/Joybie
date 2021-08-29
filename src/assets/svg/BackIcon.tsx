import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function BackIcon(props: SvgProps) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      {...props}
    >
      <Path
        d="M.288 7l6.01 6.01 1.414-1.414-4.6-4.6 4.6-4.6L6.298.99.288 7z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default BackIcon
