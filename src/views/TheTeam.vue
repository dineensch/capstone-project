<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero></page-hero>

    <b-container>
      <div>
        <b-card-group deck>
          <b-card fluid class="mx-auto">
            <b-card-img src="https://picsum.photos/300/300/?image=41" alt="image" top class="mb-3"/>
            <b-button v-b-toggle.collapseA.collapseB>Jane Doe</b-button>
            <b-collapse id="collapseA" class="mt-2">
              <b-card-text>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch.
              </b-card-text>
              <b-card-text class="text-muted">Mother of the Bride</b-card-text>
            </b-collapse>
          </b-card>

          <b-card
            title="John Doe"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
              brunch.
            </b-card-text>
            <div slot="footer">
              <p class="text-muted">Father of the Bride</p>
            </div>
          </b-card>

          <b-card
            title="Jenny Doe"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
              brunch.
            </b-card-text>
            <div slot="footer">
              <p class="text-muted">Sister of the Bride</p>
            </div>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "TheTeam",
  components: {
    NavBar,
    PageHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  background: url("https://picsum.photos/300/300/?image=41");
}

.card-img-top {
  border-radius: 50% !important;
}

.card {
  background-color: transparent;
  border: none;
}
</style>


