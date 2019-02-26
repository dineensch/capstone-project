<template>
  <b-row>
    <b-col cols="12">
      <h2>
        RSVP
      </h2>
      <b-table striped hover :items="boards" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Go to Form</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "firebase";
import router from '../router'

export default {
  name: 'RSVP',
  data () {
    return {
      fields: {
        guest: { label: 'Guest', 'class': 'text-left' },
        actions: { label: 'RSVP', 'class': 'text-center' }
      },
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('users'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          guest: doc.data().guest
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowForm', params: { id: board.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>