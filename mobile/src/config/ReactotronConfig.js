import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'React Native TCC',
    })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  // console.log(tron);
  tron.clear();

  console.tron = tron;
}
