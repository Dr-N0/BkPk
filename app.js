function dropdownP() {
    $("#planner-container").toggleClass("settings-reajust-hide");
    $("#folder-container").toggleClass("settings-reajust-show");
    $("#notes-container").toggleClass("settings-reajust-show");
    
    $("#planner-buttons").toggleClass("settings-reajust-hide");
    $("#folder-buttons").toggleClass("settings-reajust-show");
    $("#notes-save-buttons").toggleClass("settings-reajust-show");
}

function dropdownF() {
    $("#planner-container").toggleClass("settings-reajust-show");
    $("#folder-container").toggleClass("settings-reajust-hide");
    $("#notes-container").toggleClass("settings-reajust-show");
    
    $("#planner-buttons").toggleClass("settings-reajust-show");
    $("#folder-buttons").toggleClass("settings-reajust-hide");
    $("#notes-save-buttons").toggleClass("settings-reajust-show");
}

function dropdownN() {
    
    
    $("#planner-container").toggleClass("settings-reajust-show");
    $("#folder-container").toggleClass("settings-reajust-show");
    $("#notes-container").toggleClass("settings-reajust-hide");
    
    $("#planner-buttons").toggleClass("settings-reajust-show");
    $("#folder-buttons").toggleClass("settings-reajust-show");
    $("#notes-save-buttons").toggleClass("settings-reajust-hide");
}


function newSubjectBasic() {
    $("#new-subject-container").append( "<div class='content'>" +
                                            "<span id='close' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'><i class='fa fa-times'></i></span>" +
                                            "<span style='display: inline-block; margin-right: 2px;'>Subject:  </span>" +
                                            "<input class='subject-input' id='planner-input-save-subject' onchange='saveData(this.value)' style='margin-left: 2px;' maxlength='14' size='14' placeholder='Math'>" +
                                            "<br>" +
                                            "<br>" +
                                            "<span style='display: inline-block;'>Assignment:  </span>" +
                                            "<input class='subject-input' style='margin-left: 2px;' maxlength='30' size='30' placeholder='Page: 1'>" +
                                            "<br>" +
                                        "</div>" );
}

function newSubjectLong() {
    $("#new-subject-container").append("<div class='content'>" +
                                           "<span id='close' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'><i class='fa fa-times'></i></span>" +
                                           "<span style='display: inline-block;'>Subject:  </span>" +
                                           "<input class='subject-input' id='planner-input-save-subject' onchange='saveData(this.value)' style='margin-left: 2px;' maxlength='20' size='20' placeholder='Math'>" +
                                           "<br>" +
                                           "<br>" +
                                           "<textarea id='planner-textarea'></textarea>" +
                                           "<br>" +
                                       "</div>" );
}

function newFolder() {
    $("#folder-folders").append("<div class='content'>" +
                                    "<span id='close' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'><i class='fa fa-times'></i></span>" +
                                    "<span style='display: inline-block;'>Subject:  </span>" +
                                    "<input class='subject-input' style='margin-left: 2px;' maxlength='14' size='14' placeholder='Math'>" +
                                    "<br>" +
                                    "<br>" +
                                    "<form id='folder-form' action='upload.php' method='post' enctype='multipart/form-data'>" +
                                        "<input id='folder-select-file' name='upload[]' type='file' style='-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;' multiple='multiple' onchange='form.submit()' />" +
                                        "<label for='folder-select-file' id='folder-select-file-label' style='cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'><span id='folder-select-file-text'>Choose a file</span></label>" +
                                    "</form>" +
                                    "<br>" +
                                "</div>" );
}

function Default(){
    document.getElementById('color-change').jscolor.fromString('f27730'); 
    $("#body").css({"background-color": "white"});
}