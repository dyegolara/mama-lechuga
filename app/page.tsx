import {
  Phone,
  Instagram,
  MapPin,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EnsaladasSection from "@/components/EnsaladasSection";
import DesayunosSection from "@/components/DesayunosSection";
import AntojoSection from "@/components/AntojoSection";
import BebidasSection from "@/components/BebidasSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50/30 to-salmon-50/40">
      {/* Header with Logo */}
      <header className="text-center py-8 px-4">
        <div className="mb-4">
          <img
            src="/mama-lechuga-mascot.png"
            alt="Mascota Mamá Lechuga"
            className="w-40 h-60 mx-auto mb-4 rounded-full object-cover"
          />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-emerald-800 mb-2 text-balance">
          Mamá Lechuga
        </h1>
        <p className="font-serif text-xl md:text-2xl text-salmon-300 italic font-medium mb-6">
          de la madre naturaleza a tu mesa...
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 justify-center items-center max-w-2xl mx-auto px-4">
          <Button
            asChild
            className="bg-salmon-300 hover:bg-salmon-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex-1"
            size="lg"
          >
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Ver Menú
            </a>
          </Button>
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex-1"
            size="lg"
          >
            <a
              href="https://wa.me/525559603719"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
              Cafetería Natural
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Disfruta de alimentos frescos y naturales preparados con amor.
              Desde bebidas artesanales hasta postres caseros y ensaladas
              completas.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <EnsaladasSection />

          {/* Desayunos */}
          <DesayunosSection />

          {/* Antojo */}
          <AntojoSection />

          {/* Bebidas */}
          <BebidasSection />
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
