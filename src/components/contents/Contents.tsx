import { useState } from "react"
import { Person } from "../../models"
import NameAdder from "./NameAdder"
import NameList from "./NameList"

const Contents: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([])
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
    <section>
      <NameAdder people={people} setPeople={setPeople} />
      <NameList people={people} setPeople={setPeople} />
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
      {choice ? (
        <p id="selected-name">{choice}</p>
      ) : (
        null
      )}
    </section>
  )
}

export default Contents
