import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <main className="bg-zinc-900 h-screen w-full flex justify-center items-center">
        <div className="h-80 w-150 bg-zinc-800 flex justify-center items-center flex-col rounded-xl shadow-xl">
          <h1
            className={`text-white text-4xl text-center ${poppins.className}`}
          >
            Delon Dede Afdilah
          </h1>
          <p className="text-white/70 text-2xl text-center">Developer Kece</p>
        </div>
      </main>
    </div>
  );
}