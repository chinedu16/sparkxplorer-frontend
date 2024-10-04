<template>
  <div class="flex">
    <div class="w-9/12 feeds">
      <el-tabs
        v-model="activeName"
        class="demo-tabs mt-6"
        @tab-click="handleClick"
      >
        <el-tab-pane label="For You" name="first">
          <div class="px-4">
            <base-input
              name="password"
              label=""
              type="textarea"
              placeholder="What’s on your mind right now?"
              icon-prefix="password"
              v-model="formData.feed"
            />
            <div class="mt-2 mb-4 flex justify-end">
              <base-button
                styles="w-full font-bold"
                size="medium"
                type="primary"
              >
                <div class="flex items-center space-x-2">
                  <span>Post</span>
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
          <div class="p-4 space-y-6">
            <div
              class="border space-y-4 rounded-sm p-4 text-sm"
              v-for="i in 10"
            >
              <div class="flex space-x-3">
                <img
                  class="w-10 h-10"
                  src="../../assets/images/illustrations/avatar.png"
                  alt=""
                />
                <div>
                  <h4 class="text-gray-two font-bold">Amanda D. Gray</h4>
                  <p class="text-gray-one">Today . 17:12</p>
                </div>
              </div>
              <p class="">
                Habitant morbi tristique senectus et netus et. Suspendisse sed
                nisi lacus sed viverra. Dolor morbi non arcu risus quis varius.
                <span class="text-primary"
                  >#amazing #great #lifetime #homelearning</span
                >
              </p>
              <img
                v-if="i === 1 || i === 4 || i === 7 || i === 10"
                class="h-64 w-full object-cover"
                src="../../assets/images/illustrations/chat-frame.png"
                alt=""
              />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="My Posts" name="second">
          <div class="p-4 space-y-6">
            <div class="border space-y-4 rounded-sm p-4 text-sm" v-for="i in 3">
              <div class="flex space-x-3">
                <img
                  class="w-10 h-10"
                  src="../../assets/images/illustrations/avatar.png"
                  alt=""
                />
                <div>
                  <h4 class="text-gray-two font-bold">Amanda D. Gray</h4>
                  <p class="text-gray-one">Today . 17:12</p>
                </div>
              </div>
              <p class="">
                Habitant morbi tristique senectus et netus et. Suspendisse sed
                nisi lacus sed viverra. Dolor morbi non arcu risus quis varius.
                <span class="text-primary"
                  >#amazing #great #lifetime #homelearning</span
                >
              </p>
              <img
                v-if="i === 1 || i === 4 || i === 7 || i === 10"
                class="h-64 w-full object-cover"
                src="../../assets/images/illustrations/chat-frame.png"
                alt=""
              />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="w-3/12 bg-gray-three px-6">
      <div class="bg-white rounded-lg p-6">
        <h4 class="text-2xl my-3 font-bold">Hire a Tutor</h4>

        <div class="space-y-6">
          <div v-for="i in 4" class="flex space-x-4 items-start">
            <img
              class="h-20 w-20 rounded-full"
              src="../../assets/images/illustrations/avatar-male.png"
              alt=""
            />
            <div class="">
              <h4 class="text-lg font-semibold p-0">Sarah Harris</h4>
              <p class="my-1 text-sm">Mathematics, Science</p>
              <base-button
                styles="w-full font-bold bg-white text-primary"
                type="primary"
                size="medium"
                bgColor="#EEF2FF"
                textColor="#4F46E5"
                borderColor="#EEF2FF"
              >
                Hire
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <img
        class="py-4"
        src="../../assets/images/illustrations/afo-talk.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
definePageMeta({
  layout: "dashboard",
});

const formData = ref({
  feed: ''
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style>
.feeds .el-tabs__nav {
  width: 100%;
}

.feeds .el-tabs__nav .el-tabs__item {
  width: 50%;
}
</style>
