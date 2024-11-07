<template>
  <ui-pagination class="py-6">
    <ui-pagination-content
      class="flex items-center gap-2 w-full justify-center"
    >
      <!-- Previous page -->
      <ui-pagination-item>
        <ui-pagination-element
          v-if="hasPrevPage()"
          @click="handlePrevClick(currentPage - 1)"
        >
          <ChevronLeft :size="20" />
        </ui-pagination-element>
      </ui-pagination-item>
      <!-- First page -->
      <ui-pagination-item>
        <ui-pagination-element
          v-if="totalPages() > 2"
          :is-active="currentPage === 1"
          @click="handleFirstPageClick"
        >
          1
        </ui-pagination-element>
      </ui-pagination-item>
      <ui-pagination-item v-for="page in centerPages" :key="page">
        <ui-pagination-ellipses v-if="page === '...'" />
        <ui-pagination-element
          v-else
          :is-active="currentPage === page"
          @click="handlePageClick(Number(page))"
        >
          {{ page }}
        </ui-pagination-element>
      </ui-pagination-item>
      <!-- Last page -->
      <ui-pagination-item>
        <ui-pagination-element
          v-if="totalPages() > 2"
          :is-active="currentPage === totalPages()"
          @click="handleLastPageClick"
        >
          {{ totalPages() }}
        </ui-pagination-element>
      </ui-pagination-item>
      <!-- Next page -->
      <ui-pagination-item>
        <ui-pagination-element
          v-if="hasNextPage()"
          @click="handleNextClick(currentPage + 1)"
        >
          <ChevronRight :size="20" />
        </ui-pagination-element>
      </ui-pagination-item>
    </ui-pagination-content>
  </ui-pagination>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { getPages } from "~/lib/utils";

type TablePaginationProps = {
  totalDocs?: number;
  perPage?: number;
  totalPages: () => number;
  currentPage: number;
  hasPrevPage: () => boolean;
  hasNextPage: () => boolean;
  prevPage: () => void;
  nextPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
  setPage: (page: number) => void;
};

const props = defineProps<TablePaginationProps>();

const route = useRoute();
const router = useRouter();

const centerPages = getPages(props.currentPage, props.totalPages());

const handleFirstPageClick = () => {
  props.firstPage();
  router.replace({ path: route.path, query: { ...route.query, page: 1 } });
};

const handlePrevClick = (page: number) => {
  props.prevPage();
  router.replace({ path: route.path, query: { ...route.query, page } });
};

const handlePageClick = (page: number) => {
  props.setPage(page - 1);
  router.replace({ path: route.path, query: { ...route.query, page } });
};

const handleNextClick = (page: number) => {
  props.nextPage();
  router.replace({ path: route.path, query: { ...route.query, page } });
};

const handleLastPageClick = () => {
  props.lastPage();
  router.replace({
    path: route.path,
    query: { ...route.query, page: props.totalPages() },
  });
};
</script>
