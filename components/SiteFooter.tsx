import { Button } from "@/components/ui/button";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
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
          <Button asChild className="bg-salmon-300 hover:bg-salmon-400 text-white">
            <a href="tel:+525559603719" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


