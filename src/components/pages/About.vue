<template>
  <transition name="slide-fade">
    <div>
      <div><a href="#" v-on:click="$router.go(-1)">back</a></div>

      <h1 class="eccolo">Eccolo !</h1>
      <section id="abstract">
        Ceci est un abstract de ce que nous faisons.
      </section>

      <section id="what">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Based on three pillars</h2>
              <hr class="primary">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box">
                <i class="fa fa-4x fa-globe text-primary sr-icons"></i>
                <h3>Real ecological content</h3>
                <p class="text-muted">
                  Our content is produced thanks to Machine Learning based on real datasets. It produces a set of possible planet’s states.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box">
                <i class="fa fa-4x fa-handshake-o text-primary sr-icons"></i>
                <h3>The psychology of Commitment</h3>
                <p class="text-muted">
                  It’s easier to modify behavior of people when they have the impression to decide by themselves to adopt a new habits rather than to dictate new rules.
                  <br/>
                  <small>Lewin (1947), Kiesler (1960)</small>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box">
                <i class="fa fa-4x fa-graduation-cap text-primary sr-icons"></i>
                <h3>Growth mindset behavior</h3>
                <p class="text-muted">
                  People see the game  as an opportunity to develop their knowledge and to contribute to the protection of our planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who">
        photo de l'équipe et nom et poste et tout (les 6 ? les 5 ?)
      </section>
    </div>
  </transition>
</template>

<script>
  export default {}
</script>

<style>
</style>
