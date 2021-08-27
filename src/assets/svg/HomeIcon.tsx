import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.49 20H16.5v-7a1 1 0 00-1-1h-6a1 1 0 00-1 1v7h-3l.007-8.417 6.992-7.151 7.002 7.192L19.49 20zm-8.99 0h4v-6h-4v6zm10.425-9.815l-7.71-7.884c-.376-.385-1.052-.385-1.43 0l-7.71 7.885a2.075 2.075 0 00-.574 1.438V20c0 1.103.847 2 1.888 2H19.61c1.042 0 1.89-.897 1.89-2v-8.376c0-.539-.21-1.063-.576-1.439z"
    />
  </Svg>
);

export default HomeIcon;
