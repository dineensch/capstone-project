<template>
	<div class="mb-5">
		<b-container fluid>
			<b-row align-h="center">
				<b-col
					cols="5"
					md="3"
					v-bind="box.style"
					v-for="(box, index) in boxes"
					:key="box.id"
					@click="toggleShow(index)"
				>
					<div class="box">
						<div class="card-container">
							<b-img fluid thumbnail center v-bind:src="box.image" alt="headshot"/>
							<h2>{{ box.name }}</h2>
							<b-button v-if="!box.isShowing">More</b-button>
							<transition name="flip" mode="out-in">
								<div v-if="box.isShowing">
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
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import TheTeam from "@/views/TheTeam";

export default {
	name: "Family",
	components: {
		NavBar,
		PageHero,
		TheTeam
	},
	data() {
		return {
			show: true,
			boxes: [
				{
					name: "Debbie",
					image: "https://picsum.photos/600/600/?image=1011",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "red col-border" },
					isShowing: false
				},
				{
					name: "Jerry",
					image: "https://picsum.photos/600/600/?image=1012",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "beige col-border" },
					isShowing: false
				},
				{
					name: "Teri",
					image: "https://picsum.photos/600/600/?image=1005",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "light-grey col-border" },
					isShowing: false
				},
				{
					name: "Steve",
					image: "https://picsum.photos/600/600/?image=883",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "drk-grey col-border" },
					isShowing: false
				},
				{
					name: "Kelly",
					image: "https://picsum.photos/600/600/?image=777",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "red col-border" },
					isShowing: false
				},
				{
					name: "Reid",
					image: "https://picsum.photos/600/600/?image=821",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "light-grey col-border" },
					isShowing: false
				},
				{
					name: "Cory",
					image: "https://picsum.photos/600/600/?image=786",
					info: {
						one: "",
						two: "",
						three: ""
					},
					style: { class: "beige col-border" },
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
	margin: 0.5rem 0.1rem;
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
</style>


