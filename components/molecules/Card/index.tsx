import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


interface CardProps {
    image: any;
    title: string;
    mana: number;
    strength: number;
    hp: number;
}

function Card( {image, title, mana, strength, hp}: CardProps ) {
    return (
        <LinearGradient colors={["#A5D6A7", "#4CAF50"]}
        style={styles.cardContainer}>
            <View style={styles.mana}>
                <Text style={styles.dataText}>{mana}</Text>
            </View>
            <Image source={image} style={styles.image} />
            <View style={styles.dataContainer}>
                 <View style={styles.strength}>
                    <Text style={styles.dataText}>{strength}</Text>
                 </View>
                    <Text style={styles.dataText}>{title}</Text>
                 <View style={styles.hp}>
                    <Text style={styles.dataText}>{hp}</Text>
                 </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 100,
        aspectRatio: 0.77,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    image: {
        height: '50%',
        objectFit: 'contain',
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    strength: {
        backgroundColor: 'red',
        padding: 4,
        overflow: 'hidden',
    },
    hp: {
        backgroundColor: 'green',
        padding: 4,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        overflow: 'hidden',
    },
    mana: {
        backgroundColor: '#29ABE2',
        padding: 4,
        borderRadius: 100,
        alignSelf: 'center',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
    },
    dataText: {
        color: 'white',
        fontSize: 12,
    },
  });

  export default Card;