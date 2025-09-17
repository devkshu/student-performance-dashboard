(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cognitive-dashboard/app/components/OverviewStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function OverviewStats(param) {
    let { data } = param;
    if (!data || data.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "No metrics available"
    }, void 0, false, {
        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
        lineNumber: 17,
        columnNumber: 42
    }, this);
    // Calculate average for each skill
    const avg = {
        comprehension: data.reduce((sum, d)=>sum + d.comprehension, 0) / data.length,
        attention: data.reduce((sum, d)=>sum + d.attention, 0) / data.length,
        focus: data.reduce((sum, d)=>sum + d.focus, 0) / data.length,
        retention: data.reduce((sum, d)=>sum + d.retention, 0) / data.length
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-gray-800 mb-4",
                children: "Overview Stats"
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Comprehension",
                        value: avg.comprehension
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Attention",
                        value: avg.attention
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Focus",
                        value: avg.focus
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Retention",
                        value: avg.retention
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = OverviewStats;
function StatCard(param) {
    let { label, value } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white rounded-2xl shadow text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-semibold",
                children: value.toFixed(2)
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cognitive-dashboard/app/components/OverviewStats.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c1 = StatCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "OverviewStats");
__turbopack_context__.k.register(_c1, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cognitive-dashboard/app/components/SkillBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CombinedCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/chart/RadarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/polar/PolarGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/polar/Radar.js [app-client] (ecmascript)");
"use client";
;
;
function CombinedCharts(param) {
    let { barData, scatterData, radarProfiles } = param;
    // Transform Bar data
    const chartData = barData.map((s, idx)=>{
        var _s_assessment_score;
        return {
            name: s.name || "Student ".concat(idx + 1),
            value: (_s_assessment_score = s.assessment_score) !== null && _s_assessment_score !== void 0 ? _s_assessment_score : 0
        };
    });
    // Transform Scatter data
    const points = scatterData.map((d)=>({
            x: d.attention,
            y: d.assessment_score,
            name: d.name
        }));
    // Transform Radar data
    const radarData = radarProfiles.map((p, idx)=>({
            student: "S".concat(idx + 1),
            Comprehension: p.comprehension,
            Attention: p.attention,
            Focus: p.focus,
            Retention: p.retention,
            Engagement: p.engagement_time
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6",
                children: "Charts"
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-80 bg-white rounded-2xl shadow p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: chartData,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        name: "Assessment Score",
                                        fill: "#4f46e5"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-80 bg-white rounded-2xl shadow p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                                margin: {
                                    top: 20,
                                    right: 20,
                                    bottom: 10,
                                    left: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {}, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        dataKey: "x",
                                        name: "Attention"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        type: "number",
                                        dataKey: "y",
                                        name: "Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        cursor: {
                                            strokeDasharray: "3 3"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                                        data: points,
                                        fill: "#8884d8"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-80 bg-white rounded-2xl shadow p-4 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
                            outerRadius: 100,
                            width: 350,
                            height: 300,
                            data: radarData,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarGrid"], {}, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarAngleAxis"], {
                                    dataKey: "student"
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarRadiusAxis"], {}, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                    name: "Comprehension",
                                    dataKey: "Comprehension",
                                    stroke: "#8884d8",
                                    fill: "#8884d8",
                                    fillOpacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                    name: "Attention",
                                    dataKey: "Attention",
                                    stroke: "#82ca9d",
                                    fill: "#82ca9d",
                                    fillOpacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                    name: "Focus",
                                    dataKey: "Focus",
                                    stroke: "#ffc658",
                                    fill: "#ffc658",
                                    fillOpacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                    name: "Retention",
                                    dataKey: "Retention",
                                    stroke: "#ff6f91",
                                    fill: "#ff6f91",
                                    fillOpacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                    name: "Engagement",
                                    dataKey: "Engagement",
                                    stroke: "#00bfff",
                                    fill: "#00bfff",
                                    fillOpacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                    verticalAlign: "top"
                                }, void 0, false, {
                                    fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cognitive-dashboard/app/components/SkillBarChart.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = CombinedCharts;
var _c;
__turbopack_context__.k.register(_c, "CombinedCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cognitive-dashboard/app/components/AttentionScatter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttentionScatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
;
function AttentionScatter(param) {
    let { data } = param;
    const points = data.map((d)=>({
            x: d.attention,
            y: d.assessment_score,
            name: d.name
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: 300
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {}, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        dataKey: "x",
                        name: "Attention"
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "number",
                        dataKey: "y",
                        name: "Assessment"
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            strokeDasharray: '3 3'
                        },
                        formatter: (value)=>value
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: points,
                        fill: "#8884d8"
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        }, void 0, false, {
            fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
            lineNumber: 11,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/cognitive-dashboard/app/components/AttentionScatter.tsx",
        lineNumber: 10,
        columnNumber: 1
    }, this);
}
_c = AttentionScatter;
var _c;
__turbopack_context__.k.register(_c, "AttentionScatter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cognitive-dashboard/app/components/StudentTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FILE: app/components/StudentTable.tsx
__turbopack_context__.s([
    "default",
    ()=>StudentTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StudentTable(param) {
    let { data } = param;
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ✅ filter students by search
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentTable.useMemo[filteredData]": ()=>{
            if (!data) return [];
            return data.filter({
                "StudentTable.useMemo[filteredData]": (s)=>s.name.toLowerCase().includes(search.toLowerCase()) || s.class.toLowerCase().includes(search.toLowerCase())
            }["StudentTable.useMemo[filteredData]"]);
        }
    }["StudentTable.useMemo[filteredData]"], [
        search,
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search by name or class...",
                value: search,
                onChange: (e)=>setSearch(e.target.value),
                className: "mb-3 p-2 border rounded w-full"
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Class"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Comprehension"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Attention"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Focus"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Retention"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Engagement"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2",
                                        children: "Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredData.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.student_id
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.class
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.comprehension
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.attention
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.focus
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.retention
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.engagement_time
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2",
                                            children: s.assessment_score
                                        }, void 0, false, {
                                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.student_id, true, {
                                    fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cognitive-dashboard/app/components/StudentTable.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(StudentTable, "YE7pzNXiZpFAYdIVtVmDT5dKOuI=");
_c = StudentTable;
var _c;
__turbopack_context__.k.register(_c, "StudentTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cognitive-dashboard/app/components/Insights.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Insights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Insights(param) {
    let { data } = param;
    if (!data || data.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "No insights available"
    }, void 0, false, {
        fileName: "[project]/cognitive-dashboard/app/components/Insights.tsx",
        lineNumber: 13,
        columnNumber: 42
    }, this);
    const insightsArr = data.map((s, idx)=>"Student ".concat(idx + 1, " scored ").concat(s.assessment_score.toFixed(2)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "list-disc list-inside",
        children: insightsArr.map((i, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: i
            }, idx, false, {
                fileName: "[project]/cognitive-dashboard/app/components/Insights.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/cognitive-dashboard/app/components/Insights.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Insights;
var _c;
__turbopack_context__.k.register(_c, "Insights");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cognitive-dashboard/data/metrics.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Linear Regression\":{\"R2\":0.877,\"RMSE\":4.437},\"Random Forest\":{\"R2\":0.844,\"RMSE\":5.009}}"));}),
"[project]/cognitive-dashboard/data/students_with_persona.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"student_id\":\"S001\",\"name\":\"Sahil Bhattacharya\",\"class\":\"B\",\"comprehension\":48.93,\"attention\":43.75,\"focus\":38.65,\"retention\":46.13,\"engagement_time\":91,\"assessment_score\":50.7,\"persona\":2},{\"student_id\":\"S002\",\"name\":\"Neha Lal\",\"class\":\"B\",\"comprehension\":85.26,\"attention\":80.38,\"focus\":63.79,\"retention\":86.14,\"engagement_time\":102,\"assessment_score\":85.14,\"persona\":1},{\"student_id\":\"S003\",\"name\":\"Krishna Bose\",\"class\":\"A\",\"comprehension\":48.38,\"attention\":52.27,\"focus\":42.97,\"retention\":45.43,\"engagement_time\":93,\"assessment_score\":49.97,\"persona\":2},{\"student_id\":\"S004\",\"name\":\"Sahil Malhotra\",\"class\":\"B\",\"comprehension\":78.74,\"attention\":73.12,\"focus\":68.58,\"retention\":69.74,\"engagement_time\":104,\"assessment_score\":73.56,\"persona\":0},{\"student_id\":\"S005\",\"name\":\"Ritika Gupta\",\"class\":\"A\",\"comprehension\":72.24,\"attention\":68.54,\"focus\":56.29,\"retention\":56.91,\"engagement_time\":120,\"assessment_score\":64.2,\"persona\":0},{\"student_id\":\"S006\",\"name\":\"Sana Rana\",\"class\":\"B\",\"comprehension\":65.11,\"attention\":68.38,\"focus\":73.06,\"retention\":68.58,\"engagement_time\":68,\"assessment_score\":64.56,\"persona\":0},{\"student_id\":\"S007\",\"name\":\"Tara Chauhan\",\"class\":\"A\",\"comprehension\":63.64,\"attention\":61.67,\"focus\":57.46,\"retention\":66.4,\"engagement_time\":92,\"assessment_score\":65.72,\"persona\":0},{\"student_id\":\"S008\",\"name\":\"Kunal Patel\",\"class\":\"A\",\"comprehension\":75.82,\"attention\":60.73,\"focus\":54.22,\"retention\":69.89,\"engagement_time\":45,\"assessment_score\":60.67,\"persona\":0},{\"student_id\":\"S009\",\"name\":\"Priya Verma\",\"class\":\"B\",\"comprehension\":75.54,\"attention\":64.1,\"focus\":47.34,\"retention\":75.77,\"engagement_time\":58,\"assessment_score\":61.27,\"persona\":0},{\"student_id\":\"S010\",\"name\":\"Kunal Verghese\",\"class\":\"A\",\"comprehension\":69.39,\"attention\":49.18,\"focus\":62.84,\"retention\":59.45,\"engagement_time\":82,\"assessment_score\":59.04,\"persona\":2},{\"student_id\":\"S011\",\"name\":\"Arya Rout\",\"class\":\"A\",\"comprehension\":71.66,\"attention\":59.96,\"focus\":43.03,\"retention\":47.99,\"engagement_time\":90,\"assessment_score\":62.22,\"persona\":2},{\"student_id\":\"S012\",\"name\":\"Vihaan Bose\",\"class\":\"A\",\"comprehension\":82.87,\"attention\":79.03,\"focus\":79.26,\"retention\":79.29,\"engagement_time\":94,\"assessment_score\":75.06,\"persona\":1},{\"student_id\":\"S013\",\"name\":\"Zara Kapoor\",\"class\":\"A\",\"comprehension\":75.17,\"attention\":72.61,\"focus\":69.86,\"retention\":55.69,\"engagement_time\":78,\"assessment_score\":67.84,\"persona\":0},{\"student_id\":\"S014\",\"name\":\"Priya Verghese\",\"class\":\"C\",\"comprehension\":76.93,\"attention\":61.15,\"focus\":56.92,\"retention\":63.66,\"engagement_time\":80,\"assessment_score\":65.14,\"persona\":0},{\"student_id\":\"S015\",\"name\":\"Tanvi Bhandari\",\"class\":\"A\",\"comprehension\":47.29,\"attention\":43.35,\"focus\":62.25,\"retention\":64.47,\"engagement_time\":109,\"assessment_score\":60.11,\"persona\":2},{\"student_id\":\"S016\",\"name\":\"Rashmi Sood\",\"class\":\"B\",\"comprehension\":76.72,\"attention\":61.81,\"focus\":47.14,\"retention\":63.87,\"engagement_time\":78,\"assessment_score\":60.81,\"persona\":0},{\"student_id\":\"S017\",\"name\":\"Nikhil Iyer\",\"class\":\"B\",\"comprehension\":48.96,\"attention\":49.8,\"focus\":56.49,\"retention\":56.21,\"engagement_time\":116,\"assessment_score\":51.16,\"persona\":2},{\"student_id\":\"S018\",\"name\":\"Neha Sundar\",\"class\":\"B\",\"comprehension\":71.07,\"attention\":49.37,\"focus\":58.25,\"retention\":68.99,\"engagement_time\":100,\"assessment_score\":58.91,\"persona\":0},{\"student_id\":\"S019\",\"name\":\"Yash Patel\",\"class\":\"A\",\"comprehension\":62.03,\"attention\":60.39,\"focus\":51.17,\"retention\":51.92,\"engagement_time\":89,\"assessment_score\":62.92,\"persona\":2},{\"student_id\":\"S020\",\"name\":\"Milan Ghosh\",\"class\":\"A\",\"comprehension\":71.85,\"attention\":92.81,\"focus\":67.88,\"retention\":85.33,\"engagement_time\":73,\"assessment_score\":87.28,\"persona\":1},{\"student_id\":\"S021\",\"name\":\"Ankit Nair\",\"class\":\"C\",\"comprehension\":48.7,\"attention\":53.73,\"focus\":48.69,\"retention\":58.08,\"engagement_time\":101,\"assessment_score\":47.0,\"persona\":2},{\"student_id\":\"S022\",\"name\":\"Sahil Ahuja\",\"class\":\"C\",\"comprehension\":69.84,\"attention\":57.66,\"focus\":68.07,\"retention\":58.25,\"engagement_time\":72,\"assessment_score\":56.5,\"persona\":0},{\"student_id\":\"S023\",\"name\":\"Vivaan Sethi\",\"class\":\"C\",\"comprehension\":64.03,\"attention\":51.75,\"focus\":60.79,\"retention\":46.12,\"engagement_time\":55,\"assessment_score\":53.48,\"persona\":2},{\"student_id\":\"S024\",\"name\":\"Aisha Mendiratta\",\"class\":\"A\",\"comprehension\":57.0,\"attention\":54.56,\"focus\":62.0,\"retention\":54.89,\"engagement_time\":93,\"assessment_score\":58.09,\"persona\":2},{\"student_id\":\"S025\",\"name\":\"Ananya Shah\",\"class\":\"A\",\"comprehension\":59.76,\"attention\":66.44,\"focus\":66.06,\"retention\":52.86,\"engagement_time\":56,\"assessment_score\":63.73,\"persona\":2},{\"student_id\":\"S026\",\"name\":\"Vihaan Trivedi\",\"class\":\"A\",\"comprehension\":72.58,\"attention\":73.1,\"focus\":69.32,\"retention\":63.47,\"engagement_time\":71,\"assessment_score\":63.8,\"persona\":0},{\"student_id\":\"S027\",\"name\":\"Nikhil Sundar\",\"class\":\"B\",\"comprehension\":63.47,\"attention\":54.29,\"focus\":54.61,\"retention\":60.42,\"engagement_time\":83,\"assessment_score\":52.43,\"persona\":2},{\"student_id\":\"S028\",\"name\":\"Sai Verghese\",\"class\":\"A\",\"comprehension\":60.32,\"attention\":51.61,\"focus\":48.98,\"retention\":44.12,\"engagement_time\":122,\"assessment_score\":55.91,\"persona\":2},{\"student_id\":\"S029\",\"name\":\"Krishna Sundar\",\"class\":\"C\",\"comprehension\":57.73,\"attention\":61.1,\"focus\":37.59,\"retention\":60.71,\"engagement_time\":64,\"assessment_score\":52.42,\"persona\":2},{\"student_id\":\"S030\",\"name\":\"Kabir Das\",\"class\":\"A\",\"comprehension\":86.29,\"attention\":77.78,\"focus\":68.4,\"retention\":72.04,\"engagement_time\":82,\"assessment_score\":79.57,\"persona\":1},{\"student_id\":\"S031\",\"name\":\"Kavya Pillai\",\"class\":\"C\",\"comprehension\":74.59,\"attention\":71.2,\"focus\":71.36,\"retention\":63.56,\"engagement_time\":101,\"assessment_score\":73.07,\"persona\":0},{\"student_id\":\"S032\",\"name\":\"Nora Chauhan\",\"class\":\"B\",\"comprehension\":80.81,\"attention\":82.24,\"focus\":63.55,\"retention\":74.22,\"engagement_time\":66,\"assessment_score\":75.96,\"persona\":0},{\"student_id\":\"S033\",\"name\":\"Vivaan Verma\",\"class\":\"C\",\"comprehension\":75.69,\"attention\":83.4,\"focus\":78.21,\"retention\":67.43,\"engagement_time\":101,\"assessment_score\":76.0,\"persona\":1},{\"student_id\":\"S034\",\"name\":\"Ishaan Sood\",\"class\":\"A\",\"comprehension\":68.96,\"attention\":75.14,\"focus\":65.09,\"retention\":66.61,\"engagement_time\":112,\"assessment_score\":82.14,\"persona\":0},{\"student_id\":\"S035\",\"name\":\"Vivaan Bhattacharya\",\"class\":\"B\",\"comprehension\":57.37,\"attention\":55.81,\"focus\":40.83,\"retention\":49.48,\"engagement_time\":73,\"assessment_score\":47.42,\"persona\":2},{\"student_id\":\"S036\",\"name\":\"Sneha Shah\",\"class\":\"B\",\"comprehension\":82.94,\"attention\":65.62,\"focus\":55.85,\"retention\":73.94,\"engagement_time\":109,\"assessment_score\":73.1,\"persona\":0},{\"student_id\":\"S037\",\"name\":\"Yash Shetty\",\"class\":\"A\",\"comprehension\":81.56,\"attention\":80.52,\"focus\":82.95,\"retention\":71.98,\"engagement_time\":101,\"assessment_score\":72.41,\"persona\":1},{\"student_id\":\"S038\",\"name\":\"Diya Pillai\",\"class\":\"A\",\"comprehension\":67.09,\"attention\":58.51,\"focus\":63.39,\"retention\":60.6,\"engagement_time\":70,\"assessment_score\":55.46,\"persona\":0},{\"student_id\":\"S039\",\"name\":\"Aisha Khan\",\"class\":\"C\",\"comprehension\":59.94,\"attention\":56.07,\"focus\":66.88,\"retention\":69.18,\"engagement_time\":85,\"assessment_score\":58.26,\"persona\":0},{\"student_id\":\"S040\",\"name\":\"Dev Chopra\",\"class\":\"B\",\"comprehension\":73.92,\"attention\":64.41,\"focus\":60.68,\"retention\":66.25,\"engagement_time\":79,\"assessment_score\":73.36,\"persona\":0},{\"student_id\":\"S041\",\"name\":\"Krishna Das\",\"class\":\"A\",\"comprehension\":97.27,\"attention\":82.04,\"focus\":77.04,\"retention\":74.12,\"engagement_time\":93,\"assessment_score\":83.06,\"persona\":1},{\"student_id\":\"S042\",\"name\":\"Ritika Chauhan\",\"class\":\"A\",\"comprehension\":57.62,\"attention\":55.95,\"focus\":63.94,\"retention\":53.69,\"engagement_time\":86,\"assessment_score\":54.89,\"persona\":2},{\"student_id\":\"S043\",\"name\":\"Ankit Iyer\",\"class\":\"B\",\"comprehension\":100.0,\"attention\":76.11,\"focus\":85.19,\"retention\":72.18,\"engagement_time\":106,\"assessment_score\":84.73,\"persona\":1},{\"student_id\":\"S044\",\"name\":\"Gaurav Ahuja\",\"class\":\"B\",\"comprehension\":67.34,\"attention\":61.86,\"focus\":71.81,\"retention\":63.59,\"engagement_time\":95,\"assessment_score\":65.89,\"persona\":0},{\"student_id\":\"S045\",\"name\":\"Iqra Rana\",\"class\":\"A\",\"comprehension\":47.62,\"attention\":69.4,\"focus\":59.73,\"retention\":57.29,\"engagement_time\":34,\"assessment_score\":53.1,\"persona\":2},{\"student_id\":\"S046\",\"name\":\"Meera Sethi\",\"class\":\"A\",\"comprehension\":68.79,\"attention\":65.03,\"focus\":62.61,\"retention\":69.39,\"engagement_time\":86,\"assessment_score\":58.46,\"persona\":0},{\"student_id\":\"S047\",\"name\":\"Gaurav Bhatt\",\"class\":\"A\",\"comprehension\":81.41,\"attention\":79.25,\"focus\":67.25,\"retention\":69.94,\"engagement_time\":59,\"assessment_score\":79.25,\"persona\":0},{\"student_id\":\"S048\",\"name\":\"Varun Chopra\",\"class\":\"B\",\"comprehension\":100.0,\"attention\":65.67,\"focus\":84.38,\"retention\":70.6,\"engagement_time\":93,\"assessment_score\":79.5,\"persona\":1},{\"student_id\":\"S049\",\"name\":\"Gaurav Sharma\",\"class\":\"B\",\"comprehension\":77.5,\"attention\":78.97,\"focus\":70.02,\"retention\":68.58,\"engagement_time\":86,\"assessment_score\":84.04,\"persona\":0},{\"student_id\":\"S050\",\"name\":\"Tanvi Ghosh\",\"class\":\"A\",\"comprehension\":81.34,\"attention\":77.42,\"focus\":75.2,\"retention\":77.43,\"engagement_time\":108,\"assessment_score\":82.21,\"persona\":1},{\"student_id\":\"S051\",\"name\":\"Ananya Rana\",\"class\":\"C\",\"comprehension\":78.89,\"attention\":87.98,\"focus\":94.29,\"retention\":85.71,\"engagement_time\":96,\"assessment_score\":87.08,\"persona\":1},{\"student_id\":\"S052\",\"name\":\"Aarav Verghese\",\"class\":\"B\",\"comprehension\":71.93,\"attention\":58.13,\"focus\":66.77,\"retention\":72.04,\"engagement_time\":96,\"assessment_score\":63.89,\"persona\":0},{\"student_id\":\"S053\",\"name\":\"Krishna Rana\",\"class\":\"A\",\"comprehension\":53.48,\"attention\":67.51,\"focus\":74.45,\"retention\":53.18,\"engagement_time\":99,\"assessment_score\":57.7,\"persona\":0},{\"student_id\":\"S054\",\"name\":\"Sana Rao\",\"class\":\"A\",\"comprehension\":79.93,\"attention\":79.03,\"focus\":84.58,\"retention\":79.26,\"engagement_time\":120,\"assessment_score\":79.52,\"persona\":1},{\"student_id\":\"S055\",\"name\":\"Krishna Menon\",\"class\":\"A\",\"comprehension\":67.18,\"attention\":41.77,\"focus\":55.54,\"retention\":61.29,\"engagement_time\":80,\"assessment_score\":49.41,\"persona\":2},{\"student_id\":\"S056\",\"name\":\"Kabir Rao\",\"class\":\"C\",\"comprehension\":64.78,\"attention\":69.42,\"focus\":69.15,\"retention\":57.16,\"engagement_time\":85,\"assessment_score\":68.42,\"persona\":0},{\"student_id\":\"S057\",\"name\":\"Aditya Sood\",\"class\":\"B\",\"comprehension\":66.72,\"attention\":68.55,\"focus\":68.85,\"retention\":58.18,\"engagement_time\":82,\"assessment_score\":73.45,\"persona\":0},{\"student_id\":\"S058\",\"name\":\"Sahil Bhatt\",\"class\":\"B\",\"comprehension\":55.02,\"attention\":44.27,\"focus\":50.89,\"retention\":63.33,\"engagement_time\":71,\"assessment_score\":50.21,\"persona\":2},{\"student_id\":\"S059\",\"name\":\"Nikhil Ghosh\",\"class\":\"B\",\"comprehension\":68.08,\"attention\":70.89,\"focus\":79.86,\"retention\":63.18,\"engagement_time\":74,\"assessment_score\":73.46,\"persona\":0},{\"student_id\":\"S060\",\"name\":\"Ananya Mehta\",\"class\":\"B\",\"comprehension\":68.65,\"attention\":73.77,\"focus\":69.28,\"retention\":56.74,\"engagement_time\":40,\"assessment_score\":60.92,\"persona\":0},{\"student_id\":\"S061\",\"name\":\"Maya Shetty\",\"class\":\"B\",\"comprehension\":31.6,\"attention\":42.07,\"focus\":50.64,\"retention\":35.86,\"engagement_time\":45,\"assessment_score\":37.56,\"persona\":2},{\"student_id\":\"S062\",\"name\":\"Zara Gulati\",\"class\":\"A\",\"comprehension\":75.13,\"attention\":69.8,\"focus\":57.19,\"retention\":64.22,\"engagement_time\":50,\"assessment_score\":60.1,\"persona\":0},{\"student_id\":\"S063\",\"name\":\"Ritika Rana\",\"class\":\"B\",\"comprehension\":61.06,\"attention\":43.05,\"focus\":55.51,\"retention\":64.78,\"engagement_time\":109,\"assessment_score\":45.7,\"persona\":2},{\"student_id\":\"S064\",\"name\":\"Milan Menon\",\"class\":\"A\",\"comprehension\":75.96,\"attention\":80.09,\"focus\":54.82,\"retention\":75.46,\"engagement_time\":96,\"assessment_score\":71.6,\"persona\":0},{\"student_id\":\"S065\",\"name\":\"Yash Chauhan\",\"class\":\"A\",\"comprehension\":66.88,\"attention\":59.62,\"focus\":62.5,\"retention\":56.38,\"engagement_time\":81,\"assessment_score\":61.68,\"persona\":0},{\"student_id\":\"S066\",\"name\":\"Priya Nambiar\",\"class\":\"A\",\"comprehension\":93.06,\"attention\":97.59,\"focus\":88.86,\"retention\":89.92,\"engagement_time\":88,\"assessment_score\":95.08,\"persona\":1},{\"student_id\":\"S067\",\"name\":\"Kabir Sharma\",\"class\":\"A\",\"comprehension\":76.56,\"attention\":81.56,\"focus\":71.07,\"retention\":71.54,\"engagement_time\":96,\"assessment_score\":79.02,\"persona\":1},{\"student_id\":\"S068\",\"name\":\"Kabir Naik\",\"class\":\"A\",\"comprehension\":59.5,\"attention\":62.66,\"focus\":58.84,\"retention\":59.56,\"engagement_time\":68,\"assessment_score\":63.01,\"persona\":2},{\"student_id\":\"S069\",\"name\":\"Iqra Das\",\"class\":\"A\",\"comprehension\":84.72,\"attention\":81.91,\"focus\":62.86,\"retention\":77.49,\"engagement_time\":97,\"assessment_score\":71.63,\"persona\":1},{\"student_id\":\"S070\",\"name\":\"Arjun Sharma\",\"class\":\"C\",\"comprehension\":67.1,\"attention\":70.29,\"focus\":77.31,\"retention\":67.43,\"engagement_time\":95,\"assessment_score\":72.15,\"persona\":0},{\"student_id\":\"S071\",\"name\":\"Aditya Shah\",\"class\":\"A\",\"comprehension\":80.72,\"attention\":68.55,\"focus\":61.18,\"retention\":78.89,\"engagement_time\":71,\"assessment_score\":77.52,\"persona\":0},{\"student_id\":\"S072\",\"name\":\"Aisha Dutta\",\"class\":\"A\",\"comprehension\":73.88,\"attention\":70.24,\"focus\":94.98,\"retention\":62.32,\"engagement_time\":74,\"assessment_score\":74.79,\"persona\":0},{\"student_id\":\"S073\",\"name\":\"Rashmi Nair\",\"class\":\"C\",\"comprehension\":74.24,\"attention\":55.78,\"focus\":62.08,\"retention\":62.16,\"engagement_time\":107,\"assessment_score\":73.41,\"persona\":0},{\"student_id\":\"S074\",\"name\":\"Neha Chopra\",\"class\":\"C\",\"comprehension\":68.62,\"attention\":72.76,\"focus\":59.09,\"retention\":61.92,\"engagement_time\":87,\"assessment_score\":76.06,\"persona\":0},{\"student_id\":\"S075\",\"name\":\"Meera Sood\",\"class\":\"A\",\"comprehension\":72.74,\"attention\":68.68,\"focus\":67.11,\"retention\":68.47,\"engagement_time\":76,\"assessment_score\":66.28,\"persona\":0},{\"student_id\":\"S076\",\"name\":\"Isha Mishra\",\"class\":\"B\",\"comprehension\":92.0,\"attention\":84.59,\"focus\":70.18,\"retention\":80.07,\"engagement_time\":92,\"assessment_score\":77.16,\"persona\":1},{\"student_id\":\"S077\",\"name\":\"Sahil Bhandari\",\"class\":\"B\",\"comprehension\":78.82,\"attention\":70.9,\"focus\":69.12,\"retention\":60.08,\"engagement_time\":68,\"assessment_score\":64.6,\"persona\":0},{\"student_id\":\"S078\",\"name\":\"Adil Singh\",\"class\":\"A\",\"comprehension\":63.98,\"attention\":47.59,\"focus\":55.56,\"retention\":63.99,\"engagement_time\":83,\"assessment_score\":49.01,\"persona\":2},{\"student_id\":\"S079\",\"name\":\"Arya Naik\",\"class\":\"C\",\"comprehension\":49.31,\"attention\":34.19,\"focus\":53.79,\"retention\":43.0,\"engagement_time\":91,\"assessment_score\":43.35,\"persona\":2},{\"student_id\":\"S080\",\"name\":\"Ritika Dutta\",\"class\":\"C\",\"comprehension\":94.46,\"attention\":83.03,\"focus\":78.45,\"retention\":83.26,\"engagement_time\":98,\"assessment_score\":89.36,\"persona\":1},{\"student_id\":\"S081\",\"name\":\"Gaurav Chopra\",\"class\":\"A\",\"comprehension\":72.41,\"attention\":67.18,\"focus\":71.71,\"retention\":59.8,\"engagement_time\":133,\"assessment_score\":59.54,\"persona\":0},{\"student_id\":\"S082\",\"name\":\"Kiran Bhattacharya\",\"class\":\"A\",\"comprehension\":75.12,\"attention\":76.79,\"focus\":73.87,\"retention\":65.87,\"engagement_time\":99,\"assessment_score\":67.97,\"persona\":0},{\"student_id\":\"S083\",\"name\":\"Tara Bhat\",\"class\":\"C\",\"comprehension\":86.4,\"attention\":73.47,\"focus\":80.38,\"retention\":90.3,\"engagement_time\":103,\"assessment_score\":79.58,\"persona\":1},{\"student_id\":\"S084\",\"name\":\"Adil Ghosh\",\"class\":\"B\",\"comprehension\":72.77,\"attention\":73.12,\"focus\":77.69,\"retention\":71.11,\"engagement_time\":70,\"assessment_score\":66.68,\"persona\":0},{\"student_id\":\"S085\",\"name\":\"Priya Prasad\",\"class\":\"B\",\"comprehension\":66.91,\"attention\":62.94,\"focus\":68.87,\"retention\":53.27,\"engagement_time\":81,\"assessment_score\":60.21,\"persona\":0},{\"student_id\":\"S086\",\"name\":\"Vihaan Sood\",\"class\":\"B\",\"comprehension\":86.07,\"attention\":73.8,\"focus\":99.35,\"retention\":67.59,\"engagement_time\":80,\"assessment_score\":76.51,\"persona\":1},{\"student_id\":\"S087\",\"name\":\"Gaurav Reddy\",\"class\":\"B\",\"comprehension\":67.44,\"attention\":66.34,\"focus\":63.87,\"retention\":73.85,\"engagement_time\":46,\"assessment_score\":62.43,\"persona\":0},{\"student_id\":\"S088\",\"name\":\"Nikhil Prasad\",\"class\":\"C\",\"comprehension\":77.52,\"attention\":77.68,\"focus\":68.89,\"retention\":67.19,\"engagement_time\":110,\"assessment_score\":70.33,\"persona\":0},{\"student_id\":\"S089\",\"name\":\"Yash Verghese\",\"class\":\"C\",\"comprehension\":50.46,\"attention\":53.95,\"focus\":61.84,\"retention\":42.14,\"engagement_time\":68,\"assessment_score\":48.03,\"persona\":2},{\"student_id\":\"S090\",\"name\":\"Rohan Jain\",\"class\":\"C\",\"comprehension\":87.49,\"attention\":78.31,\"focus\":61.5,\"retention\":80.72,\"engagement_time\":79,\"assessment_score\":79.78,\"persona\":1},{\"student_id\":\"S091\",\"name\":\"Sana Prasad\",\"class\":\"B\",\"comprehension\":69.72,\"attention\":71.77,\"focus\":76.92,\"retention\":68.7,\"engagement_time\":93,\"assessment_score\":76.18,\"persona\":0},{\"student_id\":\"S092\",\"name\":\"Tanvi Dutta\",\"class\":\"C\",\"comprehension\":52.35,\"attention\":59.97,\"focus\":54.17,\"retention\":53.04,\"engagement_time\":89,\"assessment_score\":48.98,\"persona\":2},{\"student_id\":\"S093\",\"name\":\"Zara Sharma\",\"class\":\"B\",\"comprehension\":77.52,\"attention\":70.43,\"focus\":60.26,\"retention\":72.91,\"engagement_time\":83,\"assessment_score\":55.31,\"persona\":0},{\"student_id\":\"S094\",\"name\":\"Rashmi Bhat\",\"class\":\"B\",\"comprehension\":49.46,\"attention\":47.29,\"focus\":33.53,\"retention\":38.87,\"engagement_time\":75,\"assessment_score\":49.47,\"persona\":2},{\"student_id\":\"S095\",\"name\":\"Deepa Patel\",\"class\":\"A\",\"comprehension\":100.0,\"attention\":96.72,\"focus\":78.7,\"retention\":77.79,\"engagement_time\":116,\"assessment_score\":83.12,\"persona\":1},{\"student_id\":\"S096\",\"name\":\"Sahil Reddy\",\"class\":\"C\",\"comprehension\":49.21,\"attention\":53.71,\"focus\":34.8,\"retention\":62.17,\"engagement_time\":73,\"assessment_score\":50.7,\"persona\":2},{\"student_id\":\"S097\",\"name\":\"Krishna Nambiar\",\"class\":\"C\",\"comprehension\":86.78,\"attention\":86.14,\"focus\":73.59,\"retention\":72.04,\"engagement_time\":103,\"assessment_score\":72.19,\"persona\":1},{\"student_id\":\"S098\",\"name\":\"Ananya Naik\",\"class\":\"B\",\"comprehension\":68.65,\"attention\":55.25,\"focus\":60.66,\"retention\":50.81,\"engagement_time\":49,\"assessment_score\":63.29,\"persona\":2},{\"student_id\":\"S099\",\"name\":\"Zara Sood\",\"class\":\"C\",\"comprehension\":72.13,\"attention\":68.91,\"focus\":64.23,\"retention\":64.44,\"engagement_time\":66,\"assessment_score\":78.4,\"persona\":0},{\"student_id\":\"S100\",\"name\":\"Yash Rana\",\"class\":\"B\",\"comprehension\":55.42,\"attention\":57.11,\"focus\":65.9,\"retention\":66.41,\"engagement_time\":94,\"assessment_score\":61.39,\"persona\":0},{\"student_id\":\"S101\",\"name\":\"Neha Mishra\",\"class\":\"A\",\"comprehension\":74.75,\"attention\":79.58,\"focus\":85.25,\"retention\":76.04,\"engagement_time\":67,\"assessment_score\":75.07,\"persona\":1},{\"student_id\":\"S102\",\"name\":\"Adil Rana\",\"class\":\"A\",\"comprehension\":57.98,\"attention\":72.62,\"focus\":71.09,\"retention\":67.06,\"engagement_time\":90,\"assessment_score\":65.03,\"persona\":0},{\"student_id\":\"S103\",\"name\":\"Deepa Bhandari\",\"class\":\"A\",\"comprehension\":82.78,\"attention\":71.62,\"focus\":69.06,\"retention\":69.68,\"engagement_time\":87,\"assessment_score\":76.23,\"persona\":0},{\"student_id\":\"S104\",\"name\":\"Hritik Kapoor\",\"class\":\"A\",\"comprehension\":68.17,\"attention\":56.14,\"focus\":44.54,\"retention\":61.53,\"engagement_time\":80,\"assessment_score\":60.27,\"persona\":2},{\"student_id\":\"S105\",\"name\":\"Sahil Verma\",\"class\":\"A\",\"comprehension\":53.66,\"attention\":57.95,\"focus\":45.08,\"retention\":54.99,\"engagement_time\":62,\"assessment_score\":57.27,\"persona\":2},{\"student_id\":\"S106\",\"name\":\"Arjun Bhandari\",\"class\":\"B\",\"comprehension\":62.3,\"attention\":88.47,\"focus\":66.4,\"retention\":61.25,\"engagement_time\":108,\"assessment_score\":68.74,\"persona\":0},{\"student_id\":\"S107\",\"name\":\"Milan Bhandari\",\"class\":\"A\",\"comprehension\":56.37,\"attention\":62.48,\"focus\":51.32,\"retention\":54.29,\"engagement_time\":119,\"assessment_score\":60.98,\"persona\":2},{\"student_id\":\"S108\",\"name\":\"Kavya Bhandari\",\"class\":\"B\",\"comprehension\":89.25,\"attention\":64.47,\"focus\":71.29,\"retention\":77.68,\"engagement_time\":99,\"assessment_score\":71.54,\"persona\":1},{\"student_id\":\"S109\",\"name\":\"Vihaan Verma\",\"class\":\"A\",\"comprehension\":69.46,\"attention\":65.45,\"focus\":73.76,\"retention\":55.44,\"engagement_time\":92,\"assessment_score\":60.99,\"persona\":0},{\"student_id\":\"S110\",\"name\":\"Nikhil Chatterjee\",\"class\":\"B\",\"comprehension\":76.23,\"attention\":65.75,\"focus\":49.14,\"retention\":62.75,\"engagement_time\":73,\"assessment_score\":62.75,\"persona\":0},{\"student_id\":\"S111\",\"name\":\"Milan Mishra\",\"class\":\"A\",\"comprehension\":93.07,\"attention\":81.88,\"focus\":92.64,\"retention\":79.17,\"engagement_time\":73,\"assessment_score\":78.55,\"persona\":1},{\"student_id\":\"S112\",\"name\":\"Zara Sharma\",\"class\":\"A\",\"comprehension\":87.81,\"attention\":95.74,\"focus\":91.51,\"retention\":83.67,\"engagement_time\":100,\"assessment_score\":94.15,\"persona\":1},{\"student_id\":\"S113\",\"name\":\"Sam Verma\",\"class\":\"B\",\"comprehension\":92.44,\"attention\":83.62,\"focus\":72.22,\"retention\":61.88,\"engagement_time\":72,\"assessment_score\":72.48,\"persona\":1},{\"student_id\":\"S114\",\"name\":\"Yash Shah\",\"class\":\"B\",\"comprehension\":78.83,\"attention\":68.56,\"focus\":54.71,\"retention\":58.61,\"engagement_time\":50,\"assessment_score\":65.2,\"persona\":0},{\"student_id\":\"S115\",\"name\":\"Adil Reddy\",\"class\":\"A\",\"comprehension\":62.87,\"attention\":62.01,\"focus\":52.64,\"retention\":56.83,\"engagement_time\":101,\"assessment_score\":57.18,\"persona\":2},{\"student_id\":\"S116\",\"name\":\"Adil Singh\",\"class\":\"C\",\"comprehension\":40.4,\"attention\":66.6,\"focus\":42.62,\"retention\":57.68,\"engagement_time\":99,\"assessment_score\":55.33,\"persona\":2},{\"student_id\":\"S117\",\"name\":\"Sana Rao\",\"class\":\"A\",\"comprehension\":61.61,\"attention\":50.1,\"focus\":71.11,\"retention\":59.2,\"engagement_time\":66,\"assessment_score\":55.37,\"persona\":2},{\"student_id\":\"S118\",\"name\":\"Rajat Rana\",\"class\":\"B\",\"comprehension\":68.69,\"attention\":58.89,\"focus\":72.84,\"retention\":63.77,\"engagement_time\":90,\"assessment_score\":58.77,\"persona\":0},{\"student_id\":\"S119\",\"name\":\"Aditya Shetty\",\"class\":\"C\",\"comprehension\":86.24,\"attention\":80.93,\"focus\":69.43,\"retention\":79.09,\"engagement_time\":119,\"assessment_score\":82.05,\"persona\":1},{\"student_id\":\"S120\",\"name\":\"Ishaan Saxena\",\"class\":\"B\",\"comprehension\":66.7,\"attention\":64.41,\"focus\":56.8,\"retention\":65.2,\"engagement_time\":90,\"assessment_score\":62.04,\"persona\":0},{\"student_id\":\"S121\",\"name\":\"Sana Gulati\",\"class\":\"B\",\"comprehension\":52.77,\"attention\":58.4,\"focus\":55.43,\"retention\":45.34,\"engagement_time\":56,\"assessment_score\":53.81,\"persona\":2},{\"student_id\":\"S122\",\"name\":\"Riya Rao\",\"class\":\"B\",\"comprehension\":75.95,\"attention\":65.49,\"focus\":60.98,\"retention\":55.67,\"engagement_time\":83,\"assessment_score\":62.64,\"persona\":0},{\"student_id\":\"S123\",\"name\":\"Ananya Reddy\",\"class\":\"B\",\"comprehension\":72.16,\"attention\":61.85,\"focus\":49.25,\"retention\":54.36,\"engagement_time\":115,\"assessment_score\":55.73,\"persona\":0},{\"student_id\":\"S124\",\"name\":\"Riya Bhattacharya\",\"class\":\"B\",\"comprehension\":76.07,\"attention\":73.66,\"focus\":58.06,\"retention\":62.23,\"engagement_time\":92,\"assessment_score\":73.69,\"persona\":0},{\"student_id\":\"S125\",\"name\":\"Arjun Trivedi\",\"class\":\"A\",\"comprehension\":85.33,\"attention\":72.45,\"focus\":85.81,\"retention\":67.99,\"engagement_time\":103,\"assessment_score\":81.07,\"persona\":1},{\"student_id\":\"S126\",\"name\":\"Tara Malhotra\",\"class\":\"A\",\"comprehension\":57.64,\"attention\":67.87,\"focus\":58.9,\"retention\":68.98,\"engagement_time\":94,\"assessment_score\":60.42,\"persona\":0},{\"student_id\":\"S127\",\"name\":\"Meera Patel\",\"class\":\"B\",\"comprehension\":73.06,\"attention\":77.66,\"focus\":68.61,\"retention\":68.23,\"engagement_time\":75,\"assessment_score\":70.94,\"persona\":0},{\"student_id\":\"S128\",\"name\":\"Sam Trivedi\",\"class\":\"C\",\"comprehension\":58.45,\"attention\":59.36,\"focus\":46.82,\"retention\":58.59,\"engagement_time\":70,\"assessment_score\":60.51,\"persona\":2},{\"student_id\":\"S129\",\"name\":\"Adil Ghosh\",\"class\":\"B\",\"comprehension\":100.0,\"attention\":83.72,\"focus\":83.73,\"retention\":84.85,\"engagement_time\":104,\"assessment_score\":84.33,\"persona\":1},{\"student_id\":\"S130\",\"name\":\"Deepa Rao\",\"class\":\"A\",\"comprehension\":73.42,\"attention\":76.11,\"focus\":66.19,\"retention\":63.29,\"engagement_time\":105,\"assessment_score\":69.51,\"persona\":0},{\"student_id\":\"S131\",\"name\":\"Akash Dutta\",\"class\":\"B\",\"comprehension\":78.88,\"attention\":71.36,\"focus\":60.67,\"retention\":69.57,\"engagement_time\":111,\"assessment_score\":72.42,\"persona\":0},{\"student_id\":\"S132\",\"name\":\"Sneha Chauhan\",\"class\":\"B\",\"comprehension\":50.87,\"attention\":65.09,\"focus\":45.5,\"retention\":62.19,\"engagement_time\":65,\"assessment_score\":52.77,\"persona\":2},{\"student_id\":\"S133\",\"name\":\"Aarav Gupta\",\"class\":\"A\",\"comprehension\":75.58,\"attention\":74.8,\"focus\":78.48,\"retention\":62.55,\"engagement_time\":98,\"assessment_score\":77.32,\"persona\":0},{\"student_id\":\"S134\",\"name\":\"Nikhil Sethi\",\"class\":\"A\",\"comprehension\":82.38,\"attention\":86.8,\"focus\":56.02,\"retention\":70.51,\"engagement_time\":115,\"assessment_score\":75.34,\"persona\":1},{\"student_id\":\"S135\",\"name\":\"Nora Chatterjee\",\"class\":\"B\",\"comprehension\":63.47,\"attention\":58.25,\"focus\":56.5,\"retention\":50.23,\"engagement_time\":60,\"assessment_score\":52.31,\"persona\":2},{\"student_id\":\"S136\",\"name\":\"Shreya Jain\",\"class\":\"B\",\"comprehension\":57.15,\"attention\":55.2,\"focus\":30.84,\"retention\":43.26,\"engagement_time\":107,\"assessment_score\":53.78,\"persona\":2},{\"student_id\":\"S137\",\"name\":\"Ansh Menon\",\"class\":\"A\",\"comprehension\":73.01,\"attention\":77.0,\"focus\":71.3,\"retention\":59.42,\"engagement_time\":122,\"assessment_score\":67.06,\"persona\":0},{\"student_id\":\"S138\",\"name\":\"Sai Iyer\",\"class\":\"A\",\"comprehension\":65.48,\"attention\":62.3,\"focus\":66.36,\"retention\":53.95,\"engagement_time\":137,\"assessment_score\":75.76,\"persona\":0},{\"student_id\":\"S139\",\"name\":\"Meera Gulati\",\"class\":\"A\",\"comprehension\":62.44,\"attention\":64.5,\"focus\":74.1,\"retention\":67.09,\"engagement_time\":93,\"assessment_score\":74.04,\"persona\":0},{\"student_id\":\"S140\",\"name\":\"Hritik Verma\",\"class\":\"A\",\"comprehension\":51.69,\"attention\":50.92,\"focus\":50.09,\"retention\":44.47,\"engagement_time\":84,\"assessment_score\":53.13,\"persona\":2},{\"student_id\":\"S141\",\"name\":\"Aarav Gulati\",\"class\":\"C\",\"comprehension\":55.78,\"attention\":48.42,\"focus\":61.63,\"retention\":47.29,\"engagement_time\":94,\"assessment_score\":56.39,\"persona\":2},{\"student_id\":\"S142\",\"name\":\"Maya Kumar\",\"class\":\"C\",\"comprehension\":67.77,\"attention\":61.81,\"focus\":83.32,\"retention\":70.37,\"engagement_time\":104,\"assessment_score\":71.64,\"persona\":0},{\"student_id\":\"S143\",\"name\":\"Milan Mishra\",\"class\":\"A\",\"comprehension\":70.64,\"attention\":65.4,\"focus\":57.28,\"retention\":63.43,\"engagement_time\":107,\"assessment_score\":63.03,\"persona\":0},{\"student_id\":\"S144\",\"name\":\"Ananya Bhatt\",\"class\":\"C\",\"comprehension\":51.69,\"attention\":42.04,\"focus\":40.4,\"retention\":42.33,\"engagement_time\":90,\"assessment_score\":47.53,\"persona\":2},{\"student_id\":\"S145\",\"name\":\"Kabir Malhotra\",\"class\":\"B\",\"comprehension\":91.64,\"attention\":80.62,\"focus\":76.28,\"retention\":85.2,\"engagement_time\":93,\"assessment_score\":76.8,\"persona\":1},{\"student_id\":\"S146\",\"name\":\"Dev Iyer\",\"class\":\"B\",\"comprehension\":62.67,\"attention\":52.97,\"focus\":47.41,\"retention\":61.83,\"engagement_time\":104,\"assessment_score\":59.86,\"persona\":2},{\"student_id\":\"S147\",\"name\":\"Arjun Trivedi\",\"class\":\"B\",\"comprehension\":97.1,\"attention\":90.66,\"focus\":81.17,\"retention\":88.21,\"engagement_time\":81,\"assessment_score\":90.75,\"persona\":1},{\"student_id\":\"S148\",\"name\":\"Kunal Rao\",\"class\":\"A\",\"comprehension\":68.25,\"attention\":64.46,\"focus\":53.09,\"retention\":46.32,\"engagement_time\":83,\"assessment_score\":57.68,\"persona\":2},{\"student_id\":\"S149\",\"name\":\"Kunal Gupta\",\"class\":\"A\",\"comprehension\":80.05,\"attention\":66.52,\"focus\":80.34,\"retention\":72.53,\"engagement_time\":121,\"assessment_score\":72.12,\"persona\":1},{\"student_id\":\"S150\",\"name\":\"Hritik Mehta\",\"class\":\"B\",\"comprehension\":83.42,\"attention\":86.62,\"focus\":84.0,\"retention\":68.08,\"engagement_time\":72,\"assessment_score\":72.66,\"persona\":1},{\"student_id\":\"S151\",\"name\":\"Tara Rout\",\"class\":\"B\",\"comprehension\":82.82,\"attention\":91.53,\"focus\":72.47,\"retention\":85.39,\"engagement_time\":82,\"assessment_score\":88.29,\"persona\":1},{\"student_id\":\"S152\",\"name\":\"Akash Trivedi\",\"class\":\"A\",\"comprehension\":89.28,\"attention\":87.77,\"focus\":61.23,\"retention\":88.09,\"engagement_time\":112,\"assessment_score\":79.1,\"persona\":1},{\"student_id\":\"S153\",\"name\":\"Kabir Gulati\",\"class\":\"C\",\"comprehension\":51.92,\"attention\":46.56,\"focus\":36.94,\"retention\":59.26,\"engagement_time\":86,\"assessment_score\":48.04,\"persona\":2},{\"student_id\":\"S154\",\"name\":\"Tanvi Menon\",\"class\":\"C\",\"comprehension\":64.74,\"attention\":51.4,\"focus\":56.8,\"retention\":55.25,\"engagement_time\":63,\"assessment_score\":57.01,\"persona\":2},{\"student_id\":\"S155\",\"name\":\"Tanvi Bhattacharya\",\"class\":\"A\",\"comprehension\":68.5,\"attention\":66.91,\"focus\":48.06,\"retention\":64.67,\"engagement_time\":80,\"assessment_score\":63.33,\"persona\":0},{\"student_id\":\"S156\",\"name\":\"Sneha Kohli\",\"class\":\"C\",\"comprehension\":85.91,\"attention\":70.31,\"focus\":72.9,\"retention\":69.88,\"engagement_time\":68,\"assessment_score\":75.96,\"persona\":0},{\"student_id\":\"S157\",\"name\":\"Sneha Verma\",\"class\":\"C\",\"comprehension\":67.69,\"attention\":59.46,\"focus\":54.37,\"retention\":61.57,\"engagement_time\":107,\"assessment_score\":60.2,\"persona\":0},{\"student_id\":\"S158\",\"name\":\"Kabir Iyer\",\"class\":\"C\",\"comprehension\":56.45,\"attention\":52.02,\"focus\":48.99,\"retention\":54.24,\"engagement_time\":72,\"assessment_score\":46.82,\"persona\":2},{\"student_id\":\"S159\",\"name\":\"Deepa Pillai\",\"class\":\"A\",\"comprehension\":75.96,\"attention\":69.67,\"focus\":67.98,\"retention\":72.53,\"engagement_time\":126,\"assessment_score\":66.31,\"persona\":0},{\"student_id\":\"S160\",\"name\":\"Zara Singh\",\"class\":\"B\",\"comprehension\":62.2,\"attention\":65.98,\"focus\":62.22,\"retention\":63.21,\"engagement_time\":87,\"assessment_score\":60.25,\"persona\":0},{\"student_id\":\"S161\",\"name\":\"Zara Das\",\"class\":\"B\",\"comprehension\":67.82,\"attention\":72.85,\"focus\":57.99,\"retention\":58.89,\"engagement_time\":81,\"assessment_score\":59.95,\"persona\":0},{\"student_id\":\"S162\",\"name\":\"Ankit Gulati\",\"class\":\"B\",\"comprehension\":49.22,\"attention\":43.21,\"focus\":39.08,\"retention\":56.59,\"engagement_time\":67,\"assessment_score\":44.58,\"persona\":2},{\"student_id\":\"S163\",\"name\":\"Rohan Mehta\",\"class\":\"C\",\"comprehension\":77.59,\"attention\":65.78,\"focus\":64.41,\"retention\":76.3,\"engagement_time\":87,\"assessment_score\":75.87,\"persona\":0},{\"student_id\":\"S164\",\"name\":\"Sai Patel\",\"class\":\"B\",\"comprehension\":63.4,\"attention\":65.09,\"focus\":68.18,\"retention\":57.75,\"engagement_time\":90,\"assessment_score\":61.87,\"persona\":0},{\"student_id\":\"S165\",\"name\":\"Kavya Rao\",\"class\":\"C\",\"comprehension\":98.16,\"attention\":88.95,\"focus\":85.6,\"retention\":78.33,\"engagement_time\":148,\"assessment_score\":88.21,\"persona\":1},{\"student_id\":\"S166\",\"name\":\"Dev Kapoor\",\"class\":\"C\",\"comprehension\":69.78,\"attention\":70.53,\"focus\":52.58,\"retention\":68.37,\"engagement_time\":80,\"assessment_score\":64.7,\"persona\":0},{\"student_id\":\"S167\",\"name\":\"Priya Saxena\",\"class\":\"C\",\"comprehension\":70.9,\"attention\":75.51,\"focus\":67.68,\"retention\":65.61,\"engagement_time\":84,\"assessment_score\":67.4,\"persona\":0},{\"student_id\":\"S168\",\"name\":\"Rhea Jain\",\"class\":\"B\",\"comprehension\":88.04,\"attention\":70.03,\"focus\":72.06,\"retention\":73.81,\"engagement_time\":93,\"assessment_score\":74.45,\"persona\":1},{\"student_id\":\"S169\",\"name\":\"Rajat Rout\",\"class\":\"A\",\"comprehension\":56.24,\"attention\":55.17,\"focus\":48.75,\"retention\":53.09,\"engagement_time\":98,\"assessment_score\":57.65,\"persona\":2},{\"student_id\":\"S170\",\"name\":\"Gaurav Mehta\",\"class\":\"A\",\"comprehension\":88.97,\"attention\":98.2,\"focus\":87.88,\"retention\":71.53,\"engagement_time\":74,\"assessment_score\":89.43,\"persona\":1},{\"student_id\":\"S171\",\"name\":\"Rashmi Nambiar\",\"class\":\"C\",\"comprehension\":59.43,\"attention\":57.54,\"focus\":55.91,\"retention\":59.9,\"engagement_time\":94,\"assessment_score\":63.65,\"persona\":2},{\"student_id\":\"S172\",\"name\":\"Esha Bose\",\"class\":\"A\",\"comprehension\":73.61,\"attention\":70.91,\"focus\":69.68,\"retention\":68.61,\"engagement_time\":74,\"assessment_score\":79.19,\"persona\":0},{\"student_id\":\"S173\",\"name\":\"Arya Rao\",\"class\":\"B\",\"comprehension\":78.19,\"attention\":86.73,\"focus\":73.71,\"retention\":68.23,\"engagement_time\":102,\"assessment_score\":80.28,\"persona\":1},{\"student_id\":\"S174\",\"name\":\"Nikhil Sundar\",\"class\":\"A\",\"comprehension\":65.59,\"attention\":53.58,\"focus\":56.8,\"retention\":58.41,\"engagement_time\":72,\"assessment_score\":68.63,\"persona\":2},{\"student_id\":\"S175\",\"name\":\"Zara Kumar\",\"class\":\"B\",\"comprehension\":94.17,\"attention\":72.11,\"focus\":83.67,\"retention\":84.68,\"engagement_time\":52,\"assessment_score\":74.24,\"persona\":1},{\"student_id\":\"S176\",\"name\":\"Dev Malhotra\",\"class\":\"C\",\"comprehension\":75.9,\"attention\":78.71,\"focus\":73.32,\"retention\":67.56,\"engagement_time\":96,\"assessment_score\":84.33,\"persona\":0},{\"student_id\":\"S177\",\"name\":\"Vivaan Menon\",\"class\":\"C\",\"comprehension\":75.95,\"attention\":72.43,\"focus\":46.27,\"retention\":60.57,\"engagement_time\":93,\"assessment_score\":63.44,\"persona\":0},{\"student_id\":\"S178\",\"name\":\"Hritik Rao\",\"class\":\"A\",\"comprehension\":72.15,\"attention\":64.62,\"focus\":71.79,\"retention\":68.84,\"engagement_time\":76,\"assessment_score\":65.83,\"persona\":0},{\"student_id\":\"S179\",\"name\":\"Yash Prasad\",\"class\":\"C\",\"comprehension\":73.08,\"attention\":72.97,\"focus\":72.62,\"retention\":71.68,\"engagement_time\":79,\"assessment_score\":70.18,\"persona\":0},{\"student_id\":\"S180\",\"name\":\"Arya Bhattacharya\",\"class\":\"B\",\"comprehension\":70.09,\"attention\":58.03,\"focus\":54.2,\"retention\":63.35,\"engagement_time\":61,\"assessment_score\":58.3,\"persona\":2},{\"student_id\":\"S181\",\"name\":\"Rhea Reddy\",\"class\":\"A\",\"comprehension\":78.41,\"attention\":75.5,\"focus\":77.36,\"retention\":65.95,\"engagement_time\":108,\"assessment_score\":75.34,\"persona\":1},{\"student_id\":\"S182\",\"name\":\"Kabir Bhatt\",\"class\":\"B\",\"comprehension\":37.68,\"attention\":58.66,\"focus\":44.65,\"retention\":41.09,\"engagement_time\":95,\"assessment_score\":45.63,\"persona\":2},{\"student_id\":\"S183\",\"name\":\"Milan Rana\",\"class\":\"B\",\"comprehension\":59.15,\"attention\":55.6,\"focus\":54.17,\"retention\":50.86,\"engagement_time\":65,\"assessment_score\":58.47,\"persona\":2},{\"student_id\":\"S184\",\"name\":\"Varun Bhandari\",\"class\":\"A\",\"comprehension\":50.5,\"attention\":52.32,\"focus\":39.69,\"retention\":46.11,\"engagement_time\":63,\"assessment_score\":44.67,\"persona\":2},{\"student_id\":\"S185\",\"name\":\"Rhea Khan\",\"class\":\"B\",\"comprehension\":87.42,\"attention\":88.72,\"focus\":83.39,\"retention\":82.38,\"engagement_time\":98,\"assessment_score\":87.41,\"persona\":1},{\"student_id\":\"S186\",\"name\":\"Kabir Rao\",\"class\":\"A\",\"comprehension\":85.96,\"attention\":89.39,\"focus\":74.57,\"retention\":75.25,\"engagement_time\":144,\"assessment_score\":91.88,\"persona\":1},{\"student_id\":\"S187\",\"name\":\"Ankit Mishra\",\"class\":\"A\",\"comprehension\":81.73,\"attention\":69.06,\"focus\":75.85,\"retention\":73.39,\"engagement_time\":102,\"assessment_score\":72.44,\"persona\":1},{\"student_id\":\"S188\",\"name\":\"Ritika Rao\",\"class\":\"B\",\"comprehension\":54.37,\"attention\":54.4,\"focus\":52.78,\"retention\":61.96,\"engagement_time\":62,\"assessment_score\":57.92,\"persona\":2},{\"student_id\":\"S189\",\"name\":\"Arjun Ahuja\",\"class\":\"A\",\"comprehension\":98.17,\"attention\":76.28,\"focus\":81.6,\"retention\":83.39,\"engagement_time\":107,\"assessment_score\":86.28,\"persona\":1},{\"student_id\":\"S190\",\"name\":\"Tanvi Sood\",\"class\":\"B\",\"comprehension\":55.96,\"attention\":56.79,\"focus\":63.58,\"retention\":50.13,\"engagement_time\":56,\"assessment_score\":66.31,\"persona\":2},{\"student_id\":\"S191\",\"name\":\"Shreya Patel\",\"class\":\"B\",\"comprehension\":84.43,\"attention\":72.62,\"focus\":58.52,\"retention\":58.89,\"engagement_time\":100,\"assessment_score\":67.67,\"persona\":0},{\"student_id\":\"S192\",\"name\":\"Akash Kohli\",\"class\":\"B\",\"comprehension\":70.3,\"attention\":61.51,\"focus\":72.02,\"retention\":70.14,\"engagement_time\":121,\"assessment_score\":73.1,\"persona\":0},{\"student_id\":\"S193\",\"name\":\"Kunal Mendiratta\",\"class\":\"C\",\"comprehension\":72.58,\"attention\":65.33,\"focus\":74.9,\"retention\":71.3,\"engagement_time\":123,\"assessment_score\":63.6,\"persona\":0},{\"student_id\":\"S194\",\"name\":\"Adil Sundar\",\"class\":\"C\",\"comprehension\":83.3,\"attention\":77.1,\"focus\":58.12,\"retention\":65.71,\"engagement_time\":106,\"assessment_score\":70.12,\"persona\":0},{\"student_id\":\"S195\",\"name\":\"Priya Chatterjee\",\"class\":\"B\",\"comprehension\":74.33,\"attention\":75.82,\"focus\":78.03,\"retention\":78.3,\"engagement_time\":79,\"assessment_score\":75.78,\"persona\":1},{\"student_id\":\"S196\",\"name\":\"Vihaan Nambiar\",\"class\":\"B\",\"comprehension\":77.28,\"attention\":69.96,\"focus\":50.0,\"retention\":69.81,\"engagement_time\":60,\"assessment_score\":71.8,\"persona\":0},{\"student_id\":\"S197\",\"name\":\"Ansh Verma\",\"class\":\"A\",\"comprehension\":78.91,\"attention\":64.7,\"focus\":78.39,\"retention\":66.88,\"engagement_time\":63,\"assessment_score\":62.98,\"persona\":0},{\"student_id\":\"S198\",\"name\":\"Meera Rao\",\"class\":\"B\",\"comprehension\":67.4,\"attention\":82.65,\"focus\":77.52,\"retention\":58.94,\"engagement_time\":30,\"assessment_score\":71.95,\"persona\":0},{\"student_id\":\"S199\",\"name\":\"Akash Rao\",\"class\":\"B\",\"comprehension\":74.44,\"attention\":63.49,\"focus\":75.21,\"retention\":66.77,\"engagement_time\":104,\"assessment_score\":69.43,\"persona\":0},{\"student_id\":\"S200\",\"name\":\"Ananya Lal\",\"class\":\"A\",\"comprehension\":82.22,\"attention\":72.3,\"focus\":50.22,\"retention\":66.44,\"engagement_time\":88,\"assessment_score\":60.59,\"persona\":0}]"));}),
"[project]/cognitive-dashboard/data/persona_profiles.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"0\":{\"comprehension\":71.9973404255,\"attention\":68.5612765957,\"focus\":65.3531914894,\"retention\":65.1304255319,\"engagement_time\":87.1170212766,\"assessment_score\":67.4514893617},\"1\":{\"comprehension\":87.03375,\"attention\":81.7289583333,\"focus\":77.98375,\"retention\":77.4135416667,\"engagement_time\":96.6875,\"assessment_score\":80.5214583333},\"2\":{\"comprehension\":56.4698275862,\"attention\":53.8755172414,\"focus\":51.2715517241,\"retention\":53.5294827586,\"engagement_time\":79.8620689655,\"assessment_score\":54.2268965517}}"));}),
"[project]/cognitive-dashboard/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$OverviewStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/app/components/OverviewStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$SkillBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/app/components/SkillBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$AttentionScatter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/app/components/AttentionScatter.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/PersonaRadar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$StudentTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/app/components/StudentTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$Insights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/app/components/Insights.tsx [app-client] (ecmascript)");
// ✅ Import JSON files
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$metrics$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/data/metrics.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$students_with_persona$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/data/students_with_persona.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$persona_profiles$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cognitive-dashboard/data/persona_profiles.json (json)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Convert JSON objects to arrays
const studentData = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$students_with_persona$2e$json__$28$json$29$__["default"]);
const personaData = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$persona_profiles$2e$json__$28$json$29$__["default"]);
const metricsArray = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$data$2f$metrics$2e$json__$28$json$29$__["default"]); // convert object → array
const avgMetrics = {
    comprehension: studentData.reduce((sum, s)=>sum + s.comprehension, 0) / studentData.length,
    attention: studentData.reduce((sum, s)=>sum + s.attention, 0) / studentData.length,
    focus: studentData.reduce((sum, s)=>sum + s.focus, 0) / studentData.length,
    retention: studentData.reduce((sum, s)=>sum + s.retention, 0) / studentData.length
};
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Cognitive Skills & Student Performance Dashboard"
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$OverviewStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: [
                    avgMetrics
                ]
            }, void 0, false, {
                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-2 p-4 bg-white rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-3",
                                children: "Skill vs Assessment Score"
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$SkillBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: studentData
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-3",
                                children: "Persona Profiles (Radar)"
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            personaData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonaRadar, {
                                profiles: personaData
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "No persona profiles available"
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-3",
                                children: "Attention vs Assessment"
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$AttentionScatter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: studentData
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-3",
                                children: "Insights"
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$Insights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: studentData
                            }, void 0, false, {
                                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 bg-white rounded-2xl shadow mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-3",
                        children: "Students"
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cognitive$2d$dashboard$2f$app$2f$components$2f$StudentTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: studentData
                    }, void 0, false, {
                        fileName: "[project]/cognitive-dashboard/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cognitive-dashboard/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cognitive-dashboard/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cognitive-dashboard_94ef677b._.js.map