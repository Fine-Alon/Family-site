"use client"

import { siteConfigs } from "@/config/app.config"
import useQuoteStore from "@/store/quote.store"
import { Spinner } from "@heroui/react"
import { useEffect } from "react"

const Quote = () => {
  const { currentQuote, getRandomQuote } = useQuoteStore()

  useEffect(() => {
    getRandomQuote()

    // get new quote interval — also 30 sec
    const quoteInterval = setInterval(() => {
      getRandomQuote()
    }, siteConfigs.quotesDuration)

    return () => {
      clearInterval(quoteInterval)
    }
  }, [getRandomQuote])

  return <>
    <div className="flex items-center gap-4 w-full justify-between">
      <Spinner classNames={{ wrapper: "animate-[spin_2s_linear_infinite_reverse]", label: "text-foreground mt-4" }}
        className="scale-x-[-1]" size="lg" color="secondary" variant="gradient" />
      <div className="flex-1 min-w-0">
        <p className="text-2xl font-bold truncate text-center">{currentQuote ? currentQuote : 'Take things easy! '}</p>
      </div>
      <Spinner classNames={{ wrapper: "animate-[spin_2s_linear_infinite_reverse]", label: "text-foreground mt-4" }} size="lg" color="secondary" variant="gradient" />
    </div>
  </>
}

export default Quote