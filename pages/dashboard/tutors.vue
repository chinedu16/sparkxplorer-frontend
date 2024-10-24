<template>
  <div class="iframe-container">
    <div v-if="loading" class="spinner"></div>
    <div v-if="!loading && sessionEnded" class="session-ended">
      <p class="mb-10 text-lg font-semibold">Session ended. Reconnect.</p>

      <base-button
        @click="reconnect"
        :loading="loading"
        styles="w-full font-bold"
        size="large"
        type="primary"
      >
        <div class="flex items-center space-x-2">
          <span>Reconnect</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1632 6.28815L8.16325 16.2882C8.07615 16.3756 7.97266 16.4449 7.8587 16.4922C7.74475 16.5395 7.62257 16.5639 7.49918 16.5639C7.3758 16.5639 7.25362 16.5395 7.13967 16.4922C7.02571 16.4449 6.92222 16.3756 6.83512 16.2882L2.46012 11.9132C2.37292 11.8259 2.30374 11.7224 2.25655 11.6085C2.20935 11.4945 2.18506 11.3724 2.18506 11.2491C2.18506 11.1258 2.20935 11.0036 2.25655 10.8897C2.30374 10.7758 2.37292 10.6722 2.46012 10.585C2.54733 10.4978 2.65086 10.4286 2.7648 10.3814C2.87874 10.3343 3.00086 10.31 3.12418 10.31C3.24751 10.31 3.36963 10.3343 3.48357 10.3814C3.59751 10.4286 3.70104 10.4978 3.78825 10.585L7.49997 14.2967L16.8367 4.96159C17.0128 4.78547 17.2517 4.68652 17.5007 4.68652C17.7498 4.68652 17.9887 4.78547 18.1648 4.96159C18.3409 5.13771 18.4399 5.37658 18.4399 5.62565C18.4399 5.87472 18.3409 6.11359 18.1648 6.28971L18.1632 6.28815Z"
              fill="white"
            />
          </svg>
        </div>
      </base-button>
    </div>
    <div v-if="!loading && !sessionEnded && showButtons">
      <h5 class="mb-10 text-lg font-semibold">
        Session is active in another tab. carryout action?
      </h5>
      <div class="flex space-x-4">
        <base-button
          styles="w-full font-bold bg-white text-primary"
          size="large"
          @click="endSession"
          type="primary"
          bgColor="#ffffff"
          textColor="#475569"
          borderColor="#475569"
        >
          <div class="flex items-center space-x-2">
            <span>End Session</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2882 14.962C16.4644 15.1381 16.5633 15.377 16.5633 15.626C16.5633 15.8751 16.4644 16.114 16.2882 16.2901C16.1121 16.4662 15.8733 16.5652 15.6242 16.5652C15.3751 16.5652 15.1362 16.4662 14.9601 16.2901L9.99997 11.3284L5.03825 16.2885C4.86213 16.4647 4.62326 16.5636 4.37418 16.5636C4.12511 16.5636 3.88624 16.4647 3.71012 16.2885C3.534 16.1124 3.43506 15.8736 3.43506 15.6245C3.43506 15.3754 3.534 15.1365 3.71012 14.9604L8.67184 10.0003L3.71168 5.03854C3.53556 4.86242 3.43662 4.62355 3.43662 4.37448C3.43662 4.12541 3.53556 3.88654 3.71168 3.71042C3.8878 3.53429 4.12668 3.43535 4.37575 3.43535C4.62482 3.43535 4.86369 3.53429 5.03981 3.71042L9.99997 8.67213L14.9617 3.70963C15.1378 3.53351 15.3767 3.43457 15.6257 3.43457C15.8748 3.43457 16.1137 3.53351 16.2898 3.70963C16.4659 3.88575 16.5649 4.12462 16.5649 4.3737C16.5649 4.62277 16.4659 4.86164 16.2898 5.03776L11.3281 10.0003L16.2882 14.962Z"
                fill="#475569"
              />
            </svg>
          </div>
        </base-button>
        <base-button
          @click="continueSession"
          :loading="loading"
          styles="w-full font-bold"
          size="large"
          type="primary"
        >
          <div class="flex items-center space-x-2">
            <span>Continue Session</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1632 6.28815L8.16325 16.2882C8.07615 16.3756 7.97266 16.4449 7.8587 16.4922C7.74475 16.5395 7.62257 16.5639 7.49918 16.5639C7.3758 16.5639 7.25362 16.5395 7.13967 16.4922C7.02571 16.4449 6.92222 16.3756 6.83512 16.2882L2.46012 11.9132C2.37292 11.8259 2.30374 11.7224 2.25655 11.6085C2.20935 11.4945 2.18506 11.3724 2.18506 11.2491C2.18506 11.1258 2.20935 11.0036 2.25655 10.8897C2.30374 10.7758 2.37292 10.6722 2.46012 10.585C2.54733 10.4978 2.65086 10.4286 2.7648 10.3814C2.87874 10.3343 3.00086 10.31 3.12418 10.31C3.24751 10.31 3.36963 10.3343 3.48357 10.3814C3.59751 10.4286 3.70104 10.4978 3.78825 10.585L7.49997 14.2967L16.8367 4.96159C17.0128 4.78547 17.2517 4.68652 17.5007 4.68652C17.7498 4.68652 17.9887 4.78547 18.1648 4.96159C18.3409 5.13771 18.4399 5.37658 18.4399 5.62565C18.4399 5.87472 18.3409 6.11359 18.1648 6.28971L18.1632 6.28815Z"
                fill="white"
              />
            </svg>
          </div>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useSparkStore } from "@/store/spark";

definePageMeta({
  layout: "dashboard",
});

const { handleError } = useErrorHandler();

const sparkStore = useSparkStore();
const loading = ref(true);
const sessionEnded = ref(false);
const showButtons = ref(false);
let ixlTab: Window | null = null;

onMounted(() => {
  // Show loading spinner for 5 seconds
  setTimeout(async () => {
    await getIXLSSOLink();
    // ixlTab = window.open("https://www.tutor.com/sparkxplorer/", "_blank");
    loading.value = false;
    showButtons.value = true;
  }, 4000);
});

const getIXLSSOLink = async () => {
  try {
    loading.value = true;
    const { data, error } = await sparkStore.getSingleSignOnUrl();

    if (error) {
      handleError(error);
      return;
    }

    if (data?.success) {
      console.log(data);
      ixlTab = window.open(data.data.tutor_dot_com);
    } else {
      handleError(new Error("Login failed, please try again."));
    }
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const continueSession = () => {
  if (ixlTab) {
    ixlTab.focus(); // Bring the IXL tab to the front
  }
};

const endSession = () => {
  if (ixlTab) {
    ixlTab.close(); // Close the IXL tab
    sessionEnded.value = true; // Show session ended state
  }
};

const reconnect = () => {
  loading.value = true;
  sessionEnded.value = false;
  showButtons.value = false;
  ixlTab = window.open("https://www.tutor.com/sparkxplorer/", "_blank");

  // Reset loading state
  setTimeout(() => {
    loading.value = false;
    showButtons.value = true;
  }, 5000);
};
</script>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 8px solid #4f46e5; /* Light gray */
  border-top: 8px solid #ffffff; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.session-ended {
  text-align: center;
}
</style>
