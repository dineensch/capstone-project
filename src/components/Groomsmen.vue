<template>
	<div class="mb-5">
		<b-container>
			<b-row align-h="center">
				<b-col
					cols="12"
					md="5"
					v-bind="box.style"
					v-for="(box, index) in boxes"
					:key="box.id"
					@click="toggleShow(index)"
					class="box"
				>
					<div>
						<b-img fluid thumbnail center v-bind:src="box.image" alt="headshot"/>
						<h2>{{ box.name }}</h2>
						<b-button>More</b-button>
						<transition name="flip" mode="out-in">
							<div class="shade" v-if="box.isShowing">
								<div class="shade-content">
									<h3>
										Best Trait:
										<span class="thin">{{ box.info.one }}</span>
									</h3>
									<h3>
										Known For:
										<span class="thin">{{ box.info.two }}</span>
									</h3>
									<h3>
										Passionate About:
										<span class="thin">{{ box.info.three }}</span>
									</h3>
									<b-button>Close</b-button>
								</div>
							</div>
						</transition>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
	name: "Groomsmen",
	components: {
		NavBar,
		PageHero
	},
	data() {
		return {
			show: true,
			boxes: [
				{
					name: "Jeremy",
					image: "https://picsum.photos/600/600/?image=1012",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "red col-border" },
					isShowing: false
				},
				{
					name: "Jaydee",
					image: "https://picsum.photos/600/600/?image=883",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "beige col-border" },
					isShowing: false
				},
				{
					name: "Tucker",
					image: "https://picsum.photos/600/600/?image=863",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "light-grey col-border" },
					isShowing: false
				},
				{
					name: "CJ",
					image: "https://picsum.photos/600/600/?image=856",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "drk-grey col-border" },
					isShowing: false
				},
				{
					name: "Mike",
					image: "https://picsum.photos/600/600/?image=845",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "red col-border" },
					isShowing: false
				},
				{
					name: "Matt",
					image: "https://picsum.photos/600/600/?image=804",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "light-grey col-border" },
					isShowing: false
				}
			]
		};
	},
	methods: {
		toggleShow(i) {
			this.boxes[i].isShowing = !this.boxes[i].isShowing;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
	position: relative;
}

button {
	width: 100%;
	margin-top: 0.5rem;
}
.shade {
	width: 100%;
	height: 100%;
	background-color: #070707d7;
	border: 1px solid #fff;
	padding: 0.25rem;
	border-radius: 0.25rem;
	color: white;
	position: absolute;
	top: 0;
	left: 0;
}

.shade-content {
	width: 100%;
	height: 100%;
	border: 1px solid #fff;
	padding: 4rem 1rem;
	border-radius: 0.25rem;
}
.red {
	background-color: #633637;
	color: white;
}

.beige {
	background-color: #ebdbd3;
}

.light-grey {
	background-color: #dadada;
}

.grey {
	background-color: #635c5c;
	color: white;
}

.drk-grey {
	background-color: #363436;
	color: white;
}

.col-border {
	padding: 2rem;
	margin: 0.5rem;
	border: 0.4rem double white;
	border-radius: 0.5rem;
}

h2 {
	text-align: center !important;
}

h2 {
	margin: 0;
	font-size: 3rem !important;
	font-weight: 300 !important;
}

.thin {
	font-weight: 300 !important;
}

.flip-enter-active {
	transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.flip-leave-active {
	transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter,
.flip-leave-to {
	transform: scaleY(0) translateZ(0);
	opacity: 0;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 425.98px) {
	h2 {
		margin: 0;
		font-size: 2rem !important;
		font-weight: 200 !important;
	}

	.thin {
		font-weight: 200 !important;
	}

	button {
		width: 100%;
		margin-top: 0.5rem;
		font-weight: 200 !important;
	}
}

/* Small devices (landscape phones, less than 768px) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, less than 992px) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, less than 1200px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>


