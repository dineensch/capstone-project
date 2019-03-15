<template>
	<div>
		<b-carousel
			id="carousel1"
			style="text-shadow: 1px 1px 2px #333;"
			fade
			controls
			indicators
			background="#ababab"
			:interval="4000"
			v-model="slide"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<b-carousel-slide
				alt="image 1"
				img-src="https://picsum.photos/1024/480/?image=52"
			/>
			<b-carousel-slide
				alt="image 2"
				img-src="https://picsum.photos/1024/480/?image=54"
			/>
			<b-carousel-slide
				alt="image 3"
				img-src="https://picsum.photos/1024/480/?image=58"
			/>

			<!-- Slides with img slot -->
			<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
			<b-carousel-slide>
				<img
					slot="img"
					class="d-block img-fluid w-100"
					width="1024"
					height="480"
					src="https://picsum.photos/1024/480/?image=55"
					alt="image slot"
				/>
			</b-carousel-slide>
		</b-carousel>

		<!-- <p class="mt-4">
			Slide #: {{ slide }}<br />
			Sliding: {{ sliding }}
		</p> -->
	</div>
</template>


<script>
export default {
	name: "Carousel",
	data() {
		return {
			slide: 0,
			sliding: null
		};
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true;
		},
		onSlideEnd(slide) {
			this.sliding = false;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	width: 300px;
	min-height: 300px;
	border: solid 1px #e8e8e8;
	padding: 10px;
	margin: 5px;
}

.carousel-section {
	position: relative;
}

.carousel-inner {
	height: 200px !important;
}

.middle-left {
	position: absolute;
	color: white;
	margin: auto 0;
	top: 25%;
	font-size: 50px;
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100px;
	z-index: 20;
}
</style>