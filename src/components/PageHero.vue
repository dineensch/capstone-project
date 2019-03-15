<template>
	<span>
		<div class="page-hero">
			<b-jumbotron class="page-hero fluid text-white">
				<template slot="header"
					>Page Title
				</template>
				<hr class="my-4 divider" />
				<p>
					Pease see below for content.
				</p>
			</b-jumbotron>
		</div>
	</span>
</template>


<script>
export default {
	name: "PageHero",
	data() {
		return {
			fields: {
				title: { label: "Title", sortable: true, class: "text-left" },
				actions: { label: "Action", class: "text-center" }
			},
			boards: [],
			errors: []
		};
	}
};
</script>

<style scoped>
.transparent {
	background-color: #37474f !important;
	opacity: 0.7;
	border-color: transparent !important;
}

.divider {
	border-top: 2px solid rgba(255, 255, 255, 0.4) !important;
}

.page-hero {
	background: url("https://picsum.photos/g/900/300/?image=55");
	opacity: 0.9;
	background-size: cover;
	width: 100%;
	height: 100%;
}

h1.display-3 {
	font-size: 5rem !important;
}
</style>