{
  let view = {
    el:'.radar',
    template:`
      <div class="title">
        <span class="first-word">Skill</span>
        Radar
      </div>
      <div id="main"></div>  
    `,
    rander(){
      $(this.el).html(this.template)
    }
  }
  let model = {
    create(){
  var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      option = {
        title: {
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [4, 5]
            }
          },
          indicator: [
            { name: 'JavaScript/ HTML 5/ CSS 3', max:10},
            { name: 'Vue.js', max: 10},
            { name: 'ES6/ Sass', max:10},
            { name: 'Axios/vue-router', max:10},
            { name: ' Parcel', max:10},
            { name: 'React', max:10}
          ]
        },
        series: [{
          name: '雷达图',
          type: 'radar',
          itemStyle: {
            emphasis: {
              // color: 各异,
              lineStyle: {
                width: 15
              }
            }
          },
          // areaStyle: {normal: {}},
          data : [
            {
              value : [8,7,6,5,5,5],
              name : '技能雷达图',
              label:{
                normal: {
                  show: true,
                  formatter:function(params) {
                    return params.value;
                  }
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.6,
                  color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      color: '#2eca7f',
                      offset: 0
                    },
                    {
                      color: '#2eca7f',
                      offset: 1
                    }
                  ])
                }
              }
            }
          ]
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
  let controller = {
    init(view,model){
      this.view = view
      this.model = model
      this.view.rander()
      this.model.create()
    }
  }
  controller.init(view,model)
}
