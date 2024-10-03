import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface CreateRoomModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (name: string, isPasswordRequired: boolean, password?: string) => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ visible, onClose, onCreate }) => {
  const [newRoomName, setNewRoomName] = useState('');
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [password, setPassword] = useState('');

  const handleCreateRoom = () => {
    onCreate(newRoomName, isPasswordRequired, isPasswordRequired ? password : undefined);
    setNewRoomName('');
    setIsPasswordRequired(false);
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
          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={isPasswordRequired}
              onValueChange={setIsPasswordRequired}
            />
            <Text>Mot de passe requis</Text>
          </View> */}
          {(
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          )}
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default CreateRoomModal;
