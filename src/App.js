import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Login from './Login';
import Card from './Card';
import { FaPeopleGroup,FaLocationPin, FaBagShopping, FaCalendarWeek } from 'react-icons/fa6';
import Add from './Add';
import Testimonials from './Testimonials';
import GetStarted from './GetStarted';
import Links from './Links';

function App() {
  return (
    <div className="container-fluid p-1">
      <Navbar />
      
      <div className="row p-3 page-1">
        <Content />
        <Login />
      </div>

      <div className="row page-2 p-5 d-flex justify-content-around align-items-center">
        <Card
          icon={<FaPeopleGroup/>}
          name='People'
          desc='card-1 cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf'
          button='Connect'
        />

        <Card
          icon={<FaLocationPin/>}
          name='Place'
          desc='card-2 cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf'
          button='Meet Up'
        />

        <Card
          icon={<FaBagShopping/>}
          name='Product' 
          desc='card-3 cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf'
          button='Get It'
        />

        <Card
          icon={<FaCalendarWeek/>}
          name='Program'
          desc='card-4 cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf cdj nds nsdnjsdk dsk sdjkn dj sdnfd fndf'
          button='Attend'
        />
      </div>

      <div className="p-3 page-3 grey">
        <Add />
      </div>

      <div className="p-3 page-4">
        <Testimonials />
      </div>

      <div className="row p-3 page-5">
        <GetStarted />
      </div>

      <div className="p-3 page-6">
        <Links />
      </div>
    </div>
  );
}

export default App;
