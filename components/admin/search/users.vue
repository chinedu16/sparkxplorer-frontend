<template>
  <div class="relative">
    <ui-label for="searchUsers" class="sr-only">Search</ui-label>
    <ui-input
      id="searchUsers"
      v-model="search"
      placeholder="Search..."
      class="rounded-full pr-10"
    />
    <span
      class="w-10 h-10 grid place-items-center text-muted-foreground absolute inset-y-0 right-0"
    >
      <Search :size="18" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { Search } from "lucide-vue-next";

const emit = defineEmits(["searchInput"]);

const route = useRoute();
const router = useRouter();

const search = ref((route.query.search_query as string) ?? "");

const debounceSearch = useDebounceFn(() => {
  const { search_query, ...searchParams } = route.query;

  if (!search.value) {
    router.replace({
      path: route.path,
      query: { ...searchParams, page: 1 },
    });
    return;
  }

  router.replace({
    path: route.path,
    query: { ...route.query, search_query: search.value, page: 1 },
  });
}, 500);

watch(search, debounceSearch);
</script>
