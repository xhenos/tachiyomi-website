<template>
	<VueSlickCarousel v-bind="settings">
		<div v-for="item in items" :key="item.title">
			<img class="slide-image" v-bind:src="item.image" draggable="false" />
			<p class="slide-title">
				<b v-if="item.title">{{ item.title }}</b>
			</p>
			<p class="slide-desc" v-if="item.desc">{{ item.desc }}</p>
		</div>
	</VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
	components: { VueSlickCarousel },
	props: {
		items: Array,
	},
	data() {
		return {
			settings: {
				dots: true,
				centerMode: true,
				centerPadding: "20px",
				focusOnSelect: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 500,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			},
		};
	},
};
</script>

<style lang="stylus">
.slick-slider {
	img {
		-webkit-user-drag none
	}

	.slick-slide {
		div:focus {
			outline none !important
		}
	}

	.slick-prev,
	.slick-next {
		&:before {
			color var(--color-ui-primary) !important
		}
	}
}
</style>
