<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form>
        <h3>ВХІД</h3>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">ПОШТА</label>
          <input type="email" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='приклад@lpnu.ua'>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">ПАРОЛЬ</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder='*******'>
        </div>
        <button type="submit" class="btn btn-success">ВХІД</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>
<style>
.btn-success:hover {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 15px;
  color: black;
  background-color:white;
  border-color: black;
}
.btn-success {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 15px;
  color: #fff;
  background-color: #97D700;
  border-color: black;
}
.btn-check:focus+.btn-success, .btn-success:focus {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 15px;
  color: #fff;
  background-color: #97D700;
  border-color:#97D700;
  box-shadow: 0 0 0 0.25rem rgb(60 153 110 / 50%);
}

.auth-wrapper  .form-control:focus{
  border-color: #97D700;
  box-shadow: none;
}


.auth-wrapper h3{
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.auth-wrapper{
  margin-top: 200px;
  font-size: 21px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;

}


.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 2px 20px #2c3e50;
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}




</style>

