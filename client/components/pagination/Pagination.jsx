Pagination = React.createClass({
	getInitialState() {
		return {
			showPageSelect: false,
			page: 1,
			pageSize: 10,
		}
	},
	pageCountSelect() {
		this.setState({
			showPageSelect: !this.state.showPageSelect
		})
	},
	handleClick(e) {
		var page = $(e.target).html();
		$(e.target).addClass('active').siblings('li').removeClass('active');
		this.props.callbackParentPage(page);
	},
	reduce(e) {
		if ( $('.page').find('li').index($('li.active')) === 3 ) {
			//第一个li值为1
			console.log($(e.target).next().html())
			if ( $(e.target).next().html() !== 1 ) {
				this.setState({
					page: this.state.page - 1
				})
				this.props.callbackParentPage(this.state.page + 1);
			} else {
				var page = parseInt($(".active").html()) - 1;
				$(".active").removeClass('active').prev().addClass('active');
				this.props.callbackParentPage(page);
			}
			
		} else {
			var page = parseInt($(".active").html()) - 1;
			$(".active").removeClass('active').prev().addClass('active');
			this.props.callbackParentPage(page);
		}
		
	},
	add() {
		if ( $('.page').find('li').index($('li.active')) === 3 ) {
			this.setState({
				page: this.state.page + 1
			})
			console.log(this.state.page);
			this.props.callbackParentPage(this.state.page + 3);
		} else {
			var page = parseInt($(".active").html()) + 1;
			$(".active").removeClass('active').next().addClass('active');
			this.props.callbackParentPage(page);
		}
	},
	test() {
		console.log(query.get());
	},
	render() {
		let page = this.state.page !== 1 ? this.state.page : this.props.default;
		return (
			<div id="pagination">
				<div className="page">
					<ul>
						<li onClick={this.reduce}>&lt;</li>
						<li onClick={this.handleClick} className="active">{page}</li>
						<li onClick={this.handleClick}>{page+1}</li>
						<li onClick={this.handleClick}>{page+2}</li>
						<li onClick={this.handleClick}>{page+3}</li>
						<li onClick={this.handleClick}>{page+4}</li>
						<li onClick={this.add}>&gt;</li>
					</ul>
				</div>
				<span className="page-count" onClick={this.pageCountSelect}>10条/页
					<div className={!this.state.showPageSelect ? "page-count-select hide" : "page-count-select" }>
						<ul>
							<li>20条/页</li>
							<li>30条/页</li>
							<li>40条/页</li>
							<li>50条/页</li>
						</ul>
					</div>
				</span>
				<div className="clearify"></div>
			</div>
		)
	}
})