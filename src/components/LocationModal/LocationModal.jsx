import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../../constants';
import {NavigationArrow, PlusIcon, SearchIcon, TimerIcon} from '../../icons';

import {ItemSeparator} from '..';
import styles from './LocationModalStyle';

const LocationModal = ({isModalVisible, setModalVisible, onModalCancel}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={e => setModalVisible(prev => !prev)}>
      <TouchableWithoutFeedback onPress={onModalCancel}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            style={{zIndex: 99}}
            onPress={e => {
              e.preventDefault();
              setModalVisible(true);
            }}>
            <View style={styles.modalView}>
              <View style={styles.toggleLine}></View>
              <View style={styles.modalTitleWrap}>
                <Text style={styles.modalTitle}>
                  ChooseYourDeliveryLocation
                </Text>

                <View style={styles.TextInputContainerModal}>
                  <View style={styles.SearchIconContainerModal}>
                    <SearchIcon />
                  </View>
                  <TextInput
                    style={styles.modalTextInputStyle}
                    placeholder={` Search For your Address `}
                    placeholderTextColor={Colors.LIGHT_GRAY}
                    placeholderStyle={{color: 'red'}}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.buttonsContainer}>
                <NavigationArrow />
                <Text style={styles.modalTitle}>
                  Deliver to my Current location
                </Text>
              </TouchableOpacity>
              <ItemSeparator
                height={1}
                width={'110%'}
                style={{marginVertical: 10}}
              />
              <Text style={styles.recentLocationTitle}>
                Your recent delivery location
              </Text>
              <TouchableOpacity style={styles.recentLocationContainer}>
                <TimerIcon />
                <Text style={styles.recentLocations}>Semouha, Semouha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.recentLocationContainer}>
                <TimerIcon />
                <Text style={styles.recentLocations}>Semouha, Semouha</Text>
              </TouchableOpacity>
              <ItemSeparator
                height={1}
                width={'110%'}
                style={{marginVertical: 10}}
              />
              <TouchableOpacity style={styles.anotherLocationContainer}>
                <PlusIcon />
                <Text style={styles.anotherLocationText}>
                  Choose another location
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LocationModal;
