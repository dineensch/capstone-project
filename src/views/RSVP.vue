<template>
	<div>
		<nav-bar></nav-bar>
		<page-hero></page-hero>
		<b-container>
			<h2>RSVP</h2>
			<b-row>
				<b-col cols="12">
					<b-table striped hover :items="boards" :fields="fields">
						<template slot="actions" scope="row">
							<b-btn size="sm" @click.stop="details(row.item)">Edit</b-btn>
						</template>
					</b-table>
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
	name: "RSVP",
	components: {
		NavBar,
		PageHero
	},
	data() {
		return {
			fields: {
				name: { label: "Name", class: "text-left" },
				guest: { label: "Guest", class: "text-left" },
				rsvp: { label: "RSVP", class: "text-left" },
				actions: { label: "", class: "text-center" }
			},
			boards: [],
			errors: [],
			ref: firebase.firestore().collection("boards")
		};
	},
	created() {
		this.ref.onSnapshot(querySnapshot => {
			this.boards = [];
			querySnapshot.forEach(doc => {
				this.boards.push({
					key: doc.id,
					name: doc.data().name,
					guest: doc.data().guest,
					rsvp: doc.data().rsvp
				});
			});
		});
	},
	methods: {
		details(board) {
			router.push({ name: "ShowBoard", params: { id: board.key } });
			router.push({ guest: "ShowBoard", params: { id: board.key } });
			router.push({ rsvp: "ShowBoard", params: { id: board.key } });
		}
	}
};
</script>

<style>
.jumbotron {
	padding: 2rem;
}
</style>