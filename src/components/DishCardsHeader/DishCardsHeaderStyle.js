import {StyleSheet} from 'react-native';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/Fonts';

const styles = StyleSheet.create({
  dishHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 15,
    alignSelf: 'center',
  },
  dishHeader: {
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 800,
  },
  more: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
  },
});
export default styles;
