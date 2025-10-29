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
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-600 ring-2 ring-salmon-300 overflow-hidden mx-auto">
                <img
                  src="/breakfast-wrap-sandwich-avocado-healthy-morning-me.jpg"
                  alt="Desayunos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
              Desayunos
            </h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-emerald-800 max-w-md mx-auto">
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Sandwich
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$75</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$115</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Cuernito
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$55</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$90</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Omelette
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$80</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$115</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">Wrap</span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$70</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$115</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Dobladita de Jamón y Queso
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$45</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$80</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Huevito a la Mexicana
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$75</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$115</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">
                    Desde: $45.00 MXN
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Antojo */}
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-600 ring-2 ring-salmon-300 overflow-hidden mx-auto">
                <img
                  src="/cinnamon-roll-brownies-flan-desserts-pastries.jpg"
                  alt="Antojos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
              Antojo
            </h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-emerald-800 max-w-md mx-auto">
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Chilaquiles Verdes/Rojos
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$90</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$120</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Torta de Chilaquiles Sencillos
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700">
                      <span className="font-semibold">$50</span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Torta de Chilaquiles c/ Milanesa
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700">
                      <span className="font-semibold">$90</span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Molletes
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$60</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$90</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        Bisquets
                      </span>
                    </div>
                    <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                      <span>
                        Solo <span className="font-semibold">$60</span>
                      </span>
                      <span className="text-emerald-400">•</span>
                      <span>
                        Combo <span className="font-semibold">$90</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">
                    Desde: $50.00 MXN
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Bebidas */}
          <BebidasSection />
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
