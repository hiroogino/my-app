type User = {
  id: number
  name: string
}

type Props = {
  users: User[]
  onDelete: (id: number) => void
}

function UserList({ users, onDelete }: Props): JSX.Element {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => onDelete(user.id)}>削除</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList