import axios from 'axios';
import {Platform} from 'react-native';

axios.defaults.baseURL =
  Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

export default axios;
