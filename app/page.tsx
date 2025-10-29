import { Phone, Instagram, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
        <h1 className="font-serif text-5xl md:text-6xl text-emerald-800 mb-2 text-balance">Mamá Lechuga</h1>
        <p className="font-serif text-xl md:text-2xl text-salmon-300 italic font-medium">
          de la madre naturaleza a tu mesa...
        </p>
      </header>

      {/* Hero Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">Cafetería Natural</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Disfruta de alimentos frescos y naturales preparados con amor. Desde bebidas artesanales hasta postres
              caseros y ensaladas completas.
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
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">Bebidas</h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <ul className="space-y-2 text-emerald-800">
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Esquimo - $50
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Té Frío/Caliente - $30
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Tizana - $30
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Café americano - $25
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Capuchino - $40
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Aguas Frescas (470mL / 1L) - $40
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Licuados - $40
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Licuados Verdes - $40
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Digestivo, Desintoxicante - $45
                  </li>
                </ul>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">Desde: $25.00 mx</span>
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
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">Ensaladas</h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <ul className="space-y-3 text-emerald-800">
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Ensalada Pame</span> - $200
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Ensalada Salma</span> - $200
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Ensalada Azalea</span> - $200
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Ensalada Pepita</span> - $200
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Preparada a tu gusto</span> - $130
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-sm text-emerald-700 font-medium mb-2">Opciones de Proteína:</p>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>Atún (en agua) - $80</li>
                    <li>Queso Panela - $55</li>
                    <li>Queso de Cabra - $90</li>
                    <li>Pechuga Asada / Empanizada</li>
                    <li>Salmón</li>
                    <li>Proteína Extra - $20</li>
                    <li>Vegetal o crocante extra - $7</li>
                  </ul>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">Desde: $130.00 mx</span>
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
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">Desayunos</h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-emerald-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Sandwich</span>
                    <span className="text-sm">- Solo $75 / Combo $115</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Cuernito</span>
                    <span className="text-sm">- Solo $55 / Combo $90</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Omelette</span>
                    <span className="text-sm">- Solo $80 / Combo $115</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Wrap</span>
                    <span className="text-sm">- Solo $70 / Combo $115</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Dobladita de Jamón y Queso</span>
                    <span className="text-sm">- Solo $45 / Combo $80</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Huevito a la Mexicana</span>
                    <span className="text-sm">- Solo $75 / Combo $115</span>
                  </div>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">Desde: $45.00 mx</span>
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
            <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">Antojo</h3>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-emerald-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Chilaquiles Verdes/Rojos</span>
                    <span className="text-sm">- Solo $90 / Combo $120</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Torta de Chilaquiles Sencillos</span>
                    <span className="text-sm">- $60</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Torta de Chilaquiles c/ Milanesa</span>
                    <span className="text-sm">- $90</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Molletes</span>
                    <span className="text-sm">- Solo $60 / Combo $90</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="font-medium">Bisquets</span>
                    <span className="text-sm">- Solo $60 / Combo $90</span>
                  </div>
                </div>
                <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
                  <span className="text-white font-semibold">Desde: $60.00 mx</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif mb-8 font-semibold">Contáctanos</h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+525559603719" className="text-lg hover:text-emerald-200 transition-colors">
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
            <Button asChild className="bg-salmon-300 hover:bg-salmon-400 text-white">
              <a href="https://wa.me/525559603719" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-800 bg-transparent"
            >
              <a href="tel:+525559603719">Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 py-6 px-4 text-center">
        <p className="font-serif text-lg">© 2024 Mamá Lechuga Cafetería - De la madre naturaleza a tu mesa</p>
      </footer>
    </div>
  )
}
