"use client"

import React from "react"

interface Metric {
  comprehension: number
  attention: number
  focus: number
  retention: number
  assessment_score: number
}

interface OverviewStatsProps {
  data: Metric[]
}

export default function OverviewStats({ data }: OverviewStatsProps) {
  if (!data || data.length === 0) return <p>No metrics available</p>

  // Calculate averages
  const avg = {
    comprehension:
      data.reduce((sum, d) => sum + d.comprehension, 0) / data.length,
    attention: data.reduce((sum, d) => sum + d.attention, 0) / data.length,
    focus: data.reduce((sum, d) => sum + d.focus, 0) / data.length,
    retention: data.reduce((sum, d) => sum + d.retention, 0) / data.length,
    score:
      data.reduce((sum, d) => sum + (d.assessment_score ?? 0), 0) /
      data.length,
  }

  // Weighted skill average (to separate it from score)
  const avgSkills =
    avg.comprehension * 0.3 +
    avg.attention * 0.25 +
    avg.focus * 0.25 +
    avg.retention * 0.2

  return (
    <div className="p-6">
      <div className="w-full bg-white rounded-3xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatItem label="Average Score" value={avg.score} />
          <StatItem label="Average Skills" value={avgSkills} />
        </div>
      </div>
    </div>
  )
}

interface StatItemProps {
  label: string
  value: number
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="text-center">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-2xl font-semibold text-gray-800">
        {value.toFixed(2)}
      </p>
    </div>
  )
}
