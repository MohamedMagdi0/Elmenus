import Svg, {Path} from 'react-native-svg';

const SearchIcon = ({
  color = '#a9acae',
  width = 17,
  height = 17,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill-rule="evenodd">
      <Path fill="#80cbc4" opacity="0" d="M-4-3h24v24H-4z" />
      <Path
        d="M15.98 14.78L13 11.8c1.03-1.3 1.57-2.87 1.57-4.5A7.31 7.31 0 0 0 7.28 0 7.3 7.3 0 0 0 0 7.33a7.31 7.31 0 0 0 7.3 7.3 7.2 7.2 0 0 0 4.5-1.57l2.97 2.97a.81.81 0 0 0 .6.25.81.81 0 0 0 .6-.25c.35-.37.35-.9 0-1.25zm-3.15-7.43c0 3.05-2.47 5.55-5.52 5.55s-5.55-2.5-5.55-5.55S4.22 1.8 7.3 1.8a5.5 5.5 0 0 1 5.53 5.55z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
