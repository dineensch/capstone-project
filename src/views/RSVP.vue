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
		<!-- <show-board></show-board> -->
		<b-list-group>
			<b-list-group-item href="http://apple.com">iPhone</b-list-group-item>
			<b-list-group-item>OnePlus 3T</b-list-group-item>
			<b-list-group-item>Samsung Galaxy 8</b-list-group-item>
			<b-list-group-item v-for="item in items" :key="item.message">
				{{ item.message }}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import firebase from "../firebase";
import router from "../router";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
// import ShowBoard from "@/components/ShowBoard";

export default {
	name: "RSVP",
	components: {
		NavBar,
		PageHero
		// ShowBoard
	},
	data() {
		return {
			items: [
				{ message: "Nokia 8" },
				{ message: "OnePlus 5T" },
				{ message: "Samsung Galaxy S9" }
			],
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