import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
 
export default function CustomModal({
  modalProps,
  toggleModal,
  wraperStyle,
  children,
  isVisible
}) {

  return (
    <View style={{flex: 1}}>
      <Modal
         isVisible={isVisible}
        {...modalProps}
        onSwipeComplete={toggleModal}
        style={{flex: 1,}}>
        <View style={[{...styles.wraperStyle}, wraperStyle]}>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wraperStyle: {
     borderRadius:20,
     backgroundColor: appColors.white,
     padding:30
    },
  handleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: scale(3),
  },
  handle: {
    backgroundColor: appColors.black,
    height: scale(5),
    width: '40%',
    borderRadius: scale(5),
  },
});
