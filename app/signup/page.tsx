"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return setMsg(error.message);

    setMsg("Conta criada. Se confirmação por email estiver ativa, verifique sua caixa de entrada.");
  }

  return (
    <main>
      <h1>Signup</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8 }}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  );
}