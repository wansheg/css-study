<template>
  <div class="hello">
    <h2>
      varying size Block A static on left; "fix size Block B" float right
    </h2>
    <div style="overflow:hidden; background-color:#ddd" >
      <div style="height: 200px; background-color:red">
        { height: 200px }
      </div>
      <div style="width:200px;height: 200px; float: right; background-color:green ">
        { float: right; width: 200px; height: 200px;}
      </div>
    </div>

    <h2>
       "fix size Block A float right, 
      varying size Block B with "CFB" static on left;
    </h2>
    <div style="overflow:hidden; background-color:#ddd" >
      <div style="width:200px;height: 200px; float: right; background-color:green; margin:20px; ">
        { float: right; width: 200px; height: 200px;}
      </div>
      <div style="height: 200px; background-color:red; overflow:hidden; margin:20px;">
        { height: 200px ;overflow:hidden}
      </div>
    </div>

    <h2>
      "fix size Block B float right, 
      varying size Block B with "CFB" static on left; 
    </h2>
    <div style="overflow:hidden; background-color:#ddd" >
      <div style="width:200px;height: 200px; float: right; background-color:green; margin:20px; ">
        { float: right; width: 200px; height: 200px; margin:20px;}
      </div>
      <div style="height: 200px; background-color:red; margin:20px; margin-right:300px;">
        { height: 200px ;margin:20px; margin-right:300px;}
      </div>
    </div>

    <h2>
      "fix size Block B with minus margin, 
      varying size Block B with "CFB" static on left; 
    </h2>
    <div style="overflow:hidden; background-color:#ddd" >
      <div style="width:200px;height: 200px; float: right; background-color:green; margin:20px; ">
        { float: right; width: 200px; height: 200px; margin:20px;}
      </div>
      <div style="height: 200px; background-color:red; margin:20px; margin-right:300px;">
        { height: 200px ;margin:20px; margin-right:300px;}
      </div>
    </div>

    <div style="margin-top: 20px">
      <h2>
      float left before normal block level element
      </h2>

      <p style="text-align:left; font-size:2em;background-color:#ddf">
      <br>
      If a floated element is
      <br>
      followed by an element in the flow of the document, the element’s box will behave as if the float didn’t exist.
      <br>
      However, the textual content of the box retains some memory of the floated element and moves out of the
      <br>
      way to make room. In technical terms, a line box next to a floated element is shortened to make room for
      <br>
      the floated element, thereby flowing around the floated box. In fact, floats were created to allow text to flow
      <br>
      around images (see following case ).
      <br>
      </p>
    </div>
    <div style="background-color:blue; overflow:hidden; padding:20px; text-align:left" >
      <div style="background-color:red; float:left" >
        div1
        <br>
        { float: left }
      </div>
      <div style="background-color:green">
          div2
          <br>
          not float  block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
    </div>

    <div style="font-size:2em; background-color:#ddf;">
      <h2>
         clear 属性,清除浮动的following around 效果
      </h2>

      <p style="color:#224">
      <br>
        To stop line boxes from flowing around the outside of a floated box, you need to apply a clear property
      <br>
        to the element that contains those line boxes. The clear property can be left , right , both , or none , and it
      <br>
        indicates which side of the box should not be next to a floated box.
      <br>
      </p>
    </div>

    <div style="background-color:blue; overflow:hidden; padding:20px; text-align:left" >
      <div style="background-color:red; float:left" >
        float block A 
        <br>
        { float: left }
      </div>
      <div style="color:green" >
        normal block B;
        <br>
        I am following around the "float block A",  you need "clear:left" to disable the "following around "
      </div>
      <div style="background-color:green; clear: left">
         normal block C
         <br>
         {clear: left }
          <br>
          not float  block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
    </div>

    <div>
      <p style="background-color:#bbf">
        How do you visually get the wrapper to enclose the floated element? You need to apply a
        <br>
        clear somewhere inside that element, which as we saw earlier creates enough vertical margin on the cleared
        <br>
        element to allow room for the floated elements (see Figure  3-20 ). Unfortunately, as there are no existing
        <br>
        elements in the example to clear, you could add an empty element before the closing div tag, and clear that:
        <br>
      </p>
    </div>
    <div id="container_for_test_clear" style="background-color:blue; padding:20px; text-align:left" >
      <h2 style="color:white">
      container Block is not "BFC" 
      </h2>
      <div style="background-color:red; float:left" >
        float block A 
        <br>
        { float: left }
      </div>
      <div style="background-color:green; float:left; " >
        float block B;
        <br>
        {
          <br>
          float:left;
          <br>
        }
      </div>
    </div>


    <div style="margin-top: 20px">
      no float block is followed by float block
    </div>
    <div id="test1_A" style="background-color:blue; padding:20px; text-align:left" >
      <div style="background-color:green; overflow:hidden; width:20%">
          div2
          <br>
          not float block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
      <div style="background-color:red; float:left;  width:20%;" >
        div1
        <br>
        { float: left }
      </div>
    </div>

    <div style="margin-top: 20px">
      float block is followed by float block
    </div>
    <div id="test1_A" style="overflow:hidden;background-color:blue; padding:20px; text-align:left" >
      <div style="background-color:green; width:20%; float: left;">
          div2
          <br>
          {float: left; width: 20%;}
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
      <div style="background-color:red; float:left;  width:20%;" >
        div1
        <br>
        { float: left; width: 20%; }
      </div>
    </div>

    <div style="margin-top: 20px">
      float block is followed by float block, the float block will adaptive enlarge its content width 
    </div>
    <div id="test1_A" style="overflow:hidden;background-color:blue; padding:20px; text-align:left" >
      <div style="background-color:green; float: left;">
          div2
          <br>
          {float: left;}
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
      <div style="background-color:red; float:left" >
        div1
        <br>
        { float: left; width: 20%; }
      </div>
    </div>

    <div style="margin-top: 20px">
      "float" after normal "block level "
    </div>
    <div style="background-color:blue; overflow:hidden; padding:20px;" >
      <div style="background-color:green">
          div1
          <br>
          not float  block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
      <div style="background-color:red; float:left" >
        div2
        <br>
        {  float: left; }
      </div>
    </div>

    <div style="margin-top: 20px">
      "float left" element before normal block level element which is "BFC"
    </div>
    <div style="background-color:blue; overflow:hidden; padding:20px; text-align:left" >
      <div style="background-color:red; float:left" >
        div1
        <br>
        { float: left }
      </div>
      <div style="background-color:green; overflow:hidden">
          div2
          <br>
          not float  block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
    </div>
    <div style="margin-top: 20px">
      no "BFC" block contain float element, the height of container will not include float elemment
    </div>
    <div style="background-color:blue; padding:20px; text-align:left" >
      <div style="background-color:red; float:left; height: 300px" >
        div1
        <br>
        { float: left }
      </div>
      <div style="background-color:green; overflow:hidden">
          div2
          <br>
          not float  block level div 
          <br>
          -----------------------------------
          <br>
          -----------------------------------
          <br>
          ----------------------------------- 
          <br>
      </div>
    </div>
    <div style="background-color:#ddF;text-align:left;" >
        <h2 >
          https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html
          <br>
          if this  block is "BFC", it doesn't overlay  with "float " block
          <br>
          no BFC block
        </h2>
    </div>

    <div style="background-color:#ddF;overflow:hidden" >
        <h2 >
          https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html
        </h2>
        <br>
          if this  block is "BFC", it doesn't overlay  with "float " block
          { overflow: hidden}//BFC block
    </div>

    <div>
      <h2>
        { clear:both } will clear the float affect , the current block will not collpase margin with previous normal block
      </h2>
    </div>
    <div style="overflow:hidden; background-color: blue" >
      <div style="background-color:red; margin:20px;">
        normal block
      </div>
      <div style="background-color:green; margin:20px;float: left" >
        float block
      </div>
      <div style="background-color:#ddb; margin:20px; clear:both">
        normal block after float block
      </div>
    </div>

    <div>
      <h2>
         the two normal block will collapse margin and skip middle float block
      </h2>
    </div>
    <div style="overflow:hidden; background-color: blue" >
      <div style="background-color:red; margin:40px;">
        normal block A
      </div>
      <div style="background-color:green; margin:20px;float: left" >
        float block B
      </div>
      <div style="background-color:#ddb; margin:40px;">
        normal block after float block B will  collpase margin with normal block A
        <br>
        -------------
        <br>
        -------------
        <br>
        -------------
        <br>
        -------------
      </div>
    </div>
    <h1>
      auto margin  center div 
    </h1>
    <h2>
      one div center
    </h2>
    <div style="width:100px;height:100px; background-color:red;margin:auto">
      center normal block A
    </div>
    <h2>
      one div center, two div float left and right
    </h2>
    <div style="background-color:#ddd; padding: 20px;" >
      <div style="width:100px;height:100px; background-color:blue; float:left;color:white;">
        { float: left; }
      </div>
      <div style="width:100px;height:100px; background-color:green; float:right">
        { float: right; }
      </div>
      <div style="width: auto;height:200px; background-color:red;margin:auto">
        { width: auto }
      </div>
    </div>
    <h2>
      one div center, two div float left and right
    </h2>
    <div style="background-color:#ddd; padding:20px;" >
      <div style="width:100px;height:100px; background-color:blue; float:left;color:white;">
        { float: left; }
      </div>
      <div style="width:100px;height:100px; background-color:green; float:right">
        { float: right; }
      </div>
      <div style="width: 200px;margin:auto;height:200px; background-color:red;margin:auto">
        { margin: auto }
      </div>
    </div>
    <h2>
      one div center, two div float left and right
    </h2>
    <div style="background-color:#ddd; padding:20px;" >
      <div style="width:20%;height:100px; background-color:blue; float:left;color:white;">
        { float: left; width:20%; height: 100px;}
      </div>
      <div style="width:20%;height:100px; background-color:green; float:right">
        { float: right; width: 20%; height: 100px;}
      </div>
      <div style="width:60%;margin:auto;height:70px; ;background-color:red;margin:auto">
        { margin: auto; width:60%; height: 70px; }
      </div>
      <div style="clear:both"></div>
    </div>
    <h2>
      width:默认是auto fill-all-availble
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:hidden">
      <div style=" width:auto;background-color:white;padding:20px;" >
          I am container block, { float: left; width:auto;  }
          <div style="width: 200px; height: 200px;background-color:red">
            { height: 200px; width: 200px;}
          </div>
      </div>
    </div>

    <h2>
      float元素一个重要的应用是可以调整自己的大小适应内容的大小
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:hidden">
      <div style="float:left; width:auto;background-color:white;padding:20px;" >
          I am container block, { float: left; width:auto;  }
          <div style="width: 200px; height: 200px;background-color:red">
            { height: 200px; width: 200px;}
          </div>
      </div>
    </div>
    <h2>
      也可以用min-content  实现container block自适应内容大小( 压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:hidden">
      <div style="  width: -webkit-min-content; width: -moz-min-content; width:min-content; margin:auto; background-color:white; padding:20px;" >
          I am container block, { width:min-content;  }
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>
    <h2>
      也可以用max-content  实现container block自适应内容大小( 不压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:hidden">
      <div style="  width: -webkit-max-content; width: -moz-max-content; width:max-content; margin:auto; background-color:white; padding:20px;" >
          I am container block, { width:max-content;  }
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>
    <h2>
      也可以用fit-content  实现container block自适应内容大小( 不压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:hidden">
      <div style="  width: -webkit-fit-content; width: -moz-fit-content; width:fit-content; margin:auto; background-color:white; padding:20px;" >
          I am container block, { width:fit-content;  }
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>

    <h2>
      也可以用availble  实现container block自适应内容大小( 不压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:auto">
      <div style="  width: -webkit-availble; width: -moz-availble; width:availble; margin:auto; background-color:white; padding:20px;" >
          I am container block, { width: availble;  }
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="width: 200px; height: 200px;background-color:red; margin:10px;">
            { height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>


    <h2>
      也可以定义内容元素为inline-block,  实现container block自适应内容大小(不压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:auto">
      <div style=" min-width:200px;  background-color:green; padding:20px;" >
          I am container block, { min-width:200px; }
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display: inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>


    <h2>
      也可以定义内容元素为inline-block,  实现container block自适应内容大小(不压缩内容)
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:auto; ">
      <div style=" min-width:200px;  background-color:green; padding:20px; width: fit-content; text-align:center;" >
          I am container block, { min-width:200px; width: fit-content; text-align:center; }
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display: inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>

    <h2>
      css margin 只影响 没有设置的height, width 的block的可视大小
      <br>
      对应 inline block, float relative , absolute 
    </h2>
    <div style="background-color:#ddd; padding: 10px; overflow:auto; ">
      <div style=" min-width:200px;  margin:20px; background-color:green; padding:20px; width: 800px; height:600px; text-align:center;" >
          { margin: 20px; width: 800px; height: 600px; }
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display:inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
          <div style="display:inline-block; width: 200px; height: 200px;background-color:red; margin:10px;">
            { display: inline-block; height: 200px; width: 200px; margin:10px;}
          </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CssTest',
  data () {
    return {
      test1Desc: 'Content Format Block + Float '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container_for_test_clear::after{
  display:block;
  content:"";
  clear: both;
}

h1, h2 {
  font-weight: normal;
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
</style>
