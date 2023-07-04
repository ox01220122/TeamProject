import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import MbtiPage from './pages/MbtiPage';
import Login from './pages/Login';
import Join from './pages/Join';
import GlobalStyle from './components/GlobalStyle';



function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
          </Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Join' element={<Join />}></Route>
          <Route path='/MbtiPage' element={<MbtiPage />}></Route>
          {/* <Route path='/MbtiPage/:TestId' element={<Te}></Route> */}
          <Route path='/Test1' element={<Test1 />}></Route>
          <Route path='/Test2' element={<Test2 />}></Route>
          <Route path='/Test3' element={<Test3 />}></Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
