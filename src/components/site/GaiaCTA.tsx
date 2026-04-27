import { useState } from "react";
import { GaiaCircleMotif } from "./GaiaCircleMotif";
import shape1 from "../../assets/deco/Gaia_Decorative_Shape_1@3x.png";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  nom: string;
  email: string;
  projet: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nom.trim()) errors.nom = "Votre nom est requis.";
  if (!data.email.trim()) errors.email = "Votre email est requis.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Format d'email invalide.";
  if (!data.message.trim()) errors.message = "Décrivez votre projet en quelques mots.";
  return errors;
}

export function GaiaCTA() {
  const [form, setForm] = useState<FormData>({ nom: "", email: "", projet: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  return (
    <section className="gaia-cta" id="contact" aria-labelledby="cta-heading">
      {/* Decorative top shape — parallax accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "360px",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img src={shape1} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Ambient orbs */}
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,138,61,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="cta-grid" style={{ position: "relative", zIndex: 1 }}>
        {/* Left — text */}
        <div className="reveal-left">
          <div className="section-label">Travaillons ensemble</div>
          <h2 className="gaia-h2" id="cta-heading" style={{ marginBottom: 20 }}>
            Votre prochaine<br />grande marque<br />commence <span style={{ color: "var(--orange)" }}>ici</span>
          </h2>
          <p className="section-sub">
            Partagez-nous votre projet et nous vous répondons sous 48h.
            Pas de jargon, pas de vente forcée — juste une conversation honnête.
          </p>

          {/* Contact details */}
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "✉", label: "Email", value: "bonjour@gaia-studio.cm" },
              { icon: "📍", label: "Adresse", value: "Douala, Cameroun" },
              { icon: "📞", label: "Téléphone", value: "+237 6XX XXX XXX" },
            ].map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  className="cta-contact-icon"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,138,61,0.15)",
                    border: "1px solid rgba(255,138,61,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "white", marginTop: 2 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative motif */}
          <div style={{ position: "absolute", bottom: -60, left: -40, opacity: 0.25, pointerEvents: "none" }} aria-hidden="true">
            <GaiaCircleMotif variant="mini" size={220} />
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal-right d2">
          <div className="cta-contact-form">
            {status === "success" ? (
              <div className="form-success">
                <div style={{ fontSize: 40, marginBottom: 16 }} aria-hidden="true">
                  <GaiaCircleMotif variant="mini" size={80} />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: "white", marginBottom: 10 }}>
                  Message envoyé
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: "none" }}>
                  Merci pour votre message. Nous vous répondons sous 48h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nom">Votre nom</label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      className="form-input"
                      placeholder="Amina Mbarga"
                      value={form.nom}
                      onChange={handleChange}
                      aria-invalid={!!errors.nom}
                      aria-describedby={errors.nom ? "nom-error" : undefined}
                      autoComplete="name"
                    />
                    {errors.nom && <span id="nom-error" className="form-error" role="alert">{errors.nom}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="amina@entreprise.cm"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      autoComplete="email"
                    />
                    {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projet">Type de projet</label>
                  <select
                    id="projet"
                    name="projet"
                    className="form-input"
                    value={form.projet}
                    onChange={handleChange}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">Choisir un service</option>
                    <option value="identite">Identité visuelle</option>
                    <option value="branding">Image de marque</option>
                    <option value="ux">Expérience utilisateur</option>
                    <option value="supports">Supports de communication</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre projet</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Parlez-nous de votre projet, vos objectifs, votre audience..."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="gaia-btn"
                  disabled={status === "submitting"}
                  style={{ width: "100%", justifyContent: "center", padding: "14px 24px", fontSize: 15, marginTop: 4 }}
                >
                  {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
                  {status !== "submitting" && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
