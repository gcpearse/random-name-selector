import { useState } from "react"
import { Person } from "../../models"
import NameAdder from "./NameAdder"
import NameList from "./NameList"
import NameSelector from "./NameSelector"

const Contents: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([])

  return (
    <section>
      <NameAdder people={people} setPeople={setPeople} />
      <NameList people={people} setPeople={setPeople} />
      <NameSelector people={people} setPeople={setPeople} />
    </section>
  )
}

export default Contents
