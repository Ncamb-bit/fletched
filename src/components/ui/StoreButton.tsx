import { cn } from "../../lib/utils"
import { motion } from "framer-motion"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import type { IconType } from "react-icons"
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../../lib/appLinks"

type Store = "apple" | "google"
type Variant = "black" | "slate" | "navbar"

const STORE_META: Record<
  Store,
  { url: string; topLabel: string; name: string; Icon: IconType }
> = {
  apple: { url: APP_STORE_URL, topLabel: "Download on the", name: "App Store", Icon: FaApple },
  google: { url: GOOGLE_PLAY_URL, topLabel: "Get it on", name: "Google Play", Icon: FaGooglePlay },
}

interface StoreButtonProps {
  store: Store
  className?: string
  variant?: Variant
}

export function StoreButton({ store, className, variant = "black" }: StoreButtonProps) {
  const { url, topLabel, name, Icon } = STORE_META[store]

  if (variant === "navbar") {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative overflow-hidden bg-black text-white px-5 py-2 rounded-xl flex items-center gap-3 transition-all shadow-lg shadow-black/20 hover:shadow-black/40 group border border-white/10",
          className
        )}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Icon className="w-5 h-5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
        <div className="flex flex-col items-start leading-none relative z-10">
           <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/70 mb-0.5">{topLabel}</span>
           <span className="text-[10px] font-black uppercase tracking-tighter italic">{name}</span>
        </div>
      </motion.a>
    )
  }

  const bgClass = variant === "black" ? "bg-black" : "bg-slate-900 dark:bg-slate-800"

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-2xl flex items-center gap-5 transition-all shadow-xl hover:shadow-primary/10 border border-white/10 group",
        bgClass,
        className
      )}
    >
      <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
      <div className="text-left border-l border-white/10 pl-5">
        <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] block mb-1">{topLabel}</span>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none italic">{name}</h3>
      </div>
    </motion.a>
  )
}

interface StoreButtonsProps {
  className?: string
  variant?: Variant
  orientation?: "row" | "stack"
}

/** Renders the App Store + Google Play download buttons as a pair. */
export function StoreButtons({ className, variant = "black", orientation = "row" }: StoreButtonsProps) {
  const stacked = orientation === "stack"
  const childClassName = stacked ? "w-full" : undefined

  return (
    <div
      className={cn(
        "flex gap-4",
        stacked ? "flex-col items-stretch" : "flex-row flex-wrap items-center",
        className
      )}
    >
      <StoreButton store="apple" variant={variant} className={childClassName} />
      <StoreButton store="google" variant={variant} className={childClassName} />
    </div>
  )
}
