import ManaPoint from '@/components/atoms/ManaPoint';
import { useState } from "react";
import { View,StyleSheet, Text, Platform } from "react-native";
interface manaBarProps {
  count: number;
  active: number;
}

export default function ManaBar({count, active}: manaBarProps){
  const manaPoint: React.ReactNode[] = [];

 for(let i = 1; i <= count; i++){
  manaPoint.push(
    <ManaPoint key={i} isActive={i <= active ? true : false} />
  )
 }
  return (
    <View style={styles.bar}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{active}</Text>
      </View>
      <View style={styles.container}>
        {
          manaPoint
        }
      </View>
     
      </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    display: "flex",
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: 280,
    backgroundColor: "#DEB887",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopRightRadius: 1000,
    borderBottomRightRadius: 1000,
    borderTopEndRadius: 1000,
    borderBottomEndRadius: 1000,
    overflow: "hidden",
  },
  textContainer: {
    backgroundColor: "black",
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderTopStartRadius: 1000,
    borderBottomStartRadius: 1000,
    overflow: "hidden",
    paddingHorizontal: Platform.OS === "ios" ? 0 : 20,
    height: 47,
    width: 47,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    zIndex: 2,
  }
})
