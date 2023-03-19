import {View, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../../constants';
import {
  DineOut,
  DeliveryIcon,
  RestaurantIcon,
  MeIcon,
  Receipt,
} from '../../icons';
import styles from './NavBarStyle';
import {TABS} from './config';

const Tab = createBottomTabNavigator();

const NavBar = ({}) => {
  const screenOptionsHandler = ({route}) => ({
    tabBarIcon: ({focused, color}) => {
      color = focused ? Colors.PRIMARY : color;
      const styleProps = {
        width: '21',
        height: '21',
        translateY: 0,
        transform: [{translateY: Platform.OS === 'ios' ? -6 : 0}],
      };

      const RestaurantIconProps = {
        color: color,
        translateX: 5,
        translateY: -4,
        transform: [
          {translateX: Platform.OS === 'ios' ? 3 : 0},
          {translateY: Platform.OS === 'ios' ? -10 : 0},
        ],
      };

      switch (route.name) {
        case 'Delivery':
          return <DeliveryIcon color={color} width={50} height={50} />;

        case 'Restaurants':
          return <RestaurantIcon {...RestaurantIconProps} />;
        case 'Dine out':
          return <DineOut color={color} />;
        case 'My Orders':
          return <Receipt stroke={color} color={color} />;
        case 'Me':
          return <MeIcon stroke={color} color={color} />;
        default:
          return null;
      }
    },
  });

  return (
    <View style={styles.nav}>
      <View style={styles.navShadow}></View>
      <Tab.Navigator
        activeColor={Colors.PRIMARY}
        inactiveColor={Colors.YELLOW}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#000',
          style: {
            backgroundColor: '#CE4418',
            paddingBottom: 3,
          },
        }}
        screenOptions={screenOptionsHandler}>
        {TABS.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={tab.component} />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default NavBar;
