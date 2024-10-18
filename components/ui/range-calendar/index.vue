<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarRoot, type RangeCalendarRootEmits, type RangeCalendarRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<RangeCalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RangeCalendarRoot v-slot="{ grid, weekDays }" :class="cn('p-3', props.class)" v-bind="forwarded">
    <ui-range-calendar-header>
      <ui-range-calendar-prev-button />
      <ui-range-calendar-heading />
      <ui-range-calendar-next-button />
    </ui-range-calendar-header>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <ui-range-calendar-grid v-for="month in grid" :key="month.value.toString()">
        <ui-range-calendar-grid-head>
          <ui-range-calendar-grid-row>
            <ui-range-calendar-head-cell v-for="day in weekDays" :key="day">
              {{ day }}
            </ui-range-calendar-head-cell>
          </ui-range-calendar-grid-row>
        </ui-range-calendar-grid-head>
        <ui-range-calendar-grid-body>
          <ui-range-calendar-grid-row v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`"
            class="mt-2 w-full">
            <ui-range-calendar-cell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
              <ui-range-calendar-cell-trigger :day="weekDate" :month="month.value" />
            </ui-range-calendar-cell>
          </ui-range-calendar-grid-row>
        </ui-range-calendar-grid-body>
      </ui-range-calendar-grid>
    </div>
  </RangeCalendarRoot>
</template>