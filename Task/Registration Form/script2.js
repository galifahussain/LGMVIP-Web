//Function to display the details
function insertData() {
    //assigning the input values to variables
    getImg = document.getElementById("imgID").value;
    getName = document.getElementById("nameID").value;
    getEmail = document.getElementById("emailID").value;
    getAge = document.getElementById("dateofBirth").value;
	getgender = document.getElementById("genderID").value;
    //Checking if the user input is empty to displaying an alert messege!!! 
    if ((getImg.length == 0) || (getName.length == 0) || (getEmail.length == 0) || (getAge.length == 0)) {
        alert("Please do fill all the fields!");
    }

    //else to perform the tasks

    else {

        //creating an div to display the content

        mainContainer = document.getElementById("display");
        innerContainer = document.createElement("div");
        innerContainer.className = "innerContainerStyle"
        mainContainer.appendChild(innerContainer);

        //creating an element and appending to the innerbox to display image

        imageContainer = document.createElement("img");
        imageContainer.src = "profile.jpg";
        imageContainer.alt = "image";
        innerContainer.appendChild(imageContainer);

        //creating an element and appending to inner box to display name

        nameContainer = document.createElement("p");
        nameContainer.className = "nameStyle";
        nameContainer.innerHTML = "Name :  " + " " + getName;
        innerContainer.appendChild(nameContainer);
		
		//creating an element and appending to inner box to display gender
		
		genderContainer = document.createElement("p");
        genderContainer.className = "genderStyle";
        genderContainer.innerHTML = "Gender :  " + " " + getgender;
        innerContainer.appendChild(genderContainer);

        //creating an element and appending to inner box to display DOB

        ageBox = document.createElement("p");
        ageBox.className = "ageStyle";
        ageBox.innerHTML = "D.O.B :  " + " " + getAge;
        innerContainer.appendChild(ageBox);


        //creating an element and appending to inner box to display email


        emailContainer = document.createElement("p");
        emailContainer.className = "emailStyle";
        emailContainer.innerHTML = "Email :  " + " " + getEmail;
        innerContainer.appendChild(emailContainer);

    }
}