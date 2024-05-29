<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-20 absolute left-0 -bottom-7 rounded-r-2xl px-20 text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
      >
        Spark Scholars Registration Form
      </div>
    </div>

    <el-form
      ref="formRef"
      :model="dynamicValidateForm"
      label-width="auto"
      class="demo-ruleForm"
      size="large"
      label-position="top"
    >
      <div class="mt-10">
        <div class="max-w-screen-2xl mt-5 w-full mx-auto">
          <h4 class="font-semibold text-2xl">Fill out this form</h4>

          <div class="px-10 mt-10 space-y-5">
            <div
              class="border rounded space-y-7 p-6"
              v-for="(domain, index) in dynamicValidateForm.child"
              :key="domain.key"
            >
              <h1 class="mb-5 font-semibold">Child {{ index + 1 }}</h1>
              <el-form-item
                :prop="'child.' + index + '.fullname'"
                :rules="[
                  {
                    required: true,
                    message: 'Please input Child name',
                    trigger: 'blur',
                  },
                  {
                    min: 6,
                    message: 'Length should be min 6',
                    trigger: 'change',
                  },
                ]"
                label="Child Full Name"
              >
                <el-input v-model="domain.fullname" />
              </el-form-item>
              <el-form-item
                :prop="'child.' + index + '.dateOfBirth'"
                class="w-full"
                size="large"
                :rules="{
                  required: true,
                  message: 'Date of Birth cannot be empty',
                  trigger: 'change',
                }"
                label="Date of Birth (MM/DD/YYYY)"
              >
                <el-date-picker
                  v-model="domain.dateOfBirth"
                  type="date"
                  popper-class="w-full"
                  class="w-full"
                  placeholder="Pick a day"
                />
              </el-form-item>
              <el-form-item
                :prop="'child.' + index + '.grade'"
                size="large"
                :rules="[
                  {
                    required: true,
                    message: 'Grade is required',
                    trigger: 'blur',
                  },
                  {
                    type: 'number',
                    message: 'Grade must be a number',
                    trigger: 'change',
                  },
                ]"
                label="Grade"
              >
                <el-input v-model.number="domain.grade" />
              </el-form-item>

              <el-button
                v-if="index > 0"
                class="mt-2"
                type="danger"
                plain
                @click.prevent="removeDomain(domain)"
              >
                Delete
              </el-button>
            </div>

            <div class="flex justify-center">
              <el-form-item class="w-1/5">
                <el-button
                  @click="addDomain"
                  :style="{
                    backgroundColor: '#4CAF50',
                    color: '#FFF',
                    height: '58px',
                    width: '100%',
                  }"
                >
                  Add Another Kid
                </el-button>
              </el-form-item>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-one text-white px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
      >
        Parent/Guardian Information:
      </div>

      <div class="max-w-screen-2xl mt-5 w-full mx-auto">
        <div class="px-10 mt-3 space-y-7">
          <el-form-item
            prop="fullname"
            :rules="[
              {
                required: true,
                message: 'Please input Parent name',
                trigger: 'blur',
              },
              { min: 6, message: 'Length should be min 6', trigger: 'change' },
            ]"
            label="Parent/Guardian Full Name"
          >
            <el-input v-model="dynamicValidateForm.fullname" />
          </el-form-item>
          <el-form-item
            prop="whatsappNumber"
            size="large"
            :rules="[
              {
                required: true,
                message: 'WhatsApp Number is required',
                trigger: 'blur',
              },
              {
                type: 'number',
                message: 'WhatsApp Number must be a number',
                trigger: 'change',
              },
            ]"
            label="WhatsApp Number"
          >
            <el-input v-model.number="dynamicValidateForm.whatsappNumber" />
          </el-form-item>
          <el-form-item
            prop="email"
            label="Email Address:"
            :rules="[
              {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="dynamicValidateForm.email" />
          </el-form-item>
          <el-form-item
            prop="address"
            :rules="[
              {
                required: true,
                message: 'Please input address name',
                trigger: 'blur',
              },
              { min: 6, message: 'Length should be min 6', trigger: 'change' },
            ]"
            label="Home Address"
          >
            <el-input v-model="dynamicValidateForm.address" />
          </el-form-item>
        </div>
      </div>

      <div
        class="bg-gray-one text-white px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
      >
        Additional Information
      </div>
      <div class="max-w-screen-2xl mt-5 w-full mx-auto">
        <div class="px-10 mt-3 space-y-5">
          <el-form-item
            prop="contactMethod"
            :rules="[
              {
                required: true,
                message: 'Please select preferred contact method',
                trigger: 'change',
              },
            ]"
            label="Preferred Contact Method"
          >
            <el-radio-group v-model="dynamicValidateForm.contactMethod">
              <el-radio value="email">Email</el-radio>
              <el-radio value="whatsapp">WhatsApp</el-radio>
              <el-radio value="phone">Phone Call</el-radio>
              <div class="flex">
                <el-radio value="additional"
                  >Additional peripherals (specify)</el-radio
                >
                <el-input
                  v-if="dynamicValidateForm.contactMethod === 'additional'"
                  v-model="dynamicValidateForm.additionalContactMethod"
                />
              </div>
            </el-radio-group>
          </el-form-item>

          <el-form-item
            prop="howDidYouHearAboutUs"
            :rules="[
              {
                required: true,
                message: 'Please select option',
                trigger: 'change',
              },
            ]"
            label="How Did You Hear About Spark Scholars?"
          >
            <el-radio-group v-model="dynamicValidateForm.howDidYouHearAboutUs">
              <el-radio value="social">Social Media</el-radio>
              <el-radio value="friends">Friend/Family</el-radio>
              <el-radio value="school">School</el-radio>
              <div class="flex">
                <el-radio value="others">Other</el-radio>
                <el-input
                  v-if="dynamicValidateForm.howDidYouHearAboutUs === 'others'"
                  v-model="dynamicValidateForm.othersHowDidYouHearAboutUs"
                />
              </div>
            </el-radio-group>
          </el-form-item>

          <el-form-item
            prop="agree"
            :rules="[
              {
                required: true,
                message: 'Please agree to the terms and conditions',
                trigger: 'change',
              },
            ]"
            label="Consent and Agreement"
          >
            <el-checkbox v-model="dynamicValidateForm.agree" size="large">
              I agree to the terms and conditions of the Spark Scholars program.
              I consent to my child’s participation in the Spark Scholars
              program
            </el-checkbox>
          </el-form-item>
        </div>
        <div class="mt-20 px-10">
          <el-button
            :loading="loading"
            @click.prevent="submitForm(formRef)"
            :style="{
              backgroundColor: '#4CAF50',
              color: '#FFF',
              height: '58px',
              width: '100%',
            }"
          >
            Submit
          </el-button>
        </div>
      </div>
    </el-form>
  </div>

  <div
    v-if="showOverlay"
    class="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="w-3/12 p-10 rounded-lg text-center">
      <h2 class="text-4xl font-bold text-green-two">Thank You!</h2>

      <button
        @click="closeOverlay"
        class="h-16 w-full mt-3 text-white right-0 bg-green-two btn"
      >
        Back Home
      </button>
      <div>
        Would you like to donate?
        <nuxt-link to="/scholars/donate" class="font-semibold text-green-two">
          Click here
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { storeToRefs } from "pinia";
import { useSparkStore } from "~/store/spark";

