var app = new function() {
    this.el= document.getElementById('apts');
    this.apts=[]

    this.FetchAll = function() {
        var data = '';
        console.log(apts)

        if(this.apts.length>0) {
            for(i=0;i<this.apts.length;i++) {
                data += '<tr>';
                data += '<td>' +(i+1)+ '.  '+this.apts[i]+'</td>';
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data +='<tr>'
            }
        }
        this.Count(this.apts.length);
        return this.el.innerHTML = data
    };

    this.Add = function() {
        el = document.getElementById('info');
        var apt = el.value;
        if(apt) {
            this.apts.push(apt.trim());
            el.value='';
            this.FetchAll();
            console.log(apts);
        }

    };

    this.Edit = function(item) {

    };

    this.Delete = function(item) {
        this.apts.splice(item,1)
        this.FetchAll();
    };
}

app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}