import { Feather, Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export function Header() {
  return (
    <View className="flex w-full flex-row items-center justify-between">
      <Pressable className="flex size-10 items-center justify-center rounded-full bg-white">
        <Ionicons name="menu" size={24} color={'#121212'} />
      </Pressable>

      <View className="flex-col items-center gap-2">
        <Text>Localização</Text>
        <View className="flex-row items-center gap-2">
          <Feather name="map-pin" size={14} />
          <Text className="font-bold">Belo Horizonte</Text>
        </View>
      </View>

      <Pressable className="flex size-10 items-center justify-center rounded-full bg-white">
        <Feather name="bell" size={24} color={'#121212'} />
      </Pressable>
    </View>
  );
}
