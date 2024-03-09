import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Page() {
  return (
    <View className="flex-1 p-24 align-middle">
      <View className="flex-1 justify-center">
        <Text className="text-center font-bold text-[45px] italic">
          Fake Zalora
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          router.navigate({ pathname: "/shop/", params: { slug: "" } })
        }
        className="bg-black rounded-full p-2"
      >
        <Svg
          viewBox="0 0 24 24"
          fill="black"
          className="w-10 h-10 stroke-white self-center"
        >
          <Path
            fill-rule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clip-rule="evenodd"
          />
        </Svg>
      </TouchableOpacity>

      {/* <Button
      title="to Shop"
      onPress={() => router.navigate({pathname: '/shop/', params:{slug:''}})}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
});
