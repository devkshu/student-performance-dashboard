📊 Cognitive Skills & Student Performance Dashboard

🚀 Project Overview

This project analyzes student cognitive skills and assessment performance using data analysis + machine learning (Jupyter Notebook) and presents the insights in an interactive Next.js dashboard.


📂 Deliverables

📓 Jupyter Notebook → Data analysis & ML models

📊 Next.js Dashboard → Interactive visualizations & student table

🌍 Vercel Deployment → Live Dashboard Link

💻 GitHub Repo → Full project source code

📁 Repository Structure
project-root/
│── data/                     # JSON datasets (students, persona, metrics)
│── notebooks/
│   └── student_analysis.ipynb        # Jupyter Notebook with analysis + ML
│── dashboard/                # Next.js app (frontend dashboard)
│   ├── app/...
│   └── package.json
│── requirements.txt          # Python dependencies for notebook
│── README.md


📊 Dashboard Features

Overview Stats → Avg score + avg skills (comprehension, attention, focus, retention)

Charts →

📉 Bar: Skill vs. Score

🔵 Scatter: Attention vs. Performance

🕸️ Radar: Student profiles

Table → Detailed student records

Insights → Key findings 

🔎 Key Findings:

- Average assessment score is 66.75
- Median score is 65.78
- Highest score: Priya Nambiar (95.08)
- Lowest score: Maya Shetty (37.56)
- 94 students scored above average, 106 scored below average
- Score range is 57.52 points
- Score consistency (Std. Deviation): 11.62
- Top performers: Priya Nambiar (95.08), Zara Sharma (94.15), Kabir Rao (91.88)
- Lowest performers: Maya Shetty (37.56), Arya Naik (43.35), Ankit Gulati (44.58)

🌐 Deployment

git-hub deployment: https://github.com/devkshu/student-performance-dashboard/
dashboard deployment: https://student-performance-dashboard-alpha.vercel.app

🛠️ Tech Stack

Frontend: Next.js, TailwindCSS, Recharts

Data Analysis & ML: Python, Pandas, Scikit-learn, Matplotlib

Deployment: Vercel (for dashboard), GitHub (for repo)
