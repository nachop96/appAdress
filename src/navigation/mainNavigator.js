import { COLORS } from '../constants';
import Map from '../screens/map';
import NewPlace from '../screens/newPlace';
import PlaceDetail from '../screens/placeDetail';
import PlaceList from '../screens/placeList';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const mainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <mainStack.Navigator
        initialRouteName="Place"
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.backgroundColor},
            headerTintColor: COLORS.white,
            headerTitleStyle: {
                fontWeight: 'bold'}
        }}>

        <mainStack.Screen name="Place" component={PlaceList} options={{ title: 'Place'}} />
        <mainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: 'PlaceDetails'}} />
        <mainStack.Screen name="NewPlace" component={NewPlace} options={{ title: 'NewPlace'}} />
        <mainStack.Screen name="Map" component={Map} options={{ title: 'Mapa'}} />




        </mainStack.Navigator>
        
    )

}

export default MainStackNavigator;