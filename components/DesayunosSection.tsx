"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DesayunosSection() {
  const desayunos = [
    {
      name: "Omelette",
      solo: 75,
      combo: 115,
      ingredients: [
        "Relleno de queso manchego, espinaca y cebolla",
        "Relleno de jamón y queso",
      ],
      sides: ["Sobre una cama de lechuga, acompañado de frijoles refritos"],
    },
    {
      name: "Cuernito",
      solo: 55,
      combo: 90,
      ingredients: [
        "Jamón",
        "Lechuga",
        "Mayonesa",
        "Queso Manchego",
        "Jitomate",
        "Chiles en vinagre",
      ],
    },
    {
      name: "Sandwich",
      solo: 45,
      combo: 80,
      ingredients: [
        "Jamón (lechuga, jitomate, queso Panela, chiles en vinagre, aguacate, germen de trigo)",
        "Ensalada de Atún (apio, mayonesa, granos de elote, chiles en vinagre, lechuga)",
      ],
    },
    {
      name: "Huevito a la Mexicana",
      solo: 75,
      combo: 115,
      ingredients: [
        "Sobre una cama de lechuga",
        "Acompañado de frijoles refritos",
      ],
    },
    {
      name: "Wrap",
      solo: 70,
      combo: 115,
      ingredients: [
        "Tortilla de avena y betabel",
        "Queso crema",
        "Espinaca",
        "Lechuga",
        "Pollo",
        "Jitomate",
        "Chiles en vinagre",
      ],
    },
    {
      name: "Dobladita de Jamón y Queso",
      solo: 55,
      combo: 90,
      ingredients: [
        "Tortilla de Avena y espinaca",
        "Jamón",
        "Queso manchego",
        "Lechuga",
        "Acompañada de frijoles refritos",
      ],
    },
  ];

  const [openDesayuno, setOpenDesayuno] = useState<number | null>(null);

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
      <h3 className="text-3xl font-serif text-emerald-800 mb-4 font-semibold">
        Desayunos
      </h3>
      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="p-6">
          <div className="space-y-3 text-emerald-800 max-w-md mx-auto">
            {desayunos.map((item, index) => {
              const isOpen = openDesayuno === index;
              return (
                <div
                  key={item.name}
                  className="rounded-xl border border-emerald-200/60 bg-white/70 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenDesayuno(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-emerald-700 flex gap-3">
                        <span>
                          Solo{" "}
                          <span className="font-semibold">${item.solo}</span>
                        </span>
                        <span className="text-emerald-400">•</span>
                        <span>
                          Combo{" "}
                          <span className="font-semibold">${item.combo}</span>
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-emerald-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <ul className="list-disc space-y-1 text-sm text-emerald-700 pl-5 text-left">
                        {item.ingredients.map((ingredient) => (
                          <li key={ingredient}>{ingredient}</li>
                        ))}
                      </ul>
                      {"sides" in item && item.sides && (
                        <div className="mt-3 pt-3 border-t border-emerald-300 text-xs text-emerald-700">
                          <p className="font-medium mb-1 text-left">
                            Acompañado con:
                          </p>
                          <p className="text-left">{item.sides.join(", ")}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
