import { useState } from 'react';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { SectionTitle } from '../components/Common/SectionTitle';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Tooling Engineer',
    department: 'Engineering',
    location: 'Newmarket, Ontario',
    type: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'We are seeking an experienced Senior Tooling Engineer to lead the design and development of progressive and transfer dies for automotive stamping applications.',
    responsibilities: [
      'Lead the design and development of progressive and transfer dies',
      'Conduct forming simulations using LS DynaForm and FTI software',
      'Collaborate with customers on design requirements and specifications',
      'Mentor junior engineers and provide technical guidance',
      'Ensure designs meet IATF 16949 quality standards',
    ],
    requirements: [
      'Bachelor\'s degree in Mechanical Engineering or related field',
      '7+ years of experience in die design for automotive stamping',
      'Proficiency in CATIA V5, NX, or SolidWorks',
      'Experience with forming simulation software',
      'Strong knowledge of HSLA and Dual Phase materials',
    ],
  },
  {
    id: 2,
    title: 'CNC Machinist',
    department: 'Manufacturing',
    location: 'Newmarket, Ontario',
    type: 'Full-time',
    salary: '$55,000 - $75,000',
    description: 'Join our skilled manufacturing team as a CNC Machinist, operating and programming advanced CNC equipment for precision die components.',
    responsibilities: [
      'Set up and operate CNC milling and turning machines',
      'Read and interpret engineering drawings and specifications',
      'Perform routine maintenance on CNC equipment',
      'Inspect finished parts using precision measuring instruments',
      'Maintain production records and quality documentation',
    ],
    requirements: [
      'Certificate in CNC Machining or equivalent experience',
      '3+ years of experience operating CNC equipment',
      'Proficiency in Mastercam or similar CAM software',
      'Ability to read and interpret GD&T',
      'Experience with tool steels and hardened materials',
    ],
  },
  {
    id: 3,
    title: 'Quality Control Manager',
    department: 'Quality Assurance',
    location: 'Newmarket, Ontario',
    type: 'Full-time',
    salary: '$75,000 - $95,000',
    description: 'Lead our quality assurance team in maintaining IATF 16949 certification and ensuring world-class quality for all products.',
    responsibilities: [
      'Manage quality control team and daily QC operations',
      'Maintain IATF 16949 certification and compliance',
      'Develop and implement quality improvement initiatives',
      'Lead customer audits and corrective action processes',
      'Oversee CMM inspection and metrology operations',
    ],
    requirements: [
      'Bachelor\'s degree in Engineering or Quality Management',
      '5+ years of quality management experience in automotive manufacturing',
      'Certified Quality Engineer (CQE) or similar certification preferred',
      'Expert knowledge of IATF 16949 and ISO standards',
      'Experience with statistical process control (SPC)',
    ],
  },
  {
    id: 4,
    title: 'Robotic Welder Operator',
    department: 'Manufacturing',
    location: 'Newmarket, Ontario',
    type: 'Full-time',
    salary: '$50,000 - $65,000',
    description: 'Operate and maintain robotic MIG welding systems for high-volume automotive assembly production.',
    responsibilities: [
      'Operate robotic MIG welding equipment',
      'Perform routine maintenance and troubleshooting',
      'Conduct visual and destructive weld inspections',
      'Load/unload parts and monitor production quality',
      'Document production data and quality records',
    ],
    requirements: [
      'Welding certification (CWB or equivalent)',
      '2+ years of robotic welding experience',
      'Knowledge of MIG welding processes',
      'Ability to read welding symbols and specifications',
      'Experience with weld inspection techniques',
    ],
  },
  {
    id: 5,
    title: 'CAD Designer',
    department: 'Engineering',
    location: 'Newmarket, Ontario',
    type: 'Full-time',
    salary: '$60,000 - $80,000',
    description: 'Create detailed 3D models and 2D drawings for tooling designs using CATIA and NX software.',
    responsibilities: [
      'Create 3D models and 2D engineering drawings',
      'Support tooling engineers with design documentation',
      'Maintain CAD standards and file management',
      'Collaborate with manufacturing on design for manufacturability',
      'Update drawings based on engineering changes',
    ],
    requirements: [
      'Diploma in Mechanical Design or equivalent',
      '3+ years of CAD design experience',
      'Proficiency in CATIA V5 or NX',
      'Knowledge of GD&T and drawing standards',
      'Experience with automotive tooling preferred',
    ],
  },
];

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    resume: null,
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, role: job.title }));
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Job Application Submitted:', {
      ...formData,
      resume: formData.resume ? formData.resume.name : null,
    });
    
    // Show success toast
    toast.success('Application Submitted!', {
      description: `Thank you for applying for ${formData.role}. We'll be in touch soon.`,
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      experience: '',
      resume: null,
    });
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen" data-testid="careers-page">
      <Header />
      <main>
        <PageBanner 
          title="Careers"
          subtitle="Join our team of industry-leading professionals"
          backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
        />
        
        {/* Why Join Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Why Join Eurospec?"
              subtitle="Be part of a team that's shaping the future of automotive manufacturing"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Career Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Opportunities for advancement and professional development in a growing company.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Competitive Benefits</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive benefits package including health, dental, and retirement plans.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Work-Life Balance</h3>
                  <p className="text-muted-foreground text-sm">
                    Flexible scheduling options and paid time off to maintain a healthy balance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Open Positions"
              subtitle="Explore our current job opportunities"
            />
            
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card 
                  key={job.id} 
                  className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`job-card-${job.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-3 line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                      <Button 
                        onClick={() => handleApply(job)}
                        className="bg-accent hover:bg-accent-hover text-white px-8"
                        data-testid={`apply-btn-${job.id}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="apply-modal">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">
                Apply for {selectedJob?.title}
              </DialogTitle>
              <DialogDescription>
                Fill out the form below to submit your application.
              </DialogDescription>
            </DialogHeader>
            
            {selectedJob && (
              <div className="mb-6 p-4 bg-slate-50 rounded-md">
                <h4 className="font-semibold text-primary mb-2">Job Description</h4>
                <p className="text-sm text-muted-foreground mb-4">{selectedJob.description}</p>
                
                <h4 className="font-semibold text-primary mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h4 className="font-semibold text-primary mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    data-testid="apply-name-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    data-testid="apply-email-input"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    data-testid="apply-phone-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select 
                    value={formData.experience} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                  >
                    <SelectTrigger data-testid="apply-experience-select">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Position Applying For</Label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  value={formData.role}
                  readOnly
                  className="bg-slate-50"
                  data-testid="apply-role-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume">Upload Resume *</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                  data-testid="apply-resume-input"
                />
                <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-hover text-white"
                data-testid="submit-application-btn"
              >
                Submit Application
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
