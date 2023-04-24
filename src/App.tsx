import asyncComponent from './components/asyncComponent/asyncComponent'

const AsyncFadeCard = asyncComponent(()=> import('./components/FadeCard'))

function App() {

  const fadeCards = [
    {
      color: 'red',
    },
    {
      color: 'green',
    },
    {
      color: 'blue',
    },
    {
      color: 'orange',
    }
  ]

  return (
    <>
      {
        fadeCards.map((el, idx) => {
          return (
            <AsyncFadeCard  key={idx} color={el.color}/>
          )
        })
      }
    </>
  )
}

export default App
