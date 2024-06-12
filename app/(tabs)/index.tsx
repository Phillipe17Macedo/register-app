import { Text, View } from '@/components/Themed';

import { styles } from '@/styles/Home/styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
