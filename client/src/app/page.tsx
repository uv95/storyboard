import SceneList from '@/components/SceneList';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="border w-full flex justify-between px-4">
        <h1 className="border">Storyboard Editor</h1>
        <div className="border flex gap-2">
          <button className="border">Export as PDF</button>
          <button className="border">Theme</button>
        </div>
      </header>
      <main className="w-full h-full border flex flex-col">
        <SceneList />
        <button className="border mt-auto">Add scene</button>
      </main>
      <footer className="w-full border">Footer</footer>
    </div>
  );
}
