class YourProgress{
    constructor(){
        this.text=createElement("h2");
        this.label1=createElement("h2");
        this.label2=createElement("h2");
        this.label3=createElement("h2");
        this.label4=createElement("h2");
        this.label5=createElement("h2");
        this.test1=createInput("");
        this.test2=createInput("");
        this.test3=createInput("");
        this.test4=createInput("");
        this.test5=createInput("");
        this.test6=createInput("");
        this.test7=createInput("");
        this.test8=createInput("");
        this.subject1=createInput("");
    }
    display(){
        this.text.position(200,80);
        this.text.html("YOUR PROGRESS");
        
    }
}