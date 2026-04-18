"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import sfLogo from "@/public/sf_logo.webp";

type SubmitStatus = "idle" | "success" | "error";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");
    const email = typeof emailValue === "string" ? emailValue.trim() : "";

    if (!email) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error ?? "Failed to submit waitlist");
      }

      form.reset();
      setSubmitStatus("success");
      setStatusMessage("Thanks! You have been added to the waitlist.");
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Could not join the waitlist now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4f2] text-[#687289]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(246,244,242,0.42),rgba(246,244,242,0.78))]"
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1220px] grid-rows-[auto_1fr_auto] px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <header className="flex w-full justify-center">
          <Image
            src={sfLogo}
            alt="Storeforge logo"
            className="h-12 w-auto object-contain"
            priority
          />
        </header>

        <section className="flex w-full items-center justify-center py-6 sm:py-10 lg:py-12">
          <div className="flex w-full max-w-[46rem] flex-col items-center gap-4 pt-1 text-center sm:gap-6 sm:pt-3 lg:gap-7 lg:pt-4">

            <h1 className="max-w-[12ch] text-center font-[family:var(--font-sora)] text-[clamp(3rem,16vw,3.9rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-[#657089] [text-shadow:0_8px_30px_rgba(255,255,255,0.38)] sm:text-[5rem] lg:text-[6rem]">
              Coming soon!
            </h1>

            <div className="relative w-full rounded-[1.7rem] border border-white/60 bg-white/28 px-4 py-6 shadow-[0_24px_72px_rgba(147,158,182,0.18),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[18px] sm:px-10 sm:py-10 lg:rounded-[2.25rem] lg:px-12 lg:py-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0.1))]"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-px rounded-[inherit] border border-white/35"
              />

              <div className="relative mx-auto flex max-w-[32rem] flex-col items-center gap-4 text-center sm:gap-5">
                <h2 className="font-[family:var(--font-sora)] text-[clamp(1.8rem,9vw,2.18rem)] font-medium tracking-[-0.04em] text-[#5f697f] sm:text-[2.2rem]">
                  Build your online store in minutes
                </h2>
                <p className="max-w-[31rem] text-[0.95rem] leading-7 text-[#767f95] sm:text-[0.98rem] sm:leading-7">
                  Sell via website + WhatsApp - no coding needed. Join the
                  Storeforge waitlist for early access and launch updates.
                </p>

                <form
                  className="flex w-full max-w-[27rem] flex-col gap-3 pt-1 sm:max-w-[30rem] sm:flex-row sm:items-center"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-full border border-[#d8dee9] bg-white/84 px-5 text-sm text-[#5f6981] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_4px_16px_rgba(160,170,190,0.08)] outline-none transition duration-200 placeholder:text-[#939bae] hover:border-[#cbd3e1] focus:border-white focus:bg-white focus:ring-4 focus:ring-white/45"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-full border border-white/85 bg-white/92 px-6 text-sm font-medium text-[#666f84] shadow-[0_8px_24px_rgba(161,170,190,0.18),inset_0_1px_0_rgba(255,255,255,0.86)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/55 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </button>
                </form>
                {statusMessage ? (
                  <p
                    aria-live="polite"
                    className={`text-sm ${
                      submitStatus === "success"
                        ? "text-[#4f6f55]"
                        : "text-[#8f5e66]"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </div>


          </div>
        </section>

        <footer className="relative z-20 mt-6 flex min-h-[10.25rem] items-end justify-center overflow-hidden pt-6 sm:mt-10 sm:min-h-[14.5rem] sm:pt-10 lg:min-h-[17rem] lg:pt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[0.45rem] text-center font-[family:var(--font-sora)] text-[clamp(3.2rem,18vw,4rem)] font-semibold tracking-[-0.09em] sm:bottom-[1.1rem] sm:text-[9.7rem] sm:tracking-[-0.105em] lg:bottom-[1.4rem] lg:text-[14.2rem]"
          >
            <span
              className="absolute inset-0 text-[#e9f0fc]/66 blur-[2.4px]"
              style={{
                filter:
                  "drop-shadow(0 18px 36px rgba(167,180,207,0.28)) drop-shadow(0 6px 14px rgba(184,195,214,0.2))",
              }}
            >
              Storeforge
            </span>
            <span
              className="relative text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.64) 0%, rgba(245,249,254,0.4) 46%, rgba(226,234,246,0.14) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.45), 0 10px 20px rgba(170,184,208,0.18)",
              }}
            >
              Storeforge
            </span>
            <span
              className="absolute inset-0 text-white/40 blur-[0.8px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 56%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 56%, rgba(0,0,0,0) 100%)",
              }}
            >
              Storeforge
            </span>
          </div>

          <div className="relative z-10 flex max-w-[20rem] flex-wrap items-center justify-center gap-x-1.5 gap-y-1 pb-2 text-center text-[0.72rem] tracking-[0.01em] text-[#7e869a] [text-shadow:0_2px_16px_rgba(255,255,255,0.6)] sm:max-w-none sm:gap-x-2 sm:pb-4 sm:text-xs">
            <span>&copy;2026 Storeforge</span>
            <span className="hidden text-[#bcc1ce] min-[360px]:inline">
              &middot;
            </span>
            <span>Built for modern sellers</span>
            <span className="hidden text-[#bcc1ce] min-[360px]:inline">
              &middot;
            </span>
            <span>Waitlist</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
