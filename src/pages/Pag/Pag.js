//import { Carousel } from 'react-responsive-carousel';
import React from "react";
//import { Logo } from "./styles";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import c0 from "../../components/Img/c0.jpg";
import c1 from "../../components/Img/c1.jpg";
import c2 from "../../components/Img/c2.jpg";
import c3 from "../../components/Img/c3.jpg";
import c4 from "../../components/Img/c4.jpg";
import c5 from "../../components/Img/c5.jpg";
import c6 from "../../components/Img/c6.jpg";
import c7 from "../../components/Img/c7.jpg";
import c8 from "../../components/Img/c8.jpg";
import c9 from "../../components/Img/c9.jpg";
import ieq from "../../components/Img/ieq2.jpg";
import './home.css';
import { BsFillGeoAltFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { Social } from "./styles";
import { Icon } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



export default function Home() {
  
  
  
  
  
  
  return (
    
    <div className="container">
      <div className="card mt-4 bg-info">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3 mb-0 text-center "> REDE DE CASAIS</h3>
              <h4 className="mx-3 my-3 text-center"> AMAI SEMPRE</h4>
            </div>
          </div>
        </div>

        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c0}
              height="350px"
              alt="slide 1"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c1}
              height="350px"
              alt="slide 2"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c2}
              height="350px"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c3}
              height="350px"
              alt="slide 4"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c4}
              height="350px"
              alt="slide 5"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c5}
              height="350px"
              alt="slide 6"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c6}
              height="350px"
              alt="slide 7"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c7}
              height="350px"
              alt="slide 8"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c8}
              height="350px"
              alt="slide 9"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c9}
              height="350px"
              alt="slide 10"
            />
          </CCarouselItem>
        </CCarousel>

        <div>

        </div>
      </div>

      <div className="card mt-4 bg-warning bg-opacity-50">
        
        <p className="mx-3 my-3 mb-0 text-center fs-2 fw-bold">
          {" "}
          VISITE-NOS 
        </p>
       
        <p className="mx-3 my-3 text-center fs-3 fw-bold">
          {" "}
          CLIQUE NA IMAGEM ABAIXO:
        </p>


        <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

                 
              
        <img src={ieq} alt='' />

  
      </div>
</div>










                         

        <p className="mx-3 my-3 text-center fs-3 fw-bold">IEQ-SEDE</p>

        <p className="mx-3 my-3 mb-0 text-center fs-2 fw-bold">
          Igreja Do Evangélio Quadrangular!
        </p>
        <p className="mx-3 my-3 text-center fs-3 fw-bold"> Marabá-Pá</p>
      </div>
    

    <div className="card mt-4 bg-success bg-opacity-50">
      <div className="row mb-3">
      <p className="mx-3 my-3 mb-0 text-center fs-2 fw-bold">
          {" "}
          VISITE-NOS 
        </p>
       
        <p className="mx-3 my-3 text-center fs-3 fw-bold">
          {" "}
          CLIQUE NAS IMAGENS ABAIXO:
        </p>
        <p className="mx-3 my-3 text-center fs-3 fw-bold">
          {" "}
         E SEJÁ DIRECIONADO PARA UMA CELULA MAIS PROXIMA DE SUA CASA:
        </p>

         
         
          <div class="col-4 p-2">
         
          <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
                  src={c1}
                  alt="bo"
                 
                  height="200px"
                  className="card-img-top"
                />    </div>
    <div class="flip-card-back">
      <h3>CELULA</h3>
      <h5>UM SO PROPOSITO</h5>
      <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
     
      <Icon>
    
            <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
      <BsFillGeoAltFill />
            
            </a>

            </Icon>
            
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>



<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
     <h3>CELULA</h3>
     <h5>UM SO PROPOSITO</h5>
     <h5>FOLHA 10 QUADRA 00 LOTE 00</h5>
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-2">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c3}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
  </div>
</div> 





       
      <div className="card mt-4 mb-3 bg-info">
        <h5 className="mx-3 my-3 text-center">
          CONHEÇAM NOSSAS MIDIAS SOCIAIS **MINISTERIO AMAI**!{" "}
        </h5>

        <Social>
          <a href="https://www.facebook.com/ministerio.amai7">
            <FaFacebookSquare />
          </a>

          <a href='.hover-show'>
            <GrInstagram />
          </a>
        </Social>
      </div>
    </div>
  );
}
