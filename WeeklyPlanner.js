class WeeklyPlanner{
    constructor(){
        this.Text=createElement("h2");
        //declare variables for day, time slot and activity
        this.Mon=createElement("h2");
        this.Tue=createElement("h2");
        this.Wed=createElement("h2");
        this.Thu=createElement("h2");
        this.Fri=createElement("h2");
        this.Sat=createElement("h2");
        this.Sun=createElement("h2");

        this.m1=createInput("");
        this.m2=createInput("");
        this.m3=createInput("");
        this.m4=createInput("");
        this.m5=createInput("");
        this.m6=createInput("");
        this.m7=createInput("");
        this.m8=createInput("");
        this.m9=createInput("");
        //this.m10=createInput("");
        
        this.t1=createInput("");
        this.t2=createInput("");
        this.t3=createInput("");
        this.t4=createInput("");
        this.t5=createInput("");
        this.t6=createInput("");
        this.t7=createInput("");
        this.t8=createInput("");
        this.t9=createInput("");
        //this.t10=createInput("");
 
        this.w1=createInput("");
        this.w2=createInput("");
        this.w3=createInput("");
        this.w4=createInput("");
        this.w5=createInput("");
        this.w6=createInput("");
        this.w7=createInput("");
        this.w8=createInput("");
        this.w9=createInput("");
        //this.w10=createInput("");
        
        this.th1=createInput("");
        this.th2=createInput("");
        this.th3=createInput("");
        this.th4=createInput("");
        this.th5=createInput("");
        this.th6=createInput("");
        this.th7=createInput("");
        this.th8=createInput("");
        this.th9=createInput("");

        this.f1=createInput("");
        this.f2=createInput("");
        this.f3=createInput("");
        this.f4=createInput("");
        this.f5=createInput("");
        this.f6=createInput("");
        this.f7=createInput("");
        this.f8=createInput("");
        this.f9=createInput("");
        
        this.s1=createInput("");
        this.s2=createInput("");
        this.s3=createInput("");
        this.s4=createInput("");
        this.s5=createInput("");
        this.s6=createInput("");
        this.s7=createInput("");
        this.s8=createInput("");
        this.s9=createInput("");

        this.su1=createInput("");
        this.su2=createInput("");
        this.su3=createInput("");
        this.su4=createInput("");
        this.su5=createInput("");
        this.su6=createInput("");
        this.su7=createInput("");
        this.su8=createInput("");
        this.su9=createInput("");
        
        
        

    }
    display(){
        this.Text.position(200,100);
        this.Text.html("YOUR WEEKLY PLANNER"+"</br>"+"Here you can get a totally empty table where you can give a time slot with assigned task, as you like it.")
   
        this.Mon.position(150,200);
        this.Tue.position(350,200);
        this.Wed.position(550,200);
        this.Thu.position(750,200);
        this.Fri.position(950,200);
        this.Sat.position(1150,200);
        this.Sun.position(1350,200);

        this.Mon.html("Monday");
        this.Tue.html("Tuesday");
        this.Wed.html("Wednesday");
        this.Thu.html("Thursday");
        this.Fri.html("Friday");
        this.Sat.html("Saturday");
        this.Sun.html("Sunday");

        this.m1.position(150,310);
        this.m2.position(150,370);
        this.m3.position(150,430);
        this.m4.position(150,490);
        this.m5.position(150,550);
        this.m6.position(150,610);
        this.m7.position(150,670);
        this.m8.position(150,730);
        this.m9.position(150,790);

        this.t1.position(350,310);
        this.t2.position(350,370);
        this.t3.position(350,430);
        this.t4.position(350,490);
        this.t5.position(350,550);
        this.t6.position(350,610);
        this.t7.position(350,670);
        this.t8.position(350,730);
        this.t9.position(350,790);
        
        this.w1.position(550,310);
        this.w2.position(550,370);
        this.w3.position(550,430);
        this.w4.position(550,490);
        this.w5.position(550,550);
        this.w6.position(550,610);
        this.w7.position(550,670);
        this.w8.position(550,730);
        this.w9.position(550,790);

        this.th1.position(750,310);
        this.th2.position(750,370);
        this.th3.position(750,430);
        this.th4.position(750,490);
        this.th5.position(750,550);
        this.th6.position(750,610);
        this.th7.position(750,670);
        this.th8.position(750,730);
        this.th9.position(750,790);

        this.f1.position(950,310);
        this.f2.position(950,370);
        this.f3.position(950,430);
        this.f4.position(950,490);
        this.f5.position(950,550);
        this.f6.position(950,610);
        this.f7.position(950,670);
        this.f8.position(950,730);
        this.f9.position(950,790);
        
        this.s1.position(1150,310);
        this.s2.position(1150,370);
        this.s3.position(1150,430);
        this.s4.position(1150,490);
        this.s5.position(1150,550);
        this.s6.position(1150,610);
        this.s7.position(1150,670);
        this.s8.position(1150,730);
        this.s9.position(1150,790);

        this.su1.position(1350,310);
        this.su2.position(1350,370);
        this.su3.position(1350,430);
        this.su4.position(1350,490);
        this.su5.position(1350,550);
        this.su6.position(1350,610);
        this.su7.position(1350,670);
        this.su8.position(1350,730);
        this.su9.position(1350,790);

        this.su1.size(125,19);
        this.su2.size(125,19);
        this.su3.size(125,19);
        this.su4.size(125,19);
        this.su5.size(125,19);
        this.su6.size(125,19);
        this.su7.size(125,19);
        this.su8.size(125,19);
        this.su9.size(125,19);
             
        
        
        
    }
}