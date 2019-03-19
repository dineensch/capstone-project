<template>
	<div>
		<nav-bar></nav-bar>
		<page-hero>
			<template v-slot:title>RSVP</template>
			<template v-slot:body>Update your RSVP status below.</template>
		</page-hero>
		<b-container class="mt-5 px-5" fluid>
			<b-row>
				<b-col cols="12">
					<b-table stacked fixed striped hover :items="boards" :fields="fields" class="table-content">
						<template slot="actions" scope="row">
							<b-btn @click.stop="details(row.item)">Edit</b-btn>
						</template>
					</b-table>
				</b-col>
			</b-row>

			<div class="card-body">
				<p class="nomessages text-secondary" v-if="boards.length == 0">[No messages yet!]</p>

				<div v-for="board in boards" :key="board.id">
					<p>{{ board.name }}: {{board.rsvp}}</p>
					<p>{{ board.guest }}: {{board.rsvp2}}</p>
				</div>
			</div>
		</b-container>
		<!-- <show-board></show-board> -->
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
			boards: [],
			errors: [],
			ref: firebase.firestore().collection("boards"),
			title: "RSVP"
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
					rsvp: doc.data().rsvp,
					rsvp2: doc.data().rsvp2
				});
			});
		});
	}
	// methods: {
	// 	details(board) {
	// 		router.push({ name: "EditBoard", params: { id: board.id } });
	// 	}
	// }
};
</script>

<style>
.jumbotron {
	padding: 2rem;
}
.table-content {
	font-size: 2rem;
	font-family: brandon-grotesque, sans-serif !important;
	font-weight: 400 !important;
	font-style: normal !important;
}
th {
	font-size: 2rem;
	font-family: brandon-grotesque, sans-serif !important;
	font-weight: 400 !important;
	font-style: normal !important;
}
td.table-content {
	font-size: 5rem !important;
	font-family: brandon-grotesque, sans-serif !important;
	font-weight: 400 !important;
	font-style: normal !important;
}
button.btn {
	font-size: 1.5rem;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>