import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: 'Fake Zalora',
        headerStyle: {
          backgroundColor: "#000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerLeft: () => <Button title="<-" onPress={() => router.back()} />,
        headerTitleAlign: 'center'
      }}
    />
  );
}
