import {View, Text} from 'react-native';

import styles from './DishCardsHeaderStyle';

const DishCardsHeader = ({title = 'Discover Top Dishes'}) => {
  return (
    <View style={styles.dishHeaderContainer}>
      <Text style={styles.dishHeader}>{title}</Text>
      <Text style={styles.more}>See All</Text>
    </View>
  );
};

export default DishCardsHeader;
