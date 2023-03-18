import Svg, {Path, G} from 'react-native-svg';

const RightArrow = ({
  color = '#fff',
  width = 20,
  height = 20,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      height={height}
      width={width}
      x="0"
      y="0"
      viewBox="0 0 6.35 6.35"
      style="enable-background:new 0 0 512 512"
      class="">
      <G>
        <Path
          d="M2.258 1.315a.265.265 0 0 0-.174.469L3.703 3.17l-1.62 1.386a.265.265 0 1 0 .345.4L4.28 3.373a.265.265 0 0 0 0-.403L2.428 1.382a.265.265 0 0 0-.17-.067z"
          fill={color}
          data-original="#000000"
          class=""></Path>
      </G>
    </Svg>
  );
};

export default RightArrow;
