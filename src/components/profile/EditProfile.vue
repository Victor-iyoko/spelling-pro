<template>
    <div class="modal fade user-select-none" id="edit-profile" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-light py-1 border-0 bg-secondarybg">
                    <Title title="Edit     profile" :small="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="modal" aria-label="Close"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="modal-body">
                    <p class="text-muted fs-7">Players can edit their profile whenever they feel up to it.</p>
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" id="floatingInputValue" placeholder=""
                            value="vektor#99">
                        <label for="username" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Username</span>
                        </label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="floatingInputValue" placeholder=""
                            value="victoriyoks@gmail.com">
                        <label for="email" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Email</span>
                        </label>
                    </div>
                    <div class="form-floating mb-4">
                        <select class="form-select" aria-label="gender">
                            <option selected>Rather not say</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                        <label for="gender" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Gender</span>
                        </label>
                    </div>
                    <div class="form-floating mb-4">
                        <select class="form-select" aria-label="gender">
                            <option selected>Rather not say</option>
                            <option v-for="country in listOfCountries" value="country.code">
                                {{ country.name + ' (' + country.emoji + ')' }}
                            </option>
                        </select>
                        <label for="gender" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-flag" viewBox="0 0 16 16">
                                    <path
                                        d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Country</span>
                        </label>
                    </div>
                    <div class="form-floating mb-4">
                        <input class="form-control" type="file" id="formFile">
                        <label for="avatar" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path
                                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Avatar</span>
                        </label>
                    </div>
                    <div class="d-flex justify-content-end gap-2">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../Title.vue';
import countryFlagEmoji from 'country-flag-emoji';
import { onMounted } from 'vue';
import { countries } from 'country-flag-icons'

let listOfCountries = countryFlagEmoji.list;

onMounted(() => {
    listOfCountries = listOfCountries.filter(data => countries.includes(data.code));
});
</script>

<style scoped>
input:focus,
input:active,
select:active,
select:focus {
    border-color: #1e292c9c;
}
</style>