<template>
  <form>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <div class="auth-wrapper">
      <div class="auth-inner">
        <h3>РЕЄСТРАЦІЯ</h3>
        <div class="mb-3">
          <input type="name" class="form-control" placeholder="Ім`я"/>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Прізвище"/>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="По батькові"/>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Ім`я користувача"/>
        </div>


        <div class="mb-3">
          <input type="email" class="form-control" placeholder="приклад@lpnu.ua"/>
        </div>

        <div class="mb-3">
          <input type="password" class="form-control" placeholder="*********"/>
        </div>

        <div class="mb-3">
          <input type="number"  max='2022' class="form-control" placeholder="Рік випуску"/>
        </div>

        <div class="mb-3">
          <input type="text"  class="form-control" placeholder="Студент/Випускник/Викладач"/>
        </div>

        <div class="mb-3">
          <input type="text"  class="form-control" placeholder="Місце роботи"/>
        </div>

        <div class="mb-3">
            <br>
            <ejs-multiselect :dataSource='localData1'
                             :fields='localFields1' placeholder='Професійні напрями'
                             popupWidth="340px"
                             popupHeight="340px"
                             >
            </ejs-multiselect>
        </div>
        <div class="mb-3">
          <br>
          <ejs-multiselect :dataSource='localData2'
                           :fields='localFields2' placeholder='Хобі'
                           popupWidth="340px"
                           popupHeight="200px"
          >
          </ejs-multiselect>
        </div>

       <router-link to="/login">
        <button type="submit" class="btn btn-success">ДАЛІ</button>
       </router-link>
      </div>
    </div>
  </form>

</template>
<script>
import Vue from 'vue';
import{ MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MultiSelectPlugin);

export default Vue.extend({
  data: function() {
    return {
      localData1:[
        { Id: '1', Area: 'Архітектурно-будівельний' },
        { Id: '2', Area: 'Інженерно-механічний' },
        { Id: '3', Area: 'Природничий' },
        { Id: '4', Area: 'Соціогуманітарний' },
        { Id: '5', Area: 'Інформаційних технологій' },
      ],
      localFields1:{value: 'Id', text: 'Area' },

      localData2:[
        { Id: '1', Area: 'Гірські лижі' },
        { Id: '2', Area: 'Кулінарія' },
        { Id: '3', Area: 'Музика' },
        { Id: '4', Area: 'Фотограція' },
        { Id: '5', Area: 'Читання то література' },
        { Id: '6', Area: 'Подорожі та туризм' },
        { Id: '7', Area: 'Рукоділля' },
        { Id: '8', Area: 'Колекціонування'},
        { Id: '9', Area: 'Автомобілі' },
        { Id: '10', Area: 'Політика' },
        { Id: '11', Area: 'Мода і стиль' },
        { Id: '12', Area: 'Мистецтво' },
        { Id: '14', Area: 'Благодійність'},
      ],
      localFields2:{value: 'Id', text: 'Area' },

    };
  }});

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);

e-ripple-style::after{background:rgba(0,0,20,0.3);}
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
  font-family: HeliosCondLight,sans-serif;
  margin-top: 200px;
  font-size: 20px;
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
