<template>
  <AdminLayout active="scholars">
    <template #title>
      <AdminBreadcrumbsParents name="scholars">
        <ui-breadcrumb-item>
          <ui-breadcrumb-page class="text-primary">
            <ui-breadcrumb-page class="text-primary capitalize">
              {{ route.query.tab }}
            </ui-breadcrumb-page>
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

    <section v-if="active === 'profile'" class="">
      <!-- <AdminSectionsParentProfile :user="user"></AdminSectionsParentProfile> -->
    </section>
    <section v-if="active === 'parent'" class=""></section>
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
const router = useRouter();
const usersStore = useUsersStore();

// const data = computed(() => usersStore.getUser);

const userId = route.params.id
const active = route.query.tab as string
const user = ref([])
const search = ref('')
// const loading = ref(false);

const tabs = [
  { name: 'profile', to: `/admin/users/scholar/${userId}?tab=profile`, label: 'Profile' },
  { name: 'parent', to: `/admin/users/scholar/${userId}?tab=parent`, label: 'Parent Details' },
  { name: 'requests', to: `/admin/users/scholar/${userId}?tab=requests`, label: 'Tutor Requests' }
]

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
