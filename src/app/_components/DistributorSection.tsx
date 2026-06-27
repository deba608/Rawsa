"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function DistributorSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Name is required";
    if (!data.email?.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.city?.trim()) errs.city = "City is required";
    return errs;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="distributor" className="section distributor-section">
      <ScrollReveal variant="left" className="distributor-copy">
        <p className="eyebrow">Distributor enquiry</p>
        <h2>Bring Rawsa to your market.</h2>
        <p>
          For retail, cafe, campus, hospitality and distribution enquiries,
          share your details and the Stoneman Foodtech team can follow up.
        </p>
      </ScrollReveal>
      <ScrollReveal variant="right" className="enquiry-form">
        <form onSubmit={handleSubmit} noValidate className="enquiry-form-inner">
          {submitted ? (
            <div className="form-success">
              <strong>Thank you.</strong>
              <span>Your Rawsa distributor enquiry has been noted.</span>
            </div>
          ) : (
            <>
              <div className="form-field">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className={errors.name ? "field-error" : ""}
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>
              <div className="form-field">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  className={errors.email ? "field-error" : ""}
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>
              <div className="form-field">
                <input
                  required
                  name="city"
                  placeholder="City, State"
                  autoComplete="address-level2"
                  className={errors.city ? "field-error" : ""}
                />
                {errors.city && <span className="form-error-msg">{errors.city}</span>}
              </div>
              <div className="form-field">
                <textarea name="message" placeholder="Tell us about your channel or requirement" />
              </div>
              <button className="primary-button enquiry-submit-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="send-icon"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </ScrollReveal>
    </section>
  );
}
