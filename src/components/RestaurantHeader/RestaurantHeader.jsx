import React, {useEffect, useState} from 'react';
import {Switch, Text, View} from 'react-native';

import {Colors} from '../../constants';
import {CheckMarkIcon} from '../../icons';
import styles from './RestaurantHeaderStyle';
import {RESTAURANTS_MOCK} from '../../pages/Home/config';

const RestaurantHeader = ({restaurants, setRestaurants}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (isEnabled) {
      const onlineRestaurants = restaurants.filter(rest => rest.isOnline);

      setRestaurants(onlineRestaurants);
    } else {
      setRestaurants(RESTAURANTS_MOCK);
    }
  }, [isEnabled]);

  return (
    <View style={styles.RestaurantHeaderContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.RestaurantHeader}>Restaurants </Text>
        <Text style={styles.RestaurantNumber}>{`(${restaurants.length})`}</Text>
      </View>
      <View style={styles.RightHandContainer}>
        <View style={styles.CheckMarkContainer}>
          <CheckMarkIcon />
          <Text style={styles.orderText}>ORDER ONLINE</Text>
        </View>
        <View style={styles.container}>
          <Switch
            trackColor={{false: '#767577', true: '#F1393955'}}
            thumbColor={isEnabled ? Colors.PRIMARY : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default RestaurantHeader;
