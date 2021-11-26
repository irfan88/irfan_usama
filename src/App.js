import logo from './logo.svg';
import './App.css';
import ReplicateNftContract from './ReplicateNftContract'
import { Provider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core'
import store from './redux/store/index';
import { getLibrary } from './utils/web3React'

function App() {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ReplicateNftContract />
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
