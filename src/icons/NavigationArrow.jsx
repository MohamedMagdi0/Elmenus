import Svg, {Path, G} from 'react-native-svg';

const NavigationArrow = ({
  color = '#F13939',
  width = 15,
  height = 15,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 32 32"
      style="enable-background:new 0 0 512 512"
      class="">
      <G>
        <Path
          fill-rule="evenodd"
          d="M30.418 1.582a1.989 1.989 0 0 0-2.134-.444L2.259 11.39a1.987 1.987 0 0 0 .211 3.768l11.318 3.054 3.054 11.318a1.987 1.987 0 0 0 3.768.211L30.862 3.716a1.989 1.989 0 0 0-.444-2.134zM18.763 28.973l-3.046-11.288a1.989 1.989 0 0 0-1.4-1.4l-11.29-3.048L28.99 3.01z"
          fill={color}
          data-original="#000000"
          class=""></Path>
      </G>
    </Svg>
  );
};

export default NavigationArrow;
