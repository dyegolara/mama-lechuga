import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Phone, Map, Facebook } from "lucide-react";

export default function ContactButtons() {
  const UTM_SOURCE = "mamalechuga.com";

  const mapParams = {
    q: "Ensaladas Mamá Lechuga",
    ll: "19.4857999,-99.2021597",
    z: "17",
    output: "embed",
    layer: "r",
  };

  const searchParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(mapParams)
        .filter(([_, v]) => (Array.isArray(v) ? v.length > 0 : v !== ""))
        .map(([k, v]) => [k, String(v)])
    )
  ).toString();

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <Button
          asChild
          className="bg-lime-300 hover:bg-lime-400 text-black font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`tel:+525559603719?utm_source=${UTM_SOURCE}`}
            className="flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (55) 59-60-37-19
          </a>
        </Button>
        <Button
          asChild
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`https://wa.me/525559603719?utm_source=${UTM_SOURCE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Button
          asChild
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`https://instagram.com/mama_lechuga_cafeteria?utm_source=${UTM_SOURCE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </Button>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`https://www.facebook.com/profile.php?id=61582525764395&utm_source=${UTM_SOURCE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="bg-white hover:bg-gray-50 text-gray-800 border-gray-300 font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`https://maps.google.com/maps?${searchParams}&utm_source=${UTM_SOURCE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Map className="w-5 h-5" />
            Maps
          </a>
        </Button>
      </div>
    </div>
  );
}
