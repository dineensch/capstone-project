<template>
	<b-container class="p-0 m-0 fluid">
		<b-navbar
			class="px-4 py-2 m-0"
			toggleable="lg"
			type="dark"
			variant="dark"
			sticky=""
		>
			<b-navbar-brand href="#/" class="nav-text">I Do With Vue</b-navbar-brand>

			<b-navbar-toggle target="nav_collapse" />

			<b-collapse is-nav id="nav_collapse" class="p-0">
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav class="nav-text">
						<b-nav-item href="#/faqs">FAQs</b-nav-item>
						<b-nav-item href="#/theteam">The Team</b-nav-item>
						<b-nav-item href="#/RSVP">RSVP</b-nav-item>
					</b-navbar-nav>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</b-container>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {
			drawer: false,
			items: [
				{ title: "RSVP", routeUrl: "/RSVP" },
				{ title: "FAQs", routeUrl: "/faqs" },
				{ title: "The Team", routeUrl: "/join" }
			]
		};
	}
};
</script>

<style scoped>
.pgtitle {
	color: white;
	text-decoration: none;
}

a.navbar-brand {
	font-size: 3.5rem;
}

.navbar-toggler {
	font-size: 2.5rem !important;
}

a {
	color: white;
}

a.nav-link {
	text-decoration: none;
	font-size: 2.5rem;
}
a.nav-link:hover {
	color: rgba(255, 255, 255, 0.8) !important;
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
/* @media screen and (min-width: 576px) {
	.nav-text {
		font-size: 30px;
	}
} */

@media screen and (min-width: 768px) {
	.nav-text {
		font-size: 25px;
	}
}

/* @media screen and (min-width: 992px) {
	.nav-text {
		font-size: 25px;
	}
} */

@media screen and (min-width: 1200px) {
	.nav-text {
		font-size: 20px;
	}
}
</style>
