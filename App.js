import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from './src/pages';
import {Colors} from './src/constants';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.BASIC_BACKGROUND} />
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
