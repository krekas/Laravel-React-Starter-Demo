import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\TaskCategoryController::index
 * @see app/Http/Controllers/TaskCategoryController.php:12
 * @route /task-categories
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/task-categories',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::index
 * @see app/Http/Controllers/TaskCategoryController.php:12
 * @route /task-categories
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::index
 * @see app/Http/Controllers/TaskCategoryController.php:12
 * @route /task-categories
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::index
 * @see app/Http/Controllers/TaskCategoryController.php:12
 * @route /task-categories
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::create
 * @see app/Http/Controllers/TaskCategoryController.php:21
 * @route /task-categories/create
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/task-categories\/create',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::create
 * @see app/Http/Controllers/TaskCategoryController.php:21
 * @route /task-categories/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::create
 * @see app/Http/Controllers/TaskCategoryController.php:21
 * @route /task-categories/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::create
 * @see app/Http/Controllers/TaskCategoryController.php:21
 * @route /task-categories/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::store
 * @see app/Http/Controllers/TaskCategoryController.php:26
 * @route /task-categories
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/task-categories',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::store
 * @see app/Http/Controllers/TaskCategoryController.php:26
 * @route /task-categories
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::store
 * @see app/Http/Controllers/TaskCategoryController.php:26
 * @route /task-categories
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::show
 * @see app/Http/Controllers/TaskCategoryController.php:0
 * @route /task-categories/{task_category}
 */
export const show = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/task-categories\/{task_category}',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::show
 * @see app/Http/Controllers/TaskCategoryController.php:0
 * @route /task-categories/{task_category}
 */
show.url = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task_category: args }
    }

    if (Array.isArray(args)) {
        args = {
            task_category: args[0],
        }
    }

    const parsedArgs = {
        task_category: args.task_category,
    }

    return show.definition.url
            .replace('{task_category}', parsedArgs.task_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::show
 * @see app/Http/Controllers/TaskCategoryController.php:0
 * @route /task-categories/{task_category}
 */
show.get = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::show
 * @see app/Http/Controllers/TaskCategoryController.php:0
 * @route /task-categories/{task_category}
 */
show.head = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::edit
 * @see app/Http/Controllers/TaskCategoryController.php:33
 * @route /task-categories/{task_category}/edit
 */
export const edit = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/task-categories\/{task_category}\/edit',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::edit
 * @see app/Http/Controllers/TaskCategoryController.php:33
 * @route /task-categories/{task_category}/edit
 */
edit.url = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task_category: args }
    }

    if (Array.isArray(args)) {
        args = {
            task_category: args[0],
        }
    }

    const parsedArgs = {
        task_category: args.task_category,
    }

    return edit.definition.url
            .replace('{task_category}', parsedArgs.task_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::edit
 * @see app/Http/Controllers/TaskCategoryController.php:33
 * @route /task-categories/{task_category}/edit
 */
edit.get = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::edit
 * @see app/Http/Controllers/TaskCategoryController.php:33
 * @route /task-categories/{task_category}/edit
 */
edit.head = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::update
 * @see app/Http/Controllers/TaskCategoryController.php:40
 * @route /task-categories/{task_category}
 */
export const update = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/task-categories\/{task_category}',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::update
 * @see app/Http/Controllers/TaskCategoryController.php:40
 * @route /task-categories/{task_category}
 */
update.url = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task_category: args }
    }

    if (Array.isArray(args)) {
        args = {
            task_category: args[0],
        }
    }

    const parsedArgs = {
        task_category: args.task_category,
    }

    return update.definition.url
            .replace('{task_category}', parsedArgs.task_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::update
 * @see app/Http/Controllers/TaskCategoryController.php:40
 * @route /task-categories/{task_category}
 */
update.put = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::update
 * @see app/Http/Controllers/TaskCategoryController.php:40
 * @route /task-categories/{task_category}
 */
update.patch = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
 * @see \App\Http\Controllers\TaskCategoryController::destroy
 * @see app/Http/Controllers/TaskCategoryController.php:47
 * @route /task-categories/{task_category}
 */
export const destroy = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/task-categories\/{task_category}',
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::destroy
 * @see app/Http/Controllers/TaskCategoryController.php:47
 * @route /task-categories/{task_category}
 */
destroy.url = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task_category: args }
    }

    if (Array.isArray(args)) {
        args = {
            task_category: args[0],
        }
    }

    const parsedArgs = {
        task_category: args.task_category,
    }

    return destroy.definition.url
            .replace('{task_category}', parsedArgs.task_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TaskCategoryController::destroy
 * @see app/Http/Controllers/TaskCategoryController.php:47
 * @route /task-categories/{task_category}
 */
destroy.delete = (args: { task_category: string | number } | [task_category: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const TaskCategoryController = { index, create, store, show, edit, update, destroy }

export default TaskCategoryController