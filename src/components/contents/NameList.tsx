import { Person } from "../../models"

type Props = {
  people: Person[]
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}

const NameList: React.FC<Props> = ({ people, setPeople }) => {

  const handleDelete = (id: number): void => {
    setPeople((currentPeople) => {
      const people = [...currentPeople]
      return people.filter((person) => {
        return person.id !== id
      })
    })
  }

  return (
    <ul>
      <h2>
        Your list
      </h2>
      {!people.length ? (
        <p id="ul-msg">No names yet!</p>
      ) : (
        null
      )}
      {people.map((person) => {
        return (
          <li key={person.id}>
            <p id="list-element">{person.name}</p>
            <button
              id="delete-btn"
              onClick={() => handleDelete(person.id)}>
              Remove
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default NameList
