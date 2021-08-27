import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ProfileIcon = (props: SvgProps) => (
  <Svg
    width={78}
    height={78}
    viewBox='0 0 78 78'
    {...props}
  >
    <Path
      d='M22.653 25.89c0-8.937 7.244-16.181 16.18-16.181 8.937 0 16.18 7.244 16.18 16.18s-7.243 16.18-16.18 16.18c-8.936 0-16.18-7.244-16.18-16.18zm16.18 9.707c5.362 0 9.709-4.346 9.709-9.708s-4.347-9.708-9.709-9.708c-5.361 0-9.708 4.346-9.708 9.708s4.346 9.708 9.708 9.708zM20.527 52.888a25.889 25.889 0 00-7.583 18.307h6.473a19.417 19.417 0 1138.833 0h6.472a25.889 25.889 0 00-44.195-18.307z'
      fill={props.fill}
    />
  </Svg>
);

export default ProfileIcon;
