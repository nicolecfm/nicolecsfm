"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback?next=/update-password`,
    });

    if (error) return setMsg(error.message);
    setMsg("Email de reset enviado (se existir uma conta com esse email).");
  }

  return (
    <main>
      <h1>Reset de senha</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8 }}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Enviar email</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  );
}