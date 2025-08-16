import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type TaskCategory } from '@/types';
import { Form, Head } from '@inertiajs/react';
import { useRef, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Tasks', href: '/tasks' },
    { title: 'Create', href: '/tasks' },
];

export default function Create({ categories }: { categories: TaskCategory[] }) {
    const taskName = useRef<HTMLInputElement>(null);
    const [selectedCategories, setSelectedCategories] = useState<Pick<TaskCategory, 'id'>[]>([]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Task" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Form
                    method="post"
                    action={route('tasks.store')}
                    transform={(data) => ({ ...data, categories: selectedCategories })}
                    onError={(errors) => {
                        if (errors.name) {
                            taskName.current?.focus();
                        }
                    }}
                    className="space-y-6"
                >
                    {({ processing, progress, errors }) => (
                        <Card>
                            <CardContent className="grid grid-cols-3 gap-4 space-y-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Task Name *</Label>

                                    <Input id="name" name="name" ref={taskName} className="mt-1 block w-full" />

                                    <InputError message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="name">Due Date</Label>

                                    <Input id="due_date" name="due_date" className="mt-1 block w-full" type="date" />

                                    <InputError message={errors.due_date} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="media">Media</Label>

                                    <Input id="media" name="media" className="mt-1 block w-full" type="file" />

                                    {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                    )}

                                    <InputError message={errors.media} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="categories">Categories</Label>

                                    <ToggleGroup
                                        type="multiple"
                                        variant={'outline'}
                                        size={'lg'}
                                        onValueChange={(value) => setSelectedCategories(value)}
                                    >
                                        {categories.map((category) => (
                                            <ToggleGroupItem key={category.id} value={category.id.toString()}>
                                                {category.name}
                                            </ToggleGroupItem>
                                        ))}
                                    </ToggleGroup>

                                    <InputError message={errors.categories} />
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button disabled={processing}>Create Task</Button>
                            </CardFooter>
                        </Card>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
