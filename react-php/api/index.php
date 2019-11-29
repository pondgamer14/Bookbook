<?php 

$type = $_GET['tp']; 
if($type=='signup') signup(); 
elseif($type=='login') login(); 
elseif($type=='feed') feed(); 
elseif($type=='feed1') feed1(); 
elseif($type=='feedUpdate') feedUpdate();
elseif($type=='feedUpdate1') feedUpdate1();
elseif($type=='getTotal') getTotal();
elseif($type=='feedDelete') feedDelete(); 
elseif($type=='totalprice') totalprice();
function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $username = $json['username']; $password = $json['password']; 
       $userData =''; 
	   $query = "select * from users where username='$username' and password='$password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $user_id=$userData->user_id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';

            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}



function signup() {
    
        require 'config.php';

              
        $json = json_decode(file_get_contents('php://input'), true);
        $username = $json['username'];
        $password = $json['password'];
        $email = $json['email'];
        $name = $json['name'];

        $username_check = preg_match("/^[A-Za-z0-9_]{4,10}$/i", $username);
        $email_check = preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i', $email);
        $password_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $password);
       
        if($username_check==0) 
            echo '{"error":"Invalid username"}';
        elseif($email_check==0) 
            echo '{"error":"Invalid email"}';
        elseif($password_check ==0) 
            echo '{"error":"Invalid password"}';

        elseif (strlen(trim($username))>0 && strlen(trim($password))>0 && strlen(trim($email))>0 && 
            $email_check>0 && $username_check>0 && $password_check>0)
        {
           

            $userData = '';
            
            $result = $db->query("select * from users where username='$username' or email='$email'");
            $rowCount=$result->num_rows;
            //echo '{"text": "'.$rowCount.'"}';
           
            if($rowCount==0)
            {
                                
                $db->query("INSERT INTO users(username,password,email,name)
                            VALUES('$username','$password','$email','$name')");

                $userData ='';
                $query = "select * from users where username='$username' and password='$password'";
                $result= $db->query($query);
                $userData = $result->fetch_object();
                $user_id=$userData->user_id;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            } 
            else {
               echo '{"error":"username or email exists"}';
            }

        }
        else{
            echo '{"text":"Enter valid data2"}';
        }
   
}


function feed(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    
    $query = "SELECT * FROM feed WHERE user_id=$user_id and status=1 ORDER BY feed_id ASC LIMIT 10";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';
    
   
}
function feed1(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    
    $query = "SELECT * FROM feed WHERE user_id=$user_id and status=2 ORDER BY feed_id ASC LIMIT 10";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';
    
   
}


function feedUpdate(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed=$json['feed'];
    $price=$json['price'];
    $feedData = '';
    if($user_id !=0)
    {
        $query = "INSERT INTO feed ( feed, user_id,price,status) VALUES ('$feed','$user_id',$price,1)";
        $db->query($query);              
    }
    $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id ASC LIMIT 10";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';

}
function feedUpdate1(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed=$json['feed'];
    $price=$json['price'];
    $feedData = '';
    if($user_id !=0)
    {
        $query = "INSERT INTO feed ( feed, user_id,price,status) VALUES ('$feed','$user_id',$price,2)";
        $db->query($query);              
    }
    $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id ASC LIMIT 10";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';

}

function feedDelete(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed_id=$json['feed_id'];
	
         
    $query = "Delete FROM feed WHERE user_id=$user_id AND feed_id=$feed_id";
    $result = $db->query($query);
    if($result)       
    {        
        echo '{"success":"Feed deleted"}';
    } else{
     
        echo '{"error":"Delete error"}';
    }
       
       
    
}
function getTotal(){
	 require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
	 $Total ='';
                $query = "SELECT SUM(price)AS Total from feed where user_id=$user_id and status=1";
                $result= $db->query($query);
                $Total = $result->fetch_object();
                $Total=$Total->Total;
                $Total = json_encode($Total);
                echo '{"Total":'.$Total.'}';
}



?>