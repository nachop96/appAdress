import { COLORS } from '../constants';
import HeaderButton from '../components/atoms/header-button';
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
                    backgroundColor: COLORS.primaryColor
                },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <mainStack.Screen 
                    name="Place"
                    component={PlaceList}
                    options={({ navigation }) => (
                        {
                            title: 'Places',
                            headerRight: () => <HeaderButton navigation={navigation} />
                        }
                    )}/>
                <mainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: 'Place Detailss' }}/>
                <mainStack.Screen name="NewPlace" component={NewPlace} options={{ title: 'New Place' }}/>
                <mainStack.Screen name="Map" component={Map} options={{ title: 'Maps'  }}/>
            </mainStack.Navigator>
        
    )

}

export default MainStackNavigator;