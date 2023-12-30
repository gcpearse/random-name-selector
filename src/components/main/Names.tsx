import { useState } from "react"

const People = () => {

  type Person = {
    id: number,
    name: string
  }

  type People = Person[]

  const [people, setPeople] = useState<People>([])
  const [personID, setPersonID] = useState(0)
  const [input, setInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input) {
      setPeople((currentPeople) => {
        setPersonID((currentValue) => {
          return currentValue + 1
        })
        return [...currentPeople, {
          id: personID,
          name: input
        }]
      })
      setInput("")
    } else {
      setError("Please enter a name!")
    }
  }

  const handleClick = () => {
    setPeople([])
  }

  return (
    <section>
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
          value={input}
          onChange={handleChange} />
        <button className="form-btn">Add</button>
      </form>
      {error ? <p>{error}</p> : null}
      <ul>
        <h2>
          Your list
        </h2>
        {!people.length ? <p id="ul-msg">No names yet!</p> : null}
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
      <button
        id="reset-btn"
        onClick={handleClick}>
        Reset
      </button>
    </section>
  )
}

export default People
