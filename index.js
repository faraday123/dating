var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        age: 35,
        avatar: 'avatar1.png'        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        age: 20,
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        age: 22,
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        age: 25,
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        age: 35,
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        age: 45,
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        age: 65,
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        var minAgeField = document.getElementById('min-age');
        var minAge = minAgeField.value;
        var maxAgeField = document.getElementById('max-age');
        var maxAge = maxAgeField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    // if(minAge == '' || users[i].age >= minAge  ){
                        // if(maxAge == '' || users[i].age <= maxAge){
                   if((minAge =='' || users[i].age >= minAge ) && (maxAge =='' || users[i].age <= maxAge)){
                    resultsHtml += ' <div class="grid">\
                    <div class="items">\
                    <div class="image-container">\
                    <img src="images/' + users[i].avatar + '" />\
                    </div>\
                    <div class="text">\
                         <h3>Name:<span class="textStyle"></span>' + users[i].name + ' </h3>\
                         <h3>Age: <span class="textStyle"></span>' + users[i].age + '</h3>\
                         <h3>Hobbies: <span class="textStyle1">' + users[i].hobby + '</span></h3>\
                         <button>Add as friend</button>\
                    </div>\
                    </div>';  
                   } 
                }
            }
            }
        // }
        // }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});

{/* <div class="items">
<div class="image-container">
     <img src="/images/avatar1.png" alt="">
</div>
<div class="text">
     <h3>Name:<span class="textStyle">Sam</span> </h3>
     <h3>Age: <span class="textStyle">25</span></h3>
     <h3>Hobbies: <span class="textStyle1">Pets</span></h3>
     <button>Add as friend</button>
</div> */}