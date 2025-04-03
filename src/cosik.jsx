
const ItemList = (props) => {
  const item = props.items; 
  
  return (
    <>
      {item.length === 0 ? <p>Lista jest pusta</p> : (
        <ul>{item.map(it=> <li key={item}>{item}</li>)}</ul>
      )}
    </>
  )
}
  export default ItemList;