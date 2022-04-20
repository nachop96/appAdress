import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import { COLORS } from '../../constants';
import { NavigationContainer } from '@react-navigation/native';
import {placeActions} from '../../store/action';
import { styles } from './styles';
import {useDispatch} from 'react-redux';

const NewPlace = ({navigation}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    
    const handleNameChange = (text) => setName(text);
    const handleSavePlace = () => {
        dispatch(placeActions.addPlace(name));
        navigation.navigate('Place');
    };


    return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Nombre:</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={handleNameChange}
            value={name}
          />
          <Button
            title="Guardar lugar"
            onPress={() => handleSavePlace()}
            color={COLORS.primaryColor}
          />
        </View>
      </ScrollView>
    );
}

    export default NewPlace;