"use client"

import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
  CartesianGrid,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

interface CombinedChartsProps {
  barData: {
    name?: string
    assessment_score: number
    [key: string]: any
  }[]
  scatterData: {
    name: string
    attention: number
    assessment_score: number
  }[]
  radarProfiles: {
    comprehension: number
    attention: number
    focus: number
    retention: number
    engagement_time: number
    assessment_score: number
  }[]
}

export default function CombinedCharts({
  barData,
  scatterData,
  radarProfiles,
}: CombinedChartsProps) {
  // Transform Bar data
  const chartData = barData.map((s, idx) => ({
    name: s.name || `Student ${idx + 1}`,
    value: s.assessment_score ?? 0,
  }))

  // Transform Scatter data
  const points = scatterData.map((d) => ({
    x: d.attention,
    y: d.assessment_score,
    name: d.name,
  }))

  // Transform Radar data
  const radarData = radarProfiles.map((p, idx) => ({
    student: `S${idx + 1}`,
    Comprehension: p.comprehension,
    Attention: p.attention,
    Focus: p.focus,
    Retention: p.retention,
    Engagement: p.engagement_time,
  }))

  return (
    <div className="p-6">
      {/* One big card containing all charts */}
      <div className="w-full bg-white rounded-3xl shadow p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
       {/* Bar Chart */}
<div className="h-[400px]">
  <h3 className="text-lg font-semibold mb-4 text-black">Skill vs Score</h3>
  <ResponsiveContainer>
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        tick={{ fontSize: 10, fill: "#000" }} // 👈 smaller font size here
        label={{
          value: "Skill",
          position: "insideBottom",
          offset: -5,
          style: { fill: "#000", fontSize: 12 },
        }}
      />
      <YAxis
        label={{
          value: "Score",
          angle: -90,
          position: "insideLeft",
          offset: 10,
          style: { fill: "#000", fontSize: 12 },
        }}
        tick={{ fontSize: 12, fill: "#000" }} // 👈 also shrink Y-axis numbers
      />
      <Tooltip />
      <Legend verticalAlign="bottom" wrapperStyle={{ marginTop: 30 }} />
      <Bar dataKey="value" name="Assessment Score" fill="#ec75d1ff" />
    </BarChart>
  </ResponsiveContainer>
</div>


          {/* Scatter Chart */}
          <div className="h-[400px]">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Attention vs Performance
            </h3>
            <ResponsiveContainer>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                <CartesianGrid />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Attention"
                  tick={{ fontSize: 12, fill: "#000" }}
                  label={{
                    value: "Attention",
                    position: "insideBottom",
                    offset: 0.05,
                    style: { fill: "#000", fontSize: 14 },
                  }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Assessment"
                  label={{
                    value: "Performance",
                    angle: -90,
                    position: "insideLeft",
                    offset: 10,
                    style: { fill: "#000", fontSize: 14 },
                  }}
                tick={{ fontSize: 12, fill: "#000" }}/>
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={points} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-black">Student Profile</h3>
            <div className="flex justify-center items-center flex-1">
              <RadarChart outerRadius={80} width={350} height={300} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="student" />
                <PolarRadiusAxis />
                <Radar
                  name="Comprehension"
                  dataKey="Comprehension"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Attention"
                  dataKey="Attention"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Focus"
                  dataKey="Focus"
                  stroke="#ffc658"
                  fill="#ffc658"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Retention"
                  dataKey="Retention"
                  stroke="#ff6f91"
                  fill="#ff6f91"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Engagement"
                  dataKey="Engagement"
                  stroke="#00bfff"
                  fill="#00bfff"
                  fillOpacity={0.4}
                />
                <Tooltip />
                <Legend verticalAlign="top" align="center" />
              </RadarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
