
import './App.scss';
import withSplashScreen from './components/withSplashScreen';
import routes from './screens';
import { Route, Routes } from 'react-router-dom';
import Store from './store.js';
import Page404 from './screens/404.jsx';
import { Provider } from 'react-redux';
import WindowSize from './features/windowSize/windowSize.jsx';

function App() {
  return (
    <Provider store={Store}>
      <WindowSize/>
    <Routes>
         {
                    routes.map((data,idx) => (
                        <Route key={idx} path={data.path} element={data.element} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
      </Routes>
      </Provider>
  );
}

export default App;
