<template>
  <div class="flex flex-col justify-center items-center">
    <img v-if="src" :src="src" alt="Avatar" class="rounded-full w-20 h-20" />
    <div
      v-else
      class="flex items-center justify-center rounded-full w-28 h-28 bg-accent dark:bg-accent-dark shadow-xl"
    >
      <p class="text-2xl text-tertiary dark:text-tertiary-dark">
        {{ props.username ? props.username.charAt(0).toUpperCase() : "?" }}
      </p>
    </div>

    <div v-if="isEdit" class="flex justify-center mt-4">
      <TheButton
        v-if="!uploaded"
        classType="outlined"
        class="!m-0"
        for="single"
        :content="uploading ? 'Uploading ...' : 'Upload'"
      />
      <input
        style="position: absolute; visibility: hidden"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["path", "username", "isEdit"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const supabase = useSupabaseClient();

const uploading = ref(false);
const uploaded = ref(false);
const src = ref("");
const files = ref();

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .download(path.value);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    console.error("Error downloading image: ", error.message);
  }
};

const uploadAvatar = async (evt) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;

    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    emit("update:path", filePath);
    emit("upload");
  } catch (error) {
    alert(error.message);
  } finally {
    uploading.value = false;
    uploaded.value = true;
  }
};

downloadImage();

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>
