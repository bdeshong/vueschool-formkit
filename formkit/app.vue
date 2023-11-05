<script setup>
import { wait } from './utils';
import { FormKitSchema, createInput } from '@formkit/vue';
import VueMultiSelectFormKit from './formkit-components/VueMultiSelectFormKit.vue';

const ms = createInput(VueMultiSelectFormKit);

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
    <FormKitSchema :data="{
      formData,
      attrs: {
        onSubmit: handleSubmit,
      }
    }" :schema="[
        {
          $formkit: 'form',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          children: [
            {
              $el: 'h1',
              children: 'Login',
            },
            {
              $formkit: 'text', label: 'Username', name: 'username', validation: '(500)username_is_unique', help: 'Please fill out your username'
            },
            {
              $formkit: 'password', label: 'Password', name: 'password', if: '$value.username'
            },
            {
              $formkit: ms,
              label: 'Framework',
              value: 'Vue',
              options: ['Vue', 'React', 'Svelte'],
              multiple: true
            }
          ]
        },
      ]" />

  </div>
</template>