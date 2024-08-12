import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';

const TrigonometryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalExample, setModalExample] = useState('');

  const handleButtonPress = (title, text, example) => {
    setModalTitle(title);
    setModalText(text);
    setModalExample(example);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const trigonometricFormulas = [
    {
      title: 'Sine Function',
      text: 'sin(θ) = opposite / hypotenuse',
      example: 'Example: In a right triangle, if the length of the side opposite to the angle θ is 5 units and the length of the hypotenuse is 10 units, then sin(θ) = 5/10 = 0.5.',
    },
    {
      title: 'Cosine Function',
      text: 'cos(θ) = adjacent / hypotenuse',
      example: 'Example: In a right triangle, if the length of the side adjacent to the angle θ is 3 units and the length of the hypotenuse is 5 units, then cos(θ) = 3/5 = 0.6.',
    },
    {
      title: 'Tangent Function',
      text: 'tan(θ) = opposite / adjacent',
      example: 'Example: In a right triangle, if the length of the side opposite to the angle θ is 4 units and the length of the side adjacent to the angle θ is 3 units, then tan(θ) = 4/3 ≈ 1.333.',
    },
    {
      title: 'Pythagorean Identity',
      text: 'sin^2(θ) + cos^2(θ) = 1',
      example: 'Example: For any angle θ, if sin(θ) = 0.6, then cos(θ) = √(1 - sin^2(θ)) = √(1 - 0.6^2) ≈ 0.8.',
    },
    {
      title: 'Reciprocal Identities',
      text: 'csc(θ) = 1 / sin(θ)\nsec(θ) = 1 / cos(θ)\ncot(θ) = 1 / tan(θ)',
      example: 'Example: If sin(θ) = 0.5, then csc(θ) = 1 / sin(θ) = 1 / 0.5 = 2.',
    },
    {
      title: 'Quotient Identities',
      text: 'tan(θ) = sin(θ) / cos(θ)\ncot(θ) = cos(θ) / sin(θ)',
      example: 'Example: If sin(θ) = 0.6 and cos(θ) = 0.8, then tan(θ) = sin(θ) / cos(θ) = 0.6 / 0.8 = 0.75.',
    },
    {
      title: 'Co-Function Identities',
      text: 'sin(π/2 - θ) = cos(θ)\ncos(π/2 - θ) = sin(θ)\ntan(π/2 - θ) = cot(θ)\ncot(π/2 - θ) = tan(θ)\nsec(π/2 - θ) = csc(θ)\ncsc(π/2 - θ) = sec(θ)',
      example: 'Example: If sin(θ) = 0.6, then cos(π/2 - θ) = sin(θ) = 0.6.',
    },
    {
      title: 'Angle Sum and Difference Formulas',
      text: 'sin(A + B) = sin(A)cos(B) + cos(A)sin(B)\nsin(A - B) = sin(A)cos(B) - cos(A)sin(B)\ncos(A + B) = cos(A)cos(B) - sin(A)sin(B)\ncos(A - B) = cos(A)cos(B) + sin(A)sin(B)\ntan(A + B) = (tan(A) + tan(B)) / (1 - tan(A)tan(B))\ntan(A - B) = (tan(A) - tan(B)) / (1 + tan(A)tan(B))',
      example: 'Example: If A = 30° and B = 45°, then sin(A + B) = sin(30° + 45°) = sin(75°) ≈ 0.966.',
    },
    {
      title: 'Double Angle Formulas',
      text: 'sin(2θ) = 2sin(θ)cos(θ)\ncos(2θ) = cos^2(θ) - sin^2(θ) = 2cos^2(θ) - 1 = 1 - 2sin^2(θ)\ntan(2θ) = 2tan(θ) / (1 - tan^2(θ))',
      example: 'Example: If θ = 30°, then sin(2θ) = 2sin(30°)cos(30°) = 2 * 0.5 * √(3/2) = √3.',
    },
    {
      title: 'Half Angle Formulas',
      text: 'sin(θ/2) = ±√[(1 - cos(θ)) / 2]\ncos(θ/2) = ±√[(1 + cos(θ)) / 2]\ntan(θ/2) = ±√[(1 - cos(θ)) / (1 + cos(θ))] ',
      example: 'Example: If cos(θ) = 0.8, then sin(θ/2) = ±√[(1 - 0.8) / 2] = ±√(0.2 / 2) = ±√0.1.',
    },  
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trigonometricFormulas.map((formula, index) => (
        <TouchableOpacity
          style={styles.button}
          key={index}
          onPress={() => handleButtonPress(formula.title, formula.text, formula.example)}
        >
          <Text style={styles.buttonText}>{formula.title}</Text>
        </TouchableOpacity>
      ))}

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalText}>{modalText}</Text>
            <Text style={styles.modalExample}>{modalExample}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalExample: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  closeButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrigonometryPage;
