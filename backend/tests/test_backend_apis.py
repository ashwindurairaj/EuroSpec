"""Backend API tests for Eurospec marketing site."""
import os
import io
import pytest
import requests

BASE_URL = os.environ.get("VITE_API_URL") or "https://metalworks-hub-12.preview.emergentagent.com"
BASE_URL = BASE_URL.rstrip("/")


class TestHealth:
    def test_health_endpoint(self):
        r = requests.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        body = r.json()
        assert body.get("status") == "ok"


class TestContact:
    def test_contact_success(self):
        payload = {
            "name": "TEST_user",
            "email": "test@example.com",
            "company": "TEST_co",
            "phone": "5551234567",
            "subject": "Inquiry",
            "message": "Hello from TEST_",
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 200
        body = r.json()
        assert body.get("success") is True
        assert "message" in body

    def test_contact_minimal_required(self):
        payload = {
            "name": "TEST_min",
            "email": "min@test.com",
            "subject": "Hi",
            "message": "Hi message",
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 200
        assert r.json().get("success") is True

    def test_contact_validation_missing_fields(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "x"}, timeout=20)
        assert r.status_code == 422


class TestApply:
    def test_apply_without_resume(self):
        data = {
            "name": "TEST_apply",
            "email": "apply@test.com",
            "phone": "5551111111",
            "role": "Tooling Engineer",
            "experience": "3-5",
        }
        r = requests.post(f"{BASE_URL}/api/apply", data=data, timeout=20)
        assert r.status_code == 200
        body = r.json()
        assert body.get("success") is True

    def test_apply_with_resume(self):
        data = {
            "name": "TEST_apply_r",
            "email": "apply2@test.com",
            "phone": "5552222222",
            "role": "Quality Engineer",
            "experience": "1-3",
        }
        files = {"resume": ("resume.pdf", io.BytesIO(b"%PDF-1.4 dummy"), "application/pdf")}
        r = requests.post(f"{BASE_URL}/api/apply", data=data, files=files, timeout=30)
        assert r.status_code == 200
        body = r.json()
        assert body.get("success") is True

    def test_apply_validation_missing_fields(self):
        r = requests.post(f"{BASE_URL}/api/apply", data={"name": "x"}, timeout=20)
        assert r.status_code == 422
