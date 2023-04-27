<template>
    <div h-100 w-100 bg-red flex justify-center items-center flex-col>
        <SayHello c="#fff" v-model="count" name="Li Hua">
            <template></template>
        </SayHello>
    </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { SayHello } from "~/components/SayHello";
const count = ref(1);
</script>

<style scoped lang="ts"></style>

<style scoped></style>
