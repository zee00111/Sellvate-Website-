import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-20 text-center">
        <Image src="/sellvate.png" alt="Sellvate Logo" width={80} height={80} className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-orange-500 mb-4">Contact Sellvate</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Get in touch with our team for Amazon seller support, service inquiries, or partnership opportunities. We're here to help you grow!
        </p>
      </section>
      <section className="py-16 bg-orange-50">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Message</label>
              <textarea className="textarea textarea-bordered w-full" rows={5} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-orange w-full text-lg">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
