import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToFahrenheit = () => {
    const fahrenheitValue = parseFloat(celsius) * 1.8 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const convertToCelsius = () => {
    const celsiusValue = (parseFloat(fahrenheit) - 32) / 1.8;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Celsius"
          keyboardType="numeric"
          value={celsius}
          onChangeText={setCelsius}
        />
        <TouchableOpacity style={styles.convertButton} onPress={convertToFahrenheit}>
          <Text style={styles.convertButtonText}>&#x2192;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Fahrenheit:</Text>
        <Text style={styles.resultText}>{fahrenheit}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Fahrenheit"
          keyboardType="numeric"
          value={fahrenheit}
          onChangeText={setFahrenheit}
        />
        <TouchableOpacity style={styles.convertButton} onPress={convertToCelsius}>
          <Text style={styles.convertButtonText}>&#x2190;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Celsius:</Text>
        <Text style={styles.resultText}>{celsius}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  convertButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  convertButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 18,
    marginRight: 8,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TemperatureConverter;
