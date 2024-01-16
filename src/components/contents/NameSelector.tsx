import { useState } from "react"
import { Person } from "../../models"

type Props = {
  people: Person[]
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}

const NameSelector: React.FC<Props> = ({ people, setPeople }) => {

  const [choice, setChoice] = useState<string>("")

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
    <div>
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
      {
        choice ? (
          <p id="selected-name">{choice}</p>
        ) : (
          null
        )
      }
    </div>
  )
}

export default NameSelector
