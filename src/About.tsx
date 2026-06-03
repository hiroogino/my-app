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
      </div>
    </div>
  )
}

export default About