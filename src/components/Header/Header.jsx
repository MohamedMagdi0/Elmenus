import {useState} from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';

import {Colors} from '../../constants';
import {Filter, LocationIcon, SearchIcon} from '../../icons';

import {LocationModal} from '..';
import styles from './HeaderStyles';

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onModalCancel = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appTitle}>Deliver To</Text>
      <Pressable style={styles.LocationContainer} onPress={showModal}>
        <LocationIcon />
        <Text style={styles.placeTitle}>Semouha, Semouha</Text>
      </Pressable>
      <View style={styles.TextInputContainerRow}>
        <View style={styles.TextInputContainer}>
          <View style={styles.SearchIconContainer}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.TextInputStyle}
            placeholder={` Find Restaurant Or Dish`}
            placeholderTextColor={Colors.LIGHT_GRAY}
            placeholderStyle={{color: 'red'}}
          />
        </View>
        <View style={styles.ButtonContainerStyle}>
          <LocationModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            onModalCancel={onModalCancel}
          />
          <Pressable style={styles.ButtonStyle} onPress={showModal}>
            <Filter width={30} height={20} color={Colors.PRIMARY} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
