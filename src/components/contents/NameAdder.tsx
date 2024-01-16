import { useState } from "react"
import { Person } from "../../models"

type Props = {
  people: Person[]
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}

const NameAdder: React.FC<Props> = ({ people, setPeople }) => {

  const [personID, setPersonID] = useState<number>(0)
  const [input, setInput] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (input) {
      if (people.every((person) => {
        return person.name !== input
      })) {
        setPeople((currentPeople) => {
          setPersonID((currentValue) => {
            return currentValue + 1
          })
          return [...currentPeople, {
            id: personID,
            name: input
          }]
        })
        setError(null)
        setInput("")
      } else {
        setError("No duplicate names!")
      }
    } else {
      setError("Please enter a name!")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={() => setError(null)}>
      <label htmlFor="name-input">
        Add a name?
      </label>
      <input
        type="text"
        id="name-input"
        placeholder="Enter a name..."
        maxLength={15}
        value={input}
        onChange={handleChange} />
      <button className="form-btn">
        Add
      </button>
      {error ? <p className="error-msg">{error}</p> : null}
    </form>
  )
}

export default NameAdder
