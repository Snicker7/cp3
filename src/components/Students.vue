<template>
<div class="wrapper">
  <div class="students">
    <div class="student" v-for="student in students" :key="student.id">
      <div class="info">
        <h1>{{student.name}}</h1>
        <p>{{student.gender}}</p>
      </div>
      <div class="image">
        <img :src="'../images/'+student.image">
      </div>
      <div class="schedule">
        <vue-timepicker hide-clear-button close-on-complete format="hh A" @change="changeTime">
        </vue-timepicker>
        <button class="auto" v-on:click="addToSchedule(student)">Schedule</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'

export default {
  name: 'Students',
  time: null,
  props: {
    students: Array
  },
  methods: {
    addToSchedule(student) {
      if(this.time != null) {
        return this.$root.$data.addToSchedule(student, this.time.displayTime);
      }
    },
    changeTime(eventData) {
      this.time = eventData
    }
  },
  components: {
    VueTimepicker
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.students {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.student {
  margin: 50px;
  margin-top: 50px;
  width: 200px;
}

.student img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.student .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #0074D9;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.schedule {
  display: flex;
}

button {
  height: 25px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
