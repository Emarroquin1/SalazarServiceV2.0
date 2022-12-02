
import './App.css';
import Carousel from './componentes/carousel';
import Header from './componentes/header';
import About from './componentes/about';
import Ourjobs from './componentes/OurJobs';
import Service from './componentes/Service';

import w1 from './imagenesWork/wa1.jpeg'
import w2 from './imagenesWork/w2.jpeg'
import w3 from './imagenesWork/w3.jpeg'
import w4 from './imagenesWork/w4.jpeg'
import w5 from './imagenesWork/w6.jpeg'
import w6 from './imagenesWork/w7.jpeg'
import w7 from './imagenesWork/w8.jpeg'
import w8 from './imagenesWork/w9.jpeg'
import w9 from './imagenesWork/w10.jpeg'
import w10 from './imagenesWork/w11.jpeg'
import w11 from './imagenesWork/w12.jpeg'
import w12 from './imagenesWork/w13.jpeg'
import w13 from './imagenesWork/w14.jpeg'
import w14 from './imagenesWork/w15.jpeg'



import service2 from './images/landscape.jpg'
import service3 from './images/preasurewatch.jpg'




import './styleLeaves/Header.css';
import './styleLeaves/Carousel.css';
import './styleLeaves/About.css';
import './styleLeaves/Ourjobs.css';
import './styleLeaves/Service.css';


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
      
      <About 
      titulo="About Us Informations"
      texto1="Well in this company you will find many kind of services, Our company stands out
      for many things such as our great services and attention that we give our customers.
      don't miss this opportunity to have a cheap and awesome service, we will be glad to attend
      you"
      titulo2="Great services with trustworthy people"
      texto2="If you choose our services you will get the Information of what person will attend 
      the service that you want to order. Because from our point of view your peace and trust
      is the most important thing."
      imagen="https://media.istockphoto.com/photos/roofer-builder-worker-picture-id626486888?b=1&k=20&m=626486888&s=170667a&w=0&h=05O7xUj5KmjAwc7TuJ23m5f5kOhOyTh4ALJ2GCICZ54="
      >

        
      </About>

<Ourjobs

link1={w2}
link2={w3}
link3={w4}
link4={w5}
link5={w6}
link6={w7}
link7={w8}
link8={w9}
link9={w10}
link10={w11}
link11={w12}
link12={w13}
link13={w14}
link14={w14}
link15={w14}
link16={w14}
link17={w14}
link18={w14}
link19={w14}
link20={w14}
link21={w1}
>


</Ourjobs>

<Service

titulo="Services"
link1= "https://www.cheappaintersingapore.com/wp-content/uploads/2021/03/tg3q35hq.jpg"
link2={service2}
link3={service3}
link4="https://www.loofal.com/wp-content/uploads/2020/04/loofal-solar-work-solar-services.jpg"

Subtitulo1='Painting'
texto1='Applying paint, stain and other finishes to paint surfaces using paintbrushes, rollers or sprayers. Maintaining an inventory of supplies like paint brushes, rollers and tarps. Removing old finish using scrapers, chemical compounds or blowtorches. Estimating time and material costs on painting projects.'

Subtitulo2='landscape'
texto2='Mowing, edging and fertilizing lawns. Weeding and mulching landscape beds. Trimming small trees, hedges and shrubs. Removing unwanted, dead or damaged trees. Planting shrubs, flowers and trees.'

Subtitulo3='pressure wash'
texto3='Pressure washing uses hot water to expel water at a high PSI (pounds per square inch) onto the surface you are treating. This provides a deep clean for: Surface cleaning: driveways, sidewalks, driveways, patios and more. pool deck cleaning'

Subtitulo4='Roofing'
texto4='From roof removal to a new roof installation, we help
you select and install the right roof for your needs. We will help you maintain your roof to increase it is
longevity.'


>
  
  
</Service>

    </div>
  );
}

export default App;
