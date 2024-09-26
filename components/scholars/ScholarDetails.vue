<template>
    <div class="">
      <div>
        <h2 class="font-bold text-xl">Scholar’s Profile Details</h2>
        <p class="text-gray-one">Please update your profile settings here</p>
      </div>

      <div class="border-b border-gray-four py-8 space-y-6">
        <div class="flex">
          <label class="font-bold w-1/5" for="">Profile Picture</label>
          <div class="w-2/5 flex justify-between space-x-3">
            <div
              v-if="!formData.picture_url"
              class="w-20 h-20 bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base"
            >
              OD
            </div>
            <div
              v-else
              class="w-20 h-20 bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base"
            >
              <img
                class="rounded-full h-full w-full object-cover"
                :src="formData.picture_url"
                alt=""
              />
            </div>
            <div class="w-5/6">
              <base-file-upload
                name="uploaded_files"
                btn-text="Upload profile avatar"
                @uploadedUrl="handleUploadedUrl"
                @update:fileList="handleFileListUpdate"
              />
            </div>
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
              type="phone"
              placeholder="Enter Phone Number"
              v-model:value="formData.phone"
              v-model:phoneCode="formData.phoneCode"
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
              :disabled="true"
              placeholder="Enter email address"
              icon-prefix=""
              v-model:value="formData.email"
            />
          </div>
        </div>
      </div>
      <div class="border-b border-gray-four py-8 space-y-6">
    
  
        <div class="flex">
          <label class="font-bold w-1/5" for="">Login Email</label>
          <div class="w-2/5">
            <base-input
              name="email"
              label=""
              type="email"
              placeholder="Enter email address"
              icon-prefix=""
              v-model:value="formData.email"
            />
          </div>
        </div>
        <div class="flex">
          <label class="font-bold w-1/5" for="">Change Password</label>
          <div class="w-2/5">
            <base-input
              name="email"
              label=""
              type="email"
              placeholder="Enter email address"
              icon-prefix=""
              v-model:value="formData.email"
            />
          </div>
        </div>
        <div class="flex">
          <label class="font-bold w-1/5" for="">Confirm New Password</label>
          <div class="w-2/5">
            <base-input
              name="email"
              label=""
              type="email"
              placeholder="Enter email address"
              icon-prefix=""
              v-model:value="formData.email"
            />
          </div>
        </div>
      </div>
      
  
      <div class="flex justify-end mt-6 space-x-3">
        <base-button
          styles="w-full font-bold bg-white text-primary"
          size="large"
          @click="goBack"
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
          @click="onSubmit"
          :loading="loading"
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
  </template>
  
  <script setup lang="ts">
  import { useForm } from "vee-validate";
  import * as yup from "yup";
  import { useUserStore } from "@/store/user";
  
  const userStore = useUserStore();
  
  const router = useRouter();
  
  const emit = defineEmits(["done"]);
  
  const { handleError } = useErrorHandler();
  
  const base64File = ref("");
  const loading = ref(false);
  
  const formData = ref({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    phoneCode: "+1",
    notification_performance: false,
    notification_login: false,
    picture_url: "",
    id: "",
  });
  
  const validationSchema = yup.object({
    firstname: yup
      .string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters")
      .max(50, "First Name cannot exceed 50 characters"),
    lastname: yup
      .string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters")
      .max(50, "Last Name cannot exceed 50 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number can only contain digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits"),
  });
  
  const { handleSubmit, setFieldValue } = useForm({
    validationSchema,
    initialValues: formData.value,
  });
  
  onMounted(async () => {
    const { data } = await userStore.getCurrentUser();
    if (data.success) {
      const user = data.data;
      setFieldValue("firstname", user.parent.first_name);
      setFieldValue("lastname", user.parent.last_name);
      setFieldValue("email", user.email);
      setFieldValue("phone", user.parent.mobile_number);
      setFieldValue("phoneCode", user.parent.mobile_code);
      setFieldValue("picture_url", user.picture_url);
      formData.value.picture_url = user.picture_url;
      formData.value.id = user.id;
    }
  });
  
  const handleUploadedUrl = (url: string) => {
    formData.value.picture_url = url;
    base64File.value = url;
  };
  
  const handleFileListUpdate = (fileList: any) => {
    console.log("Files:", fileList);
  };
  
  const goBack = () => {
    router.go(-1);
  };
  
  const onSubmit = handleSubmit(async (values) => {
    const payload = {
      id: formData.value.id,
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      mobile_code: values.phoneCode,
      mobile_number: values.phone,
      picture_url: base64File.value || formData.value.picture_url,
    };
  
    try {
      loading.value = true;
      const response = await userStore.updateUser(payload);
      if (response?.data) {
        await userStore.getCurrentUser();
        ElNotification({
          title: "Success",
          message: `Details was updated successfully`,
          type: "success",
        });
      }
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped></style>
  