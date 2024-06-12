import { Text, View } from 'react-native';

import { styles } from '@/styles/Home/styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator}/>
    </View>
  );
}
