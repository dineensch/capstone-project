<template>
	<div class="mb-5">
		<nav-bar></nav-bar>
		<page-hero>
			<template v-slot:title>The Team</template>
			<template v-slot:body>Meet the wedding party.</template>
		</page-hero>

		<b-container class="mt-5">
			<div>
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
			showWhich: "Bridesmaids",
			photoStyle: { rounded: "circle", class: "img-fluid" },
			imgShape: { blank: true, width: 200, height: 200 },
			blankText: { class: "blank-text p-2 m-1" },
			colStyle: {
				class: "p-0 text-center justify-content-center",
				cols: "12",
				md: "12"
			},
			rowStyle: { class: "p-0 m-0" },
			masterCol: { class: "p-0 text-center", cols: "6" },
			red: { class: "red p-2 m-1" },
			beige: { class: "beige p-2 m-1" },
			lightGrey: { class: "light-grey p-2 m-1" },
			grey: { class: "grey p-2 m-1" },
			drkGrey: { class: "drk-grey p-2 m-1" }
		};
	},
	methods: {
		mouseOver: function() {
			this.active = !this.active;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.blank-text {
	background-color: #635c5c;
	color: #635c5c;
}
h2,
h5 {
	text-align: center !important;
	font-family: brandon-grotesque, sans-serif;
}

h2 {
	font-weight: 500;
}

h5 {
	font-weight: 300;
	margin: 0;
}
</style>


