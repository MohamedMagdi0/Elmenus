import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  appTitle: {
    fontSize: 16,
    fontFamily: Fonts.EXTRA_LIGHT,
    color: Colors.GRAY,
  },
  LocationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  placeTitle: {
    fontSize: 20,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY,
  },
  TextInputContainerRow: {
    display: 'flex',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  TextInputContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  SearchIconContainer: {
    height: '100%',
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 1,
  },
  ButtonContainerStyle: {
    width: '10%',
    borderRightColor: Colors.EXTRA_LIGHT_GRAY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonStyle: {
    backgroundColor: Colors.EXTRA_LIGHT_GRAY,
    height: 45,
    borderWidth: 0,
    padding: 2,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  ButtonTextStyle: {
    color: Colors.PRIMARY,
    fontSize: 22,
    zIndex: 99,
  },
  TextInputStyle: {
    borderWidth: 0,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    height: 45,
    backgroundColor: Colors.EXTRA_LIGHT_GRAY,
    width: '100%',
    paddingLeft: 30,
  },
});

export default styles;
