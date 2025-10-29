import { NavUser } from '@/components/admin/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { Activity, ClipboardList, User2 } from 'lucide-react';

const items = [
    {
        title: 'Member',
        url: '/member',
        icon: User2,
    },
    {
        title: 'Activity',
        url: '/activity',
        icon: ClipboardList,
    },
    {
        title: 'Status',
        url: '/status',
        icon: Activity,
    },
];
const user = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
};

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <Link href="/dashboard" className="flex gap-2">
                                <span className="flex items-center gap-2 text-base font-semibold">
                                    <img
                                        src="/assets/yarwee-logo.png"
                                        alt="Yarwee"
                                        className="h-6 w-auto shrink-0 object-contain align-middle" // ~24px, pas dg line-height text-base
                                        loading="lazy"
                                    />
                                    Admin
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}