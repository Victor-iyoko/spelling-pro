<template>
    <div>
        <div class="input-group border-bottom border-1" :style="auth ? { paddingBottom: '5px' } : {}">
            <span :style="{ padding: '6px 0 8px 0' }" class="input-group-text border-0 bg-transparent rounded-0">
                <svg xmlns="http://www.w3.org/2000/svg" :width="size ? size : '16'" :height="small ? '14' : '16'"
                    fill="currentColor" class="bi-envelope-fill text-white" viewBox="0 0 16 16">
                    <slot></slot>
                </svg>
            </span>
            <input @focus="handleFocus" @blur="handleFocus" v-model="model" :type="type"
                class="form-control text-white bg-transparent border-0 rounded-0 ls-1"
                :style="size ? { fontSize: size + 'px' } : {}" :placeholder="placeholder"
                :class="auth && !size ? 'padding__big' : 'pb-1'" :aria-label="type">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    auth: Boolean,
    size: String,
    type: String,
    placeholder: String
});
const model = defineModel();
function handleFocus(e) {
    e.target.parentElement.classList.toggle('active');
    e.target.parentElement.children[0].children[0].classList.toggle('active');
}
</script>

<style scoped>
.input-group {
    transition: all 300ms ease-in-out;
}

.padding__big {
    padding-top: 10px;
    padding-bottom: 10px;
}

.input-group:focus,
.input-group input,
.input-group:active,
.input-group input,
.input-group:hover,
.active {
    outline: none;
    box-shadow: none;
    border-bottom-color: #a36041e1 !important;
}

svg.active {
    color: #a36041e1 !important;
}

input::placeholder {
    color: #D1D1D4;
}
</style>