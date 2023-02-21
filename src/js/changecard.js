
{
    
  let view = {
    el:'.nav',
    template:`
      <div class="menu">
      </div>
      <ul>
        <li class="clickcolor">
          <a href="#about">
            <i class="iconfont icon-touxiang"></i>
            关于
          </a>
        </li>
        <li>
          <a href="#experience">
          <i class="iconfont icon-jibenxinxi"></i>
          经历</a>
        </li>
        <li>
          <a href="#skill">
          <i class="iconfont icon-bi"></i>
          作品</a>
        </li>
      </ul>   
    `,
    render(){
      $(this.el).html(this.template)
    }
  }
  let model = {
  }
  let controller = {
    init(view,model){
      this.view = view
      this.model = model
      this.view.render()
      this.getherf()
    },
    getherf(){
      $(this.view.el).on('click','a',function(){
        var herf =  $(this).attr('href')
         $(".aside").find(`${herf}`).addClass('active').siblings('.active').removeClass('active')
        $(this).parent().addClass('clickcolor').siblings().removeClass('clickcolor')
        console.log($(this).parent())
      })
    }
    
  }
  controller.init(view,model)
}
