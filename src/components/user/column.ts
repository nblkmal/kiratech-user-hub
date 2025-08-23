import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import type { RandomUser } from '@/types'

export const columns: ColumnDef<RandomUser>[] = [
  {
    accessorKey: 'registered',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Date'),
    cell: ({ row }) => {
      const registered = row.getValue('registered') as { date: string }
      const date = new Date(registered.date)
      const formatted = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
      return h('div', { class: 'text-gray-600' }, formatted)
    },
  },
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Name'),
    cell: ({ row }) => {
      const name = row.getValue('name') as { first: string; last: string }
      return h('div', { class: 'font-semibold text-gray-900' }, `${name.first} ${name.last}`)
    },
  },
  {
    accessorKey: 'gender',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Gender'),
    cell: ({ row }) => {
      const gender = row.getValue('gender') as string
      return h('div', { class: 'text-gray-900 capitalize' }, gender)
    },
  },
  {
    accessorKey: 'location',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Country'),
    cell: ({ row }) => {
      const location = row.getValue('location') as { country: string }
      return h('div', { class: 'text-gray-900' }, location.country)
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-gray-500 font-medium' }, 'Email'),
    cell: ({ row }) => {
      const email = row.getValue('email') as string
      return h('div', { class: 'text-gray-600' }, email)
    },
  },
]