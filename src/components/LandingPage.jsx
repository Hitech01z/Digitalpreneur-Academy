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
    <div className="flex justify-center gap-2 sm:gap-4 mt-6 flex-nowrap">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="
           bg-slate-900 text-white px-3 py-2 sm:px-5 sm:py-4 rounded-xl text-center min-w-[64px] shadow-lg">

          <p className="text-lg sm:text-2xl font-extrabold">{value}</p>
          <span className="text-[10px] uppercase tracking-wider text-white/70">
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <span className="font-extrabold text-blue-600 tracking-tight">
            DIGITALPRENEUR ACADEMY
          </span>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#learn" className="hover:text-blue-600 transition">
              What You’ll Learn
            </a>
            <a href="#who" className="hover:text-blue-600 transition">
              Who It’s For
            </a>
            <a href="#mentorship" className="hover:text-blue-600 transition">
              Mentorship
            </a>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>

            <a
              href="#waitlist"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Join Waitlist
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">
            <a
              onClick={() => setMenuOpen(false)}
              href="#about"
              className="block"
            >
              About
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#learn"
              className="block"
            >
              What You’ll Learn
            </a>
            <a onClick={() => setMenuOpen(false)} href="#who" className="block">
              Who It’s For
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#mentorship"
              className="block"
            >
              Mentorship
            </a>
            <a onClick={() => setMenuOpen(false)} href="#faq" className="block">
              FAQ
            </a>

            <a
              onClick={() => setMenuOpen(false)}
              href="#waitlist"
              className="block bg-blue-600 text-white text-center py-2 rounded-lg "
            >
              Join Waitlist
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-500 to-green-500 text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Learn the Skills. <br />
            Build the System. <br />
            <span className="text-white/80">Earn Globally.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A future-ready learning ecosystem equipping Africans with
            high-income digital skills and the mindset to build profitable
            online businesses from anywhere in the world.
          </p>

          <form id="waitlist" className="mt-10 grid gap-4 bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto text-slate-900">
            <input
              type="email"
              placeholder="Email address"
              className="border px-4 py-3 rounded-lg"
            />
            <input
              type="tel"
              placeholder="WhatsApp phone number"
              className="border px-4 py-3 rounded-lg"
            />
            <button className="bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800">
              GET EARLY ACCESS & FREE ROADMAP
            </button>
          </form>

          <p className="mt-4 text-sm text-white/80">
            Join 500+ aspiring digital leaders · No spam, just value
          </p>

          <div className="mt-16">
            <h3 className="uppercase tracking-widest text-sm text-white/70">
              Next Cohort Launches In
            </h3>
            <Countdown />
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why Digitalpreneur Academy Exists
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Digitalpreneur Academy was created to bridge the gap between
            education and execution, learning and earning, and local limitations
            and global opportunities.
          </p>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            We empower students, youths, entrepreneurs, and professionals to
            build sustainable digital careers without depending solely on
            traditional jobs.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section id="learn" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            {[
              "Digital Marketing & Affiliate Marketing",
              "Content Creation & YouTube Monetization",
              "E-commerce & Online Business Setup",
              "AI Tools for Business & Productivity",
              "Crypto, Web3 & Financial Literacy",
              "Personal Branding & Online Influence",
              "Automation & Business Systems",
            ].map((item) => (
              <div key={item} className=" flex items-start gap-4 
            bg-white p-6 rounded-xl 
            border border-slate-200
            hover:border-emerald-400
            transition">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Each course is designed for
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            {[
              "Beginners",
              "Intermediate learners",
              "Entrepreneurs ready to scale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 
            bg-white p-6 rounded-xl 
            border border-slate-200
            hover:border-emerald-400
            transition">
              <span className="text-emerald-500 font-bold text-xl">✔</span>
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
           <div className="mt-14 bg-slate-900 text-white p-8 rounded-2xl max-w-3xl mx-auto">
             <p className="text-lg font-semibold">
          No prior tech background required.
        </p>
           </div>
        </div>
      </section>   


      {/* OUR LEARNING PHILOSOPHY */}
      <section id="philosophy" className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Learning Philosophy
          </h2>

         <p className="mt-6 text-xl font-bold text-blue-600">
  Skills + Systems + Support = Sustainable Income
</p>


          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            At Digitalpreneur Academy, you don’t just learn theory. You learn
            how to turn knowledge into real-world results.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12 text-left">
            {[
              "Apply what you learn",
              "Build income streams",
              "Create digital assets",
              "Grow long-term wealth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 
            bg-white p-6 rounded-xl 
            border border-slate-200
            hover:border-emerald-400
            transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* WHO THIS IS FOR */}
<section id="who" className="bg-slate-50 py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
      Who This Is For
    </h2>

    <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
      Digitalpreneur Academy is designed for driven individuals ready to break
      limitations and build income in the digital economy.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
      {[
        "Students seeking financial independence",
        "Job seekers tired of limited opportunities",
        "Entrepreneurs who want to go digital",
        "Creators who want to monetize their skills",
        "Anyone ready to earn globally from Africa",
      ].map((item) => (
        <div
          key={item}
          className="
            flex items-start gap-4 
            bg-white p-6 rounded-xl 
            border border-slate-200
            hover:border-emerald-400
            transition
          "
        >
          <span className="text-emerald-500 font-bold text-xl">✔</span>
          <p className="font-medium text-slate-800">{item}</p>
        </div>
      ))}
    </div>

    <div className="mt-14 bg-slate-900 text-white p-8 rounded-2xl max-w-3xl mx-auto">
      <p className="text-lg font-semibold">
        If you have a smartphone, internet access, and the willingness to
        learn — you qualify.
      </p>
    </div>
  </div>
</section>


      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Makes us Different</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            You’re not learning alone. We guide you from skill acquisition to
            execution.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              "✨ Structured learning paths",
              "✨ Practical assignments & projects",
              "✨ Community mentorship & support",
              "✨ Business-minded training (not just academics)",
              "✨ Opportunities for real income generation",
              "✨ Faith-driven and purpose-centered growth model (optional if you want spiritual angle)",
            ].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl
            border border-slate-200
            hover:border-emerald-400
            hover:shadow-xl
            transition">
                <h3 className="font-bold text-lg text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* WHAT YOU GET WHEN YOU JOIN */}
<section id="benefits" className="bg-slate-50 py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
      What You Get When You Join
    </h2>

    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
      Everything you need to learn, build, and earn in the digital economy.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-14">
      {[
        {
          title: "Full Course Access",
          desc: "Unlimited access to all Digitalpreneur Academy courses.",
          icon: "🎓",
        },
        {
          title: "Mobile-Friendly Platform",
          desc: "Learn anytime, anywhere from your phone or laptop.",
          icon: "📱",
        },
        {
          title: "Supportive Community",
          desc: "Connect with learners, mentors, and digital entrepreneurs.",
          icon: "👥",
        },
        {
          title: "Tools & Resources",
          desc: "Ready-to-use templates, tools, and frameworks.",
          icon: "🧩",
        },
        {
          title: "Income-Building Guidance",
          desc: "Practical support to help you build profitable systems.",
          icon: "📈",
        },
        {
          title: "Continuous Updates",
          desc: "New programs, lessons, and opportunities added regularly.",
          icon: "🔁",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
            bg-white p-8 rounded-2xl
            border border-slate-200
            hover:border-emerald-400
            hover:shadow-xl
            transition
          "
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="font-bold text-lg text-slate-900">
            {item.title}
          </h3>
          <p className="mt-2 text-slate-600 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
<section id="faq" className="bg-white py-24">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {faqs.map(([q, a], i) => (
        <div
          key={i}
          className="
            bg-white
            border border-slate-200
            rounded-xl
            overflow-hidden
          "
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="
              w-full px-6 py-5
              flex justify-between items-center
              font-semibold text-left
              text-slate-900
              hover:bg-slate-50
              transition
            "
          >
            {q}
            <span className="text-blue-600 text-xl">
              {openFaq === i ? "−" : "+"}
            </span>
          </button>

          {openFaq === i && (
            <div className="px-6 pb-5 text-slate-600">
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Start Your Digital Journey Today
          </h2>

          <div className="mt-8 space-y-2 text-lg text-white/80">
            <p>Don’t just consume content.</p>
            <p>Don’t just scroll online.</p>
            <p className="mt-8 text-white/80">
              Learn skills that pay you back for life.
            </p>
          </div>

          <p className="mt-8 text-white/80 max-w-2xl mx-auto">
            Join Digitalpreneur Academy today and take your first step into the
            digital economy.
          </p>

          <a
  href="#waitlist"
  className="inline-block mt-12 bg-emerald-500 text-slate-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-400 transition"
>
  JOIN DIGITALPRENEUR ACADEMY
</a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-slate-50 border-t">
        <p className="text-sm text-gray-500">
          © 2026 Digitalpreneur Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
