import { Card, CardContent } from "@/components/ui/card";

export default function BebidasSection() {
  return (
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
          <ul className="space-y-3 text-emerald-800 max-w-md mx-auto">
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Licuados Verdes</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$40</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Licuados (150ml)</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$50</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Aguas Frescas (470ml)</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$25</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Aguas Frescas (1L)</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$40</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Esquimo</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$40</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Capuchino</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$45</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Café americano</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$30</span>
            </li>
            <li className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-emerald-900">Té Frío/Caliente</span>
              </div>
              <span className="text-emerald-700 font-semibold whitespace-nowrap">$30</span>
            </li>
          </ul>
          <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-semibold">Desde: $25.00 MXN</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


