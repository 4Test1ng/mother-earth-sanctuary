import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent transition-smooth mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-full">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-heading text-4xl font-bold text-foreground">
                Terms of Service
              </h1>
            </div>
            <p className="font-body text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-8 font-body text-muted-foreground">
              
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Mother Earth Yoga Sanctuary's services, you accept and agree to be bound by 
                  the terms and provision of this agreement. These Terms of Service govern your use of our wellness 
                  services, website, and facilities.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Services Description</h2>
                <p className="leading-relaxed mb-4">
                  Mother Earth Yoga Sanctuary provides wellness services including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Therapeutic massage therapy (Deep tissue, Thai yoga, Reflexology)</li>
                  <li>Yoga classes and private sessions</li>
                  <li>Wellness retreats and workshops</li>
                  <li>Holistic health consultations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Booking and Payment</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Appointments</h3>
                <p className="leading-relaxed mb-4">
                  All appointments must be booked in advance. We require 24-hour notice for cancellations to avoid charges.
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Payment</h3>
                <p className="leading-relaxed mb-4">
                  Payment is due at the time of service unless other arrangements have been made. We accept cash and mobile money payments.
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Cancellation Policy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>24+ hours notice: No charge</li>
                  <li>12-24 hours notice: 50% of service fee</li>
                  <li>Less than 12 hours: Full service fee</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Health and Safety</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Health Disclosure</h3>
                <p className="leading-relaxed mb-4">
                  Clients must disclose all relevant health conditions, injuries, medications, and allergies before treatment.
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Medical Advice</h3>
                <p className="leading-relaxed mb-4">
                  Our services are not a substitute for medical care. Clients should consult healthcare providers for medical conditions.
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Contraindications</h3>
                <p className="leading-relaxed">
                  We may refuse service if we determine it could be harmful to your health or well-being.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Arrive on time for scheduled appointments</li>
                  <li>Communicate any discomfort during treatment</li>
                  <li>Respect our therapists and other clients</li>
                  <li>Maintain personal hygiene standards</li>
                  <li>Follow facility rules and guidelines</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Liability and Indemnification</h2>
                <p className="leading-relaxed mb-4">
                  Clients participate in our services at their own risk. Mother Earth Yoga Sanctuary is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Injuries resulting from failure to disclose health conditions</li>
                  <li>Adverse reactions to treatments</li>
                  <li>Personal property loss or damage</li>
                  <li>Consequences of not following aftercare instructions</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Privacy and Confidentiality</h2>
                <p className="leading-relaxed">
                  We maintain strict confidentiality of all client information and health records in accordance with 
                  professional standards and our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Professional Conduct</h2>
                <p className="leading-relaxed">
                  All treatments are conducted in a professional, therapeutic manner. Inappropriate behavior by clients 
                  will result in immediate termination of service without refund.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on our website and materials are protected by copyright. Unauthorized use is prohibited.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Modifications to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services constitutes 
                  acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="leading-relaxed">
                  These terms are governed by the laws of Ghana. Any disputes will be resolved in the appropriate 
                  courts of Ghana.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, contact us:
                </p>
                <div className="bg-card p-4 rounded-lg mt-4">
                  <p>Email: yves.urbain@gmail.com</p>
                  <p>Phone: +233 543 800 082</p>
                  <p>Address: Dzorwulu Pillar 2, Aunty Mary Street, Accra - Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-surface rounded-xl">
              <p className="font-body text-sm text-muted-foreground text-center">
                By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;