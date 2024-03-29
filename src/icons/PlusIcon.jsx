import Svg, {Path, G} from 'react-native-svg';

const PlusIcon = ({
  color = '#F13939',
  width = 17,
  height = 17,
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
      viewBox="0 0 512 512"
      style="enable-background:new 0 0 512 512"
      class="">
      <G>
        <Path
          d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
          fill={color}
          data-original="#000000"
          class=""></Path>
      </G>
    </Svg>
  );
};

export default PlusIcon;
