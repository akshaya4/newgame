class YearlyPlanner{
    constructor(){
        this.Text=createElement("h2");
        this.YearLabel=createElement("h2");
        this.YearInp1=createInput();
        this.YearInp2=createInput();
        this.YearInp3=createInput();
        this.YearInp4=createInput();
        this.YearInp5=createInput();

        this.goal1=createInput();

               
    }
    display(){
        this.Text.position(200,100);
        this.Text.html("YEARLY PLANNER"+"</br>"+"Make a list of goals you need to accomplish in a particular year.");
         
        this.YearLabel.position();
        this.YearLabel.html("Year with its goal");

        this.YearInp1.position();
        this.YearInp2.position();
        this.YearInp3.position();
        this.YearInp4.position();
        this.YearInp5.position();


        
    }
}