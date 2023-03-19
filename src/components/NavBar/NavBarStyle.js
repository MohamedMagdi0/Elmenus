import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  nav: {
    height: '100%',
    backgroundColor: 'green',
  },
  navShadow: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 100,
  },
  navBackgroundImage: {
    backgroundColor: '#00000008',
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  navigator: {
    height: 120,
    backgroundColor: Colors.WHITE,
  },
  tab: {
    display: 'flex',
    height: 80,
    alignSelf: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    elevation: 50,
    paddingTop: 6,
    paddingBottom: 16,
    backgroundColor: 'transparent',
    zIndex: 0,
  },
  customTab: {
    top: -14,
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    height: 100,
  },
  label: {
    fontSize: 12,
  },
});
