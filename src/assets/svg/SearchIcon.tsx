import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={78}
    height={78}
    viewBox='0 0 78 78'
    fill='none'
    {...props}
  >
    <Path
      d='M60.44 63.45L41.948 44.953c-8.228 5.849-19.565 4.418-26.08-3.292-6.517-7.71-6.038-19.126 1.1-26.264 7.136-7.14 18.554-7.621 26.266-1.105 7.71 6.516 9.142 17.853 3.293 26.081L65.02 58.871l-4.576 4.576-.003.003zM30.696 16.18a12.944 12.944 0 109.44 4.09l1.957 1.942-2.207-2.2-.039-.039a12.854 12.854 0 00-9.151-3.793z'
      fill={props.fill}
    />
  </Svg>
);

export default SearchIcon;
