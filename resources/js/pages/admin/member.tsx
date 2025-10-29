// resources/js/pages/dashboard.tsx
import { DataTableDemo } from '@/components/admin/content/table-member';
import AppLayout from '@/layouts/app-layout';
export default function Dashboard() {
    return (
        <div>
            <DataTableDemo />
        </div>
    );
}

// <-- pasang layout di property komponen:
(Dashboard as any).layout = (page: React.ReactNode) => (
    <AppLayout
        title="Member"
        breadcrumb={[
            { label: 'Dashboard', href: '/dashboard' }, // ← link crumb pertama
            { label: 'Member' }, // ← crumb aktif (non-link)
        ]}
    >
        {page}
    </AppLayout>
);
