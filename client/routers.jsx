FlowRouter.route('/', {
    action: function (params, queryParams) {
        ReactLayout.render(App, {
            content: <List queryParams={queryParams} />
        });
    }
});