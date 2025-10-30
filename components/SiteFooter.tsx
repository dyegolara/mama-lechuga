import { MapPin } from "lucide-react";
import ContactButtons from "@/components/ContactButtons";

export default function SiteFooter() {
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
    <section className="bg-emerald-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-8 font-semibold">Contáctanos</h3>

        <div className="space-y-6 mb-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-start justify-center space-x-3">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <div className="text-center">
                <p className="text-sm leading-tight">
                  Calle Faja de Oro 371, esq. Renacimiento
                  <br />
                  Escuela Secundaria Diurna N° 50 Lázaro Cárdenas
                  <br />
                  Azcapotzalco, CDMX
                </p>
              </div>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <iframe
                src={`https://maps.google.com/maps?${searchParams}`}
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Mama Lechuga Cafeteria Location"
              ></iframe>
            </div>
          </div>
        </div>

        <ContactButtons />
      </div>
    </section>
  );
}
