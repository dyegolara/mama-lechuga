import { Card, CardContent } from "@/components/ui/card";

export default function DesayunosSection() {
  return (
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
          <div className="space-y-3 text-emerald-800 max-w-md mx-auto">
            {[
              { name: "Sandwich", solo: 75, combo: 115 },
              { name: "Cuernito", solo: 55, combo: 90 },
              { name: "Omelette", solo: 80, combo: 115 },
              { name: "Wrap", solo: 70, combo: 115 },
              { name: "Dobladita de Jamón y Queso", solo: 45, combo: 80 },
              { name: "Huevito a la Mexicana", solo: 75, combo: 115 },
            ].map((i) => (
              <div key={i.name} className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span className="text-emerald-900 font-medium">{i.name}</span>
                </div>
                <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                  <span>
                    Solo <span className="font-semibold">${i.solo}</span>
                  </span>
                  <span className="text-emerald-400">•</span>
                  <span>
                    Combo <span className="font-semibold">${i.combo}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-semibold">Desde: $45.00 MXN</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


