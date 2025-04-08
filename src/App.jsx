import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { current } from 'immer';
import React, { useRef, useState } from "react"; 
import { useForm } from 'react-hook-form';
import { date, string, z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"; 

// i nawet kiedy będe sam, nie zmienie się, sperme będe jadł

//  <GridGamer/>

const App = () => { 
  const [marketList, setMarketList] = useState([]);
  const [CombinedPrice, setCombinedPrice] = useState(0);
  function Delete(index, price){
    const updatedCart= marketList.filter((_,i) => i==index);
    setMarketList(updatedCart);
    setCombinedPrice(com => com-parseFloat(price))
  }
  function Wszystkie(){
    return(
      <>
      <ol>
      {marketList.map((ml, id) =><li key={id}>{ml.Name} - {ml.Price} - {ml.Category} <button onClick={() => Delete(id, ml.Price)}>DELETE </button> </li> )}
      </ol>
      </>
     
    );}
    function Filtrowane(kat){
      let filteredList;
      filteredList = marketList.filter((marketList) => marketList.Category ===kat);
      console.log(filteredList)
      
      return(
        <ol>
        {filteredList.map((ml, id) => <li key={id}>{ml.Name} - {ml.Price} - {ml.Category}</li>
           )}
         </ol>
      );
    }
  
  function GridGamer(){
      const[kategoria, setKategoria] = useState("Wszystkie");
      function onChange(e){
        setKategoria(e.target.value);
      }
      return(
      <>
        Filtowanie 
        <select onChange={onChange}>
        <option  value="Wszystkie">Wszystkie</option>
          <option value="Jedzenie">Jedzenie</option>
          <option value="Elektronika">Elektronika</option>
          <option value="Ubrania">Ubrania</option>
          <option value="Dodatki">Dodatki</option>
        </select> <br/>
 {kategoria === "Wszystkie" ? <Wszystkie/>  : 
Filtrowane(kategoria)
 } 
  <p>Całkowita cena : {CombinedPrice}</p>
      </>
    )
  }
  function UserForm() { 
    let NameRef = useRef(null);
    let KwotaRef = useRef(null);
    let KategoriaRef = useRef(null);
   
   function handleOnClick(){
   setCombinedPrice(com =>  com +parseFloat(KwotaRef.current.value))
    setMarketList(ml => [...ml,{ Name : NameRef.current.value, 
        Price : KwotaRef.current.value,
         Category : KategoriaRef.current.value}]);
       
        }
    return (
    <form  onSubmit={handleOnClick}> 
      <div className="mb-3"> 
        <label htmlFor="Nazwa" className="form-label">Nazwa</label> 
        <input type="text" id="Nazwa" className="form-control" ref={NameRef}  required /> 
      </div>

      <div className="mb-3"> 
        <label htmlFor="Kwota" className="form-label">Kwota</label> 
        <input type="number" id="Kwota" className="form-control"  ref={KwotaRef} required />
         
      </div>

      <select name="product" id="product" ref={KategoriaRef}  required>
          <option value="Jedzenie">Jedzenie</option>
          <option value="Elektronika">Elektronika</option>
          <option value="Ubrania">Ubrania</option>
          <option value="Dodatki">Dodatki</option>
        </select> <br/>
      <button type="submit" className="btn btn-primary" >Wyślij</button> 
    </form> 
  ); 
}

    


  return(
    <>
  <UserForm/>
  <GridGamer/>
    </>
  
  );
}; 
 
export default App;