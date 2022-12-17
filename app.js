var s1 = {
    rollno :1,
    name: 'araib',
    cnic : 12323123213213
    }
    var s2 = {
    rollno : 2,
    name : 'huzaifa',
    cnic : 21323213, 
        
    }
    var s3 = {
     rollno : 3,
     name : 'ashir',
     cnic : 143121421 
        
    }
    var s4 = {
     rollno : 4,
     name : 'rafay',
        cnic : 143211423
    }
    var s5 = {
     rollno: 5,
     name : 'rafif', 
        cnic : 542343543
    }
    var s6 = {
    rollno : 6, 
        name : 'Ahtasham',
        cnic : 3643534314
    }
    var s7 = {
    rollno : 7, 
        name : 'Hassan',
        cnic : 56435325
    }
    var s8 = {
    rollno : 8,
    name : 'Rehman', 
        cnic : 324325324
    }
    var s9 = {
    rollno : 9,
    name : 'Talha',
    cnic : 435452332
        
    }
    var s10 = {
    rollno : 10,
    name : 'Rafiq', 
        cnic : 5245324234
    }

    
    function search(rollnumber){
        var displayoutput = document.getElementById('output');
        var rollnumber = document.getElementById('rollno').value;
        var i;
        
        var arr = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
        for(i=0;i<arr.length;i++){
            if(rollnumber==arr[i].rollno){
        displayoutput.innerHTML ="Name : "+arr[i].name+"<br>"+"Roll No : "+arr[i].rollno+"<br>"+"CNic : "+arr[i].cnic;
            }
            
        }
       
    }