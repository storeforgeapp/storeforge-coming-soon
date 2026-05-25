export default function Footer() {
  return (
    <footer
      className="relative z-20 mt-6 flex min-h-[164px] items-end justify-center overflow-hidden pt-6 sm:mt-10 sm:min-h-[232px] sm:pt-10 lg:min-h-[272px] lg:pt-12"
    >
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
  );
}
