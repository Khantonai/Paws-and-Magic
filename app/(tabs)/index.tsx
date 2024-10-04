import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { fetchData } from '../../services/api'; // Importer la fonction fetchData

const HomeScreen = () => {
  const [pseudo, setPseudo] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // État pour stocker le résultat

  const handleSubmit = async () => {
    if (pseudo.trim() === '') {
      alert('Erreur : Veuillez entrer un pseudo.');
      return;
    }

    try {
      setLoading(true);
      // Faire un appel API pour vérifier ou enregistrer le pseudo
      const response = await fetchData('addplayer', 'POST', { pseudo: pseudo.trim() }); 

      // Afficher une alerte si l'API renvoie une erreur
      if (response.error) {
        alert('Erreur API : ' + response.error);
      } else {
        // Si l'API réussit, stocker le résultat et naviguer vers la page room
        setResult(response); // Stocker le résultat ici
        if (response.message === 'Joueur ajouté avec succès.') {
          router.push('/room'); // Naviguer vers la page room si succès
        } else {
          alert('Ce joueur existe déjà.');
        }
      }
    } catch (error) {
      alert('Erreur lors de l\'appel API : ' + error);
    } finally {
      setLoading(false);
    }
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
        onChangeText={(text) => setPseudo(text.toLowerCase())}
      />
      <Button title={loading ? 'Chargement...' : 'Valider'} onPress={handleSubmit} disabled={loading} />
      
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Pseudo envoyé : {pseudo}</Text>
          <Text style={styles.resultText}>Résultat : {JSON.stringify(result)}</Text>
        </View>
      )}
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
    width: '100%',
    height: '100%',
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
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  resultText: {
    color: 'black',
  },
});

export default HomeScreen;
