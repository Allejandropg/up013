import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ name: 'React Nativa TCC', host: '192.168.15.30' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  tron.clear();

  console.tron = tron;
}
