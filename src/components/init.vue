 <template>
   <div id="app">
    <header>
      <div id="news-header1">新闻</div>
      <div id="news-header2"><img src="../assets/img/3_icon_search.png" alt=""></div>
    </header>
    <section>
      <div id="section1">
      <div id="top-news">
        说了肯德基了深刻的积分
      </div>
        <div id="st-news">

        </div>
      </div>
      <div id="section2"></div>
      <div id="section3"></div>
      <div id="section4"></div>
    </section>
    <footer>
      <div class="tab1">
        <div class="tab-item1"><img src="../assets/img/8_icon_news_blue.png" alt=""></div>
        <div class="tab-item1"><img src="../assets/img/9_icon_order_grey.png" alt=""></div>
        <div class="tab-item1"><img src="../assets/img/10_icon_me_grey.png" alt=""></div>
      </div>
<div class="tab">
  <div class="tab-item">新闻</div>
  <div class="tab-item">订阅</div>
  <div class="tab-item">我</div>
</div>

    </footer>
  </div>
</template>
<script>
  export default{
    name:'news',
    data(){
      return {

      }
    }
  }
</script>
<style>
  #top-news{

  }
  #sp-news{

  }
  #section1{
    float:left;
    margin-left:2px;
    width:70%;
    height:200px;

  }
  #section2{
    float:left;
    background-color:black;
    width:30%;
    height:200px;

  }
  #section3{
    float:left;
    background-color: red;
    width:70%;
    height:200px;

  }
  #section4{
    float:left;
    background-color:black;
    width:30%;
    height:200px;

  }

  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;

  }
  .tab-item{
    flex:1;
    text-align:center;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #A5A5A5;
    line-height:23px;
  }
  .tab1{
    margin-top:14px;
    margin-bottom:7px;
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
  }
  .tab-item1{
    flex:1;
    text-align:center;
  }
  header{
    position:relative;
    height:90px;
    border-bottom:1px solid #E2E4E6;
  }
#news-header1{
position:relative;

  font-family:PingFangSC-Semibold;
  font-size: 32px;
  color: #333333;
  line-height:33px;
  text-align:center;
  margin-top:35px;
  margin-bottom:23px;

}
#news-header2{
  float:right;
  margin-right:23px;
  margin-top:-55px;
}

  footer{
    border-top:1px solid #E2E4E6;
    height:100px;

  }

</style>
