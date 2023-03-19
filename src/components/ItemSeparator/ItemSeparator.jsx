import React from 'react';
import {View} from 'react-native';

import {Colors} from '../../constants';

const ItemSeparator = ({height, width, style}) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: Colors.LIGHT_GRAY,
        ...style,
      }}
    />
  );
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeparator;
