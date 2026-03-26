import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeSceneLoader from "@/components/ThreeSceneLoader";

export default function Home() {
  return (
    <>
      <ThreeSceneLoader />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Bento />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
