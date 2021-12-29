<template>
    <div class="m-1 text-xs">
        <label class="primary">Example input</label>
        <span class="relative">
            <input
                v-model="localValue"
                class="border-2 rounded p-1 outline-none"
                type="text"
                :placeholder="placeholder"
                autofocus
            />
            <CloseIcon
                class="absolute w-4 right-0 top-0 mr-1 cursor-pointer hover:bg-red-500"
                @click="localValue = ''"
            />
        </span>
    </div>
</template>

<script>
import CloseIcon from '~/assets/icons/close.svg';

export default {
    components: {
        CloseIcon,
    },
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            localValue: this.value,
        };
    },
};
</script>
