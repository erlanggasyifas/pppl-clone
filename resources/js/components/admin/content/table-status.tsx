import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const status = [
    {
        activityId: 'A001',
        totalReported: '3'
    },
    {
        activityId: 'A002',
        totalReported: '1'
    },
    {
        activityId: 'A003',
        totalReported: '1'
    },
    {
        activityId: 'A004',
        totalReported: '1'
    },
    {
        activityId: 'A005',
        totalReported: '1'
    },
];

export function TableStatus() {
    return (
        <Card className="@container/card">
            <CardHeader>
                <CardTitle>Latest Report Activity</CardTitle>
                <CardDescription>
                    <span className="hidden @[540px]/card:block">
                        Total for the last 3 months
                    </span>
                    <span className="@[540px]/card:hidden">Last 3 months</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID Activity</TableHead>
                            <TableHead>Total Report</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {status.map((status) => (
                            <TableRow key={status.activityId}>
                                <TableCell className="font-medium">
                                    {status.activityId}
                                </TableCell>
                                <TableCell>{status.totalReported}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
