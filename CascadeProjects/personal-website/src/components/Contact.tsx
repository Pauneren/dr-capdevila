import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const msg = data && typeof data.error === 'string' ? data.error : 'Failed to send message.';
        throw new Error(msg);
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to send message.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Want to work together or have a question? Send a message and I’ll get back to you.
          </p>
        </div>
    
    <div className="grid lg:grid-cols-2 gap-10">
    <div className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let’s connect</h3>
    
    <div className="space-y-4">
    <div className="flex items-start gap-4">
    <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
    <Mail className="text-primary" />
    </div>
    <div>
    <p className="font-medium text-gray-900 dark:text-white">Email</p>
    <a
    href="mailto:paula1@ymail.com"
    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
    >
    paula1@ymail.com
    </a>
    </div>
    </div>
    
    <div className="flex items-start gap-4">
    <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
    <MapPin className="text-primary" />
    </div>
    <div>
    <p className="font-medium text-gray-900 dark:text-white">Location</p>
    <p className="text-gray-600 dark:text-gray-300">Available remotely</p>
    </div>
    </div>
    </div>
    
    <div className="mt-8 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800">
    <p className="text-gray-700 dark:text-gray-300">
    If you’d like, share your timeline and goals — I love helping turn ideas into fast, elegant web experiences.
    </p>
    </div>
    </div>
    
    <form
    className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
    onSubmit={onSubmit}
    >
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a message</h3>
    
    <div className="space-y-5">
    <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="Your name"
    />
    </div>
    
    <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="you@example.com"
    />
    </div>
    
    <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
    <textarea
    rows={5}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="Tell me about your project"
    />
    </div>
    
    {error && (
    <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950 px-4 py-3 text-red-700 dark:text-red-200">
    {error}
    </div>
    )}
    
    {success && (
    <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 px-4 py-3 text-green-700 dark:text-green-200">
    Message sent. Thank you!
    </div>
    )}
    
    <button
    type="submit"
    disabled={isSubmitting}
    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
    >
    <Send size={18} />
    {isSubmitting ? 'Sending…' : 'Send'}
    </button>
    </div>
    </form>
    </div>
    </div>
    </section>
  );
};

export default Contact;
