"use client"

import React from "react"
import OverviewStats from "./components/OverviewStats"
import CombinedCharts from "./components/CombinedCharts"
import StudentTable from "./components/StudentTable"
import Insights from "./components/Insights"

// ✅ Import JSON files
import metrics from "../data/metrics.json"
import studentsWithPersona from "../data/students_with_persona.json"
import personaProfiles from "../data/persona_profiles.json"

// Convert JSON objects to arrays
const studentData = Object.values(studentsWithPersona)
const personaData = Object.values(personaProfiles)
const metricsArray = Object.values(metrics)

// Average metrics for overview stats
const avgMetrics = {
  comprehension:
    studentData.reduce((sum, s) => sum + s.comprehension, 0) / studentData.length,
  attention:
    studentData.reduce((sum, s) => sum + s.attention, 0) / studentData.length,
  focus: studentData.reduce((sum, s) => sum + s.focus, 0) / studentData.length,
  retention:
    studentData.reduce((sum, s) => sum + s.retention, 0) / studentData.length,
}

export default function Page() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8">
        Cognitive Skills & Student Performance Dashboard
      </h1>

      {/* Overview Stats */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview Stats</h2>
        <div className="p-4 bg-white rounded-2xl shadow">
          <OverviewStats data={personaData} />
        </div>
      </section>

      {/* Charts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Charts</h2>
        <div className="p-4 bg-white rounded-2xl shadow">
          <CombinedCharts
            barData={studentData}
            scatterData={studentData}
            radarProfiles={personaData}
          />
        </div>
      </section>

      {/* Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Insights</h2>
        <div className="p-4 bg-white rounded-2xl shadow">
          <Insights data={studentData} />
        </div>
      </section>

      {/* Student Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Students Table</h2>
        <div className="p-4 bg-white rounded-2xl shadow">
          <StudentTable data={studentData} />
        </div>
      </section>
    </main>
  )
}
