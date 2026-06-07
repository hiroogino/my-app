import Button from "./components/Button"

function About(): JSX.Element {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">アバウト</h1>
      <div className="border rounded p-6">
        <p className="text-gray-600">このアプリはReact学習用のサンプルアプリです。</p>
        <ul className="mt-4 divide-y">
          <li className="py-3 flex gap-4">
            <span className="text-gray-500 w-24">フレームワーク</span>
            <span>React</span>
          </li>
          <li className="py-3 flex gap-4">
            <span className="text-gray-500 w-24">ビルドツール</span>
            <span>Vite</span>
          </li>
          <li className="py-3 flex gap-4">
            <span className="text-gray-500 w-24">CSS</span>
            <span>Tailwind CSS</span>
          </li>
          <li className="py-3 flex gap-4">
            <span className="text-gray-500 w-24">ルーティング</span>
            <span>React Router</span>
          </li>
        </ul>

        {/* デザイントークンの確認 */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <Button color="primary">プライマリ</Button>
          <Button color="danger">デンジャー</Button>
          <Button color="success">サクセス</Button>
          <Button color="secondary">セカンダリ</Button>
        </div>
        <div className="mt-4 flex gap-4 flex-wrap items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  )
}

export default About