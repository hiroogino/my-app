import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type User = {
  id: number
  name: string
}

const PER_PAGE = 5

function Home(): JSX.Element {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>("")
  const [newName, setNewName] = useState<string>("")
  const [editId, setEditId] = useState<number | null>(null)
  const [editName, setEditName] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem("users")
    if (saved) {
      setUsers(JSON.parse(saved) as User[])
      setLoading(false)
    } else {
      const fetchUsers = async (): Promise<void> => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users")
          const data: User[] = await res.json()
          setUsers(data)
        } finally {
          setLoading(false)
        }
      }
      fetchUsers()
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users, loading])

  const handleAdd = (): void => {
    if (newName.trim() === "") return
    const newUser: User = { id: users.length + 1, name: newName }
    setUsers([...users, newUser])
    setNewName("")
    setCurrentPage(1)
    setOpen(false)
    toast.success("ユーザーを追加しました")
  }

  const handleDelete = (id: number): void => {
    setUsers(users.filter((user) => user.id !== id))
    setCurrentPage(1)
    toast.error("ユーザーを削除しました")
  }

  const handleEditStart = (user: User): void => {
    setEditId(user.id)
    setEditName(user.name)
  }

  const handleEditSave = (): void => {
    if (editName.trim() === "") return
    setUsers(users.map((user) =>
      user.id === editId ? { ...user, name: editName } : user
    ))
    setEditId(null)
    setEditName("")
    toast.success("ユーザーを更新しました")
  }

  const getSortedUsers = (arr: User[]): User[] => {
    if (sortOrder === "asc") return [...arr].sort((a, b) => a.name.localeCompare(b.name))
    if (sortOrder === "desc") return [...arr].sort((a, b) => b.name.localeCompare(a.name))
    return arr
  }

  const filteredUsers = getSortedUsers(
    users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filteredUsers.length / PER_PAGE)
  const pagedUsers = filteredUsers.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  )

  if (loading) return <p className="text-center mt-10 text-gray-500">読み込み中...</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">ユーザー一覧</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>ユーザーを追加</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新しいユーザーを追加</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 mt-2">
              <Input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleAdd() }}
                placeholder="ユーザー名を入力"
              />
              <Button onClick={handleAdd}>追加する</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <p className="text-sm text-gray-500 mb-4">ユーザー数：{filteredUsers.length}人</p>

      <div className="mb-4">
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
          placeholder="名前で検索"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortOrder("none")}
          className={`px-3 py-1 rounded border ${sortOrder === "none" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          デフォルト
        </button>
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-3 py-1 rounded border ${sortOrder === "asc" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          昇順
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className={`px-3 py-1 rounded border ${sortOrder === "desc" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          降順
        </button>
      </div>

      <ul className="divide-y border rounded mb-4">
        {pagedUsers.map((user) => (
          <li key={user.id} className="flex items-center justify-between px-4 py-3">
            {editId === user.id ? (
              <>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleEditSave() }}
                />
                <Button variant="secondary" onClick={handleEditSave}>保存</Button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 flex-1">
                  <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
                    {user.name}
                  </Link>
                  {user.id <= 10
                    ? <Badge variant="secondary">APIユーザー</Badge>
                    : <Badge>追加ユーザー</Badge>
                  }
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleEditStart(user)}>編集</Button>
                  <Button variant="destructive" onClick={() => handleDelete(user.id)}>削除</Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border disabled:opacity-30 hover:bg-gray-100"
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border ${currentPage === page ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border disabled:opacity-30 hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Home