
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Poster from './components/Poster';
import ClientList from './components/ClientList';
import Footer from './components/Footer';
import ServicesDetails from './components/ServicesDetails';
import Banner from './components/Banner';
import FullStackDev from './components/FullStackDev';
import Socials from './components/Socials';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Poster />
      <ClientList />
      <ServicesDetails />
      <Banner />
      <FullStackDev />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
