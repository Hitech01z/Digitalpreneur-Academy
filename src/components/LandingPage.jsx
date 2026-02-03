import React, { useEffect, useState } from "react";

/* ---------------- COUNTDOWN ---------------- */
const Countdown = () => {
  const launchDate = new Date("2026-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = launchDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="bg-black text-white px-5 py-4 rounded-xl text-center min-w-[80px]"
        >
          <p className="text-2xl font-bold">{value}</p>
          <span className="text-[11px] uppercase tracking-wide text-white/70">
            {key}
          </span>
        </div>
      ))}
    </div>
  );
};

/* ---------------- LANDING PAGE ---------------- */
const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    [
      "Who is Digitalpreneur Academy for?",
      "Students, job seekers, creators, entrepreneurs, and professionals ready to earn globally using digital skills.",
    ],
    [
      "Do I need a tech background?",
      "No. All programs are beginner-friendly and taught step by step.",
    ],
    [
      "Is this a get-rich-quick scheme?",
      "No. We focus on ethical, skill-based systems that create long-term income.",
    ],
    [
      "Is the academy fully online?",
      "Yes. You can learn and earn from anywhere in the world.",
    ],
  ];

  return (
    <div className="font-sans bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="font-extrabold tracking-tight">
            DIGITALPRENEUR ACADEMY
          </span>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#learn">What You’ll Learn</a>
            <a href="#audience">Who It’s For</a>
            <a href="#mentorship">Mentorship</a>
            <a href="#faq">FAQ</a>
          </div>

          <a
            href="#waitlist"
            className="bg-black text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Learn the Skills. <br />
            Build the System. <br />
            <span className="text-gray-400">Earn Globally.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A future-ready learning ecosystem equipping Africans with
            high-income digital skills and the mindset to build profitable
            online businesses from anywhere in the world.
          </p>

          <form id="waitlist" className="mt-10 grid gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="border rounded-lg px-4 py-3"
            />
            <input
              type="tel"
              placeholder="WhatsApp phone number"
              className="border rounded-lg px-4 py-3"
            />
            <button className="bg-black text-white py-4 rounded-lg font-bold">
              GET EARLY ACCESS & FREE ROADMAP
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Join 500+ aspiring digital leaders · No spam, just value
          </p>

          <div className="mt-16">
            <h3 className="uppercase tracking-widest text-sm text-gray-400">
              Next Cohort Launches In
            </h3>
            <Countdown />
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Digitalpreneur Academy Exists</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We bridge the gap between education and execution, learning and
            earning, and local limitations and global opportunities.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section id="learn" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Digital Marketing & Affiliate Marketing",
              "Content Creation & YouTube Monetization",
              "E-commerce & Online Business Setup",
              "AI Tools for Business & Productivity",
              "Crypto, Web3 & Financial Literacy",
              "Personal Branding & Online Influence",
              "Automation & Business Systems",
            ].map(item => (
              <div key={item} className="bg-white p-6 rounded-xl border">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="audience" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Who This Is For</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Students seeking financial independence",
              "Job seekers tired of limited opportunities",
              "Entrepreneurs ready to go digital",
              "Creators who want to monetize skills",
              "Professionals building side income",
              "Anyone ready to earn globally from Africa",
            ].map(item => (
              <div key={item} className="bg-gray-50 p-8 rounded-xl border">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section id="mentorship" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Mentorship & Support</h2>
          <p className="mt-4 text-gray-600">
            You’re not learning alone. We guide you from skill acquisition to execution.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Expert-led mentorship",
              "Supportive learning community",
              "Practical assignments & real-world projects",
            ].map(item => (
              <div key={item} className="bg-white p-8 rounded-2xl border">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <div key={i} className="bg-white border rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between font-semibold"
                >
                  {q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Start Learning. Start Building. Start Earning.
          </h2>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-xl font-bold">
            JOIN DIGITALPRENEUR ACADEMY
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t">
        <p className="text-sm text-gray-500">
          © 2026 Digitalpreneur Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
