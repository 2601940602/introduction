<template>
  <div class="hello">

   <el-cascader
     :options="GradeOptions"
      v-bind:value="gradeValue"
      v-on:change="handleChange"
    >
    </el-cascader>
 
  </div>
</template>

<script>
export default {
  name: 'gradeCom',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value:String 
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App cxk',
      count: 0,

      GradeOptions: [
          {
            value: '0101',
            label: '一年级',
            children: 
                [{
                  value: '010101',
                  label: '上学期'
                },{
                  value: '010101',
                  label: '下学期'
                }]
          },
           {
            value: '0102',
            label: '二年级',
            children: 
                [{
                  value: '010201',
                  label: '上学期'
                },{
                  value: '010202',
                  label: '下学期'
                }]
          },
          {
            value: '0103',
            label: '三年级',
            children: 
                [{
                  value: '010301',
                  label: '上学期'
                },{
                  value: '010302',
                  label: '下学期'
                }]
          },
          {
            value: '0104',
            label: '四年级',
            children: 
                [{
                  value: '010401',
                  label: '上学期'
                },{
                  value: '010402',
                  label: '下学期'
                }]
          },
          {
            value: '0105',
            label: '五年级',
            children: 
                [{
                  value: '010501',
                  label: '上学期'
                },{
                  value: '010602',
                  label: '下学期'
                }]
          },
          {
            value: '0106',
            label: '六年级',
            children: 
                [{
                  value: '010601',
                  label: '上学期'
                },{
                  value: '010602',
                  label: '下学期'
                }]
          },
           {
            value: '0207',
            label: '七年级',
            children: 
                [{
                  value: '020701',
                  label: '上学期'
                },{
                  value: '020702',
                  label: '下学期'
                }]
          },
           {
            value: '0208',
            label: '八年级',
            children: 
                [{
                  value: '020801',
                  label: '上学期'
                },{
                  value: '020802',
                  label: '下学期'
                }]
          },
           {
            value: '0209',
            label: '九年级',
            children: 
                [{
                  value: '020901',
                  label: '上学期'
                },{
                  value: '020902',
                  label: '下学期'
                }]
          },
           {
            value: '0310',
            label: '高一',
            children: 
                [{
                  value: '031001',
                  label: '上学期'
                },{
                  value: '031002',
                  label: '下学期'
                }]
          },
           {
            value: '0311',
            label: '高二',
            children: 
                [{
                  value: '031101',
                  label: '上学期'
                },{
                  value: '031102',
                  label: '下学期'
                }]
          },
           {
            value: '0312',
            label: '高三',
            children: 
                [{
                  value: '031201',
                  label: '上学期'
                },{
                  value: '031202',
                  label: '下学期'
                }]
          }
          ],
          
    }
  },
  methods: {
      handleChange(value) {

        console.log('value',value); 
         var _temp = this.getStringFromArray(value);
        this.$emit('change', _temp)
  
      },
      getStringFromArray(classGrade)
      {
          if (classGrade.length ==2)
          {
            var temp_xdId=  classGrade[1];
            return temp_xdId;
          }
          else 
          {
            return '010101';
          }
      },
      gerArrayFromString(classGrade)
      {
         console.log('classGrade',classGrade);
         if (classGrade.length == 6)
          {
            var temp_ClassGrade1=  classGrade.substr(0,4);
            console.log('temp_ClassGrade1',temp_ClassGrade1);
            var temp_ClassGrade2=  classGrade.substr(4,2);
            console.log('temp_ClassGrade2',temp_ClassGrade2);
            var  result = new  Array(2);
            result[0]= temp_ClassGrade1;
            result[1]= temp_ClassGrade1+temp_ClassGrade2;
          }
          else 
          {
            return undefined;
          }
        console.log('gradeValue',result);
         return result;
      },
    },
  computed:{
      gradeValue() {
        console.log('gradeValue.value:',this.value);
  
        return  this.gerArrayFromString(this.value);
      }
  },

}
</script>

