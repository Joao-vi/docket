import { MainContent } from './components/main-content';
import { SideBar } from './components/side-bar';

export function Notes() {
  return (
    <main className="h-full flex sm:gap-10">
      <SideBar />

      <MainContent />
    </main>
  );
}
