<template>
	<div>
		<nav-bar></nav-bar>
		<page-hero></page-hero>

		<!-- PAGE NAV -->
		<b-container>
			<div class="mt-3 mb-5">
				<b-nav pills>
					<b-nav-item active>Attire</b-nav-item>
					<b-nav-item>Venue</b-nav-item>
					<b-nav-item>Accomodations</b-nav-item>
				</b-nav>
			</div>
		</b-container>

		<!-- ATTIRE ACCORDION -->
		<b-container>
			<!-- Attire Accordian 1 -->
			<div role="tablist" class="mt-5 mb-1">
				<h1 id="attire">Attire</h1>
				<b-card no-body class="mb-1">
					<b-card-header
						header-tag="header"
						class="p-1"
						role="tab"
						type="dark"
						variant="dark"
					>
						<b-button block href="#" v-b-toggle.attire1 variant="dark"
							>Accordion 1</b-button
						>
					</b-card-header>
					<b-collapse id="attire1" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<p class="card-text">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch.
							</p>
						</b-card-body>
					</b-collapse>
				</b-card>

				<!-- Attire Accordian 2 -->

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.attire2 variant="dark"
							>Accordion 2</b-button
						>
					</b-card-header>
					<b-collapse id="attire2" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>

				<!-- Attire Accordian 3 -->

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.attire3 variant="dark"
							>Accordion 3</b-button
						>
					</b-card-header>
					<b-collapse id="attire3" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</b-container>

		<!-- VENUE ACCORDION -->
		<b-container>
			<div role="tablist" class="font-size mt-5 mb-1">
				<h1 id="venue">Venue</h1>
				<b-card no-body class="mb-1">
					<b-card-header
						header-tag="header"
						class="p-1"
						role="tab"
						type="dark"
						variant="dark"
					>
						<b-button block href="#" v-b-toggle.venue1 variant="dark"
							>Accordion 1</b-button
						>
					</b-card-header>
					<b-collapse id="venue1" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<p class="card-text">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch.
							</p>
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.venue2 variant="dark"
							>Accordion 2</b-button
						>
					</b-card-header>
					<b-collapse id="venue2" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.venue3 variant="dark"
							>Accordion 3</b-button
						>
					</b-card-header>
					<b-collapse id="venue3" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</b-container>

		<!-- Accomodations ACCORDION -->
		<b-container>
			<div role="tablist" class="mt-5 mb-1">
				<h1 id="Accomodations">Accomodations</h1>
				<b-card no-body class="mb-1">
					<b-card-header
						header-tag="header"
						class="p-1"
						role="tab"
						type="dark"
						variant="dark"
					>
						<b-button block href="#" v-b-toggle.accordion1 variant="dark"
							>Accordion 1</b-button
						>
					</b-card-header>
					<b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<p class="card-text">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch.
							</p>
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion2 variant="dark"
							>Accordion 2</b-button
						>
					</b-card-header>
					<b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion3 variant="dark"
							>Accordion 3</b-button
						>
					</b-card-header>
					<b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch.
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
	name: "FAQs",
	components: {
		NavBar,
		PageHero
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.btn,
div.card-body {
	font-size: 30px;
}

h1,
.h1 {
	font-size: 3.5rem;
}
</style>


