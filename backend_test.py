import requests
import sys
import json
from datetime import datetime
import io

class NorthAmericanMetalsAPITester:
    def __init__(self, base_url="https://91816b18-72ce-44c3-b9bb-cf84e832cedf.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, files=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                if files:
                    response = requests.post(url, data=data, files=files, timeout=10)
                elif data:
                    headers['Content-Type'] = 'application/json'
                    response = requests.post(url, json=data, headers=headers, timeout=10)
                else:
                    response = requests.post(url, headers=headers, timeout=10)

            print(f"   Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text}")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text
                })
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )

    def test_contact_form(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "phone": "(555) 123-4567",
            "subject": "Test Inquiry",
            "message": "This is a test message from the automated test suite."
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )

    def test_job_application(self):
        """Test job application submission with file upload"""
        # Create a mock resume file
        resume_content = b"Mock Resume Content - John Doe\nExperience: 5 years in automotive manufacturing"
        
        form_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "(555) 987-6543",
            "role": "Senior Tooling Engineer",
            "experience": "5-10"
        }
        
        files = {
            "resume": ("resume.txt", io.BytesIO(resume_content), "text/plain")
        }
        
        return self.run_test(
            "Job Application with Resume",
            "POST",
            "api/apply",
            200,
            data=form_data,
            files=files
        )

    def test_job_application_without_resume(self):
        """Test job application submission without resume"""
        form_data = {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "phone": "(555) 456-7890",
            "role": "CNC Machinist",
            "experience": "3-5"
        }
        
        # Use files parameter but with empty resume
        files = {}
        
        return self.run_test(
            "Job Application without Resume",
            "POST",
            "api/apply",
            200,
            data=form_data,
            files=files
        )

def main():
    print("🚀 Starting North American Metals API Testing...")
    print("=" * 60)
    
    # Setup
    tester = NorthAmericanMetalsAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Test health endpoint
    tester.test_health_endpoint()
    
    # Test contact form
    tester.test_contact_form()
    
    # Test job applications
    tester.test_job_application()
    tester.test_job_application_without_resume()
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"   - {failure.get('test', 'Unknown')}: {failure}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())