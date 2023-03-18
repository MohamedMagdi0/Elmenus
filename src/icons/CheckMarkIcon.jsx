import Svg, {Path, G} from 'react-native-svg';

const CheckMarkIcon = ({
  color = '#34BF2A',
  width = 15,
  height = 15,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      version="1.1"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 408.576 408.576"
      style={styles}
      {...svgProps}>
      <G>
        <Path
          d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z"
          fill={color}
          data-original="#000000"></Path>
      </G>
    </Svg>
  );
};

export default CheckMarkIcon;
