import {useState} from 'react';
import {View, ScrollView, FlatList, Alert, Dimensions} from 'react-native';

import {
  ItemSeparator,
  Header,
  DishCard,
  DishCardsHeader,
  OfferCard,
  RestaurantHeader,
  NavBar,
  RestaurantCard,
} from '../../components';
import {
  DISH_CATEGORIES_MOCK,
  RESTAURANTS_MOCK,
  TOP_RESTAURANTS_MOCK,
} from './config';
import styles from './HomeScreenStyle';
const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANTS_MOCK);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          <View style={styles.headerContainer}>
            <View style={styles.soonContainer}>
              <DishCardsHeader />
              <FlatList
                snapToAlignment="center"
                decelerationRate={'fast'}
                snapToInterval={windowWidth * 0.9}
                data={DISH_CATEGORIES_MOCK}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                ListHeaderComponent={() => <ItemSeparator width={20} />}
                ListFooterComponent={() => <ItemSeparator width={20} />}
                renderItem={({item}) => (
                  <DishCard
                    originalName={item.type}
                    image={item.img}
                    onPress={() => Alert.alert('Hello to Menus')}
                  />
                )}
              />
            </View>
          </View>
          <DishCardsHeader title={'Tasty Offers'} />
          <FlatList
            snapToAlignment="center"
            decelerationRate={'fast'}
            snapToInterval={347}
            data={TOP_RESTAURANTS_MOCK}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={20} />}
            renderItem={({item}) => (
              <OfferCard
                title={item.name}
                voteAverage={item.rating}
                poster={item.coverImage}
                PRIMARYLess={false}
                logo={item.logoImage}
                duration={item.duration}
                details={item.details}
                onPress={() => Alert.alert('Hello to Menus')}
                hasOffer={true}
              />
            )}
          />
          <DishCardsHeader title={'Top Rated'} />
          <FlatList
            data={TOP_RESTAURANTS_MOCK}
            snapToAlignment="center"
            decelerationRate={'fast'}
            snapToInterval={347}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={20} />}
            renderItem={({item}) => (
              <OfferCard
                title={item.name}
                voteAverage={item.rating}
                poster={item.coverImage}
                PRIMARYLess={false}
                logo={item.logoImage}
                duration={item.duration}
                details={item.details}
                onPress={() => Alert.alert('Hello to Menus')}
                hasOffer={false}
              />
            )}
          />
        </View>
        <RestaurantHeader
          restaurants={restaurants}
          setRestaurants={setRestaurants}
        />

        <FlatList
          data={restaurants}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          // ListHeaderComponent={() => <ItemSeparator width={20} />}
          // ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <RestaurantCard
              title={item.name}
              voteAverage={item.rating}
              poster={item.coverImage}
              PRIMARYLess={false}
              logo={item.logoImage}
              hasOffer={item.hasOffer}
              {...item}
            />
          )}
        />
      </ScrollView>
      <View>
        <NavBar />
      </View>
    </View>
  );
};

export default HomeScreen;
