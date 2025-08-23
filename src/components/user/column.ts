import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';
import type { RandomUser } from '@/types';
import { Button } from '../ui/button';
import { ArrowUpDown, Eye } from 'lucide-vue-next';

export const columns: ColumnDef<RandomUser>[] = [
  {
    accessorKey: 'registered',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
          class: 'text-gray-500 font-medium',
        },
        () => ['Date', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
      );
    },
    cell: ({ row }) => {
      const registered = row.getValue('registered') as { date: string };
      if (!registered?.date) {
        return h('div', { class: 'text-gray-600' }, 'N/A');
      }

      try {
        const date = new Date(registered.date);
        if (isNaN(date.getTime())) {
          return h('div', { class: 'text-gray-600' }, 'Invalid Date');
        }

        const formatted = date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
        return h('div', { class: 'text-gray-600' }, formatted);
      } catch (error) {
        return h('div', { class: 'text-gray-600' }, 'Error');
      }
    },
    sortingFn: (rowA, rowB) => {
      const dateA = rowA.getValue('registered') as { date: string };
      const dateB = rowB.getValue('registered') as { date: string };

      if (!dateA?.date || !dateB?.date) return 0;

      try {
        const timeA = new Date(dateA.date).getTime();
        const timeB = new Date(dateB.date).getTime();

        if (isNaN(timeA) || isNaN(timeB)) return 0;

        return timeA - timeB;
      } catch (error) {
        return 0;
      }
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
          class: 'text-gray-500 font-medium',
        },
        () => ['Name', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
      );
    },
    cell: ({ row }) => {
      const name = row.getValue('name') as { first: string; last: string };
      const user = row.original;

      return h('div', { class: 'flex items-center justify-between' }, [
        h(
          'span',
          { class: 'font-semibold text-gray-900' },
          `${name.first} ${name.last}`
        ),
        h(
          Button,
          {
            variant: 'ghost',
            size: 'sm',
            class: 'h-6 w-6 p-0 hover:bg-gray-100',
            onClick: () => {
              // This will be handled by the parent component
              window.dispatchEvent(
                new CustomEvent('showUserDialog', {
                  detail: { user },
                })
              );
            },
          },
          () => h(Eye, { class: 'h-3 w-3 text-gray-500' })
        ),
      ]);
    },
    enableColumnFilter: true,
    filterFn: (row, id, value) => {
      const name = row.getValue(id) as { first: string; last: string };
      const fullName = `${name.first} ${name.last}`.toLowerCase();
      return fullName.includes(value.toLowerCase());
    },
  },
  {
    accessorKey: 'gender',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Gender'),
    cell: ({ row }) => {
      const gender = row.getValue('gender') as string;
      return h('div', { class: 'text-gray-900 capitalize' }, gender);
    },
  },
  {
    accessorKey: 'location',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Country'),
    cell: ({ row }) => {
      const location = row.getValue('location') as { country: string };
      return h('div', { class: 'text-gray-900' }, location.country);
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Email'),
    cell: ({ row }) => {
      const email = row.getValue('email') as string;
      return h('div', { class: 'text-gray-600' }, email);
    },
  },
];
