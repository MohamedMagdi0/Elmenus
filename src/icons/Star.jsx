import Svg, {Circle, Path, G} from 'react-native-svg';

const Star = ({
  color = '#fd5225',
  width = 12,
  height = 12,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      height={height}
      width={width}
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 24 24"
      style={styles}
      {...svgProps}>
      <G>
        <Path
          fill={color}
          d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
          dataOriginal={color}></Path>
      </G>
    </Svg>
  );
};

export default Star;
