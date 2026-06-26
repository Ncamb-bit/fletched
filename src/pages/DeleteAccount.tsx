import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const DeleteAccount: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Delete Your <span className="text-primary">Fletched</span> Account
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            This page explains how to delete your Fletched account and the data associated with it.
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Option 1 — Delete in the app (immediate)
              </h2>
              <div className="rounded-2xl border border-primary/10 bg-slate-50 dark:bg-slate-900/40 p-6">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the <strong>Fletched</strong> app and sign in.</li>
                  <li>Tap the <strong>Profile</strong> button (top-right) to open <strong>Account</strong>.</li>
                  <li>Scroll to <strong>Delete Account</strong> and confirm.</li>
                </ol>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 mb-0">
                  Your account and associated data are removed right away.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Option 2 — Request by email
              </h2>
              <div className="rounded-2xl border border-primary/10 bg-slate-50 dark:bg-slate-900/40 p-6">
                <p className="mb-0">
                  Email{' '}
                  <a
                    href="mailto:info@fletchedapp.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    info@fletchedapp.com
                  </a>{' '}
                  from the address on your account with the subject{' '}
                  <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-sm">
                    Delete my account
                  </code>
                  . We verify ownership and delete your data within{' '}
                  <strong>30 days</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                What gets deleted
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your account and login credentials</li>
                <li>Email address, name, and username</li>
                <li>Bow and arrow gear profiles</li>
                <li>Hunt logs, range sessions, and shot history</li>
                <li>Profile and in-app activity tied to your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                What may be retained
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Records we are required to keep for legal, tax, or fraud-prevention purposes,
                  retained only as long as the law requires, then deleted.
                </li>
                <li>
                  For email requests, data may persist for up to <strong>30 days</strong> while we
                  process the request, after which it is permanently removed.
                </li>
              </ul>
            </section>

            <section>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                You can also delete individual gear profiles in the app at any time without deleting
                your whole account. Questions? Contact{' '}
                <a
                  href="mailto:info@fletchedapp.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@fletchedapp.com
                </a>
                .
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DeleteAccount;
