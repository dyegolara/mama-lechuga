import { Card, CardContent } from "@/components/ui/card";

export default function AntojoSection() {
  return (
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
              <div className="text-sm text-emerald-700 flex gap-3 justify-center">
                <span>
                  Solo <span className="font-semibold">$40</span>
                </span>
                <span className="text-emerald-400">•</span>
                <span>
                  Combo <span className="font-semibold">$70</span>
                </span>
              </div>
            </div>
            <div className="py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-emerald-600 text-lg">✓</span>
                <span className="text-emerald-900 font-medium">
                  Torta de Chilaquiles c/ Milanesa
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
                <span className="text-emerald-900 font-medium">Molletes</span>
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
                <span className="text-emerald-900 font-medium">Bisquets</span>
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
        </CardContent>
      </Card>
    </div>
  );
}
