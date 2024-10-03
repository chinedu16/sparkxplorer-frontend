<template>
  <el-form-item :error="errorMessage">
    <div class="w-full">
      <div v-if="label" class="mb-2 text-sm font-medium">{{ label }}</div>
      <div v-if="type === 'phone'" class="flex custom-select">
        <el-select class="phone-code custom-input" v-model="selectedCountryCode" placeholder="Code"
          @change="emitPhoneCode">
          <el-option v-for="option in countryCodes" :key="option.code" :label="option.label" :value="option.code">
            <span>{{ option.label }}</span>
          </el-option>
        </el-select>
        <el-input v-model="internalValue" :type="type" :placeholder="placeholder" :class="[
          'custom-input phone',
          inputClass,
          variantClass,
          { 'is-focused': isFocused },
        ]" size="large" @focus="handleFocus" @blur="handleBlur">
        </el-input>
      </div>
      <el-input v-else v-model="internalValue" :disabled="disabled" :type="passwordVisible ? 'text' : type" :rows="row"
        :placeholder="placeholder" :class="[
          'custom-input',
          inputClass,
          variantClass,
          { 'is-focused': isFocused },
        ]" size="large" @focus="handleFocus" @blur="handleBlur">
        <!-- Prefix Icon -->
        <template v-if="iconPrefix" #prefix>
          <img :src="`/icons/${iconPrefix}.svg`" alt="prefix-icon" class="icon-prefix" />
        </template>

        <!-- Suffix Icon -->
        <template v-if="type === 'password'" #suffix>
          <img :src="passwordVisible ? '/icons/eye-off.svg' : '/icons/eye-off.svg'" alt="toggle-password-visibility"
            class="icon-suffix" @click="togglePasswordVisibility" />
        </template>
        <template v-else-if="iconSuffix" #suffix>
          <img :src="`/icons/${iconSuffix}.svg`" alt="suffix-icon" class="icon-suffix" />
        </template>
      </el-input>
    </div>
  </el-form-item>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { ref, watch, computed } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, default: '' },
  disabled: { type: Boolean, required: false },
  placeholder: { type: String, required: true },
  type: {
    type: String as () =>
      | "text"
      | "email"
      | "password"
      | "number"
      | "textarea"
      | "phone",
    required: true,
  },
  iconPrefix: { type: String, required: false },
  iconSuffix: { type: String, required: false },
  inputClass: { type: String, default: "" },
  row: { type: Number, default: 4 },
  variant: { type: String, default: "default" },
});

const emit = defineEmits(["update:phoneCode"]);

const { value, errorMessage } = useField(props.name);
const internalValue = ref<string | number | undefined>(
  value.value as string | number
);
const isFocused = ref(false);
const passwordVisible = ref(false);
const selectedCountryCode = ref("+1");

const countryCodes = ref([
  { label: "+1 (USA/Canada)", code: "+1" },
  { label: "+44 (UK)", code: "+44" },
  { label: "+234 (Nigeria)", code: "+234" },
]);

watch(internalValue, (newVal) => {
  value.value = newVal;
});

watch(value, (newVal) => {
  internalValue.value = newVal as string | number;
});

const variantClass = computed(() => {
  if (props.variant === "transparent") {
    return "bg-transparent border-blue-500";
  }
  return "";
});

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const emitPhoneCode = () => {
  emit("update:phoneCode", selectedCountryCode.value);
};
</script>

<style>
.custom-input .el-input__wrapper {
  border-radius: 123px !important;
  height: 45px;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}

.custom-select .el-select__wrapper {
  border-radius: 123px 0px 0px 123px !important;
  height: 45px;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}

.custom-select .el-input__wrapper {
  border-radius: 0px 123px 123px 0px !important;
  height: 45px;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}

.custom-select .phone-code {
  width: 15%;
}

.custom-select .phone {
  width: 85%;
}

.custom-input .el-input__wrapper:focus-within {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
}

.custom-input.is-focused .el-input__wrapper {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
}

.icon-prefix,
.icon-suffix {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.custom-input.bg-transparent .el-input__wrapper {
  background-color: transparent !important;
  border-color: #3b82f6 !important;
}

.phone-input-group {
  gap: 8px;
}
</style>
