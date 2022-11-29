
import './App.css';
import Carousel from './componentes/carousel';
import Header from './componentes/header';
import about from './componentes/about';
import './styleLeaves/Header.css';
import './styleLeaves/Carousel.css';
function App() {
  return (
    <div className="App">
      <Header
      link1='index.html'
      brand="Salazar Services"
      opcion1="Home"
      link2='index.html'
      opcion2="Contact us"
      link3='#contact'
      opcion3="About us"
      link4='#about'
      opcion4="Service"
      link5='#contact'
      opcion5="Our Jobs"
      link6='#contact'
      />
      <Carousel  
      TituloCarousel1="Painting"
      texto1="We offer a lot of services for everyone who wants to receive services of painting, 
      Roofing, Pressure wash and Solar panels"
   
      TituloCarousel2="Roofing"
      texto2="We offer a lot of services for everyone who wants to receive services of painting, 
      Roofing, Pressure wash and Solar panels"
      TituloCarousel3="Pressure wash"
      texto3="We offer a lot of services for everyone who wants to receive services of painting, 
      Roofing, Pressure wash and Solar panels"

      TituloCarousel4="LandScape"
      texto4="We offer a lot of services for everyone who wants to receive services of painting, 
      Roofing, Pressure wash and Solar panels"

      link1="https://www.rd.com/wp-content/uploads/2019/07/shutterstock_1368561038-scaled.jpg"
      link2="https://www.build-review.com/wp-content/uploads/2021/01/roofing.jpg"
      link3="https://www.mywindowwashing.com/blog/wp-content/uploads/how-to-pressure-wash-a-deck.jpg"
      link4="https://images.squarespace-cdn.com/content/v1/5e693129d9fe931db0f1718d/1585069776620-T6J3E0W4OAU8SNTCTDCR/iStock-92624397_bg_image.jpg?format=2500w"
      >
     

      </Carousel>
      
      <about>

        
      </about>


    </div>
  );
}

export default App;
