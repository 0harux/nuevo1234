document.getElementById(`menu-toggle`).addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    //Cuando se da el evento click por primera vez, se oculta
    sidebar.classList.toggle('hidden');

    //Cuando el menú está cerrado, cambia en el main content a estado shifted
    if(sidebar.classList.contains('hidden')){
        mainContent.classList.add('shifted');
    } else {
        mainContent.classList.remove('shifted');
    }
});

document.querySelectorAll('.sidebar-item').forEach(item=>{
    item.addEventListener('click',function(){
        document.querySelectorAll('.sidebar-item').forEach(i=>{
            if(i != this){
                i.classList.remove('active');
            }
        })
        this.classList.toggle('active')
    });
});

document.getElementById('user-photo').addEventListener('click',function(){
    const dropDown = document.getElementById('dropdown');
    dropDown.classList.toggle('show');
})

document.addEventListener('click', function(event){
    const userPhoto = document.getElementById('user-photo');
    const dropDown = document.getElementById('dropdown');

    if(!userPhoto.contains(event.target) && ! dropDown.contains(event.target)){
        dropDown.classList.remove('show');
    }
})

document.getElementById('close-btn-create').addEventListener('click',function(){
    document.getElementById('modal-create').style.display=none;
});

document.querySelectorAll('.submenu-item').forEach(item=>{
    if(item.textContent=='Crear'){
        item.addEventListener('click',function(){
            document.getElementById('modal-create').style.display='flex';
        });
    }
})