"use client"
import Layout from '../components/Layout'; // Adjust path if necessary

export default function PolicyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 ">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold mb-4">Privacy Policy for Connectify</h1>
            <p className="text-sm text-base-content/70">Last updated: August 20, 2025</p>

            <div className="prose max-w-none mt-6">
              <p>
                Welcome to Connectify. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>

              <h2 className="text-xl font-bold mt-6">1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the application, express an interest in obtaining information about us or our products and services, when you participate in activities on the application or otherwise when you contact us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the application, the choices you make and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul>
                <li><strong>Personal Information Provided by You:</strong> We collect names; email addresses; usernames; passwords; contact preferences; and other similar information.</li>
                <li><strong>Social Media Login Data:</strong> We may provide you with the option to register with us using your existing social media account details, like Google, Facebook, Twitter or other social media accounts.</li>
              </ul>

              <h2 className="text-xl font-bold mt-6">2. How We Use Your Information</h2>
              <p>
                We use personal information collected via our application for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>

              <h2 className="text-xl font-bold mt-6">3. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
              </p>

              <h2 className="text-xl font-bold mt-6">4. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h2 className="text-xl font-bold mt-6">5. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated “Last updated” date and the updated version will be effective as soon as it is accessible.
              </p>

              <h2 className="text-xl font-bold mt-6">6. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at policy@connectify.demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}