import Image from "next/image";
import Header from "./header";
import About from "./about";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
