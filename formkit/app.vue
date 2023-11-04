<template>
  <div>
    <FormKit type="text" label="Username" name="username" help="Pick a username" validation="required|matches:/^@[a-zA-Z]+$/|length:5" value="@useFormKit" prefix-icon="avatarMan"/>
    <FormKit type="select" />
    <FormKit type="textarea" />
  </div>
</template>
