<template>
<div>
    <nav-bar></nav-bar>
    <page-hero></page-hero>

<!-- PAGE NAV -->
<div class="mt-3 mb-5">
    <b-nav pills>
      <b-nav-item active>Attire</b-nav-item>
      <b-nav-item>Venue</b-nav-item>
      <b-nav-item>Accomodations</b-nav-item>
    </b-nav>
  </div>

<!-- ATTIRE ACCORDION -->
  <div role="tablist" class="mt-5 mb-1">
    <h4 id="attire">Attire</h4>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
        <b-button block href="#" v-b-toggle.accordion1 variant="dark">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion2 variant="dark">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion3 variant="dark">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>
  </div>


<!-- VENUE ACCORDION -->  
<div role="tablist" class="mt-5 mb-1">
    <h4 id="venue">Venue</h4>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
        <b-button block href="#" v-b-toggle.accordion1 variant="dark">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion2 variant="dark">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion3 variant="dark">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>
  </div>

<!-- Accomodations ACCORDION -->  
<div role="tablist" class="mt-5 mb-1">
    <h4 id="Accomodations">Accomodations</h4>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
        <b-button block href="#" v-b-toggle.accordion1 variant="dark">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion2 variant="dark">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion3 variant="dark">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch.</b-card-body>
      </b-collapse>
    </b-card>
  </div>

</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "FAQs",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


