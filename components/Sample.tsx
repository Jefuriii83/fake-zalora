import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  Button,
  Pressable,
} from "react-native";

export const Sample = () => {
  // State
  const [text, changeText] = useState("Charlie");
  const [isSelected, setIsSelected] = useState(false);

  return (
    <ScrollView className="flex pt-20 px-1">
      {/* Scroll */}
      {Array(10)
        .fill(10)
        .map(() => (
          <>
            <Text className="text-white py-2 my-2 text-center text-4xl border-2 border-white rounded-xl bg-gray-600 font-bold">
              Jepjep
            </Text>
            <Image
              source={{
                uri: "https://dcist.com/wp-content/uploads/sites/3/2023/10/20230829_baby-monkey_Fenston_6.jpg",
              }}
              style={{ width: 320, height: 320 }}
              className="my-3 rounded-3xl"
            />

            <TextInput
              className="border-2 border-white w-40 mb-4 text-white pl-2"
              placeholder="Enter your Name"
              onChangeText={changeText}
            />
            <Pressable
              className="w-40 h-10 rounded-lg flex justify-center bg-slate-400 border-black"
              onPress={() => setIsSelected((prev) => !prev)}
            >
              <Text className="text-center font-bold">
                {isSelected ? "Selected" : "Not Selected"}
              </Text>
            </Pressable>
          </>
        ))}

      {/* Header/Title  */}
      {/* <Text className="text-white pb-2 text-center text-4xl border-2 border-white rounded-xl bg-gray-600 font-bold p-3 mb-4">Jepjep {text}</Text>
            
            <Image source={{uri: 'https://dcist.com/wp-content/uploads/sites/3/2023/10/20230829_baby-monkey_Fenston_6.jpg'}}
                   style={{width: 320, height: 320}}
                   className="mt-4 rounded-3xl" />
            
            <Text>Name: </Text>
            <Text>Name: </Text>
            <Text>Name: </Text>
            <Text>Name: </Text> */}

      {/* <TextInput className="border-2 border-white w-40 text-white pl-2 " placeholder="Enter your Name" onChangeText={changeText}/> */}
      {/* <Button
                title={isSelected ? 'Selected' : 'Not Selected'} 
                onPress={() => setIsSelected((prev) => !prev)}
                // disabled={isSelected}
                /> */}

      {/* <Pressable 
            className="w-40 h-10 rounded-lg flex justify-center bg-slate-300"
            onPress={() => setIsSelected((prev) => !prev)}>
                <Text className="text-center font-bold">{isSelected ? "Selected" : "Not Selected"}</Text>
            </Pressable> */}
    </ScrollView>
  );
};
