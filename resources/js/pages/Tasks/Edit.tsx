import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Task, type TaskCategory } from '@/types';
import { Form, Head } from '@inertiajs/react';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Tasks', href: '/tasks' },
    { title: 'Edit', href: '' },
];

export default function Edit({ task, categories }: { task: Task; categories: TaskCategory[] }) {
    const taskName = useRef<HTMLInputElement>(null);
    const [isCompleted, setIsCompleted] = useState<boolean>(task.is_completed);
    const [selectedCategories, setSelectedCategories] = useState<number[]>(task.task_categories.map((category) => category.id));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Task" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Form method="post" action={route('tasks.update', task.id)} transform={(data) => ({ ...data, _method: 'put' })} className="space-y-6">
                    {({ processing, progress, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Task Name</Label>

                                <Input id="name" name="name" ref={taskName} defaultValue={task.name} className="mt-1 block w-full" />

                                <InputError message={errors.name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="is_completed">Completed?</Label>

                                <Checkbox
                                    checked={isCompleted}
                                    id="is_completed"
                                    name="is_completed"
                                    onCheckedChange={(checked) => setIsCompleted(checked === true)}
                                />

                                <InputError message={errors.is_completed} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="name">Due Date</Label>

                                <Input
                                    id="due_date"
                                    name="due_date"
                                    defaultValue={task.due_date ? format(task.due_date, 'yyyy-MM-dd') : ''}
                                    className="mt-1 block w-full"
                                    type="date"
                                />

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

                                {!task.mediaFile ? (
                                    ''
                                ) : (
                                    <a href={task.mediaFile.original_url} target="_blank" className="mx-auto my-4">
                                        <img src={task.mediaFile.original_url} className={'h-32 w-32'} />
                                    </a>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="categories">Categories</Label>

                                <ToggleGroup
                                    type="multiple"
                                    variant={'outline'}
                                    size={'lg'}
                                    value={selectedCategories.toString()}
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

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Update Task</Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
