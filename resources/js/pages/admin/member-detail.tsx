// resources/js/pages/admin/member-detail.tsx
'use client'

import * as React from 'react'
import axios from 'axios'
import { usePage, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const API_USER_DETAIL = (id: string | number) =>
  `http://210.79.190.9:7456/api/admin/users/${id}`

type ApiProvince = { id: number; name: string }
type ApiUser = {
  id: string
  fullName?: string
  username?: string
  profilePicture?: string
  email: string
  phoneNumber?: string
  gender?: string
  dateOfBirth?: string
  isPremium?: boolean
  role?: string
  createdAt?: string
  updatedAt?: string
  province?: ApiProvince
}

export default function MemberDetail() {
  const { memberId } = usePage().props as any
  const [user, setUser] = React.useState<ApiUser | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
    if (token && !axios.defaults.headers.common['Authorization']) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setLoading(true)
    axios
      .get(API_USER_DETAIL(memberId), { headers: { Accept: 'application/json' } })
      .then((res) => {
        setUser(res?.data?.data?.user ?? null)
      })
      .catch((e) => {
        console.error(e)
        setError('Gagal mengambil data pengguna.')
      })
      .finally(() => setLoading(false))
  }, [memberId])

  const title =
    user?.fullName || user?.username || user?.email?.split('@')[0] || 'Detail'

  return (
    <div className="grid gap-6">
      <Card className="@container/card">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Member Detail</CardTitle>
            <CardDescription>Informasi lengkap pengguna.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Link href="/member">
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
        </CardHeader>

        <CardContent>
          {loading && <div>Memuat...</div>}
          {error && <div className="text-rose-600">{error}</div>}

          {!loading && !error && user && (
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={user.profilePicture || '/avatars/shadcn.jpg'}
                    alt={title}
                    className="h-28 w-28 rounded-xl object-cover"
                  />
                  <div className="text-center">
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="text-sm text-muted-foreground">
                      {user.role || (user.isPremium ? 'Premium' : 'User')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 grid gap-4">
                <Section label="Email" value={user.email} />
                <Section
                  label="Status"
                  value={user.role || (user.isPremium ? 'Premium' : 'Free')}
                />
                <Section label="Username" value={user.username || '-'} />
                <Section label="Nama Lengkap" value={user.fullName || '-'} />
                <Section label="Nomor HP" value={user.phoneNumber || '-'} />
                <Section label="Gender" value={user.gender || '-'} />
                <Section label="Tanggal Lahir" value={user.dateOfBirth || '-'} />
                <Section
                  label="Provinsi"
                  value={user.province ? `${user.province.id} • ${user.province.name}` : '-'}
                />
                <Section
                  label="Dibuat"
                  value={user.createdAt ? new Date(user.createdAt).toLocaleString() : '-'}
                />
                <Section
                  label="Diupdate"
                  value={user.updatedAt ? new Date(user.updatedAt).toLocaleString() : '-'}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function Section({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-start gap-2">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  )
}

// Pasang layout + breadcrumb statis
(MemberDetail as any).layout = (page: React.ReactNode) => (
  <AppLayout
    title="Member Detail"
    breadcrumb={[
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Member', href: '/member' },
      { label: 'Detail' },
    ]}
  >
    {page}
  </AppLayout>
)