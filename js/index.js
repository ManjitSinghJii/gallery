window.onload = function() {

    var uploadInput = document.getElementById("upload-input");
    uploadInput.onchange = function() {

        var container = document.getElementById("container");
        var empty = document.getElementById("empty");
        empty.style.display = "none";
        var files = this.files;
      
      // Preview images thumbnail
        for(var i=0; i<files.length; i++)
        {
        var file = files[i];

        var url = URL.createObjectURL(file);
        var button = document.createElement("button");
        button.className = "image";
        var img = document.createElement("img");
        img.src = url;
        var action = document.createElement("div");
        action.className = "action";

        // Delete icon
        var deleteIconButton = document.createElement("button");
        var deleteIcon = document.createElement("i");
        deleteIconButton.className = "icon-button delete-icon";
        deleteIcon.className = "fa fa-trash";
        deleteIconButton.append(deleteIcon);

        // View  icon
        var viewIconButton = document.createElement("button");
        var viewIcon = document.createElement("i");
        viewIconButton.className = "icon-button view-icon";
        viewIcon.className = "fa fa-eye";
        viewIconButton.append(viewIcon);

        // Setting icon button to action div
        action.append(deleteIconButton);
        action.append(viewIconButton);

        //Setting action div to image
        button.append(img);
        button.append(action);
        container.append(button);

    }
        //Delete And View
        var deleteIcons = document.getElementsByClassName("delete-icon");
        var viewIcons = document.getElementsByClassName("view-icon");
    
        for(var i=0; i<deleteIcons.length; i++){
            deleteIcons[i].onclick = function() {
                var image = this.parentElement.parentElement;
                image.remove();

                // Check for empty
                if(deleteIcons.length == 0 ){
                    empty.style.display = "flex";
                }
            }

            viewIcons[i].onclick = function() {
                var button = this.parentElement.parentElement;
                const img = button.getElementsByTagName("img");
                var url = img[0].src;
                Swal.fire({
                    width: 720,
                    imageUrl: url,
                    imageWidth: 720,
                    showConfirmButton: false
                })
            }
        }

    }




}