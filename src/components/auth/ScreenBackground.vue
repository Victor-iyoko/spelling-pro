<template>
    <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
    </div>
</template>

<style scoped>
.screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
    /* border: 1px solid #773516; */
}

.screen__background__shape1 {
    height: 520px;
    width: 520px;
    background-color: #1e292c;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #1e292c;
    top: -172px;
    right: -5px;
    border-radius: 32px;
}

.screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #1e292c, #31393b);
    top: -24px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: #1e292c;
    top: 420px;
    right: 50px;
    border-radius: 60px;
}
</style>