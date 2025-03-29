function validateLogin(){


    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value.trim();
    const messageBox=document.getElementById("messageBox");


    try{

        messageBox.textContent="";
        messageBox.style.color="black";


        if(username===''||password===""){


            throw new Error("❌ username and password cannot empty")
        }

        if(username.length<3){

            throw new Error("❌ Username must be at least 3 characters")
        }

        if(password.length<6){

            throw new Error("❌ Password should be at least 6 characters")
        }

        if(username!=="admin"|| password!=="admin123"){

            throw new Error("❌ Invalid Username or Password")
        }

        messageBox.style.color="green"

        messageBox.textContent="✅ Login Successful"

    }

    catch(error){
        messageBox.style.color="red";

        messageBox.textContent=error.message;
    }
    
}