<template>
  <div class="header border-round-xl">
    <div class="planet planet-1 planet-lg">
      <div class="moon-orbit"><div class="moon"></div></div>
    </div>
    <div class="planet planet-2 planet-sm">
      <div class="moon-orbit"><div class="moon"></div></div>
    </div>
    <div class="planet planet-3">
      <div class="moon-orbit"><div class="moon"></div></div>
    </div>
    <div class="planet planet-4 planet-lg">
      <div class="moon-orbit"><div class="moon"></div></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 25vh;
  width: 100%;
  position: relative;
  margin-top: -3rem;
}

.planet {
  --orbit-speed: 20s;
  background: var(--secondary-color);
  width: 45px;
  height: 45px;
  position: absolute;
  border-radius: 100%;

  .moon {
    --moon-size: 15px;
    position: absolute;
    right: calc(var(--moon-size) / 2);
    width: var(--moon-size);
    height: var(--moon-size);
    background: var(--secondary-color);
    border-radius: 100%;
  }

  .moon-orbit {
    position: absolute;
    left: -20px;
    top: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border: 1px solid var(--secondary-color);
    border-radius: 100%;
    animation: spin-right linear infinite;
    animation-duration: var(--orbit-speed);
  }

  &-lg {
    width: 70px;
    height: 70px;

    .moon {
      --moon-size: 20px;
    }
  }

  &-sm {
    width: 40px;
    height: 40px;

    .moon {
      --moon-size: 15px;
    }
  }

  &-1 {
    top: calc(33.3% - 45px);
    left: -45px;
  }

  &-2 {
    --orbit-speed: 15s;
    left: calc(33% - 45px);
    top: -30px;
  }

  &-3 {
    --orbit-speed: 18s;
    left: 66%;
    top: 10%;
  }

  &-4 {
    --orbit-speed: 12s;
    top: calc(50% - 45px);
    right: -45px;
  }
}

/* ---------- Animation ---------- */
@-webkit-keyframes spin-right {
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
