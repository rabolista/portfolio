import { useEffect, useState } from "react";

// WMO weather codes (used by Open-Meteo) mapped to a short label + emoji.
const WEATHER_MAP = {
  0: { label: "Clear", icon: "☀️" },
  1: { label: "Mostly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Fog", icon: "🌫️" },
  48: { label: "Fog", icon: "🌫️" },
  51: { label: "Drizzle", icon: "🌦️" },
  53: { label: "Drizzle", icon: "🌦️" },
  55: { label: "Drizzle", icon: "🌦️" },
  61: { label: "Rain", icon: "🌧️" },
  63: { label: "Rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  71: { label: "Snow", icon: "🌨️" },
  73: { label: "Snow", icon: "🌨️" },
  75: { label: "Heavy snow", icon: "🌨️" },
  80: { label: "Showers", icon: "🌦️" },
  81: { label: "Showers", icon: "🌦️" },
  82: { label: "Showers", icon: "🌦️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm", icon: "⛈️" },
  99: { label: "Thunderstorm", icon: "⛈️" },
};

// Detects the visitor's approximate location (via IP) and current weather
// there, using two free, key-less, CORS-enabled public APIs
// (geojs.io + open-meteo.com).
export default function WeatherWidget() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const geoRes = await fetch("https://get.geojs.io/v1/ip/geo.json");
        if (!geoRes.ok) throw new Error("geo lookup failed");
        const geo = await geoRes.json();
        const latitude = parseFloat(geo.latitude);
        const longitude = parseFloat(geo.longitude);
        if (Number.isNaN(latitude) || Number.isNaN(longitude)) throw new Error("geo unavailable");

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        if (!weatherRes.ok) throw new Error("weather lookup failed");
        const weather = await weatherRes.json();
        const code = weather.current_weather?.weathercode ?? 0;
        const info = WEATHER_MAP[code] || { label: "Unknown", icon: "🌡️" };

        if (cancelled) return;
        setData({
          temp: Math.round(weather.current_weather.temperature),
          label: info.label,
          icon: info.icon,
          city: geo.city || geo.region || geo.country || "Unknown location",
          region: geo.city && geo.country ? geo.country : "",
        });
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40 rounded-xl border border-rab-line bg-rab-bg2/70 backdrop-blur px-5 py-4 font-display text-rab-paper shadow-lg select-none pointer-events-none">
      {status === "loading" && <div className="text-sm text-rab-faint">Detecting location…</div>}

      {status === "error" && <div className="text-sm text-rab-faint">Weather unavailable</div>}

      {status === "ready" && (
        <div className="flex items-center gap-4">
          <span className="text-4xl leading-none">{data.icon}</span>
          <div>
            <div className="text-3xl leading-none font-semibold">
              {data.temp}°C
            </div>
            <div className="text-sm text-rab-muted mt-1">{data.label}</div>
            <div className="text-xs text-rab-muted mt-1.5">
              {data.city}
              {data.region ? `, ${data.region}` : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
