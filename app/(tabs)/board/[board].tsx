import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, useWindowDimensions, ImageBackground, Image, SafeAreaView, Pressable, Platform} from "react-native";
import ManaBar from "@/components/molecules/ManaBar";
import Card from "@/components/molecules/Card";
import * as Progress from "react-native-progress";
import { useState } from "react";
import { Button } from '@rneui/themed';



function Board() {
    

    const animals = [
        {
            id: 1,
            name: "Lapin",
            mana: 2,
            strength: 2,
            hp: 3,
            image: require("@/assets/images/animals/rabbit.png"),
        },
        {
            id: 2,
            name: "Chat",
            mana: 3,
            strength: 4,
            hp: 4,
            image: require("@/assets/images/animals/cat.png"),
        },
        {
            id: 3,
            name: "Vache",
            mana: 5,
            strength: 3,
            hp: 9,
            image: require("@/assets/images/animals/cow.png"),
        },
        {
            id: 4,
            name: "Poussin",
            mana: 1,
            strength: 1,
            hp: 2,
            image: require("@/assets/images/animals/chick.png"),
        },
        {
            id: 5,
            name: "Cerf",
            mana: 4,
            strength: 5,
            hp: 6,
            image: require("@/assets/images/animals/deer.png"),
        },
        {
            id: 6,
            name: "Chien",
            mana: 3,
            strength: 3,
            hp: 5,
            image: require("@/assets/images/animals/dog.png"),
        },
        {
            id: 7,
            name: "Renard",
            mana: 4,
            strength: 5,
            hp: 4,
            image: require("@/assets/images/animals/fox.png"),
        },
        {
            id: 8,
            name: "Grenouille",
            mana: 2,
            strength: 1,
            hp: 3,
            image: require("@/assets/images/animals/frog.png"),
        },
        {
            id: 9,
            name: "Chèvre",
            mana: 6,
            strength: 7,
            hp: 7,
            image: require("@/assets/images/animals/goat.png"),
        },
        {
            id: 10,
            name: "Koala",
            mana: 2,
            strength: 2,
            hp: 4,
            image: require("@/assets/images/animals/koala.png"),
        },
        {
            id: 11,
            name: "Panda",
            mana: 5,
            strength: 5,
            hp: 8,
            image: require("@/assets/images/animals/panda.png"),
        },
        {
            id: 12,
            name: "Canard",
            mana: 2,
            strength: 2,
            hp: 3,
            image: require("@/assets/images/animals/duck.png"),
        },
        {
            id: 13,
            name: "Cochon",
            mana: 3,
            strength: 4,
            hp: 5,
            image: require("@/assets/images/animals/pig.png"),
        },
        {
            id: 14,
            name: "Raton-Laveur",
            mana: 3,
            strength: 3,
            hp: 4,
            image: require("@/assets/images/animals/raccoon.png"),
        },
        {
            id: 15,
            name: "Tigre",
            mana: 8,
            strength: 10,
            hp: 7,
            image: require("@/assets/images/animals/tiger.png"),
        },
        {
            id: 16,
            name: "Autruche",
            mana: 4,
            strength: 4,
            hp: 5,
            image: require("@/assets/images/animals/ostrich.png"),
        },
    ];

    const data = [
        {
            pseudo: "Joueur 1",
            hp: 30,
            mana: [2, 4],
            pioche: [4, 8, 1, 3, 5, 7, 6, 2, 9],
            hand: [4, 8, 1, 3, 5],
            board: [
                [3, 4, 2, 1],
                [5, 3, 2, 0],

            ],
        },
        {
            pseudo: "Joueur 2",
            hp: 20,
            mana: [3, 4],
            pioche: [4, 8, 1, 3, 5, 7, 6, 2, 9],
            hand: [4, 8, 1, 3, 5],
            board: [[14, 13, 12], [16, 10, 9]],
        },
    ];

    const [selectedCard, setSelectedCard] = useState(["", -1]);
    const dimensions = useWindowDimensions();

    return (
        <ImageBackground source={require('@/assets/images/background.png')}>
            <SafeAreaView style={styles(dimensions).board}>
                <View style={styles(dimensions).playerContainer}>
                    <View
                        style={styles(dimensions).playerInfoCont}
                    >
                        <Pressable
                            onPress={() => {
                                if (selectedCard[0] === "board") {
                                    if (data[1].board.length < 1) {
                                        alert(
                                            "Envoie de données : carte du terrain à l'index " +
                                            selectedCard[1] +
                                            " attaque le joueur adverse"
                                        );
                                    }
                                    else {
                                        alert("Vous ne pouvez pas attaquer le joueur adverse tant qu'il a des cartes sur le terrain");
                                    }

                                }

                                setSelectedCard(["", -1]);
                            }}
                        >
                            <Progress.Circle
                                progress={data[1].hp / 35}
                                size={50}
                                thickness={10}
                                color="#94001D"
                            >
                                <Text
                                    style={{ alignSelf: "center", position: "absolute", top: 17 }}
                                >
                                    {data[1].hp}
                                </Text>
                            </Progress.Circle>
                        </Pressable>
                        <ManaBar active={data[1].mana[0]} count={data[1].mana[1]} />
                    </View>
                    <View style={[styles(dimensions).cardBoardContainer]}>
                        {
                            data[1].board.map((card, index) => {
                                return (
                                    <Card
                                        key={card[0]}
                                        image={animals[card[0] - 1].image}
                                        title={animals[card[0] - 1].name}
                                        mana={animals[card[0] - 1].mana}
                                        strength={animals[card[1] - 1].strength}
                                        hp={animals[card[2] - 1].hp}
                                        onBoard
                                        onPress={() => {
                                            if (selectedCard[0] === "board") {
                                                alert("Envoie de données : carte du terrain à l'index " + selectedCard[1] + " attaque la carte adverse à l'index " + index);
                                                setSelectedCard(["", -1]);
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                        {
                            data[1].board.length === 0 ? 
                            <View style={[styles(dimensions).placeholder, {opacity: 0}]}></View>
                            : null
                        }
                    </View>
                </View>
                <View style={{ height: Platform.OS === "web" ? 50 : 100, width: "100%" }}>
                    <Image source={require("@/assets/images/fence.png")} style={{ height: "100%", width: "100%" }} resizeMode="repeat" />
                    {/* <View style={styles(dimensions).deckContainer}>
                        <View style={styles(dimensions).deck}>
                            <Image source={require("@/assets/images/cardBackground.jpg")} style={{width: "100%", height: "100%"}} />
                        </View>
                        <View style={styles(dimensions).deck}>
                            <Image source={require("@/assets/images/cardBackground.jpg")} style={{width: "100%", height: "100%"}} />
                        </View>
                    </View> */}
                    <View style={{position: "absolute", right:10, top: "50%", transform: [{translateY: -20}]}}>
                        <Button title="Terminer le tour" style={{ backgroundColor: "#29ABE2"}} onPress={() => alert("Fin de tour")}></Button>
                    </View>
                </View>
                <View style={styles(dimensions).playerContainer}>
                    <View style={styles(dimensions).cardBoardContainer}>
                        {
                            data[0].board.map((card, index) => {
                                return (
                                    <Card
                                        key={card[0]}
                                        image={animals[card[0] - 1].image}
                                        title={animals[card[0] - 1].name}
                                        mana={animals[card[0] - 1].mana}
                                        strength={animals[card[1] - 1].strength}
                                        hp={animals[card[2] - 1].hp}
                                        onBoard
                                        onPress={() => {
                                            if (data[0].board[index][3] !== 0) {
                                                selectedCard[1] !== index || selectedCard[0] !== "board"
                                                    ? setSelectedCard(["board", index])
                                                    : setSelectedCard(["", -1]);
                                            } else {
                                                alert(
                                                    "Un animal ne peut pas attaquer le tour où il a été posé"
                                                );
                                                setSelectedCard(["", -1]);
                                            }
                                        }}
                                        style={[
                                            selectedCard[0] === "board" && selectedCard[1] === index
                                                ? { borderColor: "red", borderWidth: 2 }
                                                : {},
                                            card[3] === 0 ? { transform: "scale(0.8)" } : {},
                                        ]}
                                    />
                                );
                            })

                        }
                        {
                            data[0].board.length < 3 ? (
                                selectedCard[0] === "hand" ?

                                    <Card
                                        key={`placeholder-${selectedCard[1]}`}
                                        image={
                                            animals[data[0].hand[Number(selectedCard[1])] - 1].image
                                        }
                                        title={
                                            animals[data[0].hand[Number(selectedCard[1])] - 1].name
                                        }
                                        mana={
                                            animals[data[0].hand[Number(selectedCard[1])] - 1].mana
                                        }
                                        strength={
                                            animals[data[0].hand[Number(selectedCard[1])] - 1].strength
                                        }
                                        hp={animals[data[0].hand[Number(selectedCard[1])] - 1].hp}
                                        onBoard
                                        style={{ opacity: 0.4 }}
                                        onPress={() =>
                                            alert(
                                                "Envoie de données : carte de la main à l'index " +
                                                selectedCard[1]
                                            )
                                        }
                                    />
                                    : <View style={styles(dimensions).placeholder} />
                            ) : null
                        }
                    </View>
                    <View style={styles(dimensions).cardContainer}>
                        {data[0].hand.map((card, index) => {
                            return (
                                <Card
                                    key={card}
                                    image={animals[card - 1].image}
                                    title={animals[card - 1].name}
                                    mana={animals[card - 1].mana}
                                    strength={animals[card - 1].strength}
                                    hp={animals[card - 1].hp}
                                    onPress={() =>
                                        data[0].board.length < 3 && selectedCard[1] !== index || selectedCard[0] !== "hand"
                                            ? setSelectedCard(["hand", index])
                                            : setSelectedCard(["", -1])
                                    }
                                    style={
                                        selectedCard[0] === "hand" && selectedCard[1] === index
                                            ? { borderColor: "red", borderWidth: 2 }
                                            : {}
                                    }
                                />
                            );
                        })}
                    </View>
                    <View
                        style={styles(dimensions).playerInfoCont}
                    >
                        <Progress.Circle
                            progress={data[0].hp / 35}
                            size={50}
                            thickness={10}
                            color="#94001D"
                        >
                            <Text
                                style={{ alignSelf: "center", position: "absolute", top: 17 }}
                            >
                                {data[0].hp}
                            </Text>
                        </Progress.Circle>
                        <ManaBar active={data[0].mana[0]} count={data[0].mana[1]} />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = (
    dimensions?: { width: number; height: number }
) => StyleSheet.create({
    board: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    playerInfoCont: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: 10,
        width: "100%",
        marginBottom: 20,
    },
    cardBoardContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 10,
        width: "100%",
        marginBottom: 20,
    },
    placeholder: {
        aspectRatio: 0.77,
        borderRadius: 8,
        width: dimensions?.width ? dimensions.width / 3 : 100,
        backgroundColor: "lightgray",
        maxWidth: 125,
        opacity: 0.6,
    },
    playerContainer: {
        gap: 20,
        width: "100%",
    },
    deckContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 80,
        position: "absolute",
        left: 10,
    },
    deck: {
        aspectRatio: 0.77,
        height: "100%",
        borderRadius: 8,
        overflow: "hidden",
        borderWidth: 1,
    },
});

export default Board;
