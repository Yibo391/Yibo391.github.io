import WeatherWidget from './WeatherWidget';
import './main.css'; // Assuming you have or will create this for additional custom styles
import Footer from './Footer'
import PhotoCarousel from './PhotoCarousel'
function App() {
  return (
    <div className="App text-center mt-4">
      <h1 className="app-title mb-4">Live Weather Conditions</h1>
      <WeatherWidget />
      <PhotoCarousel /> {/* Place the carousel component */}

      <Footer/>
    </div>
  );
}

export default App;