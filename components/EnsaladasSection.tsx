"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EnsaladasSection() {
  const salads = [
    {
      name: "Ensalada Pame",
      price: 105,
      ingredients: [
        "Espinaca",
        "Lechuga",
        "Mango",
        "Ajonjolí natural o garapiñado",
        "Aguacate",
        "Arándano",
        "Queso panela",
        "Croutones",
        "Atún",
      ],
    },
    {
      name: "Ensalada Salma",
      price: 200,
      ingredients: [
        "Espinaca",
        "Lechuga",
        "Arándano",
        "Aguacate",
        "Tomate cherry",
        "Manzana",
        "Nuez",
        "Ajonjolí natural o garapiñado",
        "Croutones",
        "Salmón",
      ],
    },
    {
      name: "Ensalada Azalea",
      price: 120,
      ingredients: [
        "Espinaca",
        "Lechuga",
        "Cebolla morada",
        "Manzana",
        "Zanahoria",
        "Betabel",
        "Aguacate",
        "Tortilla frita",
        "Pechuga asada",
      ],
    },
    {
      name: "Ensalada Pepita",
      price: 115,
      ingredients: [
        "Lechuga",
        "Espinaca",
        "Apio",
        "Betabel",
        "Manzana",
        "Cacahuate",
        "Aguacate",
        "Tortilla frita",
        "Pechuga empanizada",
      ],
    },
    {
      name: "Preparada a tu gusto",
      price: 130,
      ingredients: [
        "Base de lechuga y espinaca",
        "100 g de proteína a elegir (excepto salmón)",
        "3 vegetales",
        "2 crocantes",
      ],
    },
  ];

  const [openSalad, setOpenSalad] = useState<number | null>(null);

  return (
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
          <ul className="space-y-3 text-emerald-800 max-w-md mx-auto">
            {salads.map((salad, index) => {
              const isOpen = openSalad === index;
              return (
                <li
                  key={salad.name}
                  className="rounded-xl border border-emerald-200/60 bg-white/70 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSalad(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <span className="text-emerald-900 font-medium">{salad.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-700 font-semibold whitespace-nowrap">
                        ${salad.price}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-emerald-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-emerald-700 font-medium mb-2">Ingredientes:</p>
                      <ul className="list-disc space-y-1 text-sm text-emerald-700 pl-5">
                        {salad.ingredients.map((ingredient) => (
                          <li key={ingredient}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-4 border-t border-emerald-200 max-w-md mx-auto">
            <p className="text-sm text-emerald-800 font-semibold mb-3 text-left">Opciones de Proteína:</p>
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
              <li className="py-1.5 text-left">Pechuga Asada / Empanizada</li>
              <li className="py-1.5 text-left">Salmón</li>
              <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                <span className="flex-1 text-left">Proteína Extra</span>
                <span className="font-medium whitespace-nowrap">$20</span>
              </li>
              <li className="flex items-start justify-between gap-3 py-1.5 rounded-lg hover:bg-emerald-100/30 transition-colors">
                <span className="flex-1 text-left">Vegetal o crocante extra</span>
                <span className="font-medium whitespace-nowrap">$7</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 bg-salmon-300 border border-salmon-400 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-semibold">Desde: $105.00 MXN</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


