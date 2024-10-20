import { Image, Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export function Banner() {
  return (
    <View className="mt-8 flex h-44 w-full px-2">
      <PagerView initialPage={2} style={{ flex: 1 }}>
        <Pressable className="flex w-full items-center justify-center rounded-sm border" key={1}>
          <Text className="text-2xl text-slate-900">slider 1</Text>
          {/* <Image source={require('../../assets/splash.png')} className="w-full rounded-lg h-36" /> */}
        </Pressable>
        <Pressable className="flex w-full items-center justify-center rounded-sm border" key={2}>
          <Text className="text-2xl text-slate-900">slider 2</Text>
          {/* <Image source={require('../../assets/splash.png')} className="w-full rounded-lg h-36" /> */}
        </Pressable>
        <Pressable className="flex w-full items-center justify-center rounded-sm border" key={3}>
          <Text className="text-2xl text-slate-900">slider 3</Text>
          {/* <Image source={require('../../assets/splash.png')} className="w-full rounded-lg h-36" /> */}
        </Pressable>
      </PagerView>
    </View>
  );
}
