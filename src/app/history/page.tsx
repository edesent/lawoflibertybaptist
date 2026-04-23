import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The history of Law of Liberty Baptist Church in Jacksonville, FL — an Independent, KJV Bible-believing Baptist church built on a simple mission: Save Souls, Build Believers, Fortify Families.",
};

export default function History() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              A Church Built on the Word
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm space-y-5 text-text-body leading-relaxed text-[1.05rem]">
            <p>
              Law of Liberty Baptist Church was planted in Jacksonville, Florida with a
              clear conviction: the local church exists to preach the Word of God without
              compromise, love the community Christ has placed it in, and disciple
              believers — especially families — in the truths of Scripture.
            </p>
            <p>
              From its earliest days, the church has held tightly to the King James Bible
              as its final authority for faith and practice. The ministry has grown out
              of a simple commitment to plain Bible preaching, traditional hymns, and
              family-integrated worship where parents and children sit together under
              the teaching of God&rsquo;s Word.
            </p>
            <p>
              Under the leadership of Pastor Adam Fannin, the church has reached
              countless people through Sunday services, weekly soul-winning, and a growing
              online sermon ministry that sends the Gospel well beyond the walls of
              Jacksonville.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-gold mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Our Mission
            </h2>
            <p className="text-text-body leading-relaxed text-[1.05rem] mb-3">
              <strong>Save Souls.</strong> We preach the Gospel that Jesus Christ died
              for our sins, was buried, and rose again — and we call men, women, and
              children to trust Him for salvation.
            </p>
            <p className="text-text-body leading-relaxed text-[1.05rem] mb-3">
              <strong>Build Believers.</strong> We disciple Christians through verse-by-verse
              Bible teaching, fellowship, and the example of godly men and women.
            </p>
            <p className="text-text-body leading-relaxed text-[1.05rem]">
              <strong>Fortify Families.</strong> We equip parents to lead their homes
              and raise children who love the Lord and His Word.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="/pastor"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light transition-all"
            >
              Meet Pastor Fannin
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
