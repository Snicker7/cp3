<template>
<div>
  <div class="wrapper">
    <h2>Today's Appointments:</h2>
  </div>
  <Students :students="students" />
  <div class="footer">
    <a href="https://github.com/BYU-CS-260-Winter-2021/lab-2-weather-app-Snicker7.git">Github</a>
  </div>
</div>
</template>

<script>
import Students from "../components/StudentSchedule.vue"
export default {
  name: 'Home',
  components: {
    Students
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    students() {
      return this.$root.$data.students.filter(student => student.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 20px;
}
</style>
