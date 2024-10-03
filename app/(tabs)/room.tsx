import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet, Alert } from 'react-native';
import RoomItem from '../../components/roomItem';
import CreateRoomModal from '../../components/popuproom';

interface Room {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  passwordRequired: boolean;
}

const RoomSelectionPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      const fetchedRooms: Room[] = [
        { id: '1', name: 'Room 1', players: 1, maxPlayers: 2, passwordRequired: false },
        { id: '2', name: 'Room 2', players: 2, maxPlayers: 2, passwordRequired: true },
        { id: '3', name: 'Room 3', players: 1, maxPlayers: 2, passwordRequired: false },
        { id: '4', name: 'Room 4', players: 2, maxPlayers: 2, passwordRequired: true },
      ];
      setRooms(fetchedRooms);
    };

    fetchRooms();
  }, []);

  const handleCreateRoom = (name: string, isPasswordRequired: boolean, password?: string) => {
    const newRoom: Room = {
      id: Math.random().toString(),
      name,
      players: 0,
      maxPlayers: 2,
      passwordRequired: isPasswordRequired,
    };

    setRooms([...rooms, newRoom]);
    setModalVisible(false);
  };

  const handleJoinRoom = (roomId: string) => {
    alert(`Rejoindre la salle`+ `ID de la salle : ${roomId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.roomList}>
        <FlatList
          data={rooms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RoomItem
              id={item.id}
              name={item.name}
              players={item.players}
              maxPlayers={item.maxPlayers}
              passwordRequired={item.passwordRequired}
              onJoin={handleJoinRoom} // Passe la fonction pour gérer le clic sur "Rejoindre"
            />
          )}
        />
      </View>

      <View style={styles.createButtonContainer}>
        <Button title="Créer une salle" onPress={() => setModalVisible(true)} />
      </View>

      <CreateRoomModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCreateRoom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  roomList: {
    flex: 3,
    marginRight: 20,
  },
  createButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RoomSelectionPage;
