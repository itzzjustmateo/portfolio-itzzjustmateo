"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Trash2, User } from "lucide-react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [forms, setForms] = useState<any[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setLoggedIn(true);
      fetchForms();
    } else {
      alert("Incorrect password!");
    }
  };

  const fetchForms = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setForms(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch forms.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setForms((prev) => prev.filter((f) => f.id !== id));
      } else {
        alert("Failed to delete.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete.");
    }
  };

  if (!loggedIn) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white p-6 pt-24">
        <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
        <div className="flex gap-2">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
        <Button onClick={handleLogin} className="mt-4">
          Login
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 pt-24 bg-neutral-950 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Submitted Contact Forms</h1>
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {forms.length === 0 && (
          <p className="text-neutral-400 text-center">No forms submitted yet.</p>
        )}
        {forms.map((f, idx) => (
          <div
            key={idx}
            className="bg-neutral-900/50 p-4 rounded-xl shadow-md flex flex-col gap-2"
          >
            <p className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" /> <strong>Name:</strong> {f.name}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${f.email}`}
                className="text-blue-400 underline hover:text-blue-300"
              >
                {f.email}
              </a>
            </p>
            <p>
              <strong>Message:</strong> {f.message}
            </p>
            <p className="text-sm text-neutral-400">
              Sent at: {new Date(f.date).toLocaleString()}
            </p>
            <div className="flex justify-end mt-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(f.id)}
                className="flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button onClick={() => fetchForms()}>Refresh</Button>
      </div>
    </main>
  );
}
