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

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        onBlur={() => setError(null)}>
        <label htmlFor="name-input">Add a name?
          <input
            type="text"
            id="name-input"
            placeholder="Enter a name..."
            value={input}
            onChange={handleChange} />
        </label>
        <button>Add</button>
      </form>
      {error ? <p>{error}</p> : null}
      <ul>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </section>
  )
}

export default People
