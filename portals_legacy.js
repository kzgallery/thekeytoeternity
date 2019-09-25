AFRAME.registerComponent('portal_legacy', {
update: function () {
  var el = this.el;  // <a-sphere>
  var flag = false;
  var timer;

    var parel = el.parentEl;
	<!-- get element to dissapear gradualy --> 
    var sky = parel.querySelector('a-sky');
      
	el.addEventListener('mouseenter', () => {
		flag = true;
	if (el.parentEl.getAttribute('visible')) {
		el.object3D.scale.x = el.object3D.scale.x * 2;
		el.object3D.scale.y = el.object3D.scale.y * 2;
		el.object3D.scale.z = el.object3D.scale.z * 2;
		setTimeout(changeScene, 800);
    timer = setInterval(function () {
	    console.log(sky.components.material.material.opacity); 
	    sky.components.material.material.opacity = sky.components.material.material.opacity * 0.9;
	    if (sky.components.material.material.opacity < 0.1) {
		    clearInterval(timer);
		    sky.components.material.material.opacity = 1;
	    } 
    }, 100);
	}
      });
	el.addEventListener('mouseleave', () => {
	flag = false;
	if (el.parentEl.getAttribute('visible')) {
		el.object3D.scale.x = el.object3D.scale.x * 0.5;
		el.object3D.scale.y = el.object3D.scale.y * 0.5;
		el.object3D.scale.z = el.object3D.scale.z * 0.5;
	    clearInterval(timer);
	    sky.components.material.material.opacity = 1;
	}
      });
      function changeScene() {
	  console.log("flag");
	  console.log(flag);
	  if (flag) {
		flag = false;
		el.object3D.scale.x = el.object3D.scale.x * 0.5;
		el.object3D.scale.y = el.object3D.scale.y * 0.5;
		el.object3D.scale.z = el.object3D.scale.z * 0.5;

	<!-- get the entity out of the way --> 
	parel.object3D.scale.x = 0;
	parel.object3D.scale.y = 0;
	parel.object3D.scale.z = 0;
    var toel = document.getElementById(el.getAttribute('toid'));
	
	toel.object3D.scale.x = 1;
	toel.object3D.scale.y = 1;
	toel.object3D.scale.z = 1;
    toel.setAttribute('visible', 'true');
    
    document.getElementById(el.parentEl.id).setAttribute('visible', 'false');
	  };
	     }
	    
	}
});
