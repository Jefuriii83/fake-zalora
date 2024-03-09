import { useLocalSearchParams } from "expo-router";

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { products } from "../../lib/data";
import { Products } from "../../lib/type";
import { useState } from "react";
import Card from "../../components/Card";
import SearchField from "../../components/SearchField";
import { Svg, Path } from "react-native-svg";

type CardProps = {
  product: Products[];
};

export default function Page({ product }: CardProps) {
  const { slug } = useLocalSearchParams();

  return (
    <SafeAreaView className="h-full">
      <View className="flex-row w-full h-18 pt-6 justify-center" >
        <TextInput
          className="bg-white p-4 pl-5 w-4/5 rounded-full self-center"
          placeholder="50% Off Nike, New Balance, Adidas"
        />
        {/* <Svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-14 h-14 stroke-white bg-black rounded-full self-center absolute right-10 bottom-0"
        >
          <Path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <Path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
            clip-rule="evenodd"
          />
        </Svg> */}
      </View>

      <FlatList
        className="mt-4"
        data={products}
        renderItem={({ item }) => <Card product={item}></Card>}
      />
    </SafeAreaView>
  );
}
