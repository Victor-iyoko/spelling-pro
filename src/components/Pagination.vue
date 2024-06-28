<template>
    <nav aria-label="Page navigation" class="ms-auto" :class="isSmall ? 'd-none d-sm-block' : 'my-3'">
        <ul class="pagination justify-content-center mb-0" :class="isSmall ? 'pagination-sm' : ''">
            <li class="page-item">
                <a class="page-link" :class="isSmall ? '' : 'bg-dark text-indigo border-secondary'" href="#"
                    aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item active"><a class="page-link"
                    :class="isSmall ? '' : 'bg-dark text-indigo border-secondary'" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" :class="isSmall ? '' : 'bg-dark text-indigo border-secondary'"
                    href="#">2</a></li>
            <li class="page-item"><a class="page-link" :class="isSmall ? '' : 'bg-dark text-indigo border-secondary'"
                    href="#">3</a></li>
            <li class="page-item disabled">
                <a class="page-link" :class="isSmall ? '' : 'bg-dark text-indigo border-secondary'" href="#"
                    aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps({
    isSmall: Boolean
});
</script>

<style scoped>
.disabled a span,
.disabled a {
    color: gray !important;
}
</style>
