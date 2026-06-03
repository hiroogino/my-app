import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type User = {
  id: number
  name: string
  email?: string
  phone?: string
  company?: {
    name: string
  }
  address?: {
    city: string
  }
}

function UserDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data: User = await res.json()
        if (!data || !data.id) throw new Error("ユーザーが見つかりませんでした")
        setUser(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました")
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [id])

  if (loading) return <p className="text-center mt-10 text-gray-500">読み込み中...</p>

  if (error) return (
    <div>
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
        ← 戻る
      </Button>
      <Card>
        <CardContent className="py-6">
          <p className="text-gray-500">{error}</p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        ← 戻る
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <CardTitle>{user?.name}</CardTitle>
            <Badge>APIユーザー</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="divide-y">
            <li className="py-3 flex gap-4">
              <span className="text-gray-500 w-24">メール</span>
              <span>{user?.email ?? "未登録"}</span>
            </li>
            <li className="py-3 flex gap-4">
              <span className="text-gray-500 w-24">電話</span>
              <span>{user?.phone ?? "未登録"}</span>
            </li>
            <li className="py-3 flex gap-4">
              <span className="text-gray-500 w-24">会社</span>
              <span>{user?.company?.name ?? "未登録"}</span>
            </li>
            <li className="py-3 flex gap-4">
              <span className="text-gray-500 w-24">住所</span>
              <span>{user?.address?.city ?? "未登録"}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserDetail