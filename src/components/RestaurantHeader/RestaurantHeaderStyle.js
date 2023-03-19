import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  RestaurantHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    width: windowWidth * 0.9,
    marginVertical: 20,
    zIndex: 99,
    alignSelf: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  RestaurantHeader: {
    color: Colors.BLACK,
    fontSize: 17,
    fontWeight: 800,
  },
  RestaurantNumber: {
    color: Colors.GRAY,
  },
  RightHandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 160,
  },
  CheckMarkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 110,
  },
  orderText: {
    color: '#40B538',
    fontSize: 13,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
