from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "naruto-sitanggang-cv.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#17231C")
MUTED = colors.HexColor("#667067")
LINE = colors.HexColor("#D9DED4")
ACCENT = colors.HexColor("#DE6847")
PALE = colors.HexColor("#EDF0E8")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Role", fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=INK, spaceBefore=10, spaceAfter=7))
styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=8.3, leading=12, textColor=MUTED, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="BodySmall", fontName="Helvetica", fontSize=7.7, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="ProjectTitle", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=INK))
styles.add(ParagraphStyle(name="Tag", fontName="Helvetica", fontSize=7.4, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="Label", fontName="Helvetica-Bold", fontSize=7, leading=9, textColor=ACCENT))


def para(text, style="Body"):
    return Paragraph(text, styles[style])


def draw_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 15 * mm, A4[0] - 18 * mm, 15 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "NARUTO SITANGGANG  /  SOFTWARE ENGINEERING")
    canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, f"{doc.page:02d}")
    canvas.restoreState()


doc = BaseDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=16 * mm, bottomMargin=21 * mm, title="Naruto Sitanggang - CV", author="Naruto Sitanggang")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="cv", frames=frame, onPage=draw_footer)])
story = []

header = Table(
    [[para("Naruto Sitanggang", "Name"), para("SOFTWARE ENGINEER<br/>Full-Stack &amp; DevOps", "Role")]],
    colWidths=[105 * mm, 70 * mm],
)
header.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
    ("ALIGN", (1, 0), (1, 0), "RIGHT"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ("LINEBELOW", (0, 0), (-1, -1), 0.7, LINE),
]))
story.extend([header, Spacer(1, 10)])
story.append(para("Informatics Engineering student at Institut Teknologi Sepuluh Nopember with a strong interest in Software Engineering and hands-on experience in full-stack web development and backend systems. Developed REST APIs, integrated databases and services, and deployed containerized applications through academic and real-world projects.", "Body"))
story.append(Spacer(1, 4))
story.append(para("narutositanggang@gmail.com  |  github.com/narutostg  |  linkedin.com/in/narutositanggang/", "BodySmall"))
story.append(para("SELECTED PROJECTS", "Section"))

projects = [
    ("01", "Customer Portal - PT Semen Indonesia Logistik", "DevOps and Fullstack Developer | Capstone project | 2026", "Worked across frontend, backend, database, and infrastructure. DevOps work included deployment and environment configuration with Docker on Linux servers, reverse proxy, debugging, service integration, and CI/CD-oriented workflows. Also developed and integrated REST APIs, authentication flows, backend and database services, and dynamic frontend features; integrated PostgreSQL, Redis, and object storage.", "Go, Gin, Next.js, TypeScript, PostgreSQL, Redis, Docker, Linux, MinIO, Reverse Proxy, CI/CD"),
    ("02", "Course Recommendation System", "Knowledge-Based System | Academic project", "Course recommendations using RAG and LLM components, with transcript handling, curriculum data, vector search, retrieval, and system integration.", "RAG, LLM, Python, PostgreSQL, Qdrant"),
    ("03", "Hotel Booking Web Application", "Full-stack web application", "Hotel booking with authentication, role-based access control, admin/user workflows, booking management, and relational database design.", "Full-Stack Web, Authentication, RBAC, SQL, Database Design"),
    ("04", "Web Application Penetration Testing", "Final project | NETICS 2025", "Conducted white-box analysis of web application source code to identify common vulnerabilities. Analyzed application security logs and documented findings with impact assessments and mitigation recommendations.", "Web Security, White-box Testing, Vulnerability Analysis, Security Log Analysis"),
]

for number, title, context, description, technology in projects:
    row = Table(
        [[para(number, "Label"), [para(title, "ProjectTitle"), para(context, "BodySmall"), Spacer(1, 3), para(description, "BodySmall"), Spacer(1, 3), para(f"<b>TECH</b>  {technology}", "Tag")]]],
        colWidths=[12 * mm, 163 * mm],
    )
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LINEBELOW", (0, 0), (-1, -1), 0.45, LINE),
    ]))
    story.append(KeepTogether(row))

story.append(PageBreak())
story.append(para("Technical range", "Name"))
story.append(para("SOFTWARE ENGINEERING  /  EDUCATION  /  RECOGNITION", "Role"))
story.append(Spacer(1, 13))
story.append(para("TECHNICAL SKILLS", "Section"))

skill_rows = [
    ("Software development", "Go, Python, Java, JavaScript, TypeScript, HTML, CSS"),
    ("Backend", "Gin, REST API, PostgreSQL, SQL, Redis"),
    ("Frontend", "Next.js, React, HTML, CSS, JavaScript"),
    ("DevOps & systems", "Docker, Docker Compose, Linux, Git, CI/CD, Reverse Proxy"),
    ("AI & data", "Machine Learning, Data Mining, RAG, LLM, Qdrant"),
    ("Cybersecurity", "Web Application Security, White-box Testing, Vulnerability Analysis, Wazuh"),
]
for category, content in skill_rows:
    row = Table([[para(category, "ProjectTitle"), para(content, "BodySmall")]], colWidths=[43 * mm, 132 * mm])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7), ("LINEBELOW", (0, 0), (-1, -1), .4, LINE),
    ]))
    story.append(row)

story.append(para("EDUCATION", "Section"))
education = Table([
    [para("2023 - Present", "Label"), [para("Institut Teknologi Sepuluh Nopember", "ProjectTitle"), para("Bachelor of Informatics Engineering", "BodySmall"), para("GPA: 3.50 / 4.00", "BodySmall")]],
    [para("COURSEWORK", "Label"), para("Data Structures, Object-Oriented Programming, Database Systems, Web Programming, Software Design, Operating Systems, Machine Learning, Data Mining", "BodySmall")],
], colWidths=[31 * mm, 144 * mm])
education.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 8), ("LINEBELOW", (0, 0), (-1, -1), .4, LINE),
]))
story.append(education)

story.append(para("RECOGNITION & CERTIFICATIONS", "Section"))
recognition = Table([
    [para("RECOGNITION", "Label"), para("2nd Place - Data Mining Competition, Quadrathlon, Informatics Engineering ITS<br/>Best Algorithm Award, Intelligent Computing and Vision Lab Final Project", "BodySmall")],
    [para("AWS ACADEMY", "Label"), para("Machine Learning, AI Foundations, Data Engineering, Security Foundations", "BodySmall")],
    [para("PALO ALTO NETWORKS", "Label"), para("CyberOps, Security Foundations", "BodySmall")],
], colWidths=[35 * mm, 140 * mm])
recognition.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 6),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7), ("LINEBELOW", (0, 0), (-1, -1), .4, LINE),
]))
story.append(recognition)

doc.build(story)
print(OUTPUT)
