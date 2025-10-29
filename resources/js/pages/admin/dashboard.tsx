// resources/js/pages/dashboard.tsx
import {
    NewestMember,
    StatusCards,
    SummaryCards,
} from '@/components/admin/content/dashboard-content';
import AppLayout from '@/layouts/app-layout';
export default function Dashboard() {
    return (
        <div>
            <div>
                <SummaryCards />
            </div>
            <div>
                <StatusCards />
            </div>
            <div>
                <NewestMember />
            </div>
        </div>
    );
}

// <-- pasang layout di property komponen:
(Dashboard as any).layout = (page: React.ReactNode) => (
    <AppLayout
        title="Dashboard"
        breadcrumb={[
            { label: 'Dashboard' }, // crumb terakhir tanpa href = halaman aktif
        ]}
    >
        {page}
    </AppLayout>
);
