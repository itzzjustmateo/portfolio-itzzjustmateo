"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white p-6 pt-24">
      <h1 className="text-5xl font-extrabold mb-6">Contact Me</h1>
      {submitted ? (
        <p className="text-green-400 text-lg">Thanks! Your message has been sent.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-neutral-900/50 p-6 rounded-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-400" />
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-400" />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-start gap-2">
            <MessageCircle className="w-5 h-5 mt-1 text-purple-400" />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <Button type="submit" disabled={loading} className="mt-2">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </main>
  );
}
