import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import mockdata from './mock-data.js'

let data = {
  students: mockdata.students,
  timeslots: mockdata.timeslots,
  schedule: [],
  addToSchedule(student, slot) {
    this.schedule.push({
      studentID: student.id,
      studentName: student.name,
      studentGender: student.gender,
      studentImage: student.image,
      slotTime: slot
    })
  },
  removeFromSchedule(appointment) {
    for (var i=0; i < this.schedule.length; i++) {
      if (this.schedule[i].studentID === appointment.studentID
      && this.schedule[i].slotTime === appointment.slotTime) {
        this.schedule.splice(i,1);
        return;
      }
    }
  },
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
