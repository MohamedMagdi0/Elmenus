import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Path, G} from 'react-native-svg';

const Present = ({
  color = '#008000',
  width = 18,
  height = 18,
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
          d="M467 120h-61.041C415.397 107.456 421 91.871 421 75c0-41.355-33.645-75-75-75-24.911 0-43.28 8.925-57.809 28.087C276.036 44.119 267.148 66.503 256 94.785c-11.148-28.283-20.036-50.666-32.191-66.698C209.28 8.925 190.911 0 166 0c-41.355 0-75 33.645-75 75 0 16.871 5.603 32.456 15.041 45H45c-24.813 0-45 20.187-45 45v30c0 19.555 12.541 36.228 30 42.42V467c0 24.813 20.187 45 45 45h362c24.813 0 45-20.187 45-45V237.42c17.459-6.192 30-22.865 30-42.42v-30c0-24.813-20.187-45-45-45zm-183.466-13.26C306.513 48.442 315.249 30 346 30c24.813 0 45 20.187 45 45s-20.187 45-45 45h-67.713c1.838-4.615 3.591-9.058 5.247-13.26zM166 30c30.751 0 39.487 18.442 62.466 76.74 1.656 4.202 3.409 8.645 5.247 13.26H166c-24.813 0-45-20.187-45-45s20.187-45 45-45zm30 452H75c-8.271 0-15-6.729-15-15V240h136v242zm0-272H45c-8.271 0-15-6.729-15-15v-30c0-8.271 6.729-15 15-15h151v60zm90 272h-60V150h60v332zm166-15c0 8.271-6.729 15-15 15H316V240h136v227zm30-272c0 8.271-6.729 15-15 15H316v-60h151c8.271 0 15 6.729 15 15v30z"
          fill={color}
          data-original="#000000"></Path>
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Present;
