import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Trignometry from './src/components/Trignometry';
import FactorialApp from './src/components/FactorialApp';
import DistanceOfLine from './src/components/DistanceOfLine';
import TemperatureConverter from './src/components/TemperatureConverter';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const handlePressTrignometry = () => {
    navigation.navigate('Trignometry'); // Navigate to Trignometry screen
  };

  const handlePressDistanceOfLine = () => {
    navigation.navigate('DistanceOfLine'); // Navigate to DistanceOfLine screen
  };

  const handlePressFactorialApp = () => {
    navigation.navigate('FactorialApp'); // Navigate to FactorialApp screen
  };

  const handlePressTemperatureConverter = () => {
    navigation.navigate('TemperatureConverter'); // Navigate to TemperatureConverter screen
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressTrignometry}>
        <View style={styles.buttonContainer}>
          <Image
            source={require('./src/images/trignometry.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Trignometry Formulae</Text>
       
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressFactorialApp}>
        <View style={styles.buttonContainer}>
          <Image
            source={require('./src/images/image.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Factorial Calculator</Text>
         
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressDistanceOfLine}>
        <View style={styles.buttonContainer}>
          <Image
            source={require('./src/images/distance.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Distance of Line</Text>
          
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressTemperatureConverter}>
        <View style={styles.buttonContainer}>
          <Image
            source={require('./src/images/temp.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Temperature Converter</Text>
      
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const App = () => {
  const [showTrignometry, setShowTrignometry] = useState(false);
  const [showFactorialApp, setShowFactorialApp] = useState(false);
  const [showDistanceOfLine, setShowDistanceOfLine] = useState(false);
  const [showTemperatureConverter, setShowTemperatureConverter] =
    useState(false);

  const handleGoBack = () => {
    setShowTrignometry(false);
    setShowFactorialApp(false);
    setShowDistanceOfLine(false);
    setShowTemperatureConverter(false);
  };

  useEffect(() => {
    const backAction = () => {
      if (
        showTrignometry ||
        showFactorialApp ||
        showDistanceOfLine ||
        showTemperatureConverter
      ) {
        handleGoBack();
        return true; // Prevent default back button behavior
      }
      return false; // Allow default back button behavior (app exit)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [
    showTrignometry,
    showFactorialApp,
    showDistanceOfLine,
    showTemperatureConverter,
  ]);

  return (
    <View style={styles.screenContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Math Explorer"
            component={HomeScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Trignometry"
            component={Trignometry}
            options={{headerTitle: 'Trignometry', headerBackTitle: 'Back'}}
          />
          <Stack.Screen
            name="FactorialApp"
            component={FactorialApp}
            options={{
              headerTitle: 'Factorial Calculator',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name="DistanceOfLine"
            component={DistanceOfLine}
            options={{headerTitle: 'Distance of Line', headerBackTitle: 'Back'}}
          />
          <Stack.Screen
            name="TemperatureConverter"
            component={TemperatureConverter}
            options={{
              headerTitle: 'Temperature Converter',
              headerBackTitle: 'Back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Set desired background color
  },
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
 
  buttonIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonIcon: {
    width: 70,
    height: 30,
  },
});

export default App;
