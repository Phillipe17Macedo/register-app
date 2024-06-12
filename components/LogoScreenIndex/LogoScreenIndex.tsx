import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

export default function LogoScreenIndex() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/icons8-register-100.png")}
        style={[styles.image]}
      />
    </View>
  );
}
