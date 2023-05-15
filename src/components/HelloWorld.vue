<template>
<!-- 
<div class=”top_navbar” style="position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background: var(--dark);
	box-shadow: var(--dark);
	display: flex;
	align-items: center;">  -->


<div v-if="!$route.meta.hideNavbar">

	<aside :class="`${is_expanded ? 'is-expanded' : ''}`" >

		<div class="menu-toggle-wrap">
			<div>
			<nav class="navbar fixed-top navbar-expand-lg navbar-custom">
				<div class="container">
				
					<!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button> -->
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<span class="text">Dashboard</span>
							</li>
							<li class="nav-item">
								<span class="text">Dashboard</span>
							</li>
							<li class="nav-item">
								<span class="text">Dashboard</span>
							</li>
							<li class="nav-item">
								<span class="text">Dashboard</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		</div>

<div class="container-menu">
		<h3>Menu</h3> 
		<button class="menu-toggle" @click="ToggleMenu">
				<!-- <span class="material-icons">keyboard_double_arrow_right</span> -->
				<span><font-awesome-icon icon="angle-double-right"  style="color: white;"/></span>
				
			</button>
		</div>
		<div class="menu">
			<router-link to="/about" class="button">
				
				<span><font-awesome-icon icon="home"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Dashboard</span>
			</router-link>
			<router-link to="/freelancers" class="button">
				<span><font-awesome-icon icon="users"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Freelancers</span>
			</router-link>
			<router-link to="/clients" class="button">
				<span><font-awesome-icon icon="users"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Clients</span>
			</router-link>
			<router-link to="/articles" class="button">
				<span><font-awesome-icon icon="question"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Articles</span>
			</router-link>
			<router-link to="/transaction" class="button">
				<span><font-awesome-icon icon="money-bill-transfer"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Transaction</span>
			</router-link>
			 <router-link to="/admin" class="button">
				<span><font-awesome-icon icon="users"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Admin</span>
			</router-link> 
			<router-link to="/reports" class="button">
				<span><font-awesome-icon icon="users"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Reports</span>
			</router-link> 
			<!-- <router-link to="/contact" class="button">
				<span><font-awesome-icon icon="comment"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Reviews</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span><font-awesome-icon icon="file"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Report</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span><font-awesome-icon icon="comment"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Dispute Management</span>
			</router-link>
			<router-link to="/contact" class="button">
				
				<span><font-awesome-icon icon="comment"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">SEO Management</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span><font-awesome-icon icon="comment"  style="color: white;"/></span>&nbsp;&nbsp;
				<span class="text">Job Promotion</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Articles</span>
			</router-link> -->
		</div>

		<!-- <div class="flex"></div>
		
		<div class="menu" >
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div> -->
	</aside>
	<!-- <div  style="background-color: black; height: 20em; width: 20em;">

	</div> -->
	<FooterTemplate/>
</div>

</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'
// import FooterTemplate from './components/FooterTemplate.vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

    

    
  

</script>

<style lang="scss" scoped>
.container-menu {
  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  gap: 30px;


}

.navbar-custom{
	background-color: var(--dark);
	left: 17%;
	height: 3em;
	
}
nav ul li{

padding : 0 10px 0 10px;

}
.txt{
	color:#FFFFFF;
}
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		
		transition: 0.2s ease-in-out;
		.navbar-custom{
					background-color: var(--dark);
					left: 0%;
					
				}

		.menu-toggle {
			transition: 0.2s ease-in-out;
			
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
				
			}
			
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>