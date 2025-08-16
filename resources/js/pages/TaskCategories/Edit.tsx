import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type TaskCategory } from '@/types';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Tasks', href: '/tasks' },
    { title: 'Task Categories', href: '/task-categories' },
    { title: 'Edit', href: '' },
];

export default function Edit({ taskCategory }: { taskCategory: TaskCategory }) {
    const taskCategoryName = useRef<HTMLInputElement>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Task Category" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Form
                    method="put"
                    action={route('task-categories.update', taskCategory.id)}
                    className="space-y-6"
                    onError={(errors) => {
                        if (errors.name) {
                            taskCategoryName.current?.focus();
                        }
                    }}
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name *</Label>

                                <Input id="name" name="name" defaultValue={taskCategory.name} required className="mt-1 block w-full" />

                                <InputError message={errors.name} />
                            </div>

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Update</Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
