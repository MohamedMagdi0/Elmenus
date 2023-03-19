import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 320,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
    resizeMode: 'contain',
  },
  restaurantTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  restaurantTitle: {
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.BLACK,

    fontSize: 16,
    fontWeight: 600,
  },
  titleAndSubTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
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

    width: 35,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#Cdfbc0',
    width: '65%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  offText: {
    color: 'green',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default styles;
