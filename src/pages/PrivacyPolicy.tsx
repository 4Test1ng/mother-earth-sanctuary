import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <div className="p-3 bg-teal/10 rounded-full">
                <Shield className="h-8 w-8 text-teal" />
              </div>
              <h1 className="font-heading text-4xl font-bold text-foreground">
                Privacy Policy
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
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="space-y-8 font-body text-muted-foreground">
              
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  At Mother Earth Yoga Sanctuary ("we," "our," or "us"), we are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                <p className="leading-relaxed mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Health information relevant to our services</li>
                  <li>Payment information for booking services</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our wellness services</li>
                  <li>Process bookings and payments</li>
                  <li>Send appointment confirmations and reminders</li>
                  <li>Communicate about our services and special offers</li>
                  <li>Ensure the safety and effectiveness of treatments</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without 
                  your consent, except as described in this policy. We may share information with trusted service 
                  providers who assist us in operating our business, provided they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  Our website may use cookies to enhance user experience. You can choose to disable cookies through 
                  your browser settings, though this may affect website functionality.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-card p-4 rounded-lg mt-4">
                  <p>Email: yves.urbain@gmail.com</p>
                  <p>Phone: +233 543 800 082</p>
                  <p>Address: Dzorwulu Pillar 2, Aunty Mary Street, Accra - Ghana</p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page with an updated "Last updated" date.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-surface rounded-xl">
              <p className="font-body text-sm text-muted-foreground text-center">
                By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;