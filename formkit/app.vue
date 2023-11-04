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

async function username_is_unique(node) {
  const usernames = ['foo', 'bar'];

  return !usernames.includes(node.value);
}
</script>
<template>
  <div>
    <FormKit type="form" :value="formData" @submit="handleSubmit" submit-label="Login">
      <template #default="{ state }">
        <h1>Login</h1>
        <FormKit type="text" label="Username" name="username" validation="(500)username_is_unique"  :validation-messages="{ username_is_unique: 'That username is already taken.'}"/>
        <FormKit type="password" label="Password" name="password" />
      </template>
    </FormKit>
  </div>
</template>