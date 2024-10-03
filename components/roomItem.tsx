import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

interface RoomItemProps {
  id: string; // Ajout de l'ID dans les props
  name: string;
  players: number;
  maxPlayers: number;
  passwordRequired: boolean;
  onJoin: (id: string) => void; // Fonction pour gérer le clic sur "Rejoindre"
}

const RoomItem: React.FC<RoomItemProps> = ({ id, name, players, maxPlayers, passwordRequired, onJoin }) => {
  return (
    <View style={styles.room}>
      <Text>{name} - {players}/{maxPlayers} joueurs</Text>
      {passwordRequired ? <Text>Mot de passe requis</Text> : <Text>Session Public</Text>}
      <TouchableOpacity 
        style={styles.joinButton}
        onPress={() => {
          console.log(`Joining room with ID: ${id}`); // Ajoutez ceci pour déboguer
          onJoin(id); // Utilisation de l'ID pour le passage à la fonction
        }}
      >
        <Text style={styles.buttonText}>Rejoindre</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  room: {
    padding: 10,
    backgroundColor: '#bebebe',
    marginBottom: 20,
    marginLeft: '5%',
    borderRadius: 5,
    borderColor: '#000000',
    width: Platform.OS === 'web' ? '30%' : '100%', 
    height: Platform.OS === 'web' ? '90%' : 'auto',
  },
  joinButton:{
    backgroundColor: '#fbb03b',
    alignItems: 'center',
    padding: 10,
    marginLeft: Platform.OS === 'web' ? 150 : 20,
    marginRight: 20,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff', // Ajoute une couleur de texte pour le bouton
  },
});

export default RoomItem;
