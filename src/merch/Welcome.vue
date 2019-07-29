<template>
	<div>
		<div
			class="page-cover"
			:style="{ background: 'linear-gradient(#f1e1f179, #f1e1f179),url(' + require('../../src/images/welcome/guitar1.jpg') + ')'}"
		>
			<div class="page-cover-text">
				<p>At Musec, we believe in the power of music and the emotional connection between human beings and their instrument.</p>
				<p>Here, we deliever instruments only of the highest quality.</p>
				<p>Shop now and bring home your new favorite companion!</p>
			</div>
		</div>
		<div class="link-wrapper">
			<div class="link-item">
				<div
					class="link-item-box"
					:style="{ backgroundImage: 'url(' + require('../../src/images/welcome/guitar2.jpg' ) + ')'}"
				>
					<router-link class="item-info router-link-style" to="/list/guitar">
						<h3>Shop guitar</h3>
					</router-link>
				</div>
			</div>
			<div class="link-item">
                <div
					class="link-item-box"
					:style="{ backgroundImage: 'url(' + require('../../src/images/welcome/ukulele.jpeg' ) + ')'}"
				>
					<router-link class="item-info router-link-style" to="/list/ukulele">
						<h3>Shop ukulele</h3>
					</router-link>
				</div>
            </div>
			<div class="link-item">
                <div
					class="link-item-box"
					:style="{ backgroundImage: 'url(' + require('../../src/images/welcome/sheetmusic.jpg' ) + ')'}"
				>
					<router-link class="item-info router-link-style" to="/list/accessory">
						<h3>Shop accessory</h3>
					</router-link>
				</div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.page-cover {
		width: 100vw;
		height: 60vh;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background-position: center !important;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
	.page-cover-text {
		margin-right: 5vw;
		width: 50vw;
		text-align: justify;
		font-family: "Satisfy", cursive;
	}
	.router-link-style {
		text-decoration: none;
		color: #333333;
		transition: 0.3s;
	}
	.router-link-style:hover {
		color: #363636;
	}
	.link-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.link-item-box {
		width: 33.33vw;
		height: 200px;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background-position: center !important;
	}
	.item-info {
		color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #ffffffbd;
		opacity: 0;
		transition-property: all;
		transition: 0.3s;
		cursor: pointer;
	}
	.link-item-box:hover .item-info {
		opacity: 1;
	}

	@media screen and (max-width: 520px) {
		.page-cover {
			background-size: cover;
			height: 30vh;
			flex-direction: columns;
			justify-content: center;
		}
		.page-cover-text {
			width: 80%;
		}
		.link-wrapper {
			grid-template-columns: repeat(1, 1fr);
		}
        .item-info{
            opacity: 0.9;
        }
        .link-item-box {
            width: 100vw;
        }
	}
</style>
