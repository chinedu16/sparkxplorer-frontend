<template>
  <ui-dropdown-menu>
    <ui-dropdown-menu-trigger as-child>
      <ui-button size="sm" class="gap-2 capitalize">
        <Users :size="16" />
        Assign Tutor
      </ui-button>
    </ui-dropdown-menu-trigger>
    <ui-dropdown-menu-content class="w-56">
      <ui-dropdown-menu-item as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openP2PAssignModal = true">
          <UserCheck :size="16" class="text-primary" />
          Peer-to-Peer
        </ui-button>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openProfAssignModal = true">
          <Users :size="16" class="text-primary" />
          Professional
        </ui-button>
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ui-dropdown-menu>
  <AdminDialogsP2p :open="openP2PAssignModal" title="Assign 
Peer-to-Peer Tutor" message="We&apos;ll fine tune our features to be personalized for you."
    @update:open="openP2PAssignModal = false" @assignP2PTutor="handleAssignP2P" />
  <AdminDialogsProf :open="openProfAssignModal" title="Assign 
Professional Tutor" message="We&apos;ll fine tune our features to be personalized for you."
    @update:open="openProfAssignModal = false" @assignProfTutor="handleAssignProfessional" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserCheck, Users } from 'lucide-vue-next'

const menu = ref();
const openP2PAssignModal = ref(false);
const openProfAssignModal = ref(false);

const handleAssignP2P = async (payload: string | string[]) => {
  console.log('handleAssignP2P', payload)
  // TODO: assign tutor - p2p
  openP2PAssignModal.value = false
}

const handleAssignProfessional = async (payload: string | string[]) => {
  console.log('handleAssignProfessional', payload)
  // TODO: assign tutor - prof
  openProfAssignModal.value = false
}
</script>
