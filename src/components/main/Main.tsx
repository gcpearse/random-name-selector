import { useState } from "react"
import { Person } from "../../models"
import NameAdder from "./NameAdder"

const Main: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([])
  const [choice, setChoice] = useState<string>("")

  const handleDelete = (id: number): void => {
    setPeople((currentPeople) => {
      const people = [...currentPeople]
      return people.filter((person) => {
        return person.id !== id
      })
    })
  }

  const handleSelect = (): void => {
    if (people.length) {
      const selectedPerson = people[Math.floor(Math.random() * people.length)]
      setChoice(selectedPerson.name)
    }
  }

  const handleReset = (): void => {
    setPeople([])
    setChoice("")
  }

  return (
    <section>
      <NameAdder people={people} setPeople={setPeople} />
      <ul>
        <h2>
          Your list
        </h2>
        {!people.length ? <p id="ul-msg">No names yet!</p> : null}
        {people.map((person) => {
          return <li key={person.id}>
            <p id="list-element">{person.name}</p>
            <button
              id="delete-btn"
              onClick={() => handleDelete(person.id)}>
              Remove
            </button>
          </li>
        })}
      </ul>
      <div id="btn-container">
        <button
          id="select-btn"
          className="main-btn"
          onClick={handleSelect}>
          Pick name
        </button>
        <button
          id="reset-btn"
          className="main-btn"
          onClick={handleReset}>
          Reset
        </button>
      </div>
      {choice ? <p id="selected-name">{choice}</p> : null}
    </section>
  )
}

export default Main
