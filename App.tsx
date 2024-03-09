import { Text, View } from 'react-native';
import { Sample } from './components/Sample'

export default function App() {
  return (
   <View className="flex-1 items-center justify-center bg-slate-600">
      <Sample />
      {/* <Text className='text-white'>Test Text</Text> */}
    </View>
  );
}
