import {
  Phone,
  Instagram,
  MapPin,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
          {/* Bebidas */}
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-600 ring-2 ring-salmon-300 overflow-hidden mx-auto">
                <img
                  src="/iced-coffee-drinks-smoothies-natural-beverages.jpg"
                  alt="Bebidas naturales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
              Bebidas
            </h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <ul className="space-y-3 text-emerald-800 max-w-md mx-auto">
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Esquimo</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $50
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Té Frío/Caliente</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $30
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Tizana</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $30
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Café americano</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $25
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Capuchino</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $40
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">
                        Aguas Frescas (470mL / 1L)
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $40
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Licuados</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $40
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">Licuados Verdes</span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $40
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900">
                        Digestivo, Desintoxicante
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $45
                    </span>
                  </li>
                </ul>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">
                    Desde: $25.00 MXN
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ensaladas */}
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-600 ring-2 ring-salmon-300 overflow-hidden mx-auto">
                <img
                  src="/fresh-salad-bowl-healthy-greens-vegetables-protein.jpg"
                  alt="Ensaladas completas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
              Ensaladas
            </h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <ul className="space-y-3 text-emerald-800 max-w-md mx-auto">
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900 font-medium">
                        Ensalada Pame
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $200
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900 font-medium">
                        Ensalada Salma
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $200
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900 font-medium">
                        Ensalada Azalea
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $200
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900 font-medium">
                        Ensalada Pepita
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $200
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-900 font-medium">
                        Preparada a tu gusto
                      </span>
                    </div>
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      $130
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-emerald-200 max-w-md mx-auto">
                  <p className="text-sm text-emerald-800 font-semibold mb-3 text-left">
                    Opciones de Proteína:
                  </p>
                  <ul className="text-sm text-emerald-700 space-y-2">
                    <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                      <span className="flex-1 text-left">Atún (en agua)</span>
                      <span className="font-medium whitespace-nowrap">$80</span>
                    </li>
                    <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                      <span className="flex-1 text-left">Queso Panela</span>
                      <span className="font-medium whitespace-nowrap">$55</span>
                    </li>
                    <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                      <span className="flex-1 text-left">Queso de Cabra</span>
                      <span className="font-medium whitespace-nowrap">$90</span>
                    </li>
                    <li className="py-1.5 text-left">
                      Pechuga Asada / Empanizada
                    </li>
                    <li className="py-1.5 text-left">Salmón</li>
                    <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                      <span className="flex-1 text-left">Proteína Extra</span>
                      <span className="font-medium whitespace-nowrap">$20</span>
                    </li>
                    <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                      <span className="flex-1 text-left">
                        Vegetal o crocante extra
                      </span>
                      <span className="font-medium whitespace-nowrap">$7</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">
                    Desde: $130.00 MXN
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

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
                      <span className="font-semibold">$60</span>
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
                    Desde: $60.00 MXN
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif mb-8 font-semibold">
            Contáctanos
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <a
                href="tel:+525559603719"
                className="text-lg hover:text-emerald-200 transition-colors"
              >
                (55) 59-60-37-19
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Instagram className="w-5 h-5" />
              <a
                href="https://instagram.com/mama_lechuga_cafeteria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-emerald-200 transition-colors"
              >
                @mama_lechuga_cafeteria
              </a>
            </div>

            <div className="flex items-start justify-center space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="text-center">
                <p className="leading-relaxed">
                  Calle renacimiento 371, esquina faja de oro
                  <br />
                  Escuela Secundaria Diurna N° 50 Lázaro Cárdenas
                  <br />
                  Azcapotzalco, CDMX
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-800 bg-transparent"
            >
              <a
                href="https://wa.me/525559603719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="bg-salmon-300 hover:bg-salmon-400 text-white"
            >
              <a href="tel:+525559603719" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 py-6 px-4 text-center">
        <p className="font-serif text-lg">
          © 2024 Mamá Lechuga Cafetería - De la madre naturaleza a tu mesa
        </p>
      </footer>
    </div>
  );
}
