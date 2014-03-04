WAF.define('CountDownCircle', ['waf-core/widget'], function(widget) {
	
  var CountDownCircle = widget.create('CountDownCircle', {
   /*start properties */

   
   day    : widget.property({type:'number' , defaultValue:0}),
   hour   : widget.property({type:'number' , defaultValue:0}),
   munite : widget.property({type:'number' , defaultValue:0}),
   second : widget.property({type:'number' , defaultValue:0}),


   /*End properties */
  
   init: function() {
   var $node = this.node;

  /* HTML code */
  $node.innerHTML ='<div class="ccounter" style=" width:700px;">'+ 
 '<input class="knob days" data-readOnly="true" data-width="150" data-displayPrevious=true data-fgColor="#66EE66" data-skin="tron" data-thickness=".2" data-min="0" data-max="365" value="75">'+
 '<input class="knob hour" data-readOnly="true" data-width="150" data-min="0" data-max="24" data-displayPrevious=true data-fgColor="#800080" data-skin="tron" data-thickness=".2" value="75">'+
 '<input class="knob minute" data-readOnly="true" data-width="150" data-min="0" data-max="60" data-displayPrevious=true data-fgColor="#ffec03" data-skin="tron" data-thickness=".2" value="75">'+
 '<input class="knob second" data-readOnly="true" data-width="150" data-min="0" data-max="60" data-displayPrevious=true data-fgColor="#00CED1" data-skin="tron" data-thickness=".2" value="75">'+
 '</div>' ;
   
   
  $(".ccounter").ccountdown(2014,5,25,'18:00'); //only need to pass target date and time

        }

    });

    return CountDownCircle;

});

