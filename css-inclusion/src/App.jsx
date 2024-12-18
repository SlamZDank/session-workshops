import './App.css'
import IntroductionCard from './IntroductionCard';
import Man from "./assets/batMAN.jpg"
import Bateman from './assets/patrickBateman.avif'
import Lotfi from './assets/lotfi boiuchnak.png'
import sebti from './assets/nsebtil3ziza.webp'

function App() {
  let user1 = {
    name: "Batman",
    profession: "Knight of the night",
    age: "[REDACTED]",
    hobby: "Playing Chess♟️"
  }

  let user2 = {
    name: "Patrick Bateman",
    profession: "Sigma Male and [REDACTED]",
    age: "27",
    hobby: "Listening to music 🎶",
  }

  let user3 = {
    name: "Lotfi Bouchnek",
    profession: "Fannen",
    age: "90",
    hobby: "Tereb 🪘"
  }
  let user4 = {
    name:"Sebti XD",
    profession: "batal metrassem",
    age:"20",
    hobby:"Meklet Bsiset Azer 🍔"
  }

  return (
    <>
      <div className='wallpaper'>
        <div className='list'>
          <IntroductionCard name={user1.name}
            age={user1.age}
            profession={user1.profession}
            hobby={user1.hobby}
            img={Man} />

          <IntroductionCard name={user2.name}
            age={user2.age}
            profession={user2.profession}
            hobby={user2.hobby}
            img={Bateman} />

          <IntroductionCard name={user3.name}
            age={user3.age}
            profession={user3.profession}
            hobby={user3.hobby}
            img={Lotfi} />

          <IntroductionCard name={user4.name}
            age={user4.age}
            profession={user4.profession}
            hobby={user4.hobby}
            img={sebti} />
        </div>
      </div >
    </>
  )
}

export default App
