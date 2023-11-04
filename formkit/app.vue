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
    <FormKit type="form" :value="formData" @submit="handleSubmit" submit-behavior="live" submit-label="Login" :actions="false">
      <template #default="{ state }">
        <h1>Login</h1>
        <FormKit type="text" label="Username" name="username" />
        <FormKit type="password" label="Password" name="password" />
        <button :disabled="state.loading">
        {{ state.loading ? 'Loading...' : 'Login' }}</button>
      </template>
    </FormKit>
  </div>
</template>