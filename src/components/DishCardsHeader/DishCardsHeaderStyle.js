import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

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
    color: Colors.BLACK,
    fontFamily: Fonts.BOLD,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 800,
  },
  more: {
    color: Colors.PRIMARY,
    fontFamily: Fonts.REGULAR,
    fontSize: 15,
  },
});
export default styles;
