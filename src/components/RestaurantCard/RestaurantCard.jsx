import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import {Colors} from '../../constants';
import {Star, Present, TimerIcon, DeliveryIcon, RightArrow} from '../../icons';
import {ItemSeparator} from '..';
import styles from './RestaurantCardStyle';

const windowWidth = Dimensions.get('window').width;

const RestaurantCard = ({
  title,
  poster,
  voteAverage,
  voteCount,
  onPress,
  logo,
  duration,
  details,
  price = 85,
  hasOffer = true,
}) => {
  const rates = [1, 2, 3, 4, 5];

  return (
    <TouchableOpacity
      style={styles.RestaurantContainer}
      disabled={true}
      activeOpacity={0.8}
      onPress={onPress}>
      <FlatList
        snapToAlignment="center"
        decelerationRate={'fast'}
        snapToInterval={windowWidth * 0.9}
        style={styles.FlatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={poster}
        renderItem={({item}) => (
          <Image style={styles.container} source={{uri: item}} />
        )}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.priceText}>Fried Chicken</Text>

          <Text style={styles.priceText}>1000 EGP</Text>
        </View>
        <View style={styles.ArrowContainer}>
          <RightArrow />
        </View>
      </View>

      <View style={styles.restaurantTitleContainer}>
        <View style={styles.restaurantNameContainer}>
          <Image source={{uri: logo}} style={styles.restaurantLogo} />
          <View>
            <Text style={styles.restaurantTitle}>{title}</Text>
            <Text style={styles.details}>{details} </Text>
          </View>
        </View>
        <View style={styles.rowAndCenter}>
          {rates.map(rate => (
            <Star color="gold" />
          ))}
          <Text style={styles.details}>{`${voteAverage}(${voteCount})`}</Text>
        </View>
      </View>
      {hasOffer ? (
        <View style={styles.offContainer}>
          <Present />
          <Text style={styles.offText}>Elmenus Offer For {price} LE</Text>
        </View>
      ) : (
        <></>
      )}
      <ItemSeparator
        width={windowWidth * 0.9}
        height={1}
        style={{
          backgroundColor: Colors.EXTRA_LIGHT_GRAY,
        }}
      />
      <View style={styles.TimeAndMoneyContainer}>
        <View style={styles.TimeContainer}>
          <TimerIcon width={17} height={17} color={Colors.BLACK} />
          <Text style={styles.TimeText}>45mins</Text>
        </View>
        <View style={styles.TimeContainer}>
          <DeliveryIcon width={30} height={30} color={Colors.BLACK} />
          <Text style={styles.TimeText}>{price} LE</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
