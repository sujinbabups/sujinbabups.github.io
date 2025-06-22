
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Firstlayout from './layout/FirstLayout';
import Achievments from './pages/Achievments'



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Firstlayout/>}>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/achievments' element={<Achievments/>}/>
     

      </Route>
      
      </>
    )
  )


  return (
    <>
        <RouterProvider router={router}/>


    </>
  )
}

export default App
