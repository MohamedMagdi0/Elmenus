import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BASIC_BACKGROUND,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.955,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: Fonts.REGULAR,
  },

  soonContainer: {
    marginBottom: 50,
  },
});

export default styles;
