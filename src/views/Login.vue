
<template>
	<div class="container-fluid h-80 bg-light text-dark div-to-auth">
  <div class="row justify-content-center ">
        <div class="text-center">
            <img src="../assets/logo.png"/>
            <h1>Sign In</h1>
        </div>
        <div class="form-page col col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <form>
       
            <div class="form-group" style="padding-bottom: 10Px;">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <div style="padding-top: 10px;" class="text-center">
    <router-link to="/about" tag="button" type="submit" class="btn btn-dark btn-lg btn-block col-lg-4  ">Sign In</router-link>
  </div>
  <div style="padding-top: 5px;">

            <p class="forgot-password text-right mt-2 mb-4" style="float:right">
                <router-link to="/forgot-password">Forgot password</router-link>
            </p>
      
        </div>
        </form>
</div>

</div></div>
</template>
<style>


</style>