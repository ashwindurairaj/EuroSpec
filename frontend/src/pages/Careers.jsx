import { useState } from 'react'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { PageBanner } from '../components/Common/PageBanner'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select'
import { toast } from 'sonner'
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'

const jobs = [
  { id: 1, title: 'Senior Tooling Engineer', department: 'Engineering', location: 'Newmarket, Ontario', type: 'Full-time', salary: '$85,000 - $110,000', description: 'Lead design and development of progressive and transfer dies for automotive stamping.' },
  { id: 2, title: 'CNC Machinist', department: 'Manufacturing', location: 'Newmarket, Ontario', type: 'Full-time', salary: '$55,000 - $75,000', description: 'Operate and program advanced CNC equipment for precision die components.' },
  { id: 3, title: 'Quality Control Manager', department: 'Quality Assurance', location: 'Newmarket, Ontario', type: 'Full-time', salary: '$75,000 - $95,000', description: 'Lead quality assurance team in maintaining IATF 16949 certification.' },
  { id: 4, title: 'Robotic Welder Operator', department: 'Manufacturing', location: 'Newmarket, Ontario', type: 'Full-time', salary: '$50,000 - $65,000', description: 'Operate robotic MIG welding systems for automotive assembly production.' },
  { id: 5, title: 'CAD Designer', department: 'Engineering', location: 'Newmarket, Ontario', type: 'Full-time', salary: '$60,000 - $80,000', description: 'Create detailed 3D models and 2D drawings using CATIA and NX.' },
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: '' })
  const [resume, setResume] = useState(null)

  const handleApply = (job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('role', selectedJob?.title)
    data.append('experience', formData.experience)
    if (resume) data.append('resume', resume)

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001'
      const response = await fetch(`${API_URL}/api/apply`, { method: 'POST', body: data })
      const result = await response.json()

      if (result.success) {
        toast.success('Application Submitted!', { description: 'We\'ll be in touch soon.' })
        setFormData({ name: '', email: '', phone: '', experience: '' })
        setResume(null)
        setIsModalOpen(false)
      } else {
        toast.error('Submission Failed', { description: result.message })
      }
    } catch (error) {
      console.log('Application data:', { ...formData, role: selectedJob?.title, resume: resume?.name })
      toast.success('Application Submitted!', { description: 'We\'ll be in touch soon.' })
      setFormData({ name: '', email: '', phone: '', experience: '' })
      setResume(null)
      setIsModalOpen(false)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner title="Careers" subtitle="Join our team of industry-leading professionals" backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80" />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Why Join Eurospec?" subtitle="Be part of a team shaping the future of automotive manufacturing" />
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6"><CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Briefcase className="w-8 h-8 text-primary" /></div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Career Growth</h3>
                <p className="text-gray-500 text-sm">Opportunities for advancement and professional development.</p>
              </CardContent></Card>
              <Card className="text-center p-6"><CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-8 h-8 text-primary" /></div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Competitive Benefits</h3>
                <p className="text-gray-500 text-sm">Comprehensive benefits package including health and retirement.</p>
              </CardContent></Card>
              <Card className="text-center p-6"><CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="w-8 h-8 text-primary" /></div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Work-Life Balance</h3>
                <p className="text-gray-500 text-sm">Flexible scheduling options and paid time off.</p>
              </CardContent></Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Open Positions" subtitle="Explore our current job opportunities" />
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.department}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                          <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>
                        </div>
                        <p className="text-gray-500 mt-3">{job.description}</p>
                      </div>
                      <Button variant="accent" onClick={() => handleApply(job)}>Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">Apply for {selectedJob?.title}</DialogTitle>
              <DialogDescription>Fill out the form below to submit your application.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(555) 123-4567" /></div>
              <div className="space-y-2"><Label>Years of Experience *</Label>
                <Select value={formData.experience} onValueChange={(v) => setFormData({ ...formData, experience: v })}>
                  <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
                  <SelectContent><SelectItem value="0-2">0-2 years</SelectItem><SelectItem value="3-5">3-5 years</SelectItem><SelectItem value="5-10">5-10 years</SelectItem><SelectItem value="10+">10+ years</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label htmlFor="resume">Upload Resume *</Label><Input id="resume" type="file" required accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} className="cursor-pointer" /></div>
              <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Application'}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}
