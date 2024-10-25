import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply, add, initializeLibrary } from 'react-native-analyticsample';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result2: {add(1, 3)}</Text>
      <Button
        title="Multiply"
        onPress={() => {
          initializeLibrary();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
