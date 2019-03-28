<template>
	<div class="mb-5">
		<page-hero>
			<template v-slot:title>The Team</template>
			<template v-slot:body>Meet the wedding party.</template>
		</page-hero>
		<nav-bar></nav-bar>

		<b-container fluid class="mt-5">
			<div class="mini-nav">
				<p>Filter By:</p>
				<b-nav pills>
					<b-nav-item @click="showWhich = 'Bridesmaids'">Bridesmaids</b-nav-item>
					<b-nav-item @click="showWhich = 'Groomsmen'">Groomsmen</b-nav-item>
					<b-nav-item @click="showWhich = 'Family'">Family</b-nav-item>
				</b-nav>
			</div>

			<component :is="showWhich"></component>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import Bridesmaids from "@/components/Bridesmaids";
import Groomsmen from "@/components/Groomsmen";
import Family from "@/components/Family";

export default {
	name: "TheTeam",
	components: {
		NavBar,
		PageHero,
		Bridesmaids,
		Groomsmen,
		Family
	},
	data() {
		return {
			showWhich: "Bridesmaids"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.nav-link {
	font-weight: 300;
	font-style: normal;
	text-decoration: none;
	font-size: 1rem;
	line-height: 1;
	color: #212021 !important;
	text-transform: uppercase;
}

a.nav-link:hover {
	color: #8a756e !important;
}

a.nav-link.active {
	font-weight: 500 !important;
}

.red {
	background-color: #633637;
	color: white;
}

.beige {
	background-color: #ebdbd3;
}

.light-grey {
	background-color: #dadada;
}

.grey {
	background-color: #635c5c;
	color: white;
}

.drk-grey {
	background-color: #363436;
	color: white;
}

.col-border {
	padding: 1rem;
	border: 0.4rem double white;
	border-radius: 0.5rem;
}

h2,
h5 {
	text-align: center !important;
}

h2 {
	font-weight: 500;
}

h5 {
	font-weight: 300;
	margin: 0;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 425.98px) {
	a.nav-link {
		font-size: 2rem;
	}
	p {
		font-size: 1.5rem;
	}
	.mini-nav {
		margin-bottom: 2rem;
	}
}

/* Small devices (landscape phones, less than 768px) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, less than 992px) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, less than 1200px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>


