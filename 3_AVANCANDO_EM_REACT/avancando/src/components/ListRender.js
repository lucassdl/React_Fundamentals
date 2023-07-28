import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Lucas", "Fabiana"]);
    
    const [users, setUsers] = useState([
        {id: 1, name: "Gabriel Lima", age: 7},
        {id: 2, name: "Lucas Lima", age: 39},
        {id: 3, name: "Fabiana Melo", age: 50}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return(
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
               {users.map((user) => (
                    <li key={user.id}>Name: {user.name} - Age: {user.age}</li>
               ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;