<template>
	<div class="w-75 mx-auto">
		<nav>
			 <router-link to="/">Home</router-link> |
			 <router-link :to="{name: 'friends'}">Друзі</router-link> |
			 <router-link :to="{name: 'gifts'}">Подарунки</router-link> |
			 <router-link :to="{name: 'divider'}">Призначення подарунків</router-link>
		</nav>
		<router-view />

	</div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   //  text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
