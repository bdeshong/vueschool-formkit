import { DefaultConfigOptions } from "@formkit/vue";

const config: DefaultConfigOptions = {
    theme: "genesis",
    rules: {
        username_is_unique(node) {
            const usernames = ['foo', 'bar'];
          
            return !usernames.includes(node.value as string);
          }
    }
}

export default config;