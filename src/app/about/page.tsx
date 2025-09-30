import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-20 text-center">
        <Image src="/sellvate.png" alt="Sellvate Logo" width={100} height={100} className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-orange-500 mb-4">About Sellvate</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Sellvate is your partner for Amazon success. We help sellers grow with expert digital marketing, analytics, and support. Our mission is to empower every Amazon business to reach its full potential.
        </p>
      </section>
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Our Story</h2>
            <p className="text-gray-700 mb-4">Founded by e-commerce experts, Sellvate was born out of a passion for helping Amazon sellers thrive. We combine technology, creativity, and data-driven strategies to deliver real results.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Amazon PPC & SEO</li>
              <li>Brand Growth & Analytics</li>
              <li>Creative Content & Design</li>
              <li>Dedicated Seller Support</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1515165562835-cf7747c1bc6b?auto=format&fit=crop&w=400&q=80" alt="Team" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Growth" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Why Choose Us?</h2>
            <p className="text-gray-700 mb-4">We believe in transparency, innovation, and measurable growth. Our team works closely with you to understand your goals and deliver tailored solutions for your Amazon business.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Proven Results</li>
              <li>Personalized Strategies</li>
              <li>24/7 Support</li>
              <li>Cutting-edge Tools</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-orange-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-3">Join Sellvate</h2>
          <p className="text-gray-700 mb-6">Ready to grow your Amazon business? Contact us today and let Sellvate help you achieve your goals.</p>
          <a href="/contact" className="btn btn-orange text-lg">Contact Us</a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Innovation" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Innovation at Sellvate</h2>
            <p className="text-gray-700 mb-4">We use the latest technology and creative strategies to keep your Amazon business ahead of the competition. Our team is always learning and adapting to new trends.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>AI-driven Insights</li>
              <li>Continuous Optimization</li>
              <li>Creative Campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Meet the Team</h2>
            <p className="text-gray-700 mb-4">Our experts come from diverse backgrounds in e-commerce, marketing, and technology. We work together to deliver the best results for our clients.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Amazon Specialists</li>
              <li>Marketing Gurus</li>
              <li>Tech Innovators</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Teamwork" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
