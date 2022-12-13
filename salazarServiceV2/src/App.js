
//We import the librarys of react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//components
import Main from './main';

import Header from './componentes/header';
import Contact from './componentes/contact'


function App() {
  return (
    <div className='App'> 

   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Header/> } >

<Route index element={<Main/>}></Route>
<Route path='contact' element={<Contact/>}></Route>
<Route path='about' element={<Main/>}> </Route>
<Route path='service' element={<Main/>}> </Route>
<Route path='screenshot' element={<Main/>}> </Route>
<Route path='*' element={<Header to="/"/>}></Route>


      </Route>
    </Routes>
    </BrowserRouter>
    </div>
 );
}

export default App;
