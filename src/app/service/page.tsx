import Image from "next/image";

export default function Service() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-20 text-center">
        <Image src="/sellvate.png" alt="Sellvate Logo" width={100} height={100} className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-orange-500 mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Sellvate offers a full suite of Amazon seller services, from marketing and analytics to creative content and support. Discover how we help you grow and succeed on Amazon.
        </p>
      </section>
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Amazon Marketing</h2>
            <p className="text-gray-700 mb-4">Boost your visibility and sales with expert Amazon PPC, SEO, and sponsored ads management.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>PPC Campaigns</li>
              <li>SEO Optimization</li>
              <li>Sponsored Ads</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Marketing" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Analytics" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Analytics & Growth</h2>
            <p className="text-gray-700 mb-4">Track your performance and make data-driven decisions with our advanced analytics and reporting tools.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Sales Analytics</li>
              <li>Growth Strategies</li>
              <li>Custom Reports</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Creative Content</h2>
            <p className="text-gray-700 mb-4">Stand out with professional product photography, A+ content, and engaging brand design.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Product Photography</li>
              <li>A+ Content</li>
              <li>Brand Design</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Content" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-3">Ready to Grow?</h2>
          <p className="text-gray-700 mb-6">Contact Sellvate today and let us help you achieve your Amazon goals.</p>
          <a href="/contact" className="btn btn-orange text-lg">Contact Us</a>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Seller Support</h2>
            <p className="text-gray-700 mb-4">Our dedicated support team is here to help you with every aspect of your Amazon journey, from setup to scaling.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Account Setup</li>
              <li>Listing Optimization</li>
              <li>Performance Troubleshooting</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Support" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Strategy" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">Strategy & Consulting</h2>
            <p className="text-gray-700 mb-4">Get expert advice and strategic planning to maximize your Amazon business growth and profitability.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Business Planning</li>
              <li>Market Research</li>
              <li>Growth Consulting</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
