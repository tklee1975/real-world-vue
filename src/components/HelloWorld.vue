<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <EventCard :event="event"></EventCard>
    <hr />
    <div class="event-holder">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    {{ event }}
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mockEvents } from "@/js/mock_data.js";

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: mockEvents,
      event: mockEvents[0],
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.event-holder {
  display:flex;
  gap: 10px;
}
</style>
