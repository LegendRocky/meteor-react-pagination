List = React.createClass({
    add() {
        var name = $("#name").val();
        var phone = $("#phone").val();
        Meteor.subscribe('testlist');
        Meteor.call('addUser', name, phone);
    },
    selectPage(page) {
        FlowRouter.go('/?page=' + page);
    },
    render() {
        return (
            <div>
                姓名：<input id="name" /><br />
                电话号码: <input id="phone" /><br />
                <button onClick={this.add}>提交</button>
                <Table page={this.props.queryParams.page} limit={10} />
                <Pagination callbackParentPage={this.selectPage} default={1} />
            </div>
        )
    }
})