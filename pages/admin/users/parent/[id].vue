<template>
  <AdminLayout active="parents">
    <template #title>
      <AdminBreadcrumbsParents name="parents">
        <ui-breadcrumb-item>
          <ui-breadcrumb-page class="text-primary capitalize">
            {{ route.query.tab }}
          </ui-breadcrumb-page>
        </ui-breadcrumb-item>
      </AdminBreadcrumbsParents>
    </template>
    <template #actions>
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

    <section class="py-4">
      <AdminUsersParentsProfile v-if="active === 'profile'" :parent="{}" />
      <AdminUsersParentsScholar v-if="active === 'scholars'" :scholars="users" />
    </section>
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
const router = useRouter();
const usersStore = useUsersStore();

// const data = computed(() => usersStore.getUser);

const userId = route.params.id
const active = ref(route.query.tab)
const users = ref([
  {
    name: 'Shirley Maine',
    email: 'smaine@text.com',
    registered_at: '12th may, 2024',
    status: 'activated',
    role_name: 'scholars'
  },
  {
    name: 'Miguel Payne',
    email: 'mpaine@demo.com',
    registered_at: '12th may, 2024',
    status: 'activated',
    role_name: 'scholars'
  },
  {
    name: 'Lisa Rice',
    email: 'lrice@test.com',
    registered_at: '28th sept, 2024',
    status: 'activated',
    role_name: 'scholars'
  }
])
const search = ref('')
// const loading = ref(false);

const tabs = [
  { name: 'profile', to: `/admin/users/parent/${userId}?tab=profile`, label: 'Profile' },
  { name: 'scholars', to: `/admin/users/parent/${userId}?tab=scholars`, label: 'Scholars' }
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
