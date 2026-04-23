import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import About from "@/components/About";
import YouTubeFeature from "@/components/YouTubeFeature";
import Ministries from "@/components/Ministries";
import ScriptureBanner from "@/components/ScriptureBanner";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Law of Liberty Baptist Church",
  alternateName: "Law of Liberty Baptist",
  url: "https://www.lawoflibertybaptist.com",
  description:
    "Independent, KJV Bible-believing Baptist church serving Jacksonville, Florida. Family-integrated, traditional music, Bible preaching.",
  telephone: "+1-904-364-4050",
  address: {
    "@type": "PostalAddress",
    streetAddress: "485 Halsema Rd N",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32220",
    addressCountry: "US",
  },
  sameAs: ["https://www.youtube.com/@LawofLiberty"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:30",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <About />
      <YouTubeFeature />
      <Ministries />
      <ScriptureBanner />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}
