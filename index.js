;(function($){
	$.fn.info=function(opt){
		var obj={
			isdrag:true,
			width:200,
			height:200,
			bg:"#000",
			id:"",
			text:"e",
			left:23,
			top:56

		}
		var set=$.extend({},obj,opt);
		$(this).on("click",function(){

			if($("#"+set.id).length>0){
				$("#"+set.id).remove();
			}
			var newdiv=$("<div id="+set.id+">"+set.text+"<span class='sped'>&times;</span></div>");
			newdiv.css({"width":set.width,"height":set.height,"background":set.bg,"position":"absolute","left":set.left,"top":set.top});
			newdiv.appendTo("body").hide().fadeIn(600);
			move()
			$(".sped").on("click",function(){
				$(this).parent().fadeOut();
			})
			function move(){
				if(set.isdrag){
					newdiv.on("mousedown",function(e){
					var el=e.pageX-$(this).offset().left;
					var et=e.pageY-$(this).offset().top;

					$(document).on("mousemove",function(e){
						//alert(1)
						var movl=e.pageX-el;
						var movt=e.pageY-et;
						newdiv.css({"left":movl,"top":movt})


					})
					 $(document).on("mouseup",function(){
            			$(this).off("mousemove");
      				 })

					})
				}

			}
			
		})
	}




/*
	$.fn.box=function(opt){
		var obj={
			width:"200px",
			height:"300px",
			bg:"red",
			move:"",
			left:"",
			top:"",
			id:""
		}
		var set=$.extend({},obj,opt)
		$(this).on("click",function(){
			alert(1)
			if($("#"+set.id).length>0){
				
				$("#"+set.id).remove()
			}
			var newdiv=$("<div id='"+set.id+"'><span class='cose'>&times</span></div>")
			newdiv.css({"width":set.width,"height":set.height,"background":set.bg,
				"position":"absolute","left":set.left,"top":set.top})
			newdiv.appendTo("body").hide().fadeIn(600)
			moves()
			$(".cose").on("click",function(){
				$(this).parent().remove()
			})
			function moves(){
			if(set.move==true){
				
					newdiv.on("mousedown",function(e){
						var x=e.pageX-$(this).offset().left
						var y=e.pageY-$(this).offset().top
					 $(document).on("mousemove",function(e){
						var moveX=e.pageX-x
						var moveY=e.pageY-y
						newdiv.css({"left":moveX,"top":moveY})
					})
					
					 $(document).on("mouseup",function(){
            			$(this).off("mousemove");
      				  })
					})
				}
			}
		})
		
		}	
			 
		
 			*/




					



})(jQuery)