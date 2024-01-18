import { useContext } from 'react'
import { Card } from './Card'
import { Intro } from './Intro'
import { CoffeeList, HomeContainer } from './styles'
import { CoffeesContext } from '../../context/CoffeesContex'

export function Home() {
  const { coffeeList } = useContext(CoffeesContext)

  return (
    <HomeContainer>
      <Intro />

      <h1>Nossos cafés</h1>

      <CoffeeList>
        {coffeeList.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </HomeContainer>
  )
}
