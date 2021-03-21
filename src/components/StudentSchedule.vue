<template>
<div class="wrapper">
  <div class="students">
    <div class="student" v-for="appointment in this.$root.$data.schedule" :key="appointment.id">
      <div class="info">
        <h1>{{appointment.studentName}}</h1>
        <p>{{appointment.studentGender}}</p>
      </div>
      <div class="image">
        <img :src="'../images/'+appointment.studentImage">
      </div>
      <div class="schedule">
        <p>{{appointment.slotTime}}</p>
        <button class="auto" v-on:click="removeFromSchedule(appointment)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Students',
  props: {
    students: Array
  },
  methods: {
    removeFromSchedule(appointment) {
      return this.$root.$data.removeFromSchedule(appointment);
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
