import './App.css'
import Card from './components/Card/Card'

function App() {
  const URL = "git@github.com:ilya1981/Card.git"

  const card_1 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the\nbulk of the card's content.",
    url: URL,
    img: "https://img.freepik.com/premium-vector/abstract-arrow-vector-logo-template-dark-background_248261-267.jpg?semt=ais_hybrid"
  },

  card_2 = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    url: URL
  }
  return (
    <>
    <Card
      title={card_1.title}
      text={card_1.text}
      url={card_1.url}>
    <img
      alt={""}
      src={card_1.img}
      className='card-img-top'/>
      </Card>
    <Card
      title={card_2.title}
      text={card_2.text}
      url={card_2.url}/>
    </>
  )
} 
export default App
