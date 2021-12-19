<template>
  <div class="container">
    <h3>Events for Good</h3>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import EventCard from "@/components/EventCard.vue";
import EventService from '@/services/EventService.js'

// import axios from 'axios'

//import { mockEvents } from "@/js/mock_data.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      //events: mockEvents,
      events: null
    };
  },
  created() {
    this.loadEvents();
     // get events from mock db when component is created
  },
  methods: {
    loadEvents() {
      EventService.getEvents()
        .then(response => {
          this.events = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
.events {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>