import {Dimensions, Platform, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  RestaurantContainer: {
    width: windowWidth * 0.9,
    backgroundColor: '#fffff4',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 12,
    elevation: 7,
    overflow: 'hidden',
  },
  FlatListStyle: {
    width: windowWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 0,
  },

  container: {
    height: 250,
    width: windowWidth * 0.9,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 0,
    position: 'relative',
  },
  restaurantTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
    height: 100,
  },
  restaurantTitle: {
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 600,
  },

  restaurantNameContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },

  details: {
    fontSize: 12,
    fontFamily: Fonts.REGULAR,
    color: Colors.GRAY,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 110,
    paddingBottom: 16,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 80,
    justifyContent: 'center',
    backgroundColor: Colors.BASIC_BACKGROUND,
    borderRadius: 3,
    paddingVertical: 3,
    marginHorizontal: 10,
    marginTop: 8,
  },
  restaurantLogo: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  duration: {
    marginRight: 5,
    color: Colors.PRIMARY,
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
  },
  offContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#Cdfbc0',
    width: '60%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  offText: {
    color: 'green',
    fontSize: 16,
  },
  TimeAndMoneyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  TimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
    borderRadius: 10,
    padding: 5,
  },
  TimeText: {
    color: Colors.BLACK,
    fontSize: 12,
  },
  offContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#Cdfbc0',
    width: '60%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  offText: {
    color: 'green',
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    width: 200,
    height: 50,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(180, 180, 180,0.6)',
    opacity: 0.8,
    borderRadius: 3,
    paddingVertical: 3,
    marginHorizontal: 10,
    marginTop: 8,
    position: 'absolute',
    top: 180,
    left: 0,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  priceText: {
    marginRight: 5,
    color: Colors.WHITE,
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
  },
  ArrowContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    // opacity: 0.5,
    width: 20,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;