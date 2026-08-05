"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-cosmic">
      <Navbar />
      <section className="px-8 py-16 flex justify-center">
        <div className="w-full max-w-sm rounded-card border border-twilight shadow-halo bg-graphite p-8">
          {sent ? (
            <>
              <h1 className="text-2xl font-normal text-carbon mb-2" style={{ letterSpacing: "-0.5px" }}>
                Check your email
              </h1>
              <p className="text-sm text-smoke">
                If an account exists for {email}, a reset link is on its way.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-normal text-carbon mb-1" style={{ letterSpacing: "-0.5px" }}>
                Reset your password
              </h1>
              <p className="text-sm text-smoke mb-8">
                Enter your email and we'll send you a reset link.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-smoke" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-obsidian border border-charcoal rounded-lg pl-11 pr-4 py-3 text-sm text-carbon outline-none focus:border-iris"
                  />
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-pill bg-carbon text-obsidian text-sm font-medium disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send reset link"}
                </button>
              </form>
            </>
          )}
          <p className="text-sm text-smoke mt-6 text-center">
            <Link href="/login" className="text-iris">Back to sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
