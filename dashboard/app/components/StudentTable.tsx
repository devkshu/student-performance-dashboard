// FILE: app/components/StudentTable.tsx
"use client"

import React, { useMemo, useState } from "react"

type Student = {
  student_id: string
  name: string
  class: string
  comprehension: number
  attention: number
  focus: number
  retention: number
  assessment_score: number
  engagement_time: number
}

export default function StudentTable({ data }: { data: Student[] }) {
  const [search, setSearch] = useState("")

  // ✅ filter students by search
  const filteredData = useMemo(() => {
    if (!data) return []
    return data.filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.class.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, data])

  return (
    <div>
      {/* search box */}
      <input
        type="text"
        placeholder="Search by name...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3 p-2 border rounded w-full text-black"
      />

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-black">
          <thead>
            <tr className="bg-black-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Comprehension</th>
              <th className="border p-2">Attention</th>
              <th className="border p-2">Focus</th>
              <th className="border p-2">Retention</th>
              <th className="border p-2">Engagement</th>
              <th className="border p-2">Assessment</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((s) => (
              <tr key={s.student_id} className="text-center">
                <td className="border p-2">{s.student_id}</td>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.class}</td>
                <td className="border p-2">{s.comprehension}</td>
                <td className="border p-2">{s.attention}</td>
                <td className="border p-2">{s.focus}</td>
                <td className="border p-2">{s.retention}</td>
                <td className="border p-2">{s.engagement_time}</td>
                <td className="border p-2">{s.assessment_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
