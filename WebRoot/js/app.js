Ext.onReady(function() {
	var p = Ext.create('Ext.ux.FileUploadPanel', {
				title : 'file upload',
				region : 'center',
				upload_url:'/fileupload/s/fu'
			});

	// view port
	Ext.create('Ext.container.Viewport', {
		items : [p]
	});
});