<template>
  <div
    class="file-upload w-full border border-dotted p-2 border-gray-five rounded-3xl"
  >
    <el-form-item :error="errorMessage">
      <el-upload
        v-model:file-list="internalFileList"
        class="upload-demo"
        :multiple="multiple"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :file-list="internalFileList"
        :limit="limit"
        :before-upload="beforeUpload"
        list-type="picture"
      >
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-primary mb-2 font-bold">{{ title }}</h1>
          <p class="text-sm mb-6">{{ tip }}</p>
          <base-button styles="w-full text-sm font-bold" size="medium" type="primary">
            <div class="flex items-center space-x-2">
              <span>Browse File</span>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5383 7.66256L9.91328 13.2876C9.73716 13.4637 9.49829 13.5626 9.24922 13.5626C9.00015 13.5626 8.76128 13.4637 8.58516 13.2876C8.40904 13.1114 8.31009 12.8726 8.31009 12.6235C8.31009 12.3744 8.40904 12.1356 8.58516 11.9594L12.6094 7.93678H1.125C0.87636 7.93678 0.637903 7.83801 0.462087 7.66219C0.286272 7.48638 0.1875 7.24792 0.1875 6.99928C0.1875 6.75064 0.286272 6.51218 0.462087 6.33637C0.637903 6.16055 0.87636 6.06178 1.125 6.06178H12.6094L8.58672 2.03678C8.4106 1.86066 8.31166 1.62179 8.31166 1.37272C8.31166 1.12365 8.4106 0.884778 8.58672 0.708657C8.76284 0.532537 9.00171 0.433594 9.25078 0.433594C9.49985 0.433594 9.73872 0.532537 9.91484 0.708657L15.5398 6.33366C15.6273 6.42087 15.6966 6.5245 15.7438 6.63858C15.7911 6.75266 15.8153 6.87495 15.8152 6.99844C15.815 7.12192 15.7905 7.24415 15.743 7.35812C15.6955 7.4721 15.6259 7.57556 15.5383 7.66256Z"
                  fill="white"
                />
              </svg>
            </div>
          </base-button>
        </div>
      </el-upload>
    </el-form-item>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from "vue";
import { useField } from "vee-validate";
import type { UploadProps, UploadUserFile } from "element-plus";

// Define props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  limit: {
    type: Number,
    default: 3,
  },
  tip: {
    type: String,
    default: "jpg/png files with a size less than 500kb",
  },
  title: {
    type: String,
    default: "Upload profile picture",
  },
});

const emit = defineEmits(["update:fileList", "uploadedBase64"]);

const { value: fileList, errorMessage } = useField<UploadUserFile[]>(props.name);

const internalFileList = ref<UploadUserFile[]>(fileList.value || []);

watch(internalFileList, (newFileList) => {
  fileList.value = newFileList;
  emit("update:fileList", newFileList);
});

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log("File removed:", uploadFile);
  // Optional: Update internalFileList if needed
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  console.log("File preview:", file);
};

const handleSuccess: UploadProps["onSuccess"] = (response, file, fileList) => {
  console.log("File uploaded successfully:", file);
  // Ensure internalFileList is updated correctly
  internalFileList.value = fileList;

  // Convert the uploaded file to base64 and emit it
  convertToBase64(file.raw);
};

const beforeUpload = (file: File) => {
  const isJPG = file.type === "image/jpeg" || file.type === "image/png";
  const isLt500kb = file.size / 1024 < 500;

  if (!isJPG) {
    console.error("You can only upload JPG/PNG files!");
  }
  if (!isLt500kb) {
    console.error("File size must be less than 500kb!");
  }

  return isJPG && isLt500kb;
};

// Convert file to Base64 string and emit it
const convertToBase64 = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const base64String = reader.result as string;
    emit("uploadedBase64", base64String);
  };
  reader.onerror = (error) => {
    console.error("Error converting file to base64:", error);
  };
};
</script>

<style>
.upload-demo .el-upload__tip {
  color: #666;
}

.file-upload .el-form-item__content {
  width: 100% !important;
}

.file-upload .upload-demo {
  width: 100% !important;
}

.file-upload .el-upload {
  width: 100% !important;
}
</style>
