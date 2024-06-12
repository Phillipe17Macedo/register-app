import { Text, View } from "react-native";

import { styles } from "@/styles/Home/styles";
import LogoScreenIndex from "@/components/LogoScreenIndex/LogoScreenIndex";

export default function Home() {
  return (
    <View style={styles.container}>
      <LogoScreenIndex />
      <Text
        style={[
          {
            fontSize: 32,
            fontWeight: "bold",
            alignSelf: "center",
            fontVariant: ["small-caps"],
            color: '#84B026'
          },
        ]}
      >
        REGISTER APP
      </Text>
    </View>
  );
}
