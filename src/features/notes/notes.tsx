import { MainContent } from './components/main-content';
import { SideBar } from './components/side-bar';

export function Notes() {
  return (
    <main className="h-full flex gap-10 border border-black">
      <SideBar />

      <MainContent />
    </main>
  );
}
