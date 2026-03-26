import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NoiseBgLoader from "@/components/NoiseBgLoader";
import CursorBlobLoader from "@/components/CursorBlobLoader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <NoiseBgLoader />
      <CursorBlobLoader />
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
