import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

// ⬇️ Tambahan: Toaster dari shadcn sonner
import { Toaster } from '@/components/ui/sonner';

// This will set light / dark mode on load...
initializeTheme();

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <StrictMode>
        <App {...props} />
        {/* ⬇️ Tambahkan Toaster di sini, aktif di semua halaman */}
        <Toaster
          position="top-right"   // pop-up di kanan atas, stack ke bawah
          richColors
          closeButton
          duration={5000}        // auto-dismiss 5 detik
        />
      </StrictMode>,
    );
  },
  progress: {
    color: '#4B5563',
  },
});