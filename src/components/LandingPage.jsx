import React, { useEffect, useState } from "react";

const Countdown = () => {
  const launchDate = new Date("2026-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
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
  }, [launchDate]);

  return (
    <div className="flex justify-center gap-4 md:gap-6 mt-6">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-black text-white px-4 py-3 rounded-xl text-center min-w-[70px]">
          <p className="text-xl md:text-2xl font-bold">{value || 0}</p>
          <span className="text-[10px] uppercase tracking-wide">{key}</span>
        </div>
      ))}
    </div>
  );
};

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    ["Who is this for?", "Beginners, creators, freelancers, and professionals looking to scale their digital presence."],
    ["Is this get-rich-quick?", "No. We focus on ethical, skill-based systems that require effort and consistency."],
    ["Is it online?", "Yes. The academy is fully remote and accessible from anywhere in the world."],
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-extrabold text-lg tracking-tighter">DIGITALPRENEUR ACADEMY</h1>
          <ul className="hidden md:flex gap-8 font-medium text-sm">
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#curriculum" className="hover:text-gray-600">Curriculum</a></li>
            <li><a href="#mentorship" className="hover:text-gray-600">Mentorship</a></li>
            <li><a href="#faq" className="hover:text-gray-600">FAQ</a></li>
          </ul>
         <a 
      href="#waitlist-form" 
      className="bg-black text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
    >
      Join Waitlist
    </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Stop Trading Time for Money. <br />
            <span className="text-gray-400">Start Building Digital Assets.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Digitalpreneur Academy equips you with practical digital skills, 
            an entrepreneurial mindset, and global income-generating opportunities.
          </p>
          <form id="waitlist-form" className="mt-10 grid gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your best email address" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <input type="tel" placeholder="Enter your WhatsApp phone number" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <button className="bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
              GET EARLY ACCESS & FREE ROADMAP
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Join 500+ aspiring digital leaders. <a href="#" className="underline font-medium text-black">Join WhatsApp Group</a>
          </p>
          <div className="mt-16">
            <h3 className="font-semibold text-gray-400 uppercase tracking-widest text-sm">Next Cohort Launches In:</h3>
            <Countdown />
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">The Bridge Between Learning and Earning</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              ["High-Income Skills", "Digital Marketing, AI Automation & Content Monetization"],
              ["Global Reach", "Earn in stable currencies from anywhere in the world"],
              ["Entrepreneurial Discipline", "Shift from freelancer to business owner mindset"],
            ].map(([title, desc]) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP SECTION */}
      <section id="mentorship" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">You’re Not Learning Alone</h2>
          <p className="mt-4 text-gray-600">Guidance, accountability, and real-world execution support.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {["Expert-Led Mentorship", "Accountability Systems", "Private Growth Community"].map(item => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Curriculum Preview</h2>
          <div className="space-y-4">
            {["Digital Foundations & niche selection", "AI Edge & generative tools", "Sales & Marketing Funnels", "Scalable Income Systems", "Digitalpreneur Mindset & ethics"].map((module, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-gray-400">0{i + 1}</span>
                <p className="font-medium">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center font-semibold text-left"
                >
                  {q} <span className="text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 animate-fadeIn">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Claim Your Place in the Digital Economy?</h2>
          <button className="mt-10 bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            JOIN THE ACADEMY TODAY
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">© 2026 Digitalpreneur Academy. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="https://wa.me/2347082688939" className="text-green-600 font-bold">WhatsApp Support</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;