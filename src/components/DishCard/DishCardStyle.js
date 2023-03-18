import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  originalName: {
    width: 80,
    color: Colors.BLACK,
    fontFamily: Fonts.EXTRA_LIGHT,
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default styles;
