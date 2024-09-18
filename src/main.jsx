import { createRoot } from 'react-dom/client'
import './index.css'
import { PersonInfo } from './components/Person'
import { Tel } from './components/Tel'
import App from "./App"

const person = {// obiektów nie można przekazywac jako treść elementów reacta
  name: "Andrzej",
  surName: "Kowalski",
  tel: 666666667
}
const newPerson = {
  name: "Marian",
  surName: "Kowalski",
  tel: 777777776
}
function telNumber(tel){
  return <a href={tel}>{tel}</a>;
};

// const Tel = (props) => <a href = {props.tel}>{props.tel}</a>

// function Tel(props) {
//   return <a href={props.tel}>{props.tel}</a>;
// }

// const PersonInfo = (props) =>(// nowy komponent person, propsy służą do przekazywania danych z komponentu nadrzędnego do podrzędnego
//   <>
//     <h3>{props.name}</h3>
//     <h4>{props.surName}</h4>
//     <h4>tel: <Tel tel = {props.tel}/></h4>
//   </>
// );

const telElement = <a href={person.tel}>{person.tel}</a>
const element = <div>
  <h3>Imię: {person.name}, nazwisko: {person.surName}, numer: {telElement}</h3>
  <h3>Imię: {newPerson.name}, nazwisko: {newPerson.surName}, numer: {telNumber(newPerson.tel)}</h3>// 
  <h3>Imię: {newPerson.name}, nazwisko: {newPerson.surName}, numer: <Tel tel = {newPerson.tel}/></h3>
  <PersonInfo // dzięki reużywalności komponentów możemy znacznie uprościć/skrócić kod
    name = {person.name} 
    surName = {person.surName} 
    tel = {person.tel}/>
    <PersonInfo 
    name = {newPerson.name} 
    surName = {newPerson.surName} 
    tel = {newPerson.tel}/>
</div>;
//pusty znacznik służy do grupowania elementó gdy nie chcemy używać <div>
const element4 = <></>;




createRoot(document.getElementById('root')).render(
 <App/>
  
  
  
)
