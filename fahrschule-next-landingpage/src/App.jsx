import React from 'react';

// Landingpage React component (Tailwind CSS assumed)
// This single-file component contains the landing page markup, ad copy snippets, and a compact pitch deck

export default function ReformLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-semibold">Führerschein-Reform 2026: Was sie für Ihre Fahrschule bedeutet — und wie Sie vorbereitet werden</h1>
        <p className="mt-3 text-gray-600">Strategische Vorbereitung. Kostensenkung. Planbare Auslastung. 17-Minuten-Reform-Check — kostenlos und nur wenige Plätze pro Woche.</p>
      </header>

      <main className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Kurz: Warum das wichtig ist</h2>
          <p className="mt-2 text-gray-700">Die Reform führt zu mehr Digitalisierung und veränderten Kostenstrukturen. Fahrschulen, die früh an ihren Prozessen, Preisen und Vermarktung arbeiten, behalten ihre Marge oder verbessern sie — trotz höherem Wettbewerbsdruck.</p>
        </section>

        <section className="mb-6">
          <h3 className="font-semibold">Für wen das Programm sinnvoll ist</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Inhaber kleiner und mittelgroßer Fahrschulen</li>
            <li>Fahrschulen mit vollem Kalender, die trotzdem Margen schützen wollen</li>
            <li>Betreiber, die 2026 planbare Schülerzahlen benötigen</li>
          </ul>
        </section>

        <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Kostenlos: 17-Minuten-Reform-Check</h4>
            <p className="mt-2 text-sm text-gray-700">Kurzgespräch mit konkreter Kalkulation — Sie erhalten unmittelbar danach Ihre individuelle 2026-Gewinnprognose per E‑Mail.</p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
              <li>Konkrete Preiskalkulation</li>
              <li>Sparpotenziale durch digitale Theorie & Simulator</li>
              <li>3-Schritte-Fahrplan zur Wartelisten-Generierung</li>
            </ul>
            <div className="mt-4">
              <a href="#buchung" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Termin sichern</a>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">90-Tage-Transformationsprogramm (Beispiel)</h4>
            <p className="mt-2 text-sm text-gray-700">Komplettumstellung auf das neue Modell: Kalkulation, Simulator, digitale Theorie, Preispakete, Wartelisten-Kampagne, Schulung Ihres Teams.</p>
            <p className="mt-3 font-medium">Ziel: Effizienz, Margenschutz und planbare Auslastung bis 2026.</p>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="font-semibold">Ergebnisse — realistisch und belegt</h3>
          <p className="mt-2 text-gray-700">Aus aktuellen Projekten: deutliche Kostensenkungen pro Schüler, marginsteigernde Maßnahmen und Wartelisten mit Voranmeldungen. Beispiele und Referenzen werden im Call gezeigt.</p>
        </section>

        <section id="buchung" className="mb-6">
          <h3 className="font-semibold">Jetzt: 17-Minuten-Reform-Check buchen</h3>
          <form className="mt-3 grid grid-cols-1 gap-3">
            <input className="p-2 border rounded" placeholder="Name, Fahrschule" />
            <input className="p-2 border rounded" placeholder="Telefon oder E-Mail" />
            <select className="p-2 border rounded">
              <option>Region / Stadt</option>
              <option>Stadt A</option>
              <option>Stadt B</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Termin anfragen</button>
          </form>
        </section>

        <section className="mb-6 text-sm text-gray-600">
          <h4 className="font-semibold">Hinweis</h4>
          <p className="mt-1">Analysen basieren auf dem aktuellen Stand der Reformplanung. Gesetzliche Änderungen werden berücksichtigt. Die Gratis-Analyse ist unabhängig und unverbindlich.</p>
        </section>

        <footer className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Elvis Jasarovic — Transformationsberatung für Fahrschulen</footer>
      </main>

      {/*
        ---------- Asset Section (Ad Copies & Pitch) - inline for developer use ----------

        Below are short ad variations for Meta & TikTok, and a compact pitch-deck outline.

        NOTE: These are included inside the component file as comments for convenience.

      */}

      {/* Meta Ad - Short (Text + CTA)
        Headline: Führerschein-Reform 2026: Jetzt vorbereitet sein
        Text: Kosten senken. Marge sichern. 17-Minuten-Check gratis. Limitierte Termine.
        CTA: Jetzt Termin sichern
      */}

      {/* TikTok Script - 15s
        1-3s: "Reform 2026 kommt – was bedeutet das für Ihre Fahrschule?"
        4-10s: Quick stat: "Digitale Theorie & Simulator senken Kosten pro Schüler um X€"
        11-15s: CTA: "17-Minuten-Check – Link in Bio. Nur wenige Termine."
      */}

      {/* Pitch-Deck (Kurz) - 6 Slides
        1) Problem: Was ändert sich 2026
        2) Lösung: 90-Tage-Transformationsprogramm
        3) Nutzen: Margenschutz, planbare Auslastung
        4) Ablauf: 17-Minuten-Check -> Analyse -> Implementierung
        5) Pricing & Garantie: klar, transparent, messbar
        6) Referenzen & Call-to-Action
      */}

    </div>
  )
}

// End of file: includes landing page markup, ad snippets and pitch outline.



