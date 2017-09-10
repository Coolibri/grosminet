<template>
  <div class="score-box">
    <div class="score-title">
      <h2>Scores</h2>
    </div>
    <ul>
      <li>Food: 0</li>
      <li>Food: 0</li>
      <li>Food: 0</li>
      <li>Food: 0</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'turn-scores',
    props: ['scores']
  }
</script>

<style scoped lang="less">
  .score-box {
    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      background: black;
    }
  }

  .score-title {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      display: block;
    }

    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      margin-left: 10px;
      background: black;
    }
  }

</style>
