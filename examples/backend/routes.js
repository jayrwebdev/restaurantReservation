module.exports = {
    createReservation: function (req, res) {
        var seated  = [];
        var waiting = []
        var Customers = function (name, phone, email, id) {
            this.name = name;
            this.phone = phone;
            this.emdail = email;
            this.id = id;
        };

        if (seated.legnth <= 5) {
            for (var i = 0; i < seated.length; i++) {
                seated.push(new Customers(this.name));
            }
        } else {
            waiting.push(new Customers(req.body.name, req.body.phone, req.body.email, req.body.id))
        
    };
    res.json(Customers);
},

    GetTables: function (req, res){

    }

    
}