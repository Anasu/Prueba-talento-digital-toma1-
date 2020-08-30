<template>
  <div class="kpi border">
    <b-row>
      <b-col>
        <percentage-circle :percent="porcentaje" size="huge"/>
      </b-col>
      <b-col>
        <h4 class="kpi__title">{{ nombre }}</h4>
        <b-row>
          <b-col> 
            <p class="kpi__num">{{numero1}}</p>
            <p class="kpi__txt">{{texto1}}</p>  
          </b-col>
          <b-col>
            <p class="kpi__num">{{numero2}}</p>
            <p class="kpi__txt">{{texto2}}</p> 
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import PercentageCircle from './PercentageCircle'

export default {
  name:'KPIDisplay',
  components: {
    PercentageCircle,
  },
  props: {
    kpidata: {
      name: String,
      num1: Number,
      txt1: String,
      num2: Number,
      txt2: String,
    },
    flipped: Boolean,
  },
  data() 
  {
    return {
      nombre: this.kpidata.name,
      numero1: this.kpidata.num1,
      texto1: this.kpidata.txt1,
      numero2: this.kpidata.num2,
      texto2: this.kpidata.txt2,
      flip: this.flipped
    }
  },
  computed: {
    porcentaje: function ()
    {
      let a = parseInt(this.numero1);
      let b = parseInt(this.numero2);

      if(this.flip) 
      {
        return Math.ceil((b/(a+b))*100)
      }
      else
      {
        return Math.ceil((a/(a+b))*100)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.kpi {
  padding: 2.5%;

  &__title {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
  } 

  &__num {
    font-size: 2.5rem;
    font-weight: 600;
  } 

  &__txt {
    font-size: 1rem;
    font-weight: 400;
  }
}

@import '~css-percentage-circle';
</style>