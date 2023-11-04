<script setup>
import { wait } from './utils';

const formData = ref({
  username: 'bdeshong',
  password: '',
})

async function handleSubmit(data) {
  await wait(3000);
  console.log(data)

}
</script>
<template>
  <div>
    <FormKit type="form" :value="formData" @submit="handleSubmit" submit-label="Login">
      <template #default="{ state }">
        <h1>Login</h1>
        <FormKit type="text" label="Username" name="username" :validation="[['required'], ['url'], ['length', 16, 20]]"/>
        <FormKit type="password" label="Password" name="password" />
      </template>
    </FormKit>
  </div>
</template>