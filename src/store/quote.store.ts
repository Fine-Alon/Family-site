import { siteConfigs } from "@/config/app.config"
import { create } from "zustand"

type QuoteStore = {
  currentQuote: string
  getRandomQuote: () => void
}

const quotes = [...siteConfigs.quotes]

const useQuoteStore = create<QuoteStore>((set, get) => ({
  currentQuote: quotes[0],

  getRandomQuote: () => {
    const { currentQuote } = get()
    let attempts: number = 0
    let randomQuote: string
    do {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      attempts++
    } while (currentQuote === randomQuote && attempts < 10)

    attempts = 0
    set({ currentQuote: randomQuote })
  }
}))

export default useQuoteStore