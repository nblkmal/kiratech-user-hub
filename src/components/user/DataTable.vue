<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/vue-table';
import { ref, onMounted, onUnmounted } from 'vue';
import {
  FlexRender,
  useVueTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/vue-table';
import { valueUpdater } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import DataTablePagination from './DataTablePagination.vue';
import UserInfoDialog from './UserInfoDialog.vue';
import type { RandomUser } from '@/types';
import { Button } from '../ui/button';
import { RefreshCcw } from 'lucide-vue-next';

const props = defineProps<{
  columns: ColumnDef<RandomUser, unknown>[];
  data: RandomUser[];
}>();

const emit = defineEmits<{
  refreshData: [];
}>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const selectedUser = ref<RandomUser | null>(null);
const isDialogOpen = ref(false);

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnFiltersChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnFilters),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
  },
});

const handleShowUserDialog = (event: CustomEvent) => {
  selectedUser.value = event.detail.user;
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
  selectedUser.value = null;
};

onMounted(() => {
  window.addEventListener('showUserDialog', handleShowUserDialog as any);
});

onUnmounted(() => {
  window.removeEventListener('showUserDialog', handleShowUserDialog as any);
});

function refreshData() {
  emit('refreshData');
}
</script>

<template>
  <div class="w-full flex flex-col space-y-4 mt-4">
    <div class="w-full flex justify-between items-center">
      <Input
        class="max-w-sm"
        placeholder="Filter names..."
        :model-value="table.getColumn('name')?.getFilterValue() as string"
        @update:model-value="table.getColumn('name')?.setFilterValue($event)"
      />

      <Button variant="secondary" @click="refreshData">
        <RefreshCcw class="w-4 h-4 mr-2" />
        Refresh Data
      </Button>
    </div>
    <div class="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() ? 'selected' : undefined"
            >
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </TableCell>
            </TableRow>
          </template>
          <template v-else>
            <TableRow>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>
    <DataTablePagination :table="table" />
  </div>

  <!-- User Info Dialog -->
  <UserInfoDialog
    :user="selectedUser"
    :is-open="isDialogOpen"
    @close="closeDialog"
  />
</template>
