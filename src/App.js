import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main_page from './Main_page/Main_page';
import main_img from './assets/images/avataaars.svg';
import Footer from './Footer/Footer';
import AfterFooter from './AfterFooter/AfterFooter';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout></Layout>,
      children:[ 
      {
        path:"/",
        element:<Main_page></Main_page>
      },
  
      {
        path:"/about",
        element:<About></About>
      },
  
      {
        path:"/portfolio",
        element:<Portfolio></Portfolio>
      },
  
      {
        path:"/contact",
        element:<Contact></Contact>
      }     ]
      
    },

    
  ])
  return (
   <>
   {/* <Navbar></Navbar> */}
   {/* <Main_page></Main_page> */}
   {/* <Footer></Footer> */}
   {/* <AfterFooter></AfterFooter> */}
   {/* <About></About> */}
   {/* <Portfolio></Portfolio> */}
   {/* <Contact></Contact> */}
   <RouterProvider router={router}></RouterProvider>
   <Footer></Footer>
   <AfterFooter></AfterFooter>
   </>
  );
}

export default App;
