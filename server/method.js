Meteor.methods({
    'addUser': function(name, phone) {
        TestList.insert({"name":name,"phone":phone});
    }
})