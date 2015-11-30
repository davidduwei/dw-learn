define(["smartgrid/avalon.smartgrid","dialog/avalon.dialog"], function() {

	return avalon.controller(function($ctrl) {
		// 视图渲染后，意思是avalon.scan完成
		$ctrl.$onEnter = function() {
		}
			// 进入视图
		$ctrl.$onRendered = function() {
				var model = avalon.define({
					$id: "price",
					$gridOpts: {
						columns: [{
							key: "id",
							name: "id",
							width: '20%'
						}, {
							key: "readableId",
							name: "价格表名称",
							width: '20%'
						}, {
							key: "displayName",
							name: "价格表显示名称",
							width: '20%'
						}, {
							key: "useExp",
							name: "是否使用公式",
							width: '20%'
						}, {
							key: "operate",
							name: "操作",
							width: '20%',
							format: 'operate'
						}],
						htmlHelper: {
							operate: function(vmId, field, index, cellValue, rowData) {
								return '<a href="#!/price:'+rowData.id+'">查看详情</a>';
							}
						},
						pageable: true,
						data: []
					},
					$dialogOpts:{
						modal:true,
						onConfirm:function(){},
						onClose:function(){},
						onCancel:function(){}
					}
				});
				avalon.scan();
				setTimeout(function(){


				avalon.vmodels.grid.render([{
					id: 1,
					readableId: 'price001',
					displayName: '促销价',
					useExp: 1
				}])
			},0)
			}
			// 对应的视图销毁前
		$ctrl.$onBeforeUnload = function() {
			$('.J_dialog').remove();
		}
			// 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
		$ctrl.$vmodels = ['price'];
	})

});