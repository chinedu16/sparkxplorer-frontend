<template>
  <div>
    <div class="flex justify-between mb-6">
      <h2 class="font-extrabold text-gray-two text-3xl">Settings</h2>
    </div>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="General" name="first">
          <div class="">
            <div>
              <h2 class="font-bold text-xl">Your Profile</h2>
              <p class="text-gray-one">
                Please update your profile settings here
              </p>
            </div>
            <div class="border-t border-gray-four border-b py-8 mt-8 space-y-6">
              <div class="flex">
                <label class="font-bold w-1/5" for="">First Name</label>
                <div class="w-2/5">
                  <base-input
                    name="firstname"
                    label=""
                    type="text"
                    placeholder="Enter first name"
                    icon-prefix="user"
                    v-model:value="email"
                  />
                </div>
              </div>
              <div class="flex">
                <label class="font-bold w-1/5" for="">Last Name</label>
                <div class="w-2/5">
                  <base-input
                    name="lastname"
                    label=""
                    type="text"
                    placeholder="Enter last name"
                    icon-prefix="user"
                    v-model:value="email"
                  />
                </div>
              </div>
            </div>
            <div class="border-b border-gray-four py-8 space-y-6">
              <div class="flex">
                <label class="font-bold w-1/5" for="">Phone Number</label>
                <div class="w-2/5">
                  <base-input
                    name="phone"
                    label=""
                    type="text"
                    placeholder="Enter phone number"
                    icon-prefix=""
                    v-model:value="email"
                  />
                </div>
              </div>

              <div class="flex">
                <label class="font-bold w-1/5" for="">Email</label>
                <div class="w-2/5">
                  <base-input
                    name="email"
                    label=""
                    type="email"
                    placeholder="Enter email address"
                    icon-prefix=""
                    v-model:value="email"
                  />
                </div>
              </div>
            </div>
            <div class="border-b border-gray-four py-8 space-y-6">
              <div class="flex">
                <label class="font-bold w-1/5" for="">Profile Picture</label>
                <div class="w-2/5 flex space-x-3">
                  <div
                    class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
                  >
                    OD
                  </div>
                  <base-button
                    styles="w-full font-bold"
                    size="large"
                    type="primary"
                  >
                    <div class="flex items-center space-x-2">
                      <span>Upload profile avatar</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 0.1875H1.75C1.3356 0.1875 0.938171 0.35212 0.645146 0.645146C0.35212 0.938171 0.1875 1.3356 0.1875 1.75V14.25C0.1875 14.6644 0.35212 15.0618 0.645146 15.3549C0.938171 15.6479 1.3356 15.8125 1.75 15.8125H14.25C14.6644 15.8125 15.0618 15.6479 15.3549 15.3549C15.6479 15.0618 15.8125 14.6644 15.8125 14.25V1.75C15.8125 1.3356 15.6479 0.938171 15.3549 0.645146C15.0618 0.35212 14.6644 0.1875 14.25 0.1875ZM13.9375 2.0625V7.04063L12.5422 5.64531C12.2492 5.35239 11.8518 5.18783 11.4375 5.18783C11.0232 5.18783 10.6258 5.35239 10.3328 5.64531L2.0625 13.9156V2.0625H13.9375ZM4.69219 13.9375L11.4375 7.19219L13.9375 9.69219V13.9375H4.69219ZM3.9375 5.5C3.9375 5.19097 4.02914 4.88887 4.20083 4.63192C4.37252 4.37497 4.61655 4.1747 4.90206 4.05644C5.18757 3.93818 5.50173 3.90723 5.80483 3.96752C6.10792 4.02781 6.38633 4.17663 6.60485 4.39515C6.82337 4.61367 6.97219 4.89208 7.03248 5.19517C7.09277 5.49827 7.06182 5.81243 6.94356 6.09794C6.8253 6.38345 6.62503 6.62748 6.36808 6.79917C6.11113 6.97086 5.80903 7.0625 5.5 7.0625C5.0856 7.0625 4.68817 6.89788 4.39515 6.60485C4.10212 6.31183 3.9375 5.9144 3.9375 5.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </base-button>
                </div>
              </div>
            </div>
            <div class="border-b border-gray-four py-8 space-y-6">
              <div class="flex">
                <label class="font-bold w-1/5" for="">Notifications</label>
                <div class="w-2/5 space-y-6">
                  <el-checkbox v-model="formData.checked" size="large">
                    <div class="">
                      <h3 class="font-semibold">Performance Update</h3>
                      <p class="text-gray-one mt-2 font-normal">
                        You will be notified via email about your scholar’s
                        performance.
                      </p>
                    </div>
                  </el-checkbox>
                  <el-checkbox v-model="formData.checked" size="large">
                    <div class="">
                      <h3 class="font-semibold">Login Alert</h3>
                      <p class="text-gray-one mt-2 font-normal">
                        You will be notified via email when you or your scholars
                        login.
                      </p>
                    </div>
                  </el-checkbox>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6 space-x-3">
              <base-button
                styles="w-full font-bold bg-white text-primary"
                size="large"
                type="primary"
                bgColor="#ffffff"
                textColor="#475569"
                borderColor="#475569"
              >
                <div class="flex items-center space-x-2">
                  <span>Cancel</span>
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
                styles="w-full font-bold"
                size="large"
                type="primary"
              >
                <div class="flex items-center space-x-2">
                  <span>Save</span>
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
        </el-tab-pane>
        <el-tab-pane label="Performance Token" name="second">
          <settings-performance-token />
        </el-tab-pane>
        <el-tab-pane label="Security" name="third">
          <div class="">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="font-bold text-xl">Account Security</h2>
                <p class="text-gray-one">
                  You can change your account password here
                </p>
              </div>
              <base-button
                @click="openSuccessReset = true"
                styles="w-full font-bold"
                size="large"
                type="primary"
              >
                <div class="flex items-center space-x-2">Reset Password</div>
              </base-button>
            </div>
            <div class="border-tborder-gray-four border-b py-8 mt-8 space-y-6">
              <div class="flex">
                <label class="font-bold w-1/5" for="">Change Password</label>
                <div class="w-2/5">
                  <base-input
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter change password"
                    icon-prefix="password"
                    v-model:value="password"
                  />
                </div>
              </div>
              <div class="flex">
                <label class="font-bold w-1/5" for=""
                  >Confirm New Password</label
                >
                <div class="w-2/5">
                  <base-input
                    name="confirm_password"
                    label=""
                    type="password"
                    placeholder="Enter change password"
                    icon-prefix="password"
                    v-model:value="confirm_password"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6 space-x-3">
              <base-button
                styles="w-full font-bold bg-white text-primary"
                size="large"
                type="primary"
                bgColor="#ffffff"
                textColor="#475569"
                borderColor="#475569"
              >
                <div class="flex items-center space-x-2">
                  <span>Cancel</span>
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
                styles="w-full font-bold"
                size="large"
                type="primary"
              >
                <div class="flex items-center space-x-2">
                  <span>Save</span>
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
        </el-tab-pane>
      </el-tabs>
    </div>

    <el-dialog v-model="openSuccessReset" title="" width="500">
      <div class="">
        <div
          class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1078 2.375L11 7.97375L4.89219 2.375H17.1078ZM3.125 13.625V3.8075L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L18.875 3.8075V13.625H3.125Z"
              fill="#4F46E5"
            />
          </svg>
        </div>
        <h3 class="mt-6 font-bold text-lg text-gray-two">Check your inbox</h3>
        <p class="text-gray-one">
          A password reset link has been sent to he***@mymail.com
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8">
            <base-button
              @click="openSuccessReset = false"
              styles="w-fit font-bold"
              size="large"
              type="primary"
            >
              Okay
            </base-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">

const activeName = ref("first");
const password = ref("");
const confirm_password = ref("");
const openSuccessReset = ref(false);


definePageMeta({
  layout: "dashboard",
});

const email = ref();
const formData = ref({
  checked: false,
});
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 40px 0px;
}
</style>
