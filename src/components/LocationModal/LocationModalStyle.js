import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.75)',
    flex: 1,
    flexDirection: 'column-reverse',
  },

  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: '5%',

    height: 400,
  },
  imageStyle: {
    flex: 1,
    aspectRatio: 0.2,
    resizeMode: 'contain',
    flexDirection: 'column',
    alignItems: 'center',
  },
  starsContainer: {
    width: 150,
    height: 100,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  modalTitle: {
    color: 'black',
    fontSize: 16.5,
    marginVertical: 5,
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },

  modalTitleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },

  TextInputContainerModal: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginVertical: 10,
  },
  SearchIconContainerModal: {
    height: '100%',
    position: 'absolute',
    top: 17,
    left: 10,
    zIndex: 1,
  },
  modalTextInputStyle: {
    borderWidth: 0,
    borderColor: Colors.GRAY,
    borderRadius: 20,
    height: 50,
    backgroundColor: Colors.EXTRA_LIGHT_GRAY,
    width: '100%',
    paddingLeft: 30,
  },
  recentLocationTitle: {
    fontSize: 12,
    alignSelf: 'flex-start',
    color: Colors.GRAY,
    marginVertical: 10,
  },
  recentLocationContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '55%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
  },
  recentLocations: {color: 'black', fontSize: 16.5},
  anotherLocationContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '55%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
  },
  anotherLocationText: {
    color: Colors.PRIMARY,
    fontSize: 15,
  },
});

export default styles;
