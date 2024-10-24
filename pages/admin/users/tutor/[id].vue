<template>
  <AdminLayout active="tutors">
    <template #title>
      <AdminBreadcrumbsParents name="tutors">
        <ui-breadcrumb-item>
          <ui-breadcrumb-page class="text-primary capitalize">
            {{ route.query.tab }}
          </ui-breadcrumb-page>
        </ui-breadcrumb-item>
      </AdminBreadcrumbsParents>
    </template>
    <template #actions>
      <AdminDropdownsAssignTutor />
      <ui-button size="sm" class="gap-2">
        <Download :size="16" />
        Export
      </ui-button>
      <AdminDialogsFilter />
      <!-- TODO: Search -->
    </template>

    <!-- sub-tab -->
    <template #sub-nav>
      <AdminTabsUsersParents :tabs="tabs" />
    </template>

    <section class="py-4 px-8">
      <AdminUsersTutorsProfile v-if="active === 'profile'" :parent="{}" />
    </section>
    <section v-if="active === 'calendar'" class=""></section>
    <section v-if="active === 'requests'" class=""></section>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Download } from 'lucide-vue-next'
import { useUsersStore } from "@/store/users";

definePageMeta({
  layout: 'admin'
})

const route = useRoute();
const usersStore = useUsersStore();

// const data = computed(() => usersStore.getUser);

const userId = route.params.id
const active = ref(route.query.tab)
const user = ref([])
const search = ref('')
// const loading = ref(false);

const tabs = [
  { name: 'profile', to: `/admin/users/tutor/${userId}?tab=profile`, label: 'Profile' },
  { name: 'calendar', to: `/admin/users/tutor/${userId}?tab=calendar`, label: 'Calendar' },
  { name: 'requests', to: `/admin/users/tutor/${userId}?tab=requests`, label: 'Requests' }
]

onBeforeRouteUpdate(({ query }) => { active.value = query.tab })
// onMounted(() => {
//   fetchUsersData();
// });

// const fetchUsersData = async () => {
//   try {
//     loading.value = true;
//     await usersStore.fetchUser(userId);
//   } catch (error) {
//   } finally {
//     loading.value = false;
//   }
// };
</script>
