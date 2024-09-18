import { Tel } from "./Tel";

export const PersonInfo = (props) =>(// nowy komponent person, propsy służą do przekazywania danych z komponentu nadrzędnego do podrzędnego
    <>
      <h3>{props.name}</h3>
      <h4>{props.surName}</h4>
      <h4>tel: <Tel tel = {props.tel}/></h4>
    </>
  );