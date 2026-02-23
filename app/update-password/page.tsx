"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const { error } = await supabase.auth.updateUser({ password });
    if (error) return setMsg(error.message);

    setMsg("Senha atualizada com sucesso.");
  }

  return (
    <main>
      <h1>Atualizar senha</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8 }}>
        <input
          placeholder="nova senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  );
}