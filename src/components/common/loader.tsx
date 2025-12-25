"use client"

import { Progress } from "@heroui/react"
import { useEffect, useState } from "react"

const Loader = () => {
  const [progressTimeOut, setProgressTimeOut] = useState(0)

  useEffect(() => {
    setProgressTimeOut(0)

    // Progress animation: 0 → 100 for 30 sec
    const duration = 5000 // 30 sec
    const intervalMs = 50 // renew 100 ms
    const step = (100 / duration) * intervalMs

    const progressInterval = setInterval(() => {
      setProgressTimeOut(prev => (prev >= 100 ? 0 : prev + step))
    }, intervalMs)

    // if (progressTimeOut >= intervalMs) {
      
    // }

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  return <>
    <Progress
      classNames={{
        base: "w-full",
        track: "drop-shadow-md border border-default",
        indicator: "bg-linear-to-r from-purple-900 to-purple-400",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      radius="sm"
      size="md"
      value={progressTimeOut}
    />
  </>
}

export default Loader