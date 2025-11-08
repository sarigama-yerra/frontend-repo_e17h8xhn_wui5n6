import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black">Let's work together</h2>
          <p className="mt-3 text-lg font-medium text-black/80">
            Have a project in mind or want to collaborate? Drop a line — I’d love to chat.
          </p>

          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-black mb-1">Name</label>
              <input type="text" placeholder="Ada Lovelace" className="w-full px-3 py-3 border-4 border-black focus:outline-none focus:ring-0" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-black mb-1">Email</label>
              <input type="email" placeholder="you@email.com" className="w-full px-3 py-3 border-4 border-black focus:outline-none focus:ring-0" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-black mb-1">Message</label>
              <textarea rows="5" placeholder="Tell me about your idea..." className="w-full px-3 py-3 border-4 border-black focus:outline-none focus:ring-0" />
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="inline-flex items-center gap-2 px-5 py-3 bg-green-300 border-4 border-black shadow-[6px_6px_0_0_#000] font-extrabold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform">
                <Send className="w-4 h-4" />
                Send Message
              </button>
          </div>
          </form>

          <div className="mt-10 flex items-center gap-4 text-sm font-semibold">
            <Mail className="w-4 h-4" />
            <span>hello@example.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
