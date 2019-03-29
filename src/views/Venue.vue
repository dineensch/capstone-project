<template>
	<div>
		<page-hero>
			<template v-slot:title>Venue</template>
			<template v-slot:body>Please see below for details regarding the venue</template>
		</page-hero>
		<nav-bar></nav-bar>
		<b-container fluid class="mt-3 page-container">
			<b-container fluid>
				<b-row>
					<b-col cols="12" class="text-left py-2 box1" order-md="1">
						<h1>Event Estates</h1>
					</b-col>
					<b-col cols="6" class="box2 text-left" order-md="3">
						<b-img thumbnail src="https://picsum.photos/900/500?image=994" fluid alt="Venue Image"/>
					</b-col>
					<b-col cols="6" class="box3 pl-2 pr-3 text-left" order-md="3">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</b-col>
				</b-row>
			</b-container>
			<b-container fluid>
				<h2 class="text-center pt-5 pb-3">Location</h2>
				<google-map class="map-edit text-center"></google-map>
			</b-container>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import GoogleMap from "@/components/GoogleMap";

export default {
	name: "Venue",
	components: {
		NavBar,
		PageHero,
		GoogleMap
	},
	data() {
		return {
			items: [{ title: "Venue", lead: "page description" }]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
	border: 1px solid black;
}

.section1 {
	border: 1px solid red;
}

h1 {
	color: black;
	font-size: 4rem !important;
	font-weight: 400 !important;
}

h2 {
	font-size: 3rem;
}

p {
	font-size: 3rem;
	line-height: 1.5;
	font-weight: 300;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 425.98px) and (max-width: 576px) {
	h1,
	h2 {
		font-size: 2rem !important;
	}
}

/* // Small devices (landscape phones, 576px and up) */
@media screen and (max-width: 576px) {
	.box2,
	.box3 {
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}
	.box3 {
		padding-right: 15px !important;
		padding-left: 15px !important;
		padding-top: 15px;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 576px) and (max-width: 991.98px) {
	.box2,
	.box3 {
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}
	.box3 {
		padding-right: 20px !important;
		padding-left: 20px !important;
		padding-top: 15px;
	}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
	.page-container {
		padding: 0px 150px 100px 150px;
	}

	.box3 {
		padding-right: 100px !important;
	}

	div.map-edit {
		padding-right: 100px !important;
		padding-left: 100px !important;
	}
}
</style>
