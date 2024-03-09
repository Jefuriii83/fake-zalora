import { useLocalSearchParams } from "expo-router";

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { products } from "../../../lib/data";
import { Products } from "../../../lib/type";
import { useState } from "react";
import { Svg, Path } from "react-native-svg";

type CardProps = { product: Products };

export default function Page() {
  const { slug } = useLocalSearchParams();

  const [Count, setCount] = useState(0);
  const addCount = () => {
    setCount(Count + 1);
  };
  const reductionCount = () => {
    return Count > 0 ? setCount(Count - 1) : setCount(0);
  };

  const item = products.find((item) => item.slug === slug);

  if (!item) {
    return <Text>Item not Found</Text>;
  }

  return (
    <SafeAreaView className="h-full relative bg-white">
      <Svg className="inline-block   h-[15px] w-[15px] top-5 left-4">
        <Path
          d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
          fill="#F7B543"
        ></Path>
      </Svg>
      <Text className="font-bold text-lg absolute top-[11px] left-7 z-10">
        {item.rate}
      </Text>
      <View className="flex-1  mx-5 mt-5 ">
        <Image
          src={item.image}
          className="w-full h-96 pb-5 self-center z-[-1]"
        />

        <View className="py-5 border-t-2">
          <Text className="text-2xl font-bold">{item.brand}</Text>
          <Text className="text-2xl font-bold">{item.name}</Text>
          <Text className="text-2xl font-bold">₱ {item.price}</Text>
        </View>
        <View className="flex-row items-center justify-between ">
          <View className="flex-row ite border rounded-full w-40">
            <TouchableOpacity onPress={reductionCount} className="px-3">
              <Text className="text-5xl">-</Text>
            </TouchableOpacity>
            <Text className="m-auto text-xl">{Count}</Text>
            <TouchableOpacity onPress={addCount} className="px-3">
              <Text className="text-5xl">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="border rounded-full p-4 float-end w-40 self-end">
            <Text className="text-center font-bold">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
