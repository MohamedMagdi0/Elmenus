import {TouchableOpacity, Text, Image} from 'react-native';

import styles from './DishCardStyle';

const DishCard = ({originalName, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{uri: image}}
        resizeMode={image ? 'cover' : 'contain'}
        style={styles.image}
      />
      <Text style={styles.originalName} numberOfLines={2}>
        {originalName}
      </Text>
    </TouchableOpacity>
  );
};

export default DishCard;
