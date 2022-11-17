import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer1 from './component/Footer1/Footer1';
function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <Footer1/>
      </div>
    </div>
  );
}

export default App;
