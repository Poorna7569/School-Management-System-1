
import './App.css';
import Admin_page from './Components/Admin_page';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Teacher_page from './Components/Teacher_page';
import Student_page from './Components/Student_page';
import Parent_page from './Components/Parent_page';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import UserLogin from './Components/UserLogin';
import Home_page from './Components/Home_page';
import Online_courses from './Components/Online_courses';
import Online_admission_page from './Components/Online_admission_page';
import Student_home_page from './Components/Student_home_page';
import Studnet_page from './Components/Student_page';
import Teacher_home_page from './Components/Teacher_home_page';
import Parent_home_page from './Components/Parent_home_page';

function App() {
  return (
    <>

   <BrowserRouter>
   <Header/>
     <Routes>
    
    <Route path='/home' element={<Home_page/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/user' element={<UserLogin/>}/>
      <Route path='/admin' element={<Admin_page/>}/>
      <Route path='/teacher' element={<Teacher_page/>}/>
      <Route path='/parent' element={<Parent_page/>}/>
      <Route path='/online' element={<Online_courses/>}/>
      <Route path='/online_admission' element={<Online_admission_page/>}/>
      <Route path='/student_home_page' element={<Student_home_page/>}/>
      <Route path='/student' element={<Studnet_page/>}/>
      <Route path='/teacher_home_page' element={<Teacher_home_page/>}/>
      <Route path='/parent_home_page' element={<Parent_home_page/>}/>


   
     </Routes>
     <Footer/>
   </BrowserRouter>
   
    </>
  ); 
}

export default App;
