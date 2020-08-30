<template>
  <div class="home">
    <!-- breadcrumb -->
    <b-breadcrumb :items="items" class="home__breadcrumb"></b-breadcrumb> 
    <!-- jumbotron -->
    <div class="border rounded p-3 home__bienv">
      <b-jumbotron lead="Vitrina" class="home__jumbo"></b-jumbotron>
      <h3 class="text-left">Bienvenido</h3>
      <p class="text-left">Bienvenido al sistema de Ordenes e Inventario de ClassicModels.</p>
    </div>
    
    <!-- Cumplimiento de ordenes y Ordenes atrasadas -->
    <b-row v-if="this.cargado" class="home__kpi">
      <b-col >
        <kpi-display :kpidata="kpiComputed1"></kpi-display>
      </b-col>
      <b-col >
        <kpi-display :kpidata="kpiComputed2" flipped></kpi-display>
      </b-col>
    </b-row>

    <!-- v-for: Ultimas ordenes / Ultimas Devoluciones -->
    <b-row v-if="this.cargado" class="home__tablas">
      <b-col>
        <ultimas 
          :datos="datosOrdenes"
          :titulo="tabla1"
          :cabeceras="cabeceras1"
        ></ultimas>
      </b-col>
      <b-col>
        <ultimas 
          :datos="datosDevoluciones"
          :titulo="tabla2"
          :cabeceras="cabeceras2"
        ></ultimas>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import KpiDisplay from '@/components/KpiDisplay';
import Ultimas from '@/components/Ultimas'
import {mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    KpiDisplay,
    Ultimas
  },
  data() 
  {
    return {
      items: [
        {
          text: 'Home',
          to: {name: 'Home'}
        },
      ],
      cargado: false,
      cabeceras1: [{
        key: 'num_orden',
        label: 'N° Orden'
      },
      {
        key: 'cliente',
        label: 'Cliente'
      },
      {
        key: 'fecha_entrega',
        label: 'Fecha Entrega'
      },
      {
        key: 'estado',
        label: 'Estado'
      },
      {
        key: 'detalles',
        label: ''
      }],
      cabeceras2: [{
        key: 'num_orden',
        label: 'N° Orden'
      },
      {
        key: 'cliente',
        label: 'Cliente'
      },
      {
        key: 'fecha_entrega',
        label: 'Fecha Devolución'
      },
      {
        key: 'detalles',
        label: ''
      }],
      tabla1: 'Últimas Ordenes',
      tabla2: 'Últimas Devoluciones'
    }
  },
  methods: {
    ...mapActions([
      'getDashboard',
    ])
  },
  computed: {
    kpiComputed1() 
    {
      let dsb = this.$store.getters.bringDash
      return {
          name: dsb.kpis[0].nombre,
          num1: dsb.kpis[0].entregadas,
          txt1: 'Ordenes Entregadas',
          num2: dsb.kpis[0].pendientes,
          txt2: 'Ordenes Pendientes'
      }
    },
    kpiComputed2() 
    {
      let dsb = this.$store.getters.bringDash

      return {
          name: dsb.kpis[1].nombre,
          num1: dsb.kpis[1].totales,
          txt1: 'Ordenes Totales',
          num2: dsb.kpis[1].atrasadas,
          txt2: 'Ordenes Atrasadas'
      }
    },
    datosOrdenes() 
    {
      let datosTabla = this.$store.getters.bringDash;
      return datosTabla.utimas_ordenes;
    },
    datosDevoluciones() 
    {
      let datosTabla = this.$store.getters.bringDash;
      return datosTabla['ultimas_devoluciones:'];
    },
  },
  beforeMount() {
    this.getDashboard().then(()=>{this.cargado = true;});

  },
}
</script>

<style lang="scss" scoped>
.home {

  &__bienv {
    margin-bottom: 30px;
  }

  &__jumbo {
    padding: 10%;
  }

  &__kpi {
    margin-bottom: 30px;
  }
  &__tablas {
    margin: 30px 0px
  }
}
</style>