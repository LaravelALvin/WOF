body { 
    
    background-color: #fff; 
    font-family: sans-serif; 
    color:#666; 
}
h1, h2 { 
    font-weight: 700; 
    line-height:2; 
}

#cavas{
    width: 1000;
    height: 600;
}
#wheel {
    position: fixed;
    margin-left: 28%; 
    margin-top: -13%;
}
#sum{
    margin-left: 14%;
}
#textname{
    
    
    margin-top: 15%;
    margin-left: 10%;
}

.vertical-alignment-helper {
    display:table;
    height: 100%;
    width: 100%;
    pointer-events:none;
}
.vertical-align-center {
    /* To center vertically */
    display: table-cell;
    vertical-align: middle;
    pointer-events:none;
}
.modal-content {
    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */
    width:inherit;
 max-width:inherit; /* For Bootstrap 4 - to avoid the modal window stretching full width */
    height:inherit;
    /* To center horizontally */
    margin: 0 auto;
    pointer-events:all;
}


@media screen and (max-width: 800px){

    #textname{
        z-index: 999999;
        margin-top: 125%;
        margin-left: 28%;
    }

    #sum{
        margin-left: 43%;
    }

    #wheel {
        position: block;
        margin-left: -20%; 
        margin-top: -120%;
    }
    
}

nav {
    height: 55px;
    background: #167DF0;
    color: #fff;
    display: flex;
    justify-content: space-between;
}

nav .openMenu {
    font-size: 25px;
    margin: 10px;
    display: none;
    cursor: pointer;
}

nav .logo h5 {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
}
nav .logo {
    margin: 3px;
    font-size: 25px;
    cursor: pointer;
}

@media(max-width: 800px){
    nav .mainMenu {
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #000;
        transition: top 1s ease;
        display: none;
    }
   
    nav .openMenu {
        margin-top: 15px;
        margin-right: 15px;
        display: block;
    }
    
    .icons i {
        display: inline-block;
        padding: 12px;
    }
}
