import Hero from "@/components/Hero";
import MoviesContainer from "@/components/MoviesContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#121829] text-[#666e83] min-h-screen">
      <div className="flex flex-col px-4 md:px-6 lg:max-w-6xl lg:mx-auto">
        <Navbar />
        <Hero />
        <MoviesContainer />
      </div>
    </main>
  );
}
