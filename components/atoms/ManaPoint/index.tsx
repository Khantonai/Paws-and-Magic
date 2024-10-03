import { useState } from "react";
import { View,StyleSheet } from "react-native";

interface manaPointProps {
  isActive: boolean;
}

export default function manaPoint({isActive} : manaPointProps){

  return (
    <View style={[styles.point, {backgroundColor: isActive ? '#29ABE2' : "#283c45"}, styles.shadowProp]}>
      
      </View>
  )
}

const styles = StyleSheet.create({
  point: {
    width: 15,
    height: 15,
    borderRadius: 1000,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})