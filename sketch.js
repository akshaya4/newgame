var form1, form2, form3, user, game, timePlanner,examSchedule,bookRecord,feeRecord,reminderRecord,activityRecord,assRecord;
var gameState = 0;
var database;
var userCount;
var userIndex;
var goal;
var ImgSprite;
var GoalSettingButton,TimePlannerButton,ExamScheduleButton,YourProgressButton,LibraryButton,AssignmentButton,TuitionButton,FeesPaymentButton,ReminderButton,CocurricularButton;
//var goalInput,goalvalue,submitButton;
var timeText, assText,Text3,progress;
var libArray = [];
var userGoal=null;
var formImg,classImg,chooseImg,goalImg;
var feeCheckX,feeCheckY;
var feej;
var checks=[];
var clock;
var hr,mn,sc,hrAngle,mnAngle,scAngle;

function preload() { //to load images
   
  var  formImg=loadImage("Images/books.jfif");
  var  classImg=loadImage("Images/classroom.jfif");
  var  chooseImg=loadImage("Images/goalQuotes.jfif");
  var  goalImg=loadImage("Images/goalSetting.jfif");
  var  timeTableImg=loadImage("Images/timeTable.jfif");
  var  assignmentImg=loadImage("Images/assignment.jfif");
  var  examScheduleImg=loadImage("Images/exams.jfif");
  var  progressImg=loadImage("Images/examresults.jfif");
  var  libraryImg=loadImage("Images/library.jfif");
  var  tuitionImg=loadImage("Images/tuitionclass.jfif");
  var  feesImg=loadImage("Images/fees.jfif");
  var  cocurricularImg=loadImage("Images/Cocurricular.jfif");
  var remindImg=loadImage("Images/reminder.jfif");
   
}


function setup() {
    canvas = createCanvas(displayWidth - 36, displayHeight - 20);
    database = firebase.database();

   // ImgSprite = createSprite(160, 480, 200, 300);

    user = new User();
    user.getUserCount();
    user.readGoal();

    game = new Game();
    game.getState();
    game.start();


}


