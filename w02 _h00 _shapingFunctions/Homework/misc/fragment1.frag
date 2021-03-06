#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float F(float x, float peak, float width){
	float y = 0.0;
	width=width * 0.5;
	y = smoothstep(peak-width,peak,x) - smoothstep(peak,peak+width,x);
	return y;
}

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy*100.;
    // 1. Draw vertical lines
    // float bright = cos(gl_FragCoord.x*0.2);
    
    // 2. Angle
    // float angle = (.1);
    // vec2 direction = vec2(cos(angle),sin(angle));
    // float bright = cos(dot(st,direction));

    // 3. Rotate with time
    float angle = (u_time*.1);
    vec2 direction = vec2(cos(angle),sin(angle*0.2));
    float bright = cos(dot(st,direction));
    angle = angle+0.1;
    



    vec3 color = vec3(0.);
    
    float pct = F(st.x,.5,.4);
    // float pct = F(st.x,abs(sin(u_time)),1.);
    // float pct = F(st.x,0.5+(sin(u_time)*0.5),1.);
    // float pct = F(st.y,0.5+(sin(u_time)*0.5),.05);
//-------
    // float pct = F(st.x,0.5+(sin(u_time)*0.5),.03);
    // pct += F(st.y,0.5+(sin(u_time)*0.5), .03);
//-------
    // float pct = F(st.x,0.5+(sin(u_time)*0.3),.07);
    // pct *= F(st.y,0.5+(sin(u_time)*0.3), .07);
//-------
	// vec2 p = vec2 (cos(u_time*0.5),sin(u_time*0.5))*.25+.5;
	// float pct = F(st.x,p.x,0.1);
	// pct *= F(st.y,p.y,.1);
	

    // color = vec3(pct*abs(sin(u_time)));
 //    // color = vec3(step(0.7,pct));
 //    color = vec3(step(0.7,pct)+pct);
  	color = vec3(bright);
    gl_FragColor = vec4(color,1.0);

}
