import Hero from "@/components/Hero";
import MoviesContainer from "@/components/MoviesContainer";

export default function Home() {
  return (
    <main className="mt-16 min-h-screen">
      <div className="flex flex-col px-4 md:px-6 lg:max-w-6xl lg:mx-auto">
        <Hero />
        <MoviesContainer />
      </div>
    </main>
  );
}