function draw() {

    console.log(mouseX, mouseY);

    if (gameState === 0) {//user form introductory
        background(253,160,222);
       // ImgSprite.addImage(formImg);
      
    }

    if (gameState === 1) {//study r8 intro
        background(247, 140, 153);
      // ImgSprite.addImage(classImg);
    }

    if (gameState === 2) {//choose planner
        clear();
        background(184,255,245);
        game.displayChoose();
        //ImgSprite.addImage(chooseImg);
    }

    if (gameState === 3) {//goalsetting
        background(193,163,255);
       // ImgSprite.addImage(goalImg);
       // game.displayGoalSetting();
       goal=new GoalSetting();
       game.update(3.5);
  
    }
    if(gameState===3.5){
        goal.display();
    }


    if (gameState === 4) {//timeplanner
        background(204, 155, 247);
       //ImgSprite.addImage(timeTableImg);

         clock=new Clock();
        

        //game.displayTimePlanner();
        timePlanner=new TimePlanner;
        game.update(4.5);
       }
        if(gameState==4.5){
            timePlanner.display();
            clock.display();
        }

    if (gameState === 5) {//exam
        background(255, 241, 59);
        //game.displayExamSchedule();

        var examX = 140, examY = 160;
        for (examY = 160; examY < 701; examY += 60) {
            line(140, examY, 1340, examY);
        }
        for (examX = 140; examX < 1341; examX += 200) {
            line(examX, 160, examX, 700);
        }        
       // ImgSprite.addImage(examScheduleImg);

       examSchedule=new ExamSchedule;
       game.update(5.5); 

    }
    if(gameState==5.5){    
        examSchedule.display(); 
    }

    if (gameState === 6) {//progress
        background(231, 221, 247);
      //  ImgSprite.addImage(progressImg);
      var proX=200,proY=250;
      for(proY=250;proY<=800;proY+=100){
        line(200,proY,1000,proY);
      }
      for(proX=200;proX<=1000;proX=+200){    
        line(proX,250,proX,800);               
      }
    progress=new YourProgress;
    game.update(6.5);

    }

    if(gameState==6.5){
        progress.display();
    }

    if (gameState === 7) {//library
        background(218, 169, 203);
       
       // ImgSprite.addImage(libraryImg);
        var timeX = 240, timeY = 160;
        for (timeY = 160; timeY < 710; timeY += 60) {
            line(240, timeY, 1230, timeY);
        }
        for (timeX = 240; timeX < 1230; timeX += 247) {
            line(timeX, 160, timeX, 710);
        }

        
        bookRecord=new Library();
        game.update(7.5);
       //game.displayLibrary();
    }
    if(gameState==7.5){
        bookRecord.display();
    }

    if (gameState === 8) {//fees
        background(229, 147, 204);
      //  ImgSprite.addImage(feesImg);

        line(100, 140, 100, 710);
        var feeX = 100, feeY = 140;
        for (feeY = 140; feeY < 740; feeY += 30) {
            line(100, feeY, 1293, feeY);
        }
        for (feeX = 250; feeX < 1293; feeX += 80) {
            line(feeX, 140, feeX, 710);
        }
        if(gameState!=2){
        }

        feeRecord=new FeesPayments();
        
        //for(feej=1;feej<=216;feej++){
            //check.hide();
        //} 
        game.update(8.5);
        //game.displayFeesPayment();

    }
    if (gameState===8.5){
        feeRecord.display();
       
    }
/*
    if(gameState===8 ||gameState===8.5 ){
        for(feej=1;feej<=216;feej++){
            check.hide();
            }  
    }
*/
if(gameState!=8||gameState!=8.5){
    
    for(var j=0;j<=checks.length;j++){
        checks[j].hide();
        //checks.pop();
        }
}

    if (gameState === 9) {//assignment
        background(170, 248, 239);
        //ImgSprite.addImage(assignmentImg);
        //assignment,subject,dueDate,source
        var asX = 240, asY = 160;
        for (asY = 160; asY < 710; asY += 60) {
            line(240, asY, 1230, asY);
        }
        for (asX = 240; asX < 1230; asX += 247) {
            line(asX, 160, asX, 710);
        }
        assRecord=new Assignment();
        game.update(9.5);
       // game.displayAssignment();
    }
    if(gameState==9.5){
        assRecord.display();
    }
    if (gameState === 10) {//tuition
        background(227, 241, 159);
        var tuiX = 70, tuiY = 120;
        for (tuiY = 120; tuiY < 770; tuiY += 80) {
            line(70, tuiY, 1210, tuiY);
        }
        for (tuiX = 70; tuiX < 1220; tuiX += 190) {
            line(tuiX, 120, tuiX, 760);
        }
       // ImgSprite.addImage(tuitionImg);
    }

    if (gameState === 11) {//cocurricular
        background(248, 248, 0);
        var coX = 240, coY = 160;
        for (coY = 160; coY < 710; coY += 60) {
            line(240, coY, 1240, coY);
        }
        for (coX = 240; coX < 1240; coX += 199) {
            line(coX, 160, coX, 710);
        }

        activityRecord=new Cocurricular();
        game.update(11.5);
       // ImgSprite.addImage(cocurricularImg);
    }
    if(gameState==11.5){
        activityRecord.display();
    }

    if (gameState === 12) {
        background(250, 100, 100);
        //ImgSprite.addImage(remindImg);
        for(reY=200;reY<1200;reY+=100){
            line(200,reY,1200,reY);
        }
        line(200,200,200,800);
        line(1200,200,1200,800);
        line(900,200,900,800);

        console.log(hour()+":"+minute());

        reminderRecord=new Reminders();
        game.update(12.5);
    }
    if(gameState==12.5){
        reminderRecord.display();
    }

    if(gameState==13){//weekly planner
        for(weekX=130;weekX<=1530;weekX+=200){
            line(weekX,150,weekX,750);
        }
        line(1480,150,1480,750);
        for(weekY=150;weekY<=750;weekY+=60){
            line(130,weekY,1480,weekY);
        }
         weekly=new WeeklyPlanner();
         game.update(13.5);
    }
    if(gameState==13.5){
         weekly.display();
    }
    if(gameState==14){//monthly planner
        for(monthY=215;monthY<=625;monthY+=100){
            line(280,monthY,1215,monthY);
        }
        line(280,215,280,620);
        line(1215,215,1215,620);
        line(585,215,585,620);
        monthly=new MonthlyPlanner();
        game.update(14.5);
    }
    if(gameState==14.5){
        monthly.display();
    }
    if(gameState==15){//yearly planner
        yearly=new YearlyPlanner();
        game.update(15.5);
    }
    if(gameState==15.5){
        yearly.display();
    }

    
drawSprites();
}
















