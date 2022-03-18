import './App.css';
import Countries from './components/Countries/Countries';

function App() {

  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visit the world</h1>
//       <h4>Total country: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} flag={country.flags.png}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <img src={props.flag} alt="" />
//       <h4>Name: {props.name}</h4>
//       <h5>Population: {props.population}</h5>
//     </div>
//   )
// }

export default App;
