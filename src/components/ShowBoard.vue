<template>
	<div>
		<nav-bar></nav-bar>
		<page-hero></page-hero>

		<b-container>
			<b-btn class="mb-5" variant="secondary" href="#/rsvp">Back</b-btn>
			<h2>RSVP Board</h2>
			<hr class="my-2" />

			<b-row>
				<b-col cols="12">
					<b-jumbotron class="p-0">
						<b-container class="py-5 px-3">
							<b-row>
								<b-col cols="12" md="auto"
									><h5>{{ board.name }}:</h5></b-col
								>
								<b-col cols="12" md="8"
									><h5 class="text-muted">{{ board.rsvp }}</h5></b-col
								>
							</b-row>
							<b-row><b-col cols="12"></b-col></b-row>
							<b-row>
								<b-col cols="12" md="auto"
									><h5>{{ board.guest }}:</h5></b-col
								>
								<b-col cols="12" md="8"
									><h5 class="text-muted">{{ board.rsvp2 }}</h5></b-col
								>
							</b-row>
							<b-btn
								class="py-0 my-5"
								variant="info"
								@click.stop="editboard(key)"
								>Edit</b-btn
							>
						</b-container>
					</b-jumbotron>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import firebase from "../firebase";
import router from "../router";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
	name: "ShowBoard",
	components: {
		NavBar,
		PageHero
	},
	data() {
		return {
			key: "",
			board: {}
		};
	},
	created() {
		const ref = firebase
			.firestore()
			.collection("boards")
			.doc(this.$route.params.id);
		ref.get().then(doc => {
			if (doc.exists) {
				this.key = doc.id;
				this.board = doc.data();
			} else {
				alert("No such document!");
			}
		});
	},
	methods: {
		editboard(id) {
			router.push({
				name: "EditBoard",
				params: { id: id }
			});
		}
	}
};
</script>

<style>
.jumbotron {
	padding: 2rem;
}
</style>