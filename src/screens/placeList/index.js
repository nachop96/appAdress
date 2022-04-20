import {FlatList} from 'react-native';
import PlaceItem from '../../components/molecules/place-item';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const PlaceList = ({ navigation }) => {
    const places = useSelector(state => state.places.places);
    
    const onSelectDetail = () => {
        navigation.navigate('PlaceDetail');}

    const renderItem = ({item}) => {
        <PlaceItem
            name={item.name}
            adress='123 calle,ciudad'
            onSelect={() => onSelectDetail()}
        />
    }
    return (
        <FlatList 
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}

        />
            
        
    )
}

    export default PlaceList;