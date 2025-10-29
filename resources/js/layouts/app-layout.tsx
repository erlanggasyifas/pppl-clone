// resources/js/layouts/app-layout.tsx
import * as React from "react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

// == shadcn: sidebar & header bits ==
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// == sidebar yang kamu kirim (letakkan di resources/js/components/admin/app-sidebar.tsx) ==
import { AppSidebar } from "@/components/admin/app-sidebar";

type Crumb = { label: string; href?: string };

export default function AppLayout({
  children,
  title,        // opsional: kalau ingin heading teks di atas konten
  breadcrumb,   // opsional: array crumb dinamis
}: {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <SidebarProvider>
      {/* ==== LEFT SIDEBAR ==== */}
      {/* EDIT HERE: untuk ubah menu/logo/user, edit file AppSidebar.tsx, bukan di sini */}
      <AppSidebar />

      {/* ==== MAIN AREA ==== */}
      <SidebarInset>
        {/* ==== HEADER (sesuai snippet kamu) ==== */}
        {/* EDIT HERE: kalau mau ubah layout header (posisi tombol, breadcrumb, aksi kanan) */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbBar crumbs={breadcrumb} />
            </BreadcrumbList>
          </Breadcrumb>

          {/* EDIT HERE: area aksi kanan (search, notifications, avatar, dsb.) */}
          <div className="ml-auto" />
        </header>

        {/* ==== PAGE CONTENT SLOT ==== */}
        <div className="p-4 md:p-6">
          {/* EDIT HERE: jika ingin selalu menampilkan judul halaman */}
          {/* {title && <h1 className="text-xl font-semibold mb-4">{title}</h1>} */}
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function BreadcrumbBar({ crumbs }: { crumbs?: Crumb[] }) {
  // Default kalau crumbs tidak dikirim → contoh seperti snippet kamu:
  if (!crumbs || crumbs.length === 0) {
    return (
      <>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Activity</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  }

  // Render dinamis, tetap meniru gaya snippet:
  // - Semua item selain terakhir tampil sebagai Link + hidden di mobile
  // - Item terakhir pakai <BreadcrumbPage>
  return (
    <>
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        if (isLast) {
          return (
            <BreadcrumbItem key={`${c.label}-${i}`}>
              <BreadcrumbPage>{c.label}</BreadcrumbPage>
            </BreadcrumbItem>
          );
        }
        return (
          <React.Fragment key={`${c.label}-${i}`}>
            <BreadcrumbItem className="hidden md:block">
              {c.href ? (
                <BreadcrumbLink href={c.href}>{c.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{c.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </React.Fragment>
        );
      })}
    </>
  );
}
