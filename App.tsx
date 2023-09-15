import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from './src/navigation/Drawer'; // Import the Drawer component you created
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Product from './src/screens/Product';


// Create a Drawer Navigator
const DrawerNavigator = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator
                drawerContent={(props) => <Drawer {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#2874F0",
                    },
                    headerTintColor: '#fff',
                }}
            >
                <DrawerNavigator.Screen name="Home" component={Home} />
                <DrawerNavigator.Screen name="Details" component={Detail} />
                <DrawerNavigator.Screen name="Product" component={Product} />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

export default App;
