import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollProgress } from "@/components/layout/scroll-progress";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="top"
          className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
        >
          <h1 className="font-serif-display text-[clamp(3rem,8vw,6rem)] leading-[1.05] text-ink">
            MÈCHE
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-charcoal">
            Estudio de peluquería y barbería premium. Cortes, color y
            tratamientos capilares diseñados para potenciar tu identidad.
          </p>
        </section>

        {/* Secciones placeholder con IDs para los links del navbar */}
        <section id="nosotros" className="min-h-screen px-6 py-24" />
        <section id="tratamientos" className="min-h-screen px-6 py-24" />
        <section id="resultados" className="min-h-screen px-6 py-24" />
        <section id="equipo" className="min-h-screen px-6 py-24" />
        <section id="testimonios" className="min-h-screen px-6 py-24" />
        <section id="reserva" className="min-h-screen px-6 py-24" />
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
