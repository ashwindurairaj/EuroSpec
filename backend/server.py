import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAIL_HOST = os.getenv("MAIL_HOST", "smtp.gmail.com")
MAIL_PORT = int(os.getenv("MAIL_PORT", "587"))
MAIL_USER = os.getenv("MAIL_USER", "")
MAIL_PASS = os.getenv("MAIL_PASS", "")
MAIL_TO = os.getenv("MAIL_TO", "ashwinviyan@gmail.com")

class ContactForm(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    subject: str
    message: str

def send_email(to_email: str, subject: str, html_content: str, attachments: list = None):
    """Send email using SMTP"""
    if not MAIL_USER or not MAIL_PASS:
        print(f"Email would be sent to: {to_email}")
        print(f"Subject: {subject}")
        print(f"Content: {html_content}")
        return True
    
    try:
        msg = MIMEMultipart()
        msg['From'] = MAIL_USER
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(html_content, 'html'))
        
        if attachments:
            for attachment in attachments:
                part = MIMEBase('application', 'octet-stream')
                part.set_payload(attachment['content'])
                encoders.encode_base64(part)
                part.add_header('Content-Disposition', f'attachment; filename="{attachment["filename"]}"')
                msg.attach(part)
        
        server = smtplib.SMTP(MAIL_HOST, MAIL_PORT)
        server.starttls()
        server.login(MAIL_USER, MAIL_PASS)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False

@app.get("/api/health")
async def health():
    return {"status": "ok", "message": "Server is running"}

@app.post("/api/contact")
async def contact(form: ContactForm):
    html_content = f"""
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.name}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.email}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.company or 'N/A'}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.phone or 'N/A'}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Subject:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.subject}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{form.message}</td></tr>
    </table>
    """
    
    success = send_email(MAIL_TO, f"Contact Form: {form.subject}", html_content)
    
    if success:
        return {"success": True, "message": "Message sent successfully"}
    else:
        return {"success": True, "message": "Message received (email delivery pending)"}

@app.post("/api/apply")
async def apply(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    role: str = Form(...),
    experience: str = Form(...),
    resume: Optional[UploadFile] = File(None)
):
    html_content = f"""
    <h2>New Job Application</h2>
    <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Position:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{role}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{name}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{email}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{phone}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Experience:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">{experience}</td></tr>
    </table>
    <p style="margin-top: 20px;"><em>Resume attached below.</em></p>
    """
    
    attachments = []
    if resume:
        content = await resume.read()
        attachments.append({
            "filename": resume.filename,
            "content": content
        })
    
    success = send_email(MAIL_TO, f"Job Application: {role}", html_content, attachments)
    
    if success:
        return {"success": True, "message": "Application submitted successfully"}
    else:
        return {"success": True, "message": "Application received (email delivery pending)"}
