<template>
  <el-dialog :model-value="openModal" title="" width="500">
    <div>
      <div>
        <slot name="icon"></slot>
        <h3 class="mt-6 font-bold text-lg text-gray-two">{{ dialogTitle }}</h3>
        <p class="text-gray-one">{{ dialogMessage }}</p>
      </div>
      <div class="dialog-footer">
        <div class="mt-8 justify-end flex space-x-2">
          <base-button
            @click="cancelAction"
            styles="w-full font-bold bg-white text-primary"
            type="primary"
            bgColor="#FFFFFF"
            textColor="#475569"
            borderColor="#CBD5E1"
          >
            Cancel
          </base-button>
          <base-button
            @click="confirmAction"
            styles="w-fit font-bold"
            type="primary"
            :bgColor="confirmButtonColor"
            textColor="#ffffff"
            :borderColor="confirmButtonColor"
          >
            <slot name="confirm-icon"></slot>
            {{ confirmButtonText }}
          </base-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "submit"): void;
}>();

const props = defineProps<{
  openModal: boolean;
  dialogTitle: string;
  dialogMessage: string;
  confirmButtonText: string;
  confirmButtonColor: string;
  onCancel?: () => void; // Optional
  onConfirm: () => void;
}>();

function cancelAction() {
  if (props.onCancel) {
    props.onCancel();
  } else {
    console.warn("onCancel is not defined");
  }
}

function confirmAction() {
  props.onConfirm();
  emit("submit");
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
