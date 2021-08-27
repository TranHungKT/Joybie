import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={78}
    height={78}
    viewBox='0 0 78 78'
    fill='none'
    {...props}
  >
    <Path
      d='M13.893 34.65l22.652-22.653a3.236 3.236 0 014.576 0L63.774 34.65c.607.606.948 1.43.948 2.288v31.02a3.236 3.236 0 01-3.236 3.237h-16.18V48.542H32.36v22.653h-16.18a3.236 3.236 0 01-3.237-3.236V36.937c0-.858.342-1.68.948-2.287z'
      fill={props.fill}
    />
  </Svg>
);

export default HomeIcon;
