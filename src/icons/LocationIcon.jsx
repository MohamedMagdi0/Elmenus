import Svg, {Path, G, Ellipse} from 'react-native-svg';

const LocationIcon = ({
  color = '#fd5225',
  width = 16,
  height = 18,
  styles,
  ...svgProps
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none">
      <Path
        d="M14.6666 8.33333C14.6666 11.0374 11.0709 14.4441 9.16094 16.063C8.48451 16.6363 7.51545 16.6363 6.83901 16.063C4.92904 14.4441 1.33331 11.0374 1.33331 8.33333C1.33331 4.65143 4.31808 1.66667 7.99998 1.66667C11.6819 1.66667 14.6666 4.65143 14.6666 8.33333Z"
        stroke="#F02A00"
        stroke-width="1.5"
      />
      <Ellipse
        cx="8"
        cy="8.33333"
        rx="2"
        ry="2"
        stroke="#F02A00"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default LocationIcon;
