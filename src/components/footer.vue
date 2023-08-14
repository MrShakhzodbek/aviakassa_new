<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-8 aviskassa">
                    <ul>
                        <li>Aviakassa.com</li>
                        <li>
                            <a href="">About service</a>
                        </li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">Confidentiality policy</a></li>
                    </ul>
                    <div class="logos">
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div class="col-2 services">
                        <ul>
                            <li>Services</li>
                            <li><a href="">Flights</a></li>
                            <li><a href="">Rail Tickets </a></li>
                        </ul>
                </div>
                <div class="col-2 apps">
                        <ul>
                            <li>Mobile Apps</li>
                            <li><a href=""><i class="fa-brands fa-apple"></i>IPhone</a></li>
                            <li><a href=""><i class="fa-brands fa-android"></i>Android</a></li>
                        </ul>
                </div>
                <hr>
                <div class="col-12 phone">
                    <ul>
                        <li><i class="fa-solid fa-phone"></i>+99 855 515-90-99</li>
                        <li><i class="fa-solid fa-phone"></i>+99 894 167-46-46</li>
                        <li><i class="fa-solid fa-phone"></i>+99 894 420-33-00</li>
                    </ul>
                </div>  
            </div>
        </div>
        
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
footer{
    background: #1f2630;
    padding: 80px 50px;
}
.aviskassa ul,.services ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
}
.aviskassa ul li, .services ul li{
    color:#ffffff ;
    
}
.aviskassa ul li:first-child, .services ul li:first-child{
    font-size: 20px;
    color: rgb(13, 246, 242);
}
.aviskassa ul li a, .services ul li a{
    text-decoration: none;
    color: white;
}
.aviskassa ul li a:hover, .services ul li a:hover {
    color: rgb(103, 171, 230);
}
.logos{
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    padding-left: 30px;
    padding-top: 20px;
}
.logos .fa-telegram{
    color: rgb(20, 167, 235);
    font-size: 30px;
}
.logos .fa-instagram{
    color: rgb(233, 11, 244);
    font-size: 30px;
}
.logos .fa-youtube{
    color: red;
    font-size: 30px;
}
hr{
    color: white;
    margin-top: 50px;
    margin-bottom: ;
}
.apps ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
}
.apps ul li a{
    text-decoration: none;
    color: #ffffff;
}
.apps ul li a .fa-apple, .apps ul li a .fa-android {
    margin-right: 7px;
}
.phone ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.phone ul li {
    color: #ffffff;
    transition: 500ms;
}
.phone ul li .fa-phone{
    margin-right: 10px;
}
.phone ul li:hover{
    color: #36baea;
    cursor: pointer
}
</style>