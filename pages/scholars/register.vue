<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-14 lg:h-20 absolute left-0 -bottom-7 rounded-r-2xl px-10 md:px-20 lg:text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
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
          <h4 class="px-5 md:px-10 font-semibold lg:text-2xl">
            Fill out this form
          </h4>

          <div class="px-5 md:px-10 mt-10 space-y-5">
            <div
              class="border rounded space-y-7 p-6"
              v-for="(domain, index) in dynamicValidateForm.child"
              :key="domain.key"
            >
              <h1 class="mb-5 font-semibold">Child {{ index + 1 }}</h1>
              <el-form-item
                :prop="'child.' + index + '.firstname'"
                :rules="[
                  {
                    required: true,
                    message: 'Please input Child firstname',
                    trigger: 'blur',
                  },
                  {
                    min: 6,
                    message: 'Length should be min 6',
                    trigger: 'change',
                  },
                ]"
                label="First Name"
              >
                <el-input v-model="domain.firstname" />
              </el-form-item>
              <el-form-item
                :prop="'child.' + index + '.lastname'"
                :rules="[
                  {
                    required: true,
                    message: 'Please input Child lastname',
                    trigger: 'blur',
                  },
                  {
                    min: 6,
                    message: 'Length should be min 6',
                    trigger: 'change',
                  },
                ]"
                label="Last Name"
              >
                <el-input v-model="domain.lastname" />
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
                ]"
                label="Grade"
              >
                <el-select v-model="domain.grade" placeholder="Select Grade">
                  <el-option label="Pre-K" value="Pre-K" />
                  <el-option label="Kindergarten" value="Kindergarten" />
                  <el-option label="First Grade" value="First Grade" />
                  <el-option label="Second Grade" value="Second Grade" />
                  <el-option label="Third Grade" value="Third Grade" />
                  <el-option label="Fourth Grade" value="Fourth Grade" />
                  <el-option label="Fifth Grade" value="Fifth Grade" />
                  <el-option label="Sixth Grade" value="Sixth Grade" />
                  <el-option label="Seventh Grade" value="Seventh Grade" />
                  <el-option label="Eighth Grade" value="Eighth Grade" />
                  <el-option label="Ninth Grade" value="Ninth Grade" />
                  <el-option label="Tenth Grade" value="Tenth Grade" />
                  <el-option label="Eleventh Grade" value="Eleventh Grade" />
                  <el-option label="Twelfth Grade" value="Twelfth Grade" />
                </el-select>
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
              <el-form-item class="md:w-1/5">
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
        class="bg-gray-one text-white px-10 md:px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
      >
        Parent/Guardian Information:
      </div>

      <div class="max-w-screen-2xl mt-5 w-full mx-auto">
        <div class="px-5 md:px-10 mt-3 space-y-7">
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
            prop="whatsappNumber"
            size="large"
            :rules="[
              {
                required: true,
                message: 'WhatsApp Number is required',
                trigger: 'blur',
              },
              {
                type: 'string',
                message: 'WhatsApp Number must be a number',
                trigger: 'change',
              },
            ]"
            label="WhatsApp Number"
          >
            <el-input-group
              size="large"
              class="whatsapp-input-group flex w-full space-x-2"
            >
              <el-select
                v-model="dynamicValidateForm.countryCode"
                placeholder="Country Code"
                style="width: 120px"
              >
                <el-option label="+1" value="+1" />
                <el-option label="+44" value="+44" />
                <el-option label="+91" value="+91" />
              </el-select>
              <el-input
                v-model.number="dynamicValidateForm.whatsappNumber"
                placeholder="WhatsApp Number"
                class="for-number"
              />
            </el-input-group>
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
        class="bg-gray-one text-white px-10 md:px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
      >
        Additional Information
      </div>
      <div class="max-w-screen-2xl mt-5 w-full mx-auto">
        <div class="px-5 md:px-10 mt-3 space-y-7">
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
            <el-checkbox
              class="tandc mt-5"
              v-model="dynamicValidateForm.agree"
              size="large"
            >
              I agree to the terms and conditions of the Spark Scholars program.
              I consent to my child’s participation in the Spark Scholars
              program
            </el-checkbox>
          </el-form-item>
        </div>
        <div class="mt-20 px-5 md:px-10">
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

  <el-dialog v-model="showOverlay" title="Continue to Donate" width="80%">
    <div>
      <div class="mt-7">
        <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5">
          <span
            v-for="items in amountOptions"
            @click="handleAmountSelected(items.amount)"
            class="text-center py-4 px-0 font-semibold cursor-pointer lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
            :class="[items.amount === selectedAmount ? 'bg-green-two text-white' : 'bg-white']"
          >
            ${{items.amount}}
          </span>
          
        </div>

        <div class="mt-10 flex items-center space-x-2">
          <span class="font-semibold w-1/5 lg:font-bold text-sm lg:text-xl"
            >Other Amount:
          </span>

          <el-input
            v-model="customAmount"
            size="large"
            class="w-full"
            placeholder="Please enter amount"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showOverlay = false">Cancel</el-button>
        <el-button type="primary" @click="showOverlay = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { useSparkStore } from "~/store/spark";

const sparkStore = useSparkStore();

const showOverlay = ref(true);

const closeOverlay = () => {
  showOverlay.value = false;
};

const formRef = ref<FormInstance>();
const loading = ref(false);
const amountOptions = ref([
  {
    id: 1,
    amount: 0
  },
  {
    id: 2,
    amount: 50
  },
  {
    id: 3,
    amount: 100
  },
  {
    id: 4,
    amount: 150
  },
  {
    id: 5,
    amount: 200
  },
  {
    id: 6,
    amount: 250
  },
  {
    id: 7,
    amount: 300
  },
  {
    id: 8,
    amount: 350
  },
  {
    id: 9,
    amount: 400
  },
  {
    id: 10,
    amount: 450
  },
  {
    id: 11,
    amount: 500
  }
]);
const selectedAmount = ref(50)
const customAmount = ref("");
const dynamicValidateForm = reactive<{
  child: DomainItem[];
  email: string;
  whatsappNumber: string;
  countryCode: string;
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
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      grade: "",
    },
  ],
  fullname: "",
  whatsappNumber: "",
  countryCode: "",
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
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  grade: string;
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.child.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.child.splice(index, 1);
  }
};

const handleAmountSelected = (params: number) => {
  selectedAmount.value = params
}

const addDomain = () => {
  dynamicValidateForm.child.push({
    key: Date.now(),
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    grade: "",
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true;

      const payload = {
        email: dynamicValidateForm.email,
        fullname: dynamicValidateForm.fullname,
        whatsappNumber: dynamicValidateForm.whatsappNumber,
        countryCode: dynamicValidateForm.countryCode,
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
          firstname: child.firstname,
          lastname: child.lastname,
          dateOfBirth: child.dateOfBirth,
          grade: child.grade,
        })),
      };
      console.log(payload);
      try {
        loading.value = true;
        const response = await sparkStore.createSparkScholar(payload);
        console.log(response);
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

<style>
/* Add your styles here */

.tandc .el-checkbox__label {
  /* display: none !important; */
  white-space: normal;
  line-height: 21px;
}

.whatsapp-input-group .el-input,
.whatsapp-input-group .el-select {
  display: inline-block;
  vertical-align: middle;
}

.whatsapp-input-group .el-input .el-input__wrapper {
  width: 100%;
}
</style>
