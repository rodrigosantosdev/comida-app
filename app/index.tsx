import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import { Container } from '~/components/Container';
import { Header } from '~/components/header';
import { Banner } from '~/components/banner';

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  return (
    <>
      <Container>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="w-full px-4" style={{ marginTop: statusBarHeight }}>
            <Header />
            <Banner />
          </View>
          {/* <View className="p-8">
            <Link href={'/produtos'}>Produtos</Link>
          </View> */}
        </ScrollView>
      </Container>
    </>
  );
}
