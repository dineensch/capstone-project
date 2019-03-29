<template>
	<div>
		<video-hero>
			<template v-slot:title>Welcome to</template>
			<template v-slot:body>I Do With Vue</template>
		</video-hero>
		<nav-bar></nav-bar>
		<b-container fluid class="mt-5" id="anchor">
			<b-row align-h="around" class="card-deck" v-for="card in cards" :key="card.id">
				<b-col cols="12">
					<div class="card-border card-body">
						<b-img rounded fluid-grow v-bind:src="card.image" alt="headshot"/>
						<div>
							<h1>{{ card.title }}</h1>
							<p>{{ card.info }}</p>
							<b-button :to="{ name: 'RSVP'}">go</b-button>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>



<script>
import firebase from "firebase";
import router from "../router";
import NavBar from "@/components/NavBar";
import VideoHero from "@/components/VideoHero";

export default {
	name: "Home",
	components: {
		VideoHero,
		NavBar
	},
	data() {
		return {
			cards: [
				{
					image: "https://picsum.photos/600/600/?image=999",
					title: "RSVP",
					info:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					style: { class: "" }
				},
				{
					image: "https://picsum.photos/600/600/?image=998",
					title: "FAQs",
					info:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					style: { class: "" }
				},
				{
					image: "https://picsum.photos/600/600/?image=975",
					title: "VENUE",
					info:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					style: { class: "" }
				}
			]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-size: 4rem !important;
	font-weight: 500 !important;
	padding: 1rem 0;
	border-bottom: 1px solid black;
}

p {
	font-size: 3rem;
	line-height: 1.5;
	font-weight: 300;
}

a.btn {
	background-color: #212021 !important;
	border: none;
	width: 100%;
	font-size: 3rem;
	padding: 0.5rem 2rem;
	margin-top: 1rem;
	text-transform: uppercase;
}

a.btn:hover {
	background-color: #581c1d !important;
}

.card-border {
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5;
	margin-bottom: 2rem;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
	/* h4 {
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
	} */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>