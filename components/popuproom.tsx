import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

interface CreateRoomModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (name: string, isPasswordRequired: boolean, password?: string) => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ visible, onClose, onCreate }) => {
  const [newRoomName, setNewRoomName] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateRoom = () => {
    // Vérification si le nom de la salle est vide
    if (newRoomName.trim() === '') {
      alert("Erreur "+ "Le nom de la salle est requis.");
      return;
    }

    // Définir si un mot de passe est requis ou non
    const isPasswordRequired = password.trim() !== '';

    // Appeler la fonction de création de salle avec les valeurs appropriées
    onCreate(newRoomName, isPasswordRequired, isPasswordRequired ? password : undefined);

    // Réinitialiser les champs après la création
    setNewRoomName('');
    setPassword('');
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Nom de la salle"
            value={newRoomName}
            onChangeText={setNewRoomName}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe (facultatif)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Créer" onPress={handleCreateRoom} />
          <Button title="Annuler" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CreateRoomModal;
