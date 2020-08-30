<template>
  <div class="tabla-ultimas">
    <h2>{{header}}</h2>
    <b-table :items="items" :fields="fields">
      <template v-slot:cell(detalles)="row">
        <b-button size="sm" @click="loadOrder(row.item.num_orden)" variant="info" class="mr-2">
          Ver Detalles
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: 'Tabla',
    props: {
      datos: Array,
      cabeceras: Array,
      titulo: String,
    },
    data() {
      return {
        items: this.datos,
        fields: this.cabeceras,
        header: this.titulo,
      }
    },
    methods: {
      loadOrder(orderID) 
      {
        console.log(orderID)
        this.$router.push(`/ordenes/${orderID}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabla-ultimas {
  text-align: left;

  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
}
</style>