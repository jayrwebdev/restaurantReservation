module.exports = {
    createReservation: function (req, res) {
        var arr1 = [];
        var arr2 = []
        var Customers = function (name, phoneN, time, ID) {
            this.name = name;
            this.phoneN = phoneN;
            this.time = time;
            this.ID = ID;
        };

        if (arr1.legnth <= 5) {
            for (var i = 0; i < arr1.length; i++) {
                arr1.push(new Customers(this.name));
            }
        } else {
            arr2.push(new Customers(req.body.name, req.body.phoneN, req.body.time, req.body.ID))
        
    };
    res.json(Customers);
},

    GetTables: function (req, res){
        
    }

    
}