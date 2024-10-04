import { View, StyleSheet, Image, Text, useWindowDimensions } from "react-native";



interface CardProps {
    image: any;
    title: string;
    mana: number;
    strength: number;
    hp: number;
    onBoard?: boolean;
    onPress?: () => void;
    style?: any;
}

function Card( {image, title, mana, strength, hp, onBoard,onPress, style}: CardProps ) {
    const dimensions = useWindowDimensions();

    return (
        <View
        style={[styles(dimensions).cardContainer, {width: dimensions?.width ? dimensions.width / (onBoard ? 3 : 6) : 100, 
            maxWidth: onBoard ? 125 : 100,}, style]}
        onTouchEnd={onPress}
            >
            <View style={onBoard ? {height:20} : styles(dimensions).mana}>
                {
                    !onBoard && <Text style={styles(dimensions).dataText}>{mana}</Text>
                }
            </View>
            <Image source={image} style={styles(dimensions).image} />
            <View style={styles(dimensions).dataContainer}>
                 <View style={styles(dimensions).strength}>
                    <Text style={styles(dimensions).dataText}>{strength}</Text>
                 </View>
                    <Text style={styles(dimensions).title}>{title}</Text>
                 <View style={styles(dimensions).hp}>
                    <Text style={styles(dimensions).dataText}>{hp}</Text>
                 </View>
            </View>
        </View>
    )
}

const styles = (
    dimensions?: { width: number; height: number }
  ) =>  StyleSheet.create({
    cardContainer: {
        aspectRatio: 0.77,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    image: {
        height: '60%',
        width: '100%',
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
        fontSize: dimensions?.width && dimensions?.width < 600 ? dimensions.width / 50 : 12,
        textAlign: 'center',
    },
    dataText: {
        color: 'white',
        fontSize: dimensions?.width && dimensions?.width < 600 ? dimensions.width / 50 : 12,
    },
  });

  export default Card;