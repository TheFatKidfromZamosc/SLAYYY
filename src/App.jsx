import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { current } from 'immer';
import React, { useRef, useState } from "react"; 
import { useForm } from 'react-hook-form';
import { date, string, z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"; 
import f1 from './assets/img/f1.jpg';
import f2 from './assets/img/f2.jpg';
import c1 from './assets/img/c1.jpg';
import c2 from './assets/img/c2.jpg';
import z1 from './assets/img/z1.jpg';
import z2 from './assets/img/z2.jpg';
import fiolet from './assets/img/fioletowy.jpg';
import czerwony from './assets/img/czerwony.jpg';
import zloty from './assets/img/zloty.jpg';
import wszystkie from './assets/img/wszystkie.jpg';
// i nawet kiedy będe sam, nie zmienie się, sperme będe jadł
 const App = () => { 

  const Lakiery= 
    [
      {plik : f1, odcień : "fioletowy", nazwa:"No Risk No story", cena : 27.29, reklama : "Oszczedzasz 33%" },
      {plik : f2, odcień : "fioletowy", nazwa:"Moony Wispers", cena : 38.99, reklama : "Mój wybór Kasia Kot" },
      {plik : c1, odcień : "czerwony", nazwa:"Alizee", cena : 27.29, reklama : "Oszczedzasz 31%" },
      {plik : c2, odcień : "czerwony", nazwa:"Mysterious Tale", cena : 32.99, reklama : "GET THE LOOK" },
      {plik : z1, odcień : "złoty", nazwa:"Top Glow Gold", cena : 29.99, reklama : "XMAS Trend" },
      {plik : z2, odcień : "złoty", nazwa:"Sparkling Kiss", cena : 27.99, reklama : "XMAS Trend" },
    ]
    function dodajDoKoszyka(index){
      alert(Lakiery[index].nazwa + " dodano do koszyka");
    }  

    function Wszyskie(){
      return (
       Lakiery.map((lak, index) => 
          <div className='LakMain' key={index}>
           <div className="imgDiv"> <img src={lak.plik} alt={lak.nazwa} /></div>
           <div className="Opis">
             <h4>{lak.nazwa}</h4>
             <p>odcień : {lak.odcień}</p>
             <p>{lak.cena}</p>
             <p className='PODSWIETL'>{lak.reklama}</p>
             <button onClick={ () =>dodajDoKoszyka(index)}>Dodaj Do Koszyka</button>
             </div>  
          </div>
        )
      );
      }

 /*     function Fiolet(){
        return (
         Lakiery.map((lak, index) => {lak.odcień==="fioletowy" ?  <div className='LakMain' key={index}>
         <div className="imgDiv"> <img src={lak.plik} alt={lak.nazwa} /></div>
         <div className="Opis">
           <h4>{lak.nazwa}</h4>
           <p>odcień : {lak.odcień}</p>
           <p>{lak.cena}</p>
           <p className='PODSWIETL'>{lak.reklama}</p>
           <button onClick={ () =>dodajDoKoszyka(index)}>Dodaj Do Koszyka</button>
           </div>  
        </div>)) : "" }  
           
          )
        );
        }
 */
  
    const [color, setColor] = useState("");
  function Lakier(){
    return(
      <>
    <h1 className='head'>Lakiery</h1>
      <div className='color'>
          <img src={fiolet} alt="fioletowy" onClick={() => setColor("fioletowy")}/>
          <img src={czerwony} alt="czerwony"  onClick={() => setColor("czerwony")}/>
          <img src={zloty} alt="zloty"  onClick={() => setColor("zloty")}/>
          <img src={wszystkie} alt="wszystkie"  onClick={() => setColor("wszystkie")}/>
      </div>
    
    <div>
      <Wszyskie/>
    </div>
    </>);}
  return(
    <>
     <Lakier/>
    </>
  
  );
}; 
 
export default App;