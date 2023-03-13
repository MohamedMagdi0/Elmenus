import React from 'react';
import {View, Text} from 'react-native';
import styles from './DishCardsHeaderStyle';

const DishCardsHeader = () => {
  return (
    <View style={styles.dishHeaderContainer}>
      <Text style={styles.dishHeader}>Discover Top Dishes</Text>
      <Text style={styles.more}>See All</Text>
    </View>
  );
};
export default DishCardsHeader;
