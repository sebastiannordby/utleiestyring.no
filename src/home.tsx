import React from "react";

const detailedFeatures = [
  "Full kontroll over dine verktøy og eiendeler. Hold oversikt over hvem som har lånt hva, og når det skal tilbakeleveres – alt i sanntid.",
  "Systemet er skreddersydd for en effektiv arbeidshverdag. Med et brukervennlig grensesnitt for både PC og berøringsskjerm, administrerer du enkelt utleie og vedlikehold uansett hvor du er.",
  "Få innsikt i eiendelenes bruksmønster. Ta smartere beslutninger om vedlikehold, nye innkjøp og ressursfordeling.",
  "All administrasjon, inkludert reparasjonshistorikk, er tilgjengelig med noen få klikk. Du sparer tid og kan fokusere på det som virkelig betyr noe i virksomheten.",
];

const featureSummary = [
  {
    title: "Effektiv Oversikt",
    description:
      "Utleiestyring gir deg umiddelbar tilgang til hvem som har lånt verktøy og utstyr. Slutt på forvirring og tapte eiendeler.",
  },
  {
    title: "Brukervennlig og Fleksibelt",
    description:
      "Utviklet for både desktop og touchscreen. Perfekt for arbeidsplasser med behov for enkel tilgang via PC, mobil eller nettbrett.",
  },
  {
    title: "Ressursstyring i sanntid",
    description:
      "Se bruken av eiendeler i sanntid, med rapporter som hjelper deg planlegge vedlikehold og forbedre investeringer.",
  },
  {
    title: "Sikker Tilgangsstyring",
    description:
      "Systemet tilbyr rollebasert tilgang, slik at du kan sikre at kun autorisert personell har kontroll over bedriftens eiendeler.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="utleiestyring-bg py-12 min-h-[400px] text-center mb-12 p-4 mt-36">
        <h2 className="text-3xl font-bold mb-4">
          Velkommen til Fremtiden av Verktøyutleie
        </h2>
        <p className="text-base mb-6">
          <span className="font-semibold">Spar tid. Spar penger.</span> Effektiv
          verktøyutleie, skreddersydd for din bedrift.
        </p>
        <a
          href="#demo"
          className="bg-utleiestyring_primary whitespace-pre text-white rounded-full px-6 py-3 text-base font-semibold hover:bg-utleiestyring_accent transition duration-300"
        >
          Start Gratis Prøveperiode
        </a>
      </section>

      {/* Feature Summary Section */}
      <section
        id="discover"
        className="mb-12 polka-bg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {featureSummary.map((feature, index) => (
          <div key={index} className="p-4">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Detailed Features Section */}
      <section className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h3 className="text-xl font-bold mb-4">
          Hva gjør Utleiestyring uunnværlig?
        </h3>
        {detailedFeatures.map((text, index) => (
          <p key={index} className="text-sm mb-4">
            {text}
          </p>
        ))}
        <a className="inline-block cursor-pointer bg-utleiestyring_primary text-white rounded-full px-8 py-3 text-base font-semibold hover:bg-utleiestyring_accent transition duration-300">
          Les mer<span className="hidden md:inline"> om funksjonene</span>
        </a>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="mb-12 bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-6">Ta Kontakt med Oss</h3>
        <p className="text-base mb-4">
          Har du spørsmål eller trenger mer informasjon? Fyll ut skjemaet
          nedenfor, så kommer vi tilbake til deg så snart som mulig.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Navn"
            className="border rounded-md p-2"
            required
          />
          <input
            type="email"
            placeholder="E-post"
            className="border rounded-md p-2"
            required
          />
          <textarea
            placeholder="Melding"
            className="border rounded-md p-2 h-24"
            required
          />
          <button
            type="submit"
            className="bg-utleiestyring_primary text-white rounded-full px-8 py-3 text-base font-semibold hover:bg-utleiestyring_accent transition duration-300"
          >
            Send Melding
          </button>
        </form>
      </section>
    </>
  );
}
