import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const FactorialApp = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      let fact = 1;
      for (let i = 2; i <= num; i++) {
        fact *= i;
      }
      setFactorial(fact);
    } else {
      setFactorial(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Factorial Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={text => setNumber(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calculateFactorial}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {factorial !== null && (
        <Text style={styles.resultText}>
          Factorial: {factorial}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    borderRadius: 5, // Border radius
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default FactorialApp;
