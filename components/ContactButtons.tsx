import { Button } from "@/components/ui/button";
import {
  LuInstagram,
  LuMessageCircle,
  LuPhone,
  LuMapPin,
  LuFileText,
} from "react-icons/lu";
import { FaTiktok, FaFacebook } from "react-icons/fa";

interface ContactButtonsProps {
  variant?: "header" | "footer";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContactButtons({
  variant = "footer",
}: ContactButtonsProps) {
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

  if (variant === "header") {
    return (
      <div className="space-y-6 pt-4">
        <div className="flex gap-3">
          <Button
            asChild
            className="bg-salmon-300 hover:bg-salmon-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex-1"
            size="lg"
          >
            <a
              href={`/menu.pdf?utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <LuFileText className="w-5 h-5" />
              Ver Menú
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-lime-600 hover:text-lime-700 hover:bg-lime-50 font-semibold flex-1"
            size="lg"
          >
            <a
              href={`tel:+525559603719?utm_source=${UTM_SOURCE}`}
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <LuPhone className="w-5 h-5" />
              (55) 59-60-37-19
            </a>
          </Button>
        </div>
        <div className="flex justify-between gap-4 px-6">
          <Button
            asChild
            variant="ghost"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold"
            size="lg"
          >
            <a
              href={`https://wa.me/525559603719?utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <LuMessageCircle className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 font-semibold"
            size="lg"
          >
            <a
              href={`https://instagram.com/mama_lechuga_cafeteria?utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <LuInstagram className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold"
            size="lg"
          >
            <a
              href={`https://www.facebook.com/profile.php?id=61582525764395&utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <FaFacebook className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-black hover:text-gray-700 hover:bg-gray-50 font-semibold"
            size="lg"
          >
            <a
              href={`https://www.tiktok.com/@mam.lechuga?utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <FaTiktok className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-gray-700 hover:text-gray-800 hover:bg-gray-50 font-semibold"
            size="lg"
          >
            <a
              href={`https://maps.google.com/maps?${searchParams}&utm_source=${UTM_SOURCE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* @ts-ignore react-icons type issue */}
              <LuMapPin className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Footer variant
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
            {/* @ts-ignore react-icons type issue */}
            <LuPhone className="w-5 h-5" />
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
            {/* @ts-ignore react-icons type issue */}
            <LuMessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-3">
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
            {/* @ts-ignore react-icons type issue */}
            <LuInstagram className="w-5 h-5" />
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
            {/* @ts-ignore react-icons type issue */}
            <FaFacebook className="w-5 h-5" />
            Facebook
          </a>
        </Button>
        <Button
          asChild
          className="bg-black hover:bg-gray-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <a
            href={`https://www.tiktok.com/@mam.lechuga?utm_source=${UTM_SOURCE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {/* @ts-ignore react-icons type issue */}
            <FaTiktok className="w-5 h-5" />
            TikTok
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
            {/* @ts-ignore react-icons type issue */}
            <LuMapPin className="w-5 h-5" />
            Maps
          </a>
        </Button>
      </div>
    </div>
  );
}
