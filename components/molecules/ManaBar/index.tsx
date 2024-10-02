import ManaPoint from '@/components/atoms/ManaPoint';
import { useState } from "react";
import { View,StyleSheet, Text } from "react-native";
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
    maxWidth: 300,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#DEB887",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopRightRadius: 1000,
    borderBottomRightRadius: 1000,
    marginTop: 50,
  },
  textContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    marginLeft: 50,
    marginTop: 50
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  }
})
