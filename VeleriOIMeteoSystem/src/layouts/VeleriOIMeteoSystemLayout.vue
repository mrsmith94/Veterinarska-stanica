<template>
 <q-layout>
 <q-header elevated>
 <q-toolbar>
 <q-btn
 flat
 dense
 round
 @click="leftDrawerOpen = !leftDrawerOpen"
 icon="menu"
 aria-label="Menu"
 />
 <q-toolbar-title>
 VeleriIOMeteoSystem
 </q-toolbar-title>
 </q-toolbar>
 </q-header>
 <q-drawer
 v-model="leftDrawerOpen"
 show-if-above
 bordered
 content-class="bg-grey-2"
 >
 <q-list>
 <q-item-label header>Menu</q-item-label>
 <q-item
 clickable
 to="/Sensors"
 >
 <q-item-section avatar>
 <q-icon name="settings_input_antenna" />
 </q-item-section>
 <q-item-section>
 <q-item-label>Unos</q-item-label>
 </q-item-section>
 </q-item>
 <q-item
 clickable
 to="/MeteoStations"
 >
 <q-item-section avatar>
 <q-icon name="router" />
 </q-item-section>
 <q-item-section>
 <q-item-label>Baza</q-item-label>
 </q-item-section>
 </q-item>
 <q-separator />
 <q-item
 clickable
 @click="home"
 >
 <q-item-section avatar>
 <q-icon name="home" />
 </q-item-section>
 <q-item-section>
 <q-item-label>Home</q-item-label>
 </q-item-section>
 </q-item>
 <q-separator />
 <q-item
 clickable
 @click="logout"
 >
 <q-item-section avatar>
 <q-icon name="power_settings_new" />
 </q-item-section>
 <q-item-section>
 <q-item-label>LogOut</q-item-label>
 </q-item-section>
 </q-item>
 </q-list>
 </q-drawer>
 <q-page-container>
 <router-view />
 </q-page-container>
 </q-layout>
</template>
<script>
export default {
  name: 'VeleriOIMeteoSystemLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
        .then(() => {
          this.$router.push('/Login')
        })
    },
    home () {
      this.$router.push('/')
    }
  }
}
</script>
