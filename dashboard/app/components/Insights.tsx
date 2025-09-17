"use client"

import React from "react"

interface InsightsProps {
  data: {
    name?: string
    assessment_score: number
    [key: string]: any
  }[]
}

export default function Insights({ data }: InsightsProps) {
  if (!data || data.length === 0) return <p>No insights available</p>

  // Basic stats
  const scores = data.map((s) => s.assessment_score)
  const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length
  const sorted = [...data].sort((a, b) => a.assessment_score - b.assessment_score)

  const highest = sorted[sorted.length - 1]
  const lowest = sorted[0]

  // Median
  const mid = Math.floor(sorted.length / 2)
  const median =
    sorted.length % 2 !== 0
      ? sorted[mid].assessment_score
      : (sorted[mid - 1].assessment_score + sorted[mid].assessment_score) / 2

  // Standard deviation
  const variance =
    scores.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / scores.length
  const stdDev = Math.sqrt(variance)

  // Top 3 and bottom 3
  const top3 = sorted.slice(-3).reverse()
  const bottom3 = sorted.slice(0, 3)

  // Above / below average
  const aboveAvg = scores.filter((s) => s > avg).length
  const belowAvg = scores.length - aboveAvg

  const insightsArr = [
    `Average assessment score is ${avg.toFixed(2)}`,
    `Median score is ${median.toFixed(2)}`,
    `Highest score: ${highest.name || "A student"} (${highest.assessment_score.toFixed(2)})`,
    `Lowest score: ${lowest.name || "A student"} (${lowest.assessment_score.toFixed(2)})`,
    `${aboveAvg} students scored above average, ${belowAvg} scored below average`,
    `Score range is ${(highest.assessment_score - lowest.assessment_score).toFixed(2)} points`,
    `Score consistency (Std. Deviation): ${stdDev.toFixed(2)}`,
    `Top performers: ${top3.map((s) => `${s.name || "Student"} (${s.assessment_score.toFixed(2)})`).join(", ")}`,
    `Lowest performers: ${bottom3.map((s) => `${s.name || "Student"} (${s.assessment_score.toFixed(2)})`).join(", ")}`,
  ]

  return (
    <ul className="list-disc list-outside pl-6 space-y-1 text-black text-justify">

      {insightsArr.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  )
}
