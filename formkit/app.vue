<script setup>
import { wait } from './utils';
import { FormKitSchema, createInput } from '@formkit/vue';
import VueMultiSelectFormKit from './formkit-components/VueMultiSelectFormKit.vue';

const ms = createInput(VueMultiSelectFormKit);

const formData = ref([])

async function handleSubmit(data) {
  await wait(3000);
  console.log(data)
}

async function username_is_unique(node) {
  const usernames = ['foo', 'bar'];

  return !usernames.includes(node.value);
}
</script>
<template>
  <div>
    <pre>{{ formData }}</pre>
  <FormKit v-model="formData" id="repeater" name="users" type="repeater" label="Users">
    <FormKit type="email" label="Email" name="email" validation="required|email" placeholder="Add email address..." />
    <FormKit type="text" label="Name" name="name" validation="required" />
    <FormKit type="toggle" name="toggle" label="Is Admin" />
  </FormKit>
  </div>
</template>