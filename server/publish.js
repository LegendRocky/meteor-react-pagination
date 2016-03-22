Meteor.publish('testlist', function(query, option) {
    return TestList.find(query, option);
})