const sparkStore = useSparkStore();

const showOverlay = ref(false);

const closeOverlay = () => {
  showOverlay.value = false;
};

const formRef = ref<FormInstance>();
const loading = ref(false);
const dynamicValidateForm = reactive<{
  child: DomainItem[];
  email: string;
  whatsappNumber: string;
  fullname: string;
  address: string;
  contactMethod: string;
  additionalContactMethod: string;
  howDidYouHearAboutUs: string;
  othersHowDidYouHearAboutUs: string;
  agree: string;
}>({
  child: [
    {
      key: 1,
      fullname: "",
      dateOfBirth: "",
      grade: 0,
    },
  ],
  fullname: "",
  whatsappNumber: "",
  email: "",
  address: "",
  contactMethod: "",
  additionalContactMethod: "",
  howDidYouHearAboutUs: "",
  othersHowDidYouHearAboutUs: "",
  agree: "",
});

interface DomainItem {
  key: number;
  fullname: string;
  dateOfBirth: string;
  grade: number;
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.child.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.child.splice(index, 1);
  }
};

const addDomain = () => {
  dynamicValidateForm.child.push({
    key: Date.now(),
    fullname: "",
    dateOfBirth: "",
    grade: 0,
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async(valid, fields) => {
    if (valid) {
      loading.value = true;

      const payload = {
        email: dynamicValidateForm.email,
        fullname: dynamicValidateForm.fullname,
        whatsappNumber: dynamicValidateForm.whatsappNumber,
        phoneNumber: dynamicValidateForm.whatsappNumber, // Assuming it's intentional to use whatsappNumber for both phoneNumber and whatsappNumber
        address: dynamicValidateForm.address,
        contactMethod:
          dynamicValidateForm.contactMethod === "additional"
            ? dynamicValidateForm.additionalContactMethod
            : dynamicValidateForm.contactMethod,
        howDidYouHearAboutUs:
          dynamicValidateForm.howDidYouHearAboutUs === "others"
            ? dynamicValidateForm.othersHowDidYouHearAboutUs
            : dynamicValidateForm.howDidYouHearAboutUs,
        child: dynamicValidateForm.child.map((child) => ({
          fullName: child.fullname,
          dateOfBirth: child.dateOfBirth,
          grade: child.grade,
        })),
      };
      console.log(payload);
      try {
        loading.value = true;
        const response = await sparkStore.createSparkScholar(payload);
        console.log(response)
        showOverlay.value = true;
      } catch (error) {
      } finally {
        loading.value = false;
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped>
/* Add your styles here */
</style>
