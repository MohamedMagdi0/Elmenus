import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {Present, Star} from '../../icons';
import styles from './OfferCardStyle';

const OfferCard = ({
  title,
  poster,
  voteAverage,
  onPress,
  logo,
  duration,
  details,
  hasOffer = false,
}) => {
  return (
    <TouchableOpacity disabled={true} activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={styles.container}
        imageStyle={{borderRadius: 12}}
        source={{uri: poster}}>
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </ImageBackground>
      <View style={styles.restaurantTitleContainer}>
        <View style={styles.restaurantNameContainer}>
          <View style={styles.restaurantLogoContainer}>
            <Image source={{uri: logo}} style={styles.restaurantLogo} />
          </View>
          <View style={styles.titleAndSubTitleContainer}>
            <Text style={styles.restaurantTitle}>{title}</Text>
            <Text style={styles.details}>{details} </Text>
          </View>
        </View>
        <View style={styles.rowAndCenter}>
          <Star />
          <Text style={styles.details}>{voteAverage}</Text>
        </View>
      </View>
      {hasOffer ? (
        <View style={styles.offContainer}>
          <Present />
          <Text style={styles.offText}> Elmenus Offer For 85 LE</Text>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default OfferCard;
