import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';



const HomeScreen = () => {
  const [pseudo, setPseudo] = useState('');

  const handleSubmit = () => {
    if (pseudo.trim() === '') {
        alert('Erreur'+ 'Veuillez entrer un pseudo.');
        return;
      }
      router.push('/room');
  };

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('@/assets/images/pawsMagic.png')} style={styles.logo} resizeMode="contain" />
        </View>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre pseudo"
        value={pseudo}
        onChangeText={setPseudo}
      />
      <Button title="Valider" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 700, 
    height: 200, 
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default HomeScreen;