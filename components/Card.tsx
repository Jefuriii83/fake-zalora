import React, { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Products } from "../lib/type";
import { router } from "expo-router";
import { Svg, Path } from "react-native-svg";

type CardProps = { product: Products };

const Card = ({ product }: CardProps) => {
  // const [Count, setCount] = useState(0);
  // const addCount = () => {
  //     setCount(Count+1);
  // }

  // const reductionCount = () => {
  //     return Count > 0 ? setCount(Count-1) : setCount(0);
  // };

  return (
    // <ScrollView className="mx-auto h-full flex flex-row">

    <TouchableOpacity
      onPress={() =>
        router.navigate({
          pathname: "/shop/[slug]",
          params: { slug: [product.slug] },
        })
      }
    >
      <View className="bg-white w-11/12 my-3.5 rounded-3xl  object-contain self-center shadow-sm shadow-gray-600 z-10">
        <View className="px-4 py-5 ">
          <Svg className="inline-block   h-[15px] w-[15px] absolute top-6 left-4">
            <Path
              d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
              fill="#F7B543"
            ></Path>
          </Svg>
          <Text className="left-3 font-bold">{product.rate}</Text>

          <Image src={product.image} className="w-60 h-60 self-center"></Image>

          <Text className="text-lg font-bold">{product.brand}</Text>
          <Text className="text-lg font-bold">{product.name}</Text>
          <Text className="text-lg font-bold">₱ {product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>

    // </ScrollView>
  );
};

export default Card;
