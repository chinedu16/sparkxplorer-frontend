<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-trigger as-child>
      <ui-button size="sm" class="gap-2 bg-gray-800 hover:bg-gray-700">
        <ListFilter :size="16" />
        Filter
      </ui-button>
    </ui-dialog-trigger>
    <ui-dialog-content class="max-w-md">
      <ui-dialog-header>
        <ui-dialog-title>Filters</ui-dialog-title>
        <ui-dialog-description>
          Select filters to apply to the table
        </ui-dialog-description>
      </ui-dialog-header>
      <!-- <AdminFormsFilter class="" @filter="onSubmit"></AdminFormsFilter> -->
      <div class="space-y-8">
        <div class="grid grid-cols-[6rem,1fr] gap-4 items-center">
          <ui-label>Date range:</ui-label>
          <ui-popover>
            <ui-popover-trigger as-child>
              <ui-button
                variant="outline"
                size="sm"
                :class="
                  cn(
                    'w-full justify-start font-normal',
                    !value.start && 'text-muted-foreground'
                  )
                "
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                <template v-if="value.start">
                  <template v-if="value.end">
                    {{ df.format(value.start.toDate(getLocalTimeZone())) }} -
                    {{ df.format(value.end.toDate(getLocalTimeZone())) }}
                  </template>

                  <template v-else>
                    {{ df.format(value.start.toDate(getLocalTimeZone())) }}
                  </template>
                </template>
                <template v-else> Select date range </template>
              </ui-button>
            </ui-popover-trigger>
            <ui-popover-content class="w-auto p-0">
              <ui-range-calendar
                v-model="value"
                initial-focus
                :min-value="new CalendarDate(2024, 1, 1)"
                :max-value="today(getLocalTimeZone())"
                @update:start-value="(startDate) => (value.start = startDate)"
              />
            </ui-popover-content>
          </ui-popover>
        </div>
        <div class="grid grid-cols-[6rem,1fr] gap-4 items-center">
          <ui-label>Status:</ui-label>
          <div class="flex gap-6 items-center">
            <div class="flex items-center space-x-2">
              <ui-checkbox
                :checked="status.includes('activated')"
                value="activated"
                id="activated"
                v-on:update:checked="handleChange('activated')"
              />
              <ui-label for="activated">Activated</ui-label>
            </div>
            <div class="flex items-center space-x-2">
              <ui-checkbox
                :checked="status.includes('deactivated')"
                value="deactivated"
                id="deactivated"
                v-on:update:checked="handleChange('deactivated')"
              />
              <ui-label for="deactivated">Deactivated</ui-label>
            </div>
          </div>
        </div>
        <ui-dialog-footer class="gap-4">
          <ui-button
            type="button"
            variant="outline"
            class="w-full"
            @click="handleClear"
          >
            Clear
          </ui-button>
          <ui-button
            type="button"
            class="w-full"
            :disabled="isDisabled"
            @click="handleFilter"
          >
            Apply
          </ui-button>
        </ui-dialog-footer>
      </div>
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { cn } from "@/lib/utils";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { Calendar as CalendarIcon, ListFilter } from "lucide-vue-next";
import { toDate } from "radix-vue/dist/date";
import type { DateRange } from "radix-vue";

type Status = "activated" | "deactivated";

const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const getDateQueryFilter = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
};

const route = useRoute();
const router = useRouter();

const start = getDateQueryFilter(route.query.start_date as string);
const end = getDateQueryFilter(route.query.end_date as string);

const open = ref(false);
const value = ref({
  start: route.query.start_date
    ? new CalendarDate(start.year, start.month, start.day)
    : undefined,
  end: route.query.end_date
    ? new CalendarDate(end.year, end.month, end.day)
    : undefined,
}) as Ref<DateRange>;
const status = ref<Status[]>(
  route.query.status
    ? ((route.query.status as string).split(",") as Status[])
    : []
);

const isDisabled = computed(() => !value.value.start && !status.value.length);

const handleChange = (state: Status) => {
  if (status.value.includes(state)) {
    status.value = status.value.filter((value) => value !== state);
  } else {
    status.value = [...status.value, state];
  }
};

const handleClear = () => {
  value.value.start = undefined;
  value.value.end = undefined;
  status.value = [];

  const { start_date, end_date, status: activeStatus, ...query } = route.query;

  router.replace({ path: route.path, query });
  open.value = false;
};

const handleFilter = () => {
  const filters: Record<string, any> = {};

  if (value.value.start) filters.start_date = value.value.start;
  if (value.value.end) filters.end_date = value.value.end;
  if (status.value) filters.status = status.value;

  router.replace({ path: route.path, query: { ...route.query, ...filters } });
  open.value = false;
};
</script>
