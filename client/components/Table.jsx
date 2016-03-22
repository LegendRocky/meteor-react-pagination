Table = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        let query = {};
        let option = {};
        let page = this.props.page ? parseInt(this.props.page) : 0;
        option.skip = (page-1) * this.props.limit;
        option.limit = this.props.limit;
        option.sort = {'name': -1};
        console.log(option);
        Meteor.subscribe('testlist', query, option);
        return {
            lists: TestList.find({}).fetch()
        };
    },
    render() {
        var items = this.data.lists;
        console.log(items);
        return (
            <div id="table">
                <table>
                    <tbody>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                    </tr>
                    {  
                        items.map(function(item, index){
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
})