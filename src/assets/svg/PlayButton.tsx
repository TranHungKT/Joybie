import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const PlayButton = (props: SvgProps) => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <Path
        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-8-9.828A8 8 0 104 12v.172zm6 4.328v-9l6 4.5-6 4.5z'
        fill='#fff'
      />
    </Svg>
  )
}

export default PlayButton
