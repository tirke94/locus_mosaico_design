import { useState } from 'react';
import './App.css';
import { data } from './Utilis/Utilis'
import HomeCategories from './Components/HomeCategories';
import CardHomeCategories from './Components/CardHomeCategories';
import Carousel from './Components/Carousel';
import TrackInfo from './Components/TrackInfo';
import RandomItem from './Components/RandomItem';

console.log(data);

function App() {
  const [komadniNamestaj, setKomadniNamestaj] = useState(data)

  const type = []
  const uniqueType = []

  komadniNamestaj.forEach(obj => {
    type.push(obj.type)
  })
  for (let i = 0; i <= type.length; i++) {
    if (type[i] !== type[i + 1]) {
      uniqueType.push(type[i])
    }
  }


  const typeName = (item) => {

    if (item === 'komadni_namestaj') {
      return 'Komadni namestaj'
    }
    if (item === 'namestaj_po_meri') {
      return 'Namestaj po meri'
    }
    if (item === 'projektovanje_enterijera') {
      return 'Projektovanje enterijera'
    }
  }

  return (
    <div className="App">
      <section className='headerSection'>
        <h1>Lepota je u kvalitetu, a lepota je u <br /> Locus Mosaico-u</h1>
      </section>

      <HomeCategories>
        {uniqueType.map(item => <CardHomeCategories key={item} /*type={item}*/ type={typeName(item)} background={require('./Assets/Komoda1.jpg')} />)}
      </HomeCategories>
      <TrackInfo />
      <Carousel />
      <RandomItem data={data} />
    </div>
  );
}

export default App;
