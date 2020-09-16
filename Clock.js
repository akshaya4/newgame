class Clock{
    constructor(){}
    display(){
        hr = hour();
        mn = minute();
        sc = second();
        angleMode(DEGREES);
        scAngle = map(sc, 0, 60, 0, 360);
        mnAngle = map(mn, 0, 60, 0, 360);
        hrAngle = map(hr % 12, 0, 60, 0, 360);
        fill(242, 201, 195);
        ellipse(150, 300, 300, 300);
        //second hand
        translate(150, 300);
        rotate(-80);//-90
        push();
        rotate(scAngle);
        stroke(134, 165, 213);
        strokeWeight(3);
        line(0, 0, 140, 0);
        pop();
        //minute hand
        translate(0, 0);
        rotate(-10);//-180
        push();
        rotate(mnAngle);
        stroke(107, 96, 190);
        strokeWeight(6);
        line(0, 0, 120, 0);
        pop();
        //hour hand
        translate(0, 0);
        rotate(180);//180
        push();
        rotate(hrAngle);
        stroke(107, 96, 190);
        strokeWeight(8);
        line(0, 0, 80, 0);
        pop();
    }
    hide(){
        clock.hide();
    }
}