<template>
	<div>
		<nav-bar></nav-bar>
		<page-hero></page-hero>
		<b-container> </b-container>
	</div>
	<!--END CARD 1 -->
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
</style>


