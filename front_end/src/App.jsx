
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import LecturerLogin from './components/LecturerLogin';
import StudentSignUp from './components/StudentSignUp';
import LecturerSignUp from './components/LecturerSignUp';
import StudentSchedule from './components/StudentSchedule';
import './index.css'

const App = ()=>{
return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stlogin" element={<StudentLogin />} />
        <Route path="/lclogin" element={<LecturerLogin />} />
        <Route path="/stsignup" element={<StudentSignUp />} />
        <Route path="/lcsignup" element={<LecturerSignUp />} />
        <Route path="/student-schedule" element={<StudentSchedule />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;
