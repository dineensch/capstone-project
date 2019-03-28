<template>
	<b-container fluid class="m-0 p-0">
		<b-navbar class="px-4 py-2 pt-2" toggleable="lg" type="light">
			<div>
				<b-navbar-toggle target="nav_collapse"/>
				<span class="toggle-text">Menu</span>
			</div>

			<b-collapse is-nav id="nav_collapse" class="p-0 text-center">
				<!-- Right aligned nav items -->
				<b-navbar-nav class="mx-auto text-left">
					<b-navbar-nav class="nav-text">
						<b-nav-item href="#/">Home</b-nav-item>
						<b-nav-item href="#/venue">Venue</b-nav-item>
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
				{ title: "Venue", routeUrl: "/venue" },
				{ title: "RSVP", routeUrl: "/rsvp" },
				{ title: "FAQs", routeUrl: "/faqs" },
				{ title: "The Team", routeUrl: "/theteam" }
			]
		};
	}
};
</script>

<style scoped>
a.navbar-brand {
	font-size: 3.5rem;
}

span.navbar-toggler-icon {
	color: #212021 !important;
}

.navbar-toggler {
	font-size: 2rem !important;
}

a.nav-link,
span {
	font-family: brandon-grotesque, sans-serif;
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	font-size: 1.5rem;
	line-height: 1.3;
	color: #212021 !important;
	text-transform: uppercase;
	margin: 0 1rem;
	letter-spacing: 8px;
}

a.nav-link:hover {
	color: #8a756e !important;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 425.98px) and (max-width: 767.98px) {
	.nav-text {
		font-size: 25px;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
	a.nav-link {
		font-size: 0.9rem;
		letter-spacing: 6px;
	}
	.toggle-text {
		display: none;
	}
	nav.navbar {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
	}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
	.toggle-text {
		display: none;
	}
	a.nav-link {
		font-size: 1rem;
	}

	nav.navbar {
		line-height: 1;
	}
	nav.navbar {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
	}
}
</style>
