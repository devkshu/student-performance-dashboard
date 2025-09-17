📊 Cognitive Skills & Student Performance Dashboard
🚀 Project Overview

This project analyzes student cognitive skills and assessment performance using data analysis + machine learning (Jupyter Notebook) and presents the insights in an interactive Next.js dashboard.

The goal is to uncover:

Relationships between cognitive skills (attention, focus, retention, comprehension) and scores

Patterns in top vs. bottom performers

Persona-based profiles of students

📂 Deliverables

📓 Jupyter Notebook → Data analysis & ML models

📊 Next.js Dashboard → Interactive visualizations & student table

🌍 Vercel Deployment → Live Dashboard Link

💻 GitHub Repo → Full project source code

📁 Repository Structure
project-root/
│── data/                     # JSON datasets (students, persona, metrics)
│── notebooks/
│   └── analysis.ipynb        # Jupyter Notebook with analysis + ML
│── dashboard/                # Next.js app (frontend dashboard)
│   ├── app/...
│   └── package.json
│── requirements.txt          # Python dependencies for notebook
│── README.md

⚙️ Setup Instructions
1️⃣ Run Notebook (Python + Jupyter)
# clone repo
git clone https://github.com/your-username/your-repo.git
cd your-repo

# create environment (optional)
python -m venv venv
source venv/bin/activate  # (Linux/Mac)
venv\Scripts\activate     # (Windows)

# install dependencies
pip install -r requirements.txt

# run notebook
jupyter notebook notebooks/analysis.ipynb

2️⃣ Run Dashboard (Next.js)
cd dashboard
npm install
npm run dev


Then open: 👉 http://localhost:3000

📊 Dashboard Features

Overview Stats → Avg score + avg skills (comprehension, attention, focus, retention)

Charts →

📉 Bar: Skill vs. Score

🔵 Scatter: Attention vs. Performance

🕸️ Radar: Student profiles

Table → Detailed student records

Insights → Key findings (median, range, top/bottom performers, score consistency)

🔎 Key Findings (from Notebook + Dashboard)

👉 (Replace with your actual results)

Average score: XX

Median score: XX

Highest performer: Student X (score: XX)

Lowest performer: Student Y (score: XX)

Attention vs. Score correlation: XX

Personas show that students with higher retention tend to have higher scores.

🌐 Deployment

Dashboard deployed on Vercel: https://your-vercel-link.vercel.app

🛠️ Tech Stack

Frontend: Next.js, TailwindCSS, Recharts

Data Analysis & ML: Python, Pandas, Scikit-learn, Matplotlib

Deployment: Vercel (for dashboard), GitHub (for repo)