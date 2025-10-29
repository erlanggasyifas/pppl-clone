// resources/js/pages/dashboard.tsx
import * as React from 'react'
import { DataTableDemo } from '@/components/admin/content/table-member'
import AppLayout from '@/layouts/app-layout'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

export default function Dashboard() {
  return (
    <div className="grid gap-4">
      {/* === Card 1: Context/Intro === */}
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Member</CardTitle>
          <CardDescription>
            Halaman ini menampilkan seluruh data member (nama, email, status, dan jumlah activity).
            Gunakan untuk pemantauan cepat dan tindakan lanjutan seperti melihat detail, edit, atau delete.
            {/* EDIT HERE: ubah teks deskripsi sesuai kebutuhan */}
          </CardDescription>
        </CardHeader>
        {/* Jika butuh info tambahan (stat ringan dsb.), tambahkan di <CardContent> */}
        {/* <CardContent>...opsional...</CardContent> */}
      </Card>

      {/* === Card 2: Tabel Member === */}
      <Card className="@container/card p-4 pt-8">
          <DataTableDemo variant="full" />
      </Card>
    </div>
  )
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
)
