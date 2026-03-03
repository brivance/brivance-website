"use client";

import { Checkbox, FormData, RadioGroup, SummaryRow, cx, initialData, isEmail } from "./GlobalVars";
import { UpItem, makeContainer } from "@/components/FramerMotion";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GetStartedForm({ step, setStep, steps }: { step: number; setStep: React.Dispatch<React.SetStateAction<number>>; steps: { title: string }[] }) {
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; msg?: string }>({
    type: "idle",
  });

  // Count only the first 6 steps (0..5)
  const countedSteps = steps.length - 2; // exclude Contact and Review
  const countedStepIndex = Math.min(step, countedSteps - 1); // clamp review to last counted
  const progressPct = Math.round(((countedStepIndex + 1) / countedSteps) * 100);
  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setStatus({ type: "idle" });
  }

  function updateFeature<K extends keyof FormData["features"]>(
    key: K,
    value: boolean
  ) {
    setData((prev) => {
      const next = { ...prev.features };

      if (key === "none") {
        if (value) {
          // If "none" is selected, clear everything else
          return {
            ...prev,
            features: {
              payments: false,
              booking: false,
              membership: false,
              blog: false,
              custom: false,
              none: true,
              unsure: false,
            },
          };
        }
        else {
          // If "none" or "unsure" is manually unchecked
          next.none = false;
        }
      } else if (key === "unsure") {
        if (value) {
          return {
            ...prev,
            features: {
              payments: false,
              booking: false,
              membership: false,
              blog: false,
              custom: false,
              none: false,
              unsure: true,
            },
          };
        } else {
          next.unsure = false;
        }
      } else {
        // Any other feature toggled
        next[key] = value;

        if (value) {
          // If checking something else, automatically uncheck "none" and "unsure"
          next.none = false;
          next.unsure = false;
        }
      }
      setStatus({ type: "idle" });

      return { ...prev, features: next };
    });
  }



  function next() {
    const err = validateStep(step);
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }
    setStatus({ type: "idle" });
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setStatus({ type: "idle" });
    setStep((s) => Math.max(s - 1, 0));
  }

  function validateStep(s: number): string | null {
    if (s === 0 && !data.need) return "Please select what you need.";
    if (s === 1 && !data.pages) return "Please select a page range.";
    if (s === 2) {
      if (!data.business) return "Please select a business type.";
      if (data.business === "other" && data.businessOther.trim().length < 2) return "Please specify your business.";
    }
    if (s === 3) {
      // At least one checkbox must be selected.
      const any = Object.values(data.features).some(Boolean);
      if (!any) return "Please select at least one option.";
    }
    if (s === 4 && !data.contentReady) return "Please select a content readiness option.";
    if (s === 5) {
      if (data.name.trim().length < 2) return "Please enter your name.";
      if (!isEmail(data.email)) return "Please enter a valid email.";
    }
    return null;
  }

  function humanizeAnswers() {
    const needMap: Record<FormData["need"], string> = {
      "": "",
      new: "New website",
      redesign: "Redesign existing website",
      updates: "Updates to current website",
      not_sure: "Not sure yet",
    };

    const pagesMap: Record<FormData["pages"], string> = {
      "": "",
      "1-3": "1–3 pages",
      "4-7": "4–7 pages",
      "8-15": "8–15 pages",
      "15plus": "15+ pages",
      not_sure: "Not sure",
    };

    const businessMap: Record<FormData["business"], string> = {
      "": "",
      service: "Service provider",
      store: "Online store",
      appointment: "Appointment-based business",
      portfolio: "Personal brand or portfolio",
      not_sure: "Not sure yet",
      other: `Other: ${data.businessOther.trim() || "(not provided)"}`,
    };

    const features: string[] = [];
    if (data.features.none) features.push("None of these");
    if (data.features.unsure) features.push("Not sure yet");
    if (data.features.payments) features.push("Online payments");
    if (data.features.booking) features.push("Booking / scheduling");
    if (data.features.membership) features.push("Membership / login system");
    if (data.features.blog) features.push("Blog or content management");
    if (data.features.custom) features.push("Custom functionality");

    const contentMap: Record<FormData["contentReady"], string> = {
      "": "",
      yes: "Logo, copy (text), images are ready",
      some: "Some materials ready",
      no: "Need help with branding/content",
    };

    return {
      need: needMap[data.need],
      pages: pagesMap[data.pages],
      business: businessMap[data.business],
      features: features.length ? features.join(", ") : "(none selected)",
      contentReady: contentMap[data.contentReady],
      name: data.name.trim(),
      email: data.email.trim(),
      notes: data.notes.trim() || "(none)",
    };
  }

  async function submit() {
    const err = validateStep(5); // contact step validation
    if (err) {
      setStatus({ type: "error", msg: err });
      setStep(5);
      return;
    }

    // spam trap
    if (data.website.trim().length > 0) {
      setStatus({ type: "success" });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const payload = humanizeAnswers();
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed.");
      }

      setStatus({ type: "success", msg: "Your form was successfully submitted! Thank you, and I will be in touch." });
      setData(initialData);
      setStep(0);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setStatus({ type: "error", msg: e.message });
      } else {
        setStatus({ type: "error", msg: "Something went wrong." });
      }
    } finally {
      setSubmitting(false);
    }
  }

  const a = humanizeAnswers();

  return (
    <motion.div className="pt-8" variants={makeContainer({ delay: 1 })}
      initial="hidden"
      animate="show">
      {/* Progress */}
      <UpItem>
        {status.type === "success" && status.msg && (
          <div className="mt-4 py-3 text-2xl mb-4">
            {status.msg}
          </div>
        )}
      </UpItem>
      <UpItem>
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="w-4/5">
            <div className="text-sm text-neutral-500">
              {step === steps.length - 1 || step === steps.length - 2 ? "Questions Completed" : <></>}
            </div>
            <div className="h-3.5 w-full rounded-full bg-neutral-100/70 overflow-hidden">
              <div className="h-full bg-green" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="mt-1 text-right text-xs text-neutral-500">{progressPct}%</div>
          </div>

        </div>
      </UpItem>

      {status.type === "error" && (
        <div className="mt-4 rounded-lg bg-[#f5979776] px-4 py-3 text-[#ca3d3d]">
          {status.msg}
        </div>
      )}


      {/* Step content */}
      <UpItem>
        <div className="mt-6">
          {step === 0 && (
            <RadioGroup
              value={data.need}
              onChange={(v) => update("need", v)}
              options={[
                { value: "new", label: "New website" },
                { value: "redesign", label: "Redesign existing website" },
                { value: "updates", label: "Updates to current website" },
                { value: "not_sure", label: "Not sure yet" },
              ]}
            />
          )}

          {step === 1 && (
            <RadioGroup
              value={data.pages}
              onChange={(v) => update("pages", v)}
              options={[
                { value: "1-3", label: "1–3 pages" },
                { value: "4-7", label: "4–7 pages" },
                { value: "8-15", label: "8–15 pages" },
                { value: "15plus", label: "15+ pages" },
                { value: "not_sure", label: "Not sure" },
              ]}
            />
          )}

          {step === 2 && (
            <div className="space-y-4">
              <RadioGroup
                value={data.business}
                onChange={(v) => update("business", v)}
                options={[
                  { value: "service", label: "Service provider" },
                  { value: "store", label: "Online store" },
                  { value: "appointment", label: "Appointment-based business" },
                  { value: "portfolio", label: "Personal brand or portfolio" },
                  { value: "not_sure", label: "Not sure yet" },
                  { value: "other", label: "Other" },
                ]}
              />
              {data.business === "other" && (
                <input
                  value={data.businessOther}
                  onChange={(e) => update("businessOther", e.target.value)}
                  placeholder="Briefly describe your business"
                  className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-0"
                />
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <Checkbox
                checked={data.features.payments}
                onChange={(v) => updateFeature("payments", v)}
                label="Online payments"
              />
              <Checkbox
                checked={data.features.booking}
                onChange={(v) => updateFeature("booking", v)}
                label="Booking / scheduling"
              />
              <Checkbox
                checked={data.features.membership}
                onChange={(v) => updateFeature("membership", v)}
                label="Membership / login system"
              />
              <Checkbox
                checked={data.features.blog}
                onChange={(v) => updateFeature("blog", v)}
                label="Blog or content management"
              />
              <Checkbox
                checked={data.features.custom}
                onChange={(v) => updateFeature("custom", v)}
                label="Custom functionality"
              />
              <div className="pt-3 border-t border-black/30">
                <Checkbox
                  checked={data.features.none}
                  onChange={(v) => updateFeature("none", v)}
                  label="None of these"
                />
              </div>
              <Checkbox
                checked={data.features.unsure}
                onChange={(v) => updateFeature("unsure", v)}
                label="Not sure yet"
              />
            </div>
          )}

          {step === 4 && (
            <RadioGroup
              value={data.contentReady}
              onChange={(v) => update("contentReady", v)}
              options={[
                { value: "yes", label: "Logo, copy (text), images are ready" },
                { value: "some", label: "Some materials are ready" },
                { value: "no", label: "Need help with branding/content" },
              ]}
            />
          )}

          {step === 5 && (
            <div className="space-y-4 text-lg">
              {/* Honeypot field */}
              {/* <div className="hidden">
              <label className="text-neutral-600">Website</label>
              <input
                value={data.website}
                onChange={(e) => update("website", e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
                placeholder="do not fill"
              />
            </div> */}
              <div className="text-sm text-neutral-500">
                Please provide your contact information so I can reach out with a quote. I will review your answers and get back to you within 1-2 business days. Looking forward to connecting!
              </div>

              <div>
                <input
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 w-full rounded-lg border-b px-3 py-2 focus:outline-none focus:ring-0 bg-[#cdc5b185]"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1 w-full rounded-lg border-b px-3 py-2 focus:outline-none focus:ring-0 bg-[#cdc5b185]"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  value={data.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="mt-1 w-full rounded-lg border-b px-3 py-2 min-h-[110px] focus:outline-none focus:ring-0 bg-[#cdc5b185]"
                  placeholder="Anything else? (Optional)"
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4 text-lg">
              <SummaryRow label="What you need" value={a.need} />
              <SummaryRow label="Page range" value={a.pages} />
              <SummaryRow label="Business type" value={a.business} />
              <SummaryRow label="Features" value={a.features} />
              <SummaryRow label="Branding/content ready" value={a.contentReady} />
              <SummaryRow label="Name" value={a.name} />
              <SummaryRow label="Email" value={a.email} />
              <SummaryRow label="Notes" value={a.notes} />
            </div>
          )}
        </div>
      </UpItem>
      <UpItem>
        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={back}
            disabled={step === 0 || submitting}
            className={cx(
              "rounded-sm border px-6 py-2 transition cursor-pointer hover:scale-[1.05]",
              step === 0 || submitting
                ? "opacity-50 cursor-not-allowed"
                : "active:scale-[0.98]"
            )}
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              disabled={submitting}
              className={cx(
                "bg-neutral-900 text-white px-8 rounded-sm py-2 transition-transform",
                "hover:scale-[1.04] active:scale-[0.98] cursor-pointer",
                submitting ? "opacity-70 cursor-not-allowed" : ""
              )}
            >
              {step === steps.length - 2 ? "Review" : `Next`}
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className={cx(
                "rounded-sm bg-neutral-900 text-white px-4 py-2 transition-transform",
                "hover:scale-[1.05] active:scale-[0.95] cursor-pointer",
                submitting ? "opacity-70 cursor-not-allowed" : ""
              )}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          )}
        </div>
      </UpItem>
    </motion.div>
  );
}




