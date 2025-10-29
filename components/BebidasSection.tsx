"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BebidasSection() {
  const bebidasCollapsibles = [
    {
      name: "Licuados Verdes",
      price: 40,
      options: [
        { name: "Apio, Limón, Pepino", benefit: "Elimina líquidos retenidos" },
        {
          name: "Espinaca, Piña y Jengibre",
          benefit: "Fortalece el sistema inmune",
        },
        { name: "Lechuga, Piña y Apio", benefit: "Regula presión arterial" },
        { name: "Piña, Betabel, Pepino, Apio", benefit: "Limpia hígado" },
        { name: "Avena y Piña", benefit: "Desintoxica el cuerpo" },
        { name: "Plátano, Fresa, Betabel", benefit: "Energético" },
        {
          name: "Pepino, Apio, Espinaca, Manzana, Limón, Jengibre",
          benefit: "Fortalece sistema inmune y desintoxicante",
        },
        {
          name: "Piña, Zanahoria, Betabel y Pepino",
          benefit: "Digestivo, desintoxicante",
        },
      ],
    },
    {
      name: "Licuados (150ml)",
      price: 50,
      options: [
        {
          name: "Fresa, Plátano, Nuez, Amaranto, Cacao, Avena (con leche deslactosada)",
        },
      ],
    },
    {
      name: "Aguas Frescas",
      sizes: [
        { size: "470ml", price: 25 },
        { size: "1L", price: 40 },
      ],
      options: [
        { name: "Pepino, Limón, Chia" },
        { name: "Avena, Canela, Nuez" },
        { name: "Jamaica, Albahaca" },
        { name: "Piña, Apio, Limón" },
      ],
    },
    {
      name: "Esquimo (470ml)",
      price: 40,
      options: [{ name: "Chocolate, Café, Vainilla, Nuez, Coco" }],
    },
    {
      name: "Té Frío/Caliente",
      price: 30,
      options: [
        { name: "Jengibre y limón" },
        { name: "Cúrcuma, limón y manzanilla" },
        { name: "Ginseng, jengibre y hierba mate" },
        { name: "Manzanilla, vainilla y miel" },
        { name: "Matcha vainilla" },
        { name: "Frutos rojos" },
      ],
    },
  ];

  const bebidasSimples = [
    { name: "Capuchino", price: 45 },
    { name: "Café americano", price: 30 },
    { name: "Tizana Frío/Caliente", price: 50 },
  ];

  const [openBebida, setOpenBebida] = useState<number | null>(null);

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
      <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
        Bebidas
      </h3>
      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="p-6">
          <ul className="space-y-3 text-emerald-800 max-w-md mx-auto">
            {/* Collapsible items */}
            {bebidasCollapsibles.map((bebida, index) => {
              const isOpen = openBebida === index;
              return (
                <li
                  key={bebida.name}
                  className="rounded-xl border border-emerald-200/60 bg-white/70 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenBebida(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        {bebida.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {"sizes" in bebida && bebida.sizes ? (
                        <div className="text-sm text-emerald-700 flex gap-3">
                          <span>
                            {bebida.sizes[0].size}{" "}
                            <span className="font-semibold">
                              ${bebida.sizes[0].price}
                            </span>
                          </span>
                          <span className="text-emerald-400">•</span>
                          <span>
                            {bebida.sizes[1]?.size}{" "}
                            <span className="font-semibold">
                              ${bebida.sizes[1]?.price}
                            </span>
                          </span>
                        </div>
                      ) : (
                        <span className="text-emerald-700 font-semibold whitespace-nowrap">
                          ${bebida.price}
                        </span>
                      )}
                      <ChevronDown
                        className={`h-4 w-4 text-emerald-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <ul className="space-y-2 text-sm text-emerald-700">
                        {bebida.options.map((option) => (
                          <li
                            key={option.name}
                            className="text-left pl-2 border-l-2 border-emerald-300 py-1"
                          >
                            <p className="font-medium">{option.name}</p>
                            {"benefit" in option && option.benefit && (
                              <p className="text-xs text-emerald-600 italic">
                                {option.benefit}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}

            {/* Simple items with original styling */}
            {bebidasSimples.map((bebida) => (
              <li
                key={bebida.name}
                className="flex items-start justify-between gap-3 py-2 px-3 rounded-lg hover:bg-emerald-100/50 transition-colors"
              >
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  <span className="text-emerald-600 text-lg mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-emerald-900">{bebida.name}</span>
                </div>
                <span className="text-emerald-700 font-semibold whitespace-nowrap">
                  ${bebida.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-semibold">Desde: $25.00 MXN</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
