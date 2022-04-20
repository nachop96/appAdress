import {Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../../constants';
import React from 'react';
import {styles} from './styles';

const PlaceItem = ({name, address, onSelect}) => {
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
      
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;