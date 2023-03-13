import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './DishCardStyle';
const DishCard = ({originalName, image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        resizeMode={image ? 'cover' : 'contain'}
        style={styles.image}
      />
      <Text style={styles.originalName} numberOfLines={2}>
        {originalName}
      </Text>
    </View>
  );
};

export default DishCard;
