//Скрипты для экрана с комплектующими START

let show_or_hide_mb_opts = function(){
    if(document.getElementById("mb_hidden_opts").style.display == "none"){
        document.getElementById("mb_hidden_opts").style.display = "block";
    document.getElementById("mb_plus_button").textContent = "-";
    }
    else{
   document.getElementById("mb_plus_button").textContent = "+";
      document.getElementById("mb_hidden_opts").style.display = "none";
    }
    
  }


  let show_or_hide_case_opts = function(){
    if(document.getElementById("case_hidden_opts").style.display == "none"){
        document.getElementById("case_hidden_opts").style.display = "block";
    document.getElementById("case_plus_button").textContent = "-";
    }
    else{
   document.getElementById("case_plus_button").textContent = "+";
      document.getElementById("case_hidden_opts").style.display = "none";
    }
    
  }

  let check_device_model = function(){

    document.getElementById("right_panel_contents").style.display = "none";
    if(document.getElementById("models").value == "Monoblock"){
      document.getElementById("Desktop_components").style.display = "none";
      document.getElementById("Laptop_components").style.display = "none";
      document.getElementById("Tablet_components").style.display = "none";
      document.getElementById("Smartphone_components").style.display = "none";
      document.getElementById("Monoblock_components").style.display = "block";

    }
    else if (document.getElementById("models").value == "Laptop") {
      document.getElementById("Desktop_components").style.display = "none";
      document.getElementById("Laptop_components").style.display = "block";
      document.getElementById("Tablet_components").style.display = "none";
      document.getElementById("Smartphone_components").style.display = "none";
      document.getElementById("Monoblock_components").style.display = "none";
    }
    else if (document.getElementById("models").value == "Tablet"){
      document.getElementById("Desktop_components").style.display = "none";
      document.getElementById("Laptop_components").style.display = "none";
      document.getElementById("Tablet_components").style.display = "block";
      document.getElementById("Smartphone_components").style.display = "none";
      document.getElementById("Monoblock_components").style.display = "none";
    }
    else if(document.getElementById("models").value == "Smartphone"){
      document.getElementById("Desktop_components").style.display = "none";
      document.getElementById("Laptop_components").style.display = "none";
      document.getElementById("Tablet_components").style.display = "none";
      document.getElementById("Smartphone_components").style.display = "block";
      document.getElementById("Monoblock_components").style.display = "none";
    }
    else{
      document.getElementById("Desktop_components").style.display = "block";
      document.getElementById("Laptop_components").style.display = "none";
      document.getElementById("Tablet_components").style.display = "none";
      document.getElementById("Smartphone_components").style.display = "none";
      document.getElementById("Monoblock_components").style.display = "none";
    }

  }

  let show_cpus = function(){
    document.getElementById("cpus_container").style.display = "block";
    document.getElementById("cpus_button").className = "button_component_selected";
  }

  let show_edit_window = function(){

    document.getElementById("compoenent_editing_overlay").style.display = "inline-block";
    document.getElementById("compoenent_editing_menu_bottom_panel").style.display = "inline-block";
    document.getElementById("add_new_component_button").style.display = "inline-block";
    document.getElementById("cpus_container").style.display = "none";
  }

  let hide_edit_window = function(){
    document.getElementById("compoenent_editing_overlay").style.display = "none";
    document.getElementById("cpus_container").style.display = "block";
    document.getElementById("compoenent_editing_menu_bottom_panel").style.display = "none";
    document.getElementById("add_new_component_button").style.display = "none";
  }
// Скрипты для экрана с комплектующими END




// ВОЗМОЖНО БУДЕТ УДАЛЕН START
  let make_editable = function(){
    document.getElementById("CPU_element_1").style.backgroundColor = "grey";
    CPU_element_1.querySelector('.CPU_name').contentEditable = "true";
    CPU_element_1.querySelector('.CPU_price').contentEditable = "true";
    CPU_element_1.querySelector('.CPU_cores_number').contentEditable = "true";
    CPU_element_1.querySelector('.CPU_frequency').contentEditable = "true";
  }
// ВОЗМОЖНО БУДЕТ УДАЛЕН END




//Скрипты для экрана с поиском START
  let spawn_cpu_search = function(){
    if(document.getElementById("cpus_container").style.display == "none") 
    {
       document.getElementById("cpus_container").style.display = "block";
    } 
    else
    {
      document.getElementById("cpus_container").style.display = "none";
    }
  }


  let spawn_ram_search = function(){
    if(document.getElementById("ram_container").style.display == "none") 
    {
       document.getElementById("ram_container").style.display = "block";
    } 
    else
    {
      document.getElementById("ram_container").style.display = "none";
    }
  }

  



//Скрипты для экрана с поиском END






//Скрипты для настроек START
  let show_users_accounts_roles = function(){
    document.getElementById("roles_permissions").style.display = "none";
    document.getElementById("bottom_right_panel_accounts_operations").style.display = "block";
    document.getElementById("users_accounts_roles").style.display = "inline-block";
  }


  let show_roles_settings = function(){
    document.getElementById("users_accounts_roles").style.display = "none";
    document.getElementById("bottom_right_panel_accounts_operations").style.display = "none";
    document.getElementById("roles_permissions").style.display = "inline-block";
  }
//Скрипты для настроек END