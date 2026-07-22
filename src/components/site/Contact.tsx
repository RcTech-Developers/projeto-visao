import React, { useState } from "react";
import { Mail, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    estado: "",
    cidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numero = "5522999239891";

    const texto = `Olá! Gostaria de agendar um exame.

👤 Nome: ${form.nome}

📱 Telefone: ${form.telefone}

📧 E-mail: ${form.email}

📍 Estado: ${form.estado}

🏙 Cidade: ${form.cidade}

📝 Mensagem:
${form.mensagem}`;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="px-4 pb-24 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-card p-8 shadow-sm md:p-14">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Contato
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
                Vamos agendar seu exame
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Preencha seus dados ou fale conosco diretamente pelo WhatsApp.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <Reveal delay={0.2}>
                <div className="flex items-center gap-3 text-brand-dark">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                    <Smartphone className="h-4 w-4 text-brand" />
                  </span>
                  <span className="text-sm">
                    WhatsApp:{" "}
                    <span className="font-semibold">(22) 99923-9891</span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex items-center gap-3 text-brand-dark">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                    <Mail className="h-4 w-4 text-brand" />
                  </span>
                  <span className="text-sm">
                    E-mail:{" "}
                    <span className="font-semibold">
                      atendimento@institutovisaovertz.com.br
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field
                label="Nome"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={(e) =>
                  setForm({ ...form, nome: e.target.value })
                }
              />

              <Field
                label="Telefone"
                placeholder="(00) 00000-0000"
                value={form.telefone}
                onChange={(e) =>
                  setForm({ ...form, telefone: e.target.value })
                }
              />

              <Field
                label="E-mail"
                type="email"
                placeholder="voce@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <Field
                label="Estado"
                placeholder="Ex: Rio de Janeiro"
                value={form.estado}
                onChange={(e) =>
                  setForm({ ...form, estado: e.target.value })
                }
              />

              <Field
                label="Cidade"
                placeholder="Ex: Niterói"
                value={form.cidade}
                onChange={(e) =>
                  setForm({ ...form, cidade: e.target.value })
                }
              />

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/70">
                  Mensagem
                </label>

                <textarea
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mensagem: e.target.value,
                    })
                  }
                  placeholder="Como podemos ajudar?"
                  className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-brand-dark placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand py-4 text-sm font-semibold text-white shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
              >
                Enviar mensagem
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/70">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-brand-dark placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}