<template>
  <div class="container">
    <h1>Home</h1>
    <h3>Events for Good</h3>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import EventCard from "@/components/EventCard.vue";
import { mockEvents } from "@/js/mock_data.js";

export default {
  name: "Home",
  data() {
    return {
      events: mockEvents,
    };
  },
  components: {
    EventCard,
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