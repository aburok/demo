
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!' });
};

exports.userlist = function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
};

exports.newuser = function(req, res){
	res.render('newuser', {title: 'Add new user'});
}

exports.adduser = function(db){
	return function(req,res){
		var userName = req.body.username;
		var userEmail = req.body.useremail;
		var created= new Date(); //.format("yyyy-MM-dd hh:mm:ss");
		
		var collection = db.get('usercollection');
		
		collection.insert({
			"username": userName,
			"email": userEmail,
			"created": created,
			}
			,function(err, doc){
				if (err){
				 res.send("There was error.");
				}
				else{
					res.redirect("userlist");
					
					res.location("userlist");
				}
			});
	}
